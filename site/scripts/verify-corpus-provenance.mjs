import { readdir, readFile } from 'node:fs/promises';
import path from 'node:path';
import process from 'node:process';
import { fileURLToPath } from 'node:url';
import { createRequire } from 'node:module';

// Spec v7 section 3.4, Wave-11: channel identity is display metadata only.
// This checked-in snapshot is the ONLY grandfather authority; never derive it
// from document dates, current directory contents, or a caller-provided list.
import grandfathered from './pre-wave11-admission.json' with { type: 'json' };
const GRANDFATHERED_PATHS = new Set(grandfathered.paths);
// Use the installed renderer's YAML parser, not a second interpretation of YAML.
// CI must install the locked site dependencies before invoking this guard.
const requireFromAstro = createRequire(import.meta.resolve('astro/package.json'));
const { load: parseYaml } = requireFromAstro('js-yaml');

const CORPUS_SOURCE_SECTIONS = Object.freeze([
  'manual',
  'descriptors',
  'set-topics',
  'support',
  'releases',
]);

const CANONICAL_DOC_TYPES = new Set([
  'MANUAL',
  'DESCRIPTOR',
  'RELEASE',
  'USECASE',
  'SET_TOPIC',
  'APPROVED_SUPPORT',
]);

async function markdownFiles(directory) {
  let entries;
  try {
    entries = await readdir(directory, { withFileTypes: true });
  } catch (error) {
    if (error?.code === 'ENOENT') return [];
    throw error;
  }

  const files = [];
  for (const entry of entries) {
    const entryPath = path.join(directory, entry.name);
    if (entry.isDirectory()) files.push(...(await markdownFiles(entryPath)));
    else if (
      entry.isFile() &&
      !entry.name.startsWith('_') &&
      entry.name.toLowerCase().endsWith('.md')
    ) {
      files.push(entryPath);
    }
  }
  return files;
}

async function allFiles(directory) {
  let entries;
  try {
    entries = await readdir(directory, { withFileTypes: true });
  } catch (error) {
    if (error?.code === 'ENOENT') return [];
    throw error;
  }

  const files = [];
  for (const entry of entries) {
    const entryPath = path.join(directory, entry.name);
    if (entry.isDirectory()) files.push(...(await allFiles(entryPath)));
    else if (entry.isFile()) files.push(entryPath);
  }
  return files;
}

function frontmatterScalar(markdown, field, sourcePath, { stringOnly = false, optional = false } = {}) {
  const frontmatter = markdown.match(/^\uFEFF?---[ \t]*\r?\n([\s\S]*?)\r?\n---[ \t]*(?:\r?\n|$)/)?.[1];
  if (frontmatter === undefined) {
    throw new Error(`${sourcePath}: missing YAML frontmatter`);
  }

  let data;
  try {
    data = parseYaml(frontmatter);
  } catch {
    throw new Error(`${sourcePath}: invalid YAML frontmatter (check duplicate fields and scalar syntax)`);
  }
  if (optional && data && typeof data === 'object' && !Array.isArray(data) && !Object.hasOwn(data, field)) return undefined;
  if (!data || typeof data !== 'object' || Array.isArray(data) || !Object.hasOwn(data, field)) {
    throw new Error(`${sourcePath}: expected exactly one ${field} field in the YAML mapping`);
  }
  // Lines inside multiline quoted values are not frontmatter fields. Parsing
  // the mapping first closes that bypass; canonical scalar checks below also
  // prevent tags, aliases and ambiguous syntax from becoming admission facts.
  const matches = [...frontmatter.matchAll(new RegExp(`^${field}[ \t]*:[ \t]*(.*?)[ \t]*$`, 'gm'))];
  if (matches.length !== 1) {
    throw new Error(`${sourcePath}: expected exactly one ${field} field`);
  }

  let value = matches[0][1].trim();
  const quoted = value.startsWith('"') || value.startsWith("'");
  if (quoted) {
    try {
      if (value.startsWith('"')) value = JSON.parse(value);
      else {
        if (!/^'(?:[^']|'')*'$/.test(value)) throw new Error('invalid quoted scalar');
        value = value.slice(1, -1).replaceAll("''", "'");
      }
      value = value.trim();
    } catch {
      throw new Error(`${sourcePath}: ${field} must be a canonical quoted scalar`);
    }
  }
  if (!value || (!quoted && /^(?:null|~)$/i.test(value)) || /^[>|]/.test(value)) {
    throw new Error(`${sourcePath}: ${field} must be a non-empty scalar`);
  }
  if (stringOnly && !quoted && (
    /^[!&*[{#?%@`]|^(?:true|false|yes|no|on|off|[-+]?\.inf|\.nan)$/i.test(value) ||
    /\s#|:\s/.test(value) || /^[-+]?(?:\d|\.\d)/.test(value)
  )) {
    throw new Error(`${sourcePath}: ${field} must be a non-empty admission string`);
  }
  if (typeof data[field] !== 'string' || data[field].trim() !== value) {
    throw new Error(`${sourcePath}: ${field} must be a canonical non-empty string field`);
  }
  return value;
}

export function sourceChannelId(sourceUrl, sourcePath = 'set-topic source') {
  const canonicalMatch = sourceUrl.match(
    /^https:\/\/discord\.com\/channels\/(\d+)\/(\d+)\/(\d+)$/i,
  );
  if (canonicalMatch === null) {
    throw new Error(
      `${sourcePath}: source_url must be a canonical Discord message URL (/channels/server/channel/message)`,
    );
  }
  return canonicalMatch[2];
}

function verifyAdmission(markdown, sourcePath) {
  if (GRANDFATHERED_PATHS.has(sourcePath)) return;
  // Presence is a non-empty string. Capture marker/channel identity is not a gate.
  frontmatterScalar(markdown, 'admitted_by', sourcePath, { stringOnly: true });
}

export function setTopicRouteFromSource(relativePath) {
  const normalized = relativePath.replaceAll('\\', '/');
  if (!normalized.startsWith('set-topics/') || !/\.md$/i.test(normalized)) {
    throw new Error(`${relativePath}: not a set-topics Markdown source path`);
  }

  // Mirrors documentId() in site/src/content.config.ts without importing the
  // Astro/TypeScript config into this CI guard.
  const documentId = normalized
    .replace(/\.md$/i, '')
    .split('/')
    .map((part) => part.replaceAll('_', '-'))
    .join('/');
  return `/${documentId}/`;
}

export async function verifyCorpusProvenance(repositoryRoot) {
  const root = path.resolve(repositoryRoot);
  const setTopicsRoot = path.join(root, 'set-topics');
  const corpusFiles = (
    await Promise.all(
      CORPUS_SOURCE_SECTIONS.map((section) => markdownFiles(path.join(root, section))),
    )
  )
    .flat()
    .sort();
  const files = corpusFiles.filter((file) =>
    path.relative(root, file).replaceAll('\\', '/').startsWith('set-topics/'),
  );
  if (files.length === 0) {
    throw new Error(
      `Corpus provenance failed: no set-topic source files found under ${setTopicsRoot}`,
    );
  }

  // The loader also publishes site-authored MD/MDX pages. Navigation pages
  // have no doc_type, but typed pages must not bypass the same admission rule.
  const siteContentRoot = path.join(root, 'site', 'src', 'content', 'docs');
  const siteFiles = (await allFiles(siteContentRoot)).filter(file =>
    /\.(md|mdx)$/i.test(file) && !/^_.*\.md$/i.test(path.basename(file)),
  );
  const failures = [];
  const sourceRoutes = [];
  const routeOwners = new Map();
  for (const file of [...corpusFiles, ...siteFiles]) {
    const relative = path.relative(root, file).replaceAll('\\', '/');
    const isSetTopicsPath = relative.startsWith('set-topics/');
    if (isSetTopicsPath) {
      const route = setTopicRouteFromSource(relative);
      sourceRoutes.push(route);
      const previousOwner = routeOwners.get(route);
      if (previousOwner) {
        failures.push(`${relative}: route ${route} duplicates set-topic source ${previousOwner}`);
      } else {
        routeOwners.set(route, relative);
      }
    }
    try {
      const markdown = await readFile(file, 'utf8');
      const isSiteContent = relative.startsWith('site/src/content/docs/');
      const docType = frontmatterScalar(markdown, 'doc_type', relative, { optional: isSiteContent })?.toUpperCase();
      if (docType === undefined) continue; // Untyped site navigation, not canon.
      if (!CANONICAL_DOC_TYPES.has(docType)) {
        throw new Error(
          `${relative}: doc_type must use one canonical v7 scalar without YAML tags or comments`,
        );
      }
      if (docType !== 'SET_TOPIC' && docType !== 'USECASE') {
        continue;
      }
      const sourceUrl = frontmatterScalar(markdown, 'source_url', relative);
      sourceChannelId(sourceUrl, relative); // URL integrity only; no channel gate.
      verifyAdmission(markdown, relative);
    } catch (error) {
      failures.push(error instanceof Error ? error.message : String(error));
    }
  }

  // Site-layer set-topics content can SHADOW a guarded root source: Astro's
  // glob loader only warns on duplicate documentIds, so a committed
  // site/src/content/docs/set-topics/<slug>.mdx replaces the guarded page
  // body without changing the built route set — route parity and source
  // provenance both still pass. Only the whitelisted section index may live
  // in the site-layer directory; every set-topic page body must come from a
  // guarded root set-topics/ source.
  const siteContentSetTopics = path.join(root, 'site', 'src', 'content', 'docs', 'set-topics');
  const allowedSiteContent = new Set(['index.mdx']);
  for (const file of await allFiles(siteContentSetTopics)) {
    const withinSection = path.relative(siteContentSetTopics, file).replaceAll('\\', '/');
    if (!allowedSiteContent.has(withinSection)) {
      const relative = path.relative(root, file).replaceAll('\\', '/');
      failures.push(
        `${relative}: site-layer set-topics content is forbidden (only ${[...allowedSiteContent].join(', ')} is whitelisted) — set-topic pages must come from guarded root set-topics/ sources`,
      );
    }
  }

  if (failures.length > 0) {
    throw new Error(`Corpus provenance failed:\n- ${failures.join('\n- ')}`);
  }

  return { checkedFiles: files.length, corpusFiles: corpusFiles.length, sourceRoutes };
}

async function main() {
  const defaultRoot = fileURLToPath(new URL('../../', import.meta.url));
  const repositoryRoot = path.resolve(process.argv[2] ?? defaultRoot);
  const { checkedFiles, corpusFiles } = await verifyCorpusProvenance(repositoryRoot);
  console.log(
    `PASS corpus admission: ${corpusFiles} canon file(s) checked; ${checkedFiles} set-topic source(s) have admitted_by or pinned pre-Wave-11 grandfathering.`,
  );
}

const invokedPath = process.argv[1] ? path.resolve(process.argv[1]) : '';
if (invokedPath === fileURLToPath(import.meta.url)) {
  main().catch((error) => {
    console.error(error instanceof Error ? error.message : error);
    process.exitCode = 1;
  });
}
