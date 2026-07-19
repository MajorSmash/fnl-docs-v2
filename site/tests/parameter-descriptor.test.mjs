import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import test from 'node:test';

import {
  formatDescriptorBuildSummary,
  parseParameterDescriptor,
} from '../src/lib/parameter-descriptor.mjs';

const canonical = await readFile(
  new URL('../../descriptors/ninjalive2_params.md', import.meta.url),
  'utf8',
);
const parsed = parseParameterDescriptor(canonical);

function parameter(name) {
  const match = parsed.parameters.find((entry) => entry.name === name);
  assert.ok(match, `Expected canonical parameter ${name}`);
  return match;
}

test('canonical component and actor declarations are all represented', () => {
  assert.deepEqual(parsed.counts, {
    actorParameters: 24,
    componentParameters: 325,
    editorFunctions: 8,
    fallbackRecords: 0,
    totalParameters: 357,
  });

  const metadataSections = canonical
    .slice(canonical.indexOf('## 4. LiveComponent Param Groups with Param Names and Metadata'))
    .split('## 7. LiveCore Special Params')[0];
  const declarations = [...metadataSections.matchAll(/^\{(?:P|PA)\./gm)];
  assert.equal(parsed.parameters.length, declarations.length, 'a declaration must never disappear');
  assert.equal(new Set(parsed.parameters.map((entry) => entry.anchor)).size, parsed.parameters.length);
});

test('real descriptor quirks recover tuples and missing commas', () => {
  assert.equal(parameter('ExtentsXYZ').default, '(5,5,1)');
  assert.equal(parameter('LOD-Steps').type, 'INT');
  assert.equal(parameter('LOD-Steps').default, '5');
  assert.equal(parameter('SVolumeAnchor').default, '0');
  assert.equal(parameter('SVolumeAnchor').usage, 'BPONLY');
  assert.equal(parameter('FVolumeRender').usage, 'BP-NIA');
});

test('real out-of-order and mismatched metadata remains attached and visible', () => {
  assert.match(parameter('RT_Painter').nesting, /PaintVelocityDensityAndElevation/);
  assert.match(parameter('SimplePainterMode').description, /disables all fluidsim functions/i);
  assert.ok(
    parsed.warnings.some((warning) => /metadata 1\.0\.8 attached by position/.test(warning)),
  );
  assert.ok(
    parsed.warnings.some((warning) => /header declares 323.*parsed 325/i.test(warning)),
  );
});

test('synthetic unparseable records are counted and retained as raw fallbacks', () => {
  const fixture = `
## 4. LiveComponent Param Groups with Param Names and Metadata
COUNT: 1 PARAMETERS AND 0 EDITOR FUNCTIONS
{G.1, TestGroup}
{P.1.1, GoodParameter, FLOAT, 1, BPONLY}
{M.1.1, #Description: A valid record}
{P.broken, missing fields}
{X.9, Future grammar record}
## 5. LiveActor Param Groups
## 6. LiveActor Param Groups with Param Names and Metadata
## 7. LiveCore Special Params
`;
  const result = parseParameterDescriptor(fixture);

  assert.equal(result.parameters.length, 1);
  assert.equal(result.counts.fallbackRecords, 2);
  assert.equal(result.fallbacks.length, 2);
  assert.match(result.fallbacks[0].raw, /P\.broken/);
  assert.match(result.fallbacks[1].raw, /X\.9/);
  assert.match(formatDescriptorBuildSummary(result), /2 raw fallback record\(s\)/);
});

test('malformed actor prefixes are counted and actor header drift is reported', () => {
  const fixture = `
## 4. LiveComponent Param Groups with Param Names and Metadata
COUNT: 0 PARAMETERS AND 0 EDITOR FUNCTIONS
## 5. LiveActor Param Groups
## 6. LiveActor Param Groups with Param Names and Metadata
COUNT: 1 PARAMETERS LISTED IN 1 GROUPS
{GA.1, ActorGroup}
{PA, 1.1, LostParameter, FLOAT, 1, BPONLY}
## 7. LiveCore Special Params
`;
  const result = parseParameterDescriptor(fixture);

  assert.equal(result.parameters.length, 0);
  assert.equal(result.counts.fallbackRecords, 1);
  assert.match(result.fallbacks[0].raw, /LostParameter/);
  assert.ok(result.warnings.some((warning) => /declares 1 actor parameters; parsed 0/.test(warning)));
});

test('balanced inner braces do not truncate multiline metadata', () => {
  const fixture = `
## 4. LiveComponent Param Groups with Param Names and Metadata
COUNT: 1 PARAMETERS AND 0 EDITOR FUNCTIONS
{G.1, Group}
{P.1.1, Good, FLOAT, 1, BPONLY}
{M.1.1, #Description: before {token}
after text that must remain}
## 5. LiveActor Param Groups
## 6. LiveActor Param Groups with Param Names and Metadata
## 7. LiveCore Special Params
`;
  const result = parseParameterDescriptor(fixture);

  assert.equal(result.counts.fallbackRecords, 0);
  assert.match(result.parameters[0].description, /before \{token\}\nafter text that must remain/);
});

test('unsupported records break positional metadata association', () => {
  const fixture = `
## 4. LiveComponent Param Groups with Param Names and Metadata
COUNT: 1 PARAMETERS AND 0 EDITOR FUNCTIONS
{G.1, Group}
{P.1.1, First, FLOAT, 1, BPONLY}
{M.1.1, #Description: first}
{X.9, unknown}
{M.9.9, #Description: belongs nowhere}
## 5. LiveActor Param Groups
## 6. LiveActor Param Groups with Param Names and Metadata
## 7. LiveCore Special Params
`;
  const result = parseParameterDescriptor(fixture);

  assert.equal(result.parameters[0].description, 'first');
  assert.equal(result.counts.fallbackRecords, 2);
  assert.ok(result.fallbacks.some((fallback) => /X\.9/.test(fallback.raw)));
  assert.ok(result.fallbacks.some((fallback) => /belongs nowhere/.test(fallback.raw)));
});

test('duplicate declarations become raw fallbacks instead of duplicate anchors', () => {
  const fixture = `
## 4. LiveComponent Param Groups with Param Names and Metadata
COUNT: 2 PARAMETERS AND 0 EDITOR FUNCTIONS
{G.1, Group}
{P.1.1, Same, FLOAT, 1, BPONLY}
{P.1.1, Same, FLOAT, 2, BPONLY}
## 5. LiveActor Param Groups
## 6. LiveActor Param Groups with Param Names and Metadata
## 7. LiveCore Special Params
`;
  const result = parseParameterDescriptor(fixture);

  assert.equal(result.parameters.length, 1);
  assert.equal(result.counts.fallbackRecords, 1);
  assert.match(result.fallbacks[0].reason, /Duplicate parameter declaration/);
});

test('lowercase and malformed record kinds are visible raw fallbacks', () => {
  const fixture = `
## 4. LiveComponent Param Groups with Param Names and Metadata
COUNT: 0 PARAMETERS AND 0 EDITOR FUNCTIONS
{p.1.1, Bad, FLOAT, 0, BPONLY}
## 5. LiveActor Param Groups
## 6. LiveActor Param Groups with Param Names and Metadata
## 7. LiveCore Special Params
`;
  const result = parseParameterDescriptor(fixture);

  assert.equal(result.parameters.length, 0);
  assert.equal(result.counts.fallbackRecords, 1);
  assert.match(result.fallbacks[0].raw, /\{p\.1\.1/);
});

test('exotic malformed prefixes cannot escape fallback accounting', () => {
  const fixture = `
## 4. LiveComponent Param Groups with Param Names and Metadata
COUNT: 0 PARAMETERS AND 0 EDITOR FUNCTIONS
{P?1, BadQuestion, FLOAT, 0, BPONLY}
{1P.1, BadNumber, FLOAT, 0, BPONLY}
{_P.1, BadUnderscore, FLOAT, 0, BPONLY}
## 5. LiveActor Param Groups
## 6. LiveActor Param Groups with Param Names and Metadata
## 7. LiveCore Special Params
`;
  const result = parseParameterDescriptor(fixture);

  assert.equal(result.parameters.length, 0);
  assert.equal(result.counts.fallbackRecords, 3);
  assert.deepEqual(
    result.fallbacks.map((fallback) => fallback.kind),
    ['P?1', '1P', '_P'],
  );
});

test('record-looking multiline prose becomes one raw ambiguity fallback, never a phantom parameter', () => {
  const fixture = `
## 4. LiveComponent Param Groups with Param Names and Metadata
COUNT: 1 PARAMETERS AND 0 EDITOR FUNCTIONS
{G.1, Main}
{P.1.1, Real, FLOAT, 0, BPONLY}
{M.1.1, #Description:
{P.9.9, Phantom, FLOAT, 0, BPONLY}
continued prose}
## 5. LiveActor Param Groups
## 6. LiveActor Param Groups with Param Names and Metadata
## 7. LiveCore Special Params
`;
  const result = parseParameterDescriptor(fixture);

  assert.deepEqual(result.parameters.map((entry) => entry.name), ['Real']);
  assert.equal(result.counts.fallbackRecords, 1);
  assert.match(result.fallbacks[0].raw, /Phantom[\s\S]*continued prose/);
  assert.match(result.fallbacks[0].reason, /Ambiguous record-like content/);
});

test('missing metadata brace resumes at valid records when no later outer close exists', () => {
  const fixture = `
## 4. LiveComponent Param Groups with Param Names and Metadata
COUNT: 2 PARAMETERS AND 0 EDITOR FUNCTIONS
{G.1, Main}
{P.1.1, First, FLOAT, 0, BPONLY}
{M.1.1, #Description: missing close
{P.1.2, Second, FLOAT, 0, BPONLY}
{M.1.2, #Description: valid}
## 5. LiveActor Param Groups
## 6. LiveActor Param Groups with Param Names and Metadata
## 7. LiveCore Special Params
`;
  const result = parseParameterDescriptor(fixture);

  assert.deepEqual(result.parameters.map((entry) => entry.name), ['First', 'Second']);
  assert.equal(result.counts.fallbackRecords, 0);
  assert.equal(result.parameters[0].description, 'missing close');
  assert.equal(result.parameters[1].description, 'valid');
  assert.ok(result.warnings.some((warning) => /missing closing outer brace/.test(warning)));
});

test('category anchors remain unique when human labels slug identically', () => {
  const fixture = `
## 4. LiveComponent Param Groups with Param Names and Metadata
COUNT: 2 PARAMETERS AND 0 EDITOR FUNCTIONS
{G.1, Foo Bar}
{P.1.1, First, FLOAT, 0, BPONLY}
{G.2, Foo-Bar}
{P.2.1, Second, FLOAT, 0, BPONLY}
## 5. LiveActor Param Groups
## 6. LiveActor Param Groups with Param Names and Metadata
## 7. LiveCore Special Params
`;
  const result = parseParameterDescriptor(fixture);
  const anchors = result.categories.map((category) => category.anchor);

  assert.equal(result.categories.length, 2);
  assert.equal(new Set(anchors).size, 2);
});

test('scope-inappropriate record kinds cannot evade semantic duplicate checks', () => {
  const fixture = `
## 4. LiveComponent Param Groups with Param Names and Metadata
COUNT: 1 PARAMETERS AND 0 EDITOR FUNCTIONS
{G.1, Main}
{P.1.1, First, FLOAT, 0, BPONLY}
{PA.1.1, Second, FLOAT, 0, BPONLY}
## 5. LiveActor Param Groups
## 6. LiveActor Param Groups with Param Names and Metadata
## 7. LiveCore Special Params
`;
  const result = parseParameterDescriptor(fixture);

  assert.deepEqual(result.parameters.map((entry) => entry.name), ['First']);
  assert.equal(result.counts.fallbackRecords, 1);
  assert.match(result.fallbacks[0].reason, /Unsupported Live Component descriptor record kind PA/);
});
