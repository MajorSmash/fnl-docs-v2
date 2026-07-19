const COMPONENT_SECTION = '## 4. LiveComponent Param Groups with Param Names and Metadata';
const ACTOR_SECTION = '## 6. LiveActor Param Groups with Param Names and Metadata';

const PARAMETER_TYPES = [
  'EDITOR FUNCTION',
  'GEOMETRY COLLECTION',
  'DATA ASSET',
  'ENUM ARRAY',
  'NAME ARRAY',
  'ACTOR ARRAY',
  'TEXTURE ARRAY',
  'MATERIAL ARRAY',
  'OBJECT ARRAY',
  'MPCASSET',
  'DATATABLE',
  'TEXTURE',
  'MATERIAL',
  'OBJECT',
  'ACTOR',
  'ARRAY',
  'VEC4',
  'VEC3',
  'VEC2',
  'VECTOR',
  'VEC',
  'FLOAT',
  'DOUBLE',
  'BOOL',
  'ENUM',
  'NAME',
  'MESH',
  'INT',
];

const TYPE_SUFFIX = new RegExp(`^(.*?)\\s+(${PARAMETER_TYPES.join('|')})$`, 'i');
const USAGE_SUFFIX = /^(.*?)\s+(BPONLY|BP-NIA|NIAGARAONLY)$/i;

function normalize(value) {
  return String(value ?? '').replace(/\r\n?/g, '\n');
}

function slug(value) {
  return String(value)
    .normalize('NFKD')
    .toLocaleLowerCase('en')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

function splitTopLevel(value) {
  const fields = [];
  let current = '';
  let quote = '';
  let depth = 0;

  for (let index = 0; index < value.length; index += 1) {
    const character = value[index];
    const previous = value[index - 1];
    if (quote) {
      current += character;
      if (character === quote && previous !== '\\') quote = '';
      continue;
    }
    if (character === '"' || character === "'") {
      quote = character;
      current += character;
      continue;
    }
    if (character === '(' || character === '[') depth += 1;
    if (character === ')' || character === ']') depth = Math.max(0, depth - 1);
    if (character === ',' && depth === 0) {
      fields.push(current.trim());
      current = '';
    } else {
      current += character;
    }
  }
  fields.push(current.trim());
  return fields;
}

function section(source, heading, nextHeading) {
  const start = source.indexOf(heading);
  if (start < 0) return '';
  const end = nextHeading ? source.indexOf(nextHeading, start + heading.length) : source.length;
  return source.slice(start + heading.length, end < 0 ? source.length : end);
}

function looksLikeRecordStart(line) {
  return /^\s*\{/.test(line);
}

function recordKind(line) {
  return line.match(/^\s*\{([^{}\s,.:]+)/)?.[1] ?? 'UNKNOWN';
}

function outerBraceClosed(value) {
  let depth = 0;
  let opened = false;
  for (const character of value) {
    if (character === '{') {
      depth += 1;
      opened = true;
    } else if (character === '}' && opened) {
      depth -= 1;
      if (depth === 0) return true;
    }
  }
  return false;
}

function closesWithFollowingLines(raw, lines, startIndex) {
  let candidate = raw;
  for (let index = startIndex; index < lines.length; index += 1) {
    candidate += `\n${lines[index]}`;
    if (outerBraceClosed(candidate)) return true;
  }
  return false;
}

/**
 * Extract descriptor-shaped records without interpreting prose braces.
 *
 * Tolerances are deliberately limited to quirks present in the canonical file:
 * leading whitespace, trailing text after a closing brace, multiline metadata,
 * a missing metadata closing brace before the next record, and balanced braces
 * nested in a metadata value. Broader malformed record prefixes are deliberately
 * captured too, so a record that cannot be interpreted is returned raw.
 */
function extractRecords(value, scope) {
  const lines = normalize(value).split('\n');
  const records = [];

  for (let index = 0; index < lines.length; index += 1) {
    if (!looksLikeRecordStart(lines[index])) continue;

    const kind = recordKind(lines[index]);
    let raw = lines[index].trim();
    let balanced = outerBraceClosed(raw);
    let ambiguousBoundary = false;
    let terminatedByNextRecord = false;
    if (!balanced) {
      while (index + 1 < lines.length) {
        if (!ambiguousBoundary && looksLikeRecordStart(lines[index + 1])) {
          const nextKind = recordKind(lines[index + 1]);
          const metadataBoundary =
            (kind === 'M' || kind === 'MA') && (nextKind === 'M' || nextKind === 'MA');
          if (metadataBoundary) {
            terminatedByNextRecord = true;
            break;
          }
          if (kind === 'M' || kind === 'MA') {
            if (closesWithFollowingLines(raw, lines, index + 1)) ambiguousBoundary = true;
            else {
              terminatedByNextRecord = true;
              break;
            }
          }
          else {
            terminatedByNextRecord = true;
            break;
          }
        }
        index += 1;
        raw += `\n${lines[index]}`;
        balanced = outerBraceClosed(raw);
        if (balanced) break;
      }
    }

    records.push({
      ambiguousBoundary,
      balanced,
      kind,
      raw: raw.trim(),
      scope,
      terminatedByNextRecord,
    });
  }
  return records;
}

function recordBody(raw) {
  const prefix = raw.match(/^\s*\{[A-Z]+\./);
  if (!prefix) return '';
  const bodyStart = prefix[0].length;
  const closing = raw.lastIndexOf('}');
  const end = closing > bodyStart ? closing : raw.length;
  return raw.slice(bodyStart, end).trim();
}

function parseGroup(record) {
  const fields = splitTopLevel(recordBody(record.raw));
  if (fields.length < 2 || !fields[0] || !fields[1]) return undefined;
  return {
    id: fields[0],
    kind: 'group',
    label: fields.slice(1).join(', ').trim(),
    scope: record.scope,
    sourceKind: record.kind,
  };
}

function recoverNameAndType(value) {
  const match = value.match(TYPE_SUFFIX);
  if (!match || !match[1].trim()) return undefined;
  return { name: match[1].trim(), type: match[2].toUpperCase() };
}

function parseParameter(record) {
  const fields = splitTopLevel(recordBody(record.raw));
  if (fields.length < 4) return undefined;

  const id = fields.shift()?.trim();
  let name = fields.shift()?.trim();
  let type = fields.shift()?.trim();
  let defaultValue = fields.shift()?.trim();
  let usage = fields.join(', ').trim();

  // Some canonical records omit the comma between name/type.
  if (!usage && /^(BPONLY|BP-NIA|NIAGARAONLY)$/i.test(defaultValue ?? '')) {
    usage = defaultValue;
    defaultValue = type;
    const recovered = recoverNameAndType(name);
    if (!recovered) return undefined;
    ({ name, type } = recovered);
  }

  // One canonical record omits the comma between default/usage.
  if (!usage) {
    const recovered = String(defaultValue ?? '').match(USAGE_SUFFIX);
    if (recovered) {
      defaultValue = recovered[1].trim();
      usage = recovered[2];
    }
  }

  if (!id || !name || !type || defaultValue == null || !usage) return undefined;
  if (!/^(BPONLY|BP-NIA|NIAGARAONLY)$/i.test(usage)) return undefined;

  const prefix = record.kind === 'PA' ? 'pa' : 'p';
  return {
    anchor: `parameter-${prefix}-${slug(id)}-${slug(name)}`,
    default: defaultValue || '-',
    id,
    kind: 'parameter',
    metadata: {},
    name,
    scope: record.scope,
    sourceKind: record.kind,
    type: type.toUpperCase(),
    usage: usage.toUpperCase(),
  };
}

function parseMetadata(record) {
  const body = recordBody(record.raw);
  const comma = body.indexOf(',');
  if (comma < 1) return undefined;
  const id = body.slice(0, comma).trim();
  const payload = body.slice(comma + 1).trim();
  const match = payload.match(/^#([^:]+):\s*([\s\S]*)$/);
  if (!id || !match) return undefined;
  return {
    category: match[1].trim().toLocaleLowerCase('en'),
    id,
    raw: record.raw,
    value: match[2].trim(),
  };
}

function addMetadata(parameter, metadata) {
  const values = parameter.metadata[metadata.category] ?? [];
  values.push(metadata.value);
  parameter.metadata[metadata.category] = values;
}

function groupForParameter(parameter, groups) {
  const candidates = groups.filter(
    (group) =>
      group.scope === parameter.scope &&
      (parameter.id === group.id || parameter.id.startsWith(`${group.id}.`)),
  );
  return candidates.sort((a, b) => b.id.split('.').length - a.id.split('.').length)[0];
}

function mainGroupForParameter(parameter, groups) {
  const root = parameter.id.split('.')[0];
  return groups.find((group) => group.scope === parameter.scope && group.id === root);
}

function headerCounts(source) {
  const match = source.match(/COUNT:\s*(\d+) PARAMETERS AND (\d+) EDITOR FUNCTIONS/i);
  return match
    ? { declaredParameters: Number(match[1]), declaredEditorFunctions: Number(match[2]) }
    : {};
}

function actorHeaderCount(source) {
  const match = source.match(/COUNT:\s*(\d+) PARAMETERS LISTED/i);
  return match ? Number(match[1]) : undefined;
}

export function parseParameterDescriptor(input) {
  const source = normalize(input);
  const componentSource = section(source, COMPONENT_SECTION, '## 5. LiveActor Param Groups');
  const actorSource = section(source, ACTOR_SECTION, '## 7. LiveCore Special Params');
  const extracted = [
    ...extractRecords(componentSource, 'Live Component'),
    ...extractRecords(actorSource, 'Live Actor'),
  ];
  const groups = [];
  const parameters = [];
  const fallbacks = [];
  const warnings = [];
  const pendingMetadata = new Map();
  const declarationKeys = new Set();
  let currentParameter;

  if (!componentSource) warnings.push(`Missing canonical section: ${COMPONENT_SECTION}`);
  if (!actorSource) warnings.push(`Missing canonical section: ${ACTOR_SECTION}`);

  for (const record of extracted) {
    const allowedKinds =
      record.scope === 'Live Actor' ? new Set(['GA', 'PA', 'MA']) : new Set(['G', 'P', 'M']);
    if (!allowedKinds.has(record.kind)) {
      fallbacks.push({
        ...record,
        reason: `Unsupported ${record.scope} descriptor record kind ${record.kind}`,
      });
      currentParameter = undefined;
      continue;
    }
    if (record.ambiguousBoundary) {
      fallbacks.push({
        ...record,
        reason: 'Ambiguous record-like content inside unclosed multiline metadata',
      });
      currentParameter = undefined;
      continue;
    }
    if (!record.balanced && !record.terminatedByNextRecord) {
      fallbacks.push({ ...record, reason: 'Descriptor record has no closing outer brace' });
      currentParameter = undefined;
      continue;
    }
    if (!record.balanced) {
      warnings.push(`${record.scope} ${record.kind} record tolerated a missing closing outer brace`);
    }

    if (record.kind === 'G' || record.kind === 'GA') {
      const group = parseGroup(record);
      const key = group ? `${group.scope}:group:${group.id}` : '';
      if (!group) fallbacks.push({ ...record, reason: 'Could not parse group fields' });
      else if (declarationKeys.has(key)) {
        fallbacks.push({ ...record, reason: `Duplicate group declaration ${group.sourceKind}.${group.id}` });
      } else {
        declarationKeys.add(key);
        groups.push(group);
      }
      currentParameter = undefined;
      continue;
    }

    if (record.kind === 'P' || record.kind === 'PA') {
      const parameter = parseParameter(record);
      if (!parameter) {
        fallbacks.push({ ...record, reason: 'Could not parse parameter fields' });
        currentParameter = undefined;
        continue;
      }
      const key = `${parameter.scope}:parameter:${parameter.id}`;
      if (declarationKeys.has(key)) {
        fallbacks.push({
          ...record,
          reason: `Duplicate parameter declaration ${parameter.sourceKind}.${parameter.id}`,
        });
        currentParameter = undefined;
        continue;
      }
      declarationKeys.add(key);
      parameters.push(parameter);
      currentParameter = parameter;
      const metadataKey = `${record.scope}:${parameter.id}`;
      for (const metadata of pendingMetadata.get(metadataKey) ?? []) addMetadata(parameter, metadata);
      pendingMetadata.delete(metadataKey);
      continue;
    }

    if (record.kind === 'M' || record.kind === 'MA') {
      const metadata = parseMetadata(record);
      if (!metadata) {
        fallbacks.push({ ...record, reason: 'Could not parse metadata fields' });
        continue;
      }
      if (currentParameter) {
        if (currentParameter.id !== metadata.id) {
          warnings.push(
            `${record.scope} metadata ${metadata.id} attached by position to parameter ${currentParameter.id}`,
          );
        }
        addMetadata(currentParameter, metadata);
      } else {
        const key = `${record.scope}:${metadata.id}`;
        pendingMetadata.set(key, [...(pendingMetadata.get(key) ?? []), metadata]);
      }
      continue;
    }

  }

  for (const [key, metadataRecords] of pendingMetadata) {
    for (const metadata of metadataRecords) {
      fallbacks.push({
        kind: 'metadata',
        raw: metadata.raw,
        reason: 'Metadata has no matching parameter declaration',
        scope: key.split(':')[0],
      });
    }
  }

  for (const parameter of parameters) {
    const group = groupForParameter(parameter, groups);
    const mainGroup = mainGroupForParameter(parameter, groups);
    parameter.group = group?.label ?? mainGroup?.label ?? 'Ungrouped';
    parameter.category = mainGroup?.label ?? 'Ungrouped';
    parameter.categoryId = mainGroup?.id ?? 'ungrouped';
    parameter.nesting = parameter.metadata.nesting?.[0] ?? '';
    parameter.description = parameter.metadata.description?.join('\n\n') || 'No description provided.';
    parameter.comments = parameter.metadata.comment ?? [];
    parameter.niagaraNames = parameter.metadata.niagaraname ?? [];
    parameter.legacyNames = parameter.metadata.legacyname ?? [];
  }

  const componentParameters = parameters.filter((parameter) => parameter.scope === 'Live Component');
  const editorFunctions = componentParameters.filter(
    (parameter) => parameter.type === 'EDITOR FUNCTION',
  );
  const declared = headerCounts(componentSource);
  const declaredActorParameters = actorHeaderCount(actorSource);
  const regularComponentParameters = componentParameters.length - editorFunctions.length;
  if (
    declared.declaredParameters != null &&
    declared.declaredParameters !== regularComponentParameters
  ) {
    warnings.push(
      `Descriptor header declares ${declared.declaredParameters} component parameters; ` +
        `parsed ${regularComponentParameters} non-editor parameter declarations`,
    );
  }
  if (
    declaredActorParameters != null &&
    declaredActorParameters !== countsActorParameters(parameters)
  ) {
    warnings.push(
      `Descriptor header declares ${declaredActorParameters} actor parameters; ` +
        `parsed ${countsActorParameters(parameters)}`,
    );
  }
  if (
    declared.declaredEditorFunctions != null &&
    declared.declaredEditorFunctions !== editorFunctions.length
  ) {
    warnings.push(
      `Descriptor header declares ${declared.declaredEditorFunctions} editor functions; ` +
        `parsed ${editorFunctions.length}`,
    );
  }

  const categories = [];
  const categoryAnchors = new Set();
  for (const parameter of parameters) {
    let category = categories.find(
      (candidate) =>
        candidate.scope === parameter.scope && candidate.categoryId === parameter.categoryId,
    );
    if (!category) {
      const anchorBase =
        `group-${slug(parameter.scope)}-${slug(parameter.categoryId)}-${slug(parameter.category)}`;
      let anchor = anchorBase;
      let suffix = 2;
      while (categoryAnchors.has(anchor)) {
        anchor = `${anchorBase}-${suffix}`;
        suffix += 1;
      }
      if (anchor !== anchorBase) {
        warnings.push(`Category anchor collision for ${parameter.scope} ${parameter.category}; using ${anchor}`);
      }
      categoryAnchors.add(anchor);
      category = {
        anchor,
        categoryId: parameter.categoryId,
        label: parameter.category,
        parameters: [],
        scope: parameter.scope,
      };
      categories.push(category);
    }
    category.parameters.push(parameter);
  }

  return {
    categories,
    counts: {
      actorParameters: parameters.length - componentParameters.length,
      componentParameters: regularComponentParameters,
      editorFunctions: editorFunctions.length,
      fallbackRecords: fallbacks.length,
      totalParameters: parameters.length,
    },
    fallbacks,
    groups,
    parameters,
    warnings,
  };
}

function countsActorParameters(parameters) {
  return parameters.filter((parameter) => parameter.scope === 'Live Actor').length;
}

export function formatDescriptorBuildSummary(result) {
  const { counts } = result;
  return (
    `[parameters] Parsed ${counts.totalParameters} declarations ` +
    `(${counts.componentParameters} component parameters, ${counts.editorFunctions} editor functions, ` +
    `${counts.actorParameters} actor parameters); ${counts.fallbackRecords} raw fallback record(s); ` +
    `${result.warnings.length} warning(s).`
  );
}
