import { readdir, readFile } from 'node:fs/promises';
import path from 'node:path';
import process from 'node:process';
import { fileURLToPath } from 'node:url';

// FNLKB Design Spec v7 sections 3.4 and 6.1: three dedicated channels are
// admitted by source ID alone. Other SET_TOPIC sources require per-record
// admission metadata created by the review-gated capture path. USECASE does
// not gain this exception.
export const LIVE2_CHANNEL_IDS = Object.freeze({
  announcements: '1460577812795883572',
  betaInfo: '1466643263774527741',
  info: '1319654748873560145',
  publicDiscussion: '1319655034803458069',
  general: '850913821827792940',
});

const UNCONDITIONALLY_ADMITTED_SET_TOPIC_CHANNEL_IDS = new Set([
  LIVE2_CHANNEL_IDS.announcements,
  LIVE2_CHANNEL_IDS.betaInfo,
  LIVE2_CHANNEL_IDS.info,
]);

const AUTO_CAPTURE_CHANNEL_IDS = new Set([
  LIVE2_CHANNEL_IDS.general,
  LIVE2_CHANNEL_IDS.publicDiscussion,
]);

const REVIEWER_CAPTURE_ADMISSION = /^reviewer-capture:[1-9][0-9]{16,19}$/;

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

function frontmatterScalar(markdown, field, sourcePath) {
  const frontmatter = markdown.match(/^\uFEFF?---[ \t]*\r?\n([\s\S]*?)\r?\n---[ \t]*(?:\r?\n|$)/)?.[1];
  if (frontmatter === undefined) {
    throw new Error(`${sourcePath}: missing YAML frontmatter`);
  }

  const matches = [...frontmatter.matchAll(new RegExp(`^${field}\\s*:\\s*(.*?)\\s*$`, 'gm'))];
  if (matches.length !== 1) {
    throw new Error(`${sourcePath}: expected exactly one ${field} field`);
  }

  let value = matches[0][1].trim();
  if (
    value.length >= 2 &&
    ((value.startsWith('"') && value.endsWith('"')) ||
      (value.startsWith("'") && value.endsWith("'")))
  ) {
    value = value.slice(1, -1).trim();
  }
  if (!value || /^(?:null|~)$/i.test(value) || /^[>|]/.test(value)) {
    throw new Error(`${sourcePath}: ${field} must be a non-empty scalar`);
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

function admissionError(channelId, admittedBy, sourcePath) {
  if (REVIEWER_CAPTURE_ADMISSION.test(admittedBy)) return undefined;
  if (
    AUTO_CAPTURE_CHANNEL_IDS.has(channelId) &&
    admittedBy === `auto-capture:${channelId}`
  ) {
    return undefined;
  }
  return `${sourcePath}: source_url channel ${channelId} requires well-formed admitted_by (reviewer-capture:<reviewer_id> or its channel-specific auto-capture marker)`;
}

export function setTopicRouteFromSource(relativePath) {
  const normalized = relativePath.replaceAll('\\', '/');
  if (!normalized.startsWith('set-topics/') || !/\.md$/i.test(normalized)) {
    throw new Error(`${relativePath}: not a set-topics Markdown source path`);
  }

  // Mirrors documentId() in site/src/content.config.ts without importing the
  // Astro/TypeScript config into this dependency-free CI guard.
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

  const failures = [];
  const sourceRoutes = [];
  const routeOwners = new Map();
  for (const file of corpusFiles) {
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
      const docType = frontmatterScalar(markdown, 'doc_type', relative).toUpperCase();
      if (!CANONICAL_DOC_TYPES.has(docType)) {
        throw new Error(
          `${relative}: doc_type must use one canonical v7 scalar without YAML tags or comments`,
        );
      }
      if (!isSetTopicsPath && docType !== 'SET_TOPIC' && docType !== 'USECASE') {
        continue;
      }
      const sourceUrl = frontmatterScalar(markdown, 'source_url', relative);
      const channelId = sourceChannelId(sourceUrl, relative);
      if (UNCONDITIONALLY_ADMITTED_SET_TOPIC_CHANNEL_IDS.has(channelId)) continue;
      if (docType !== 'SET_TOPIC') {
        if (channelId === LIVE2_CHANNEL_IDS.general) {
          throw new Error(
            `${relative}: source_url uses general (${channelId}), which is admitted only for SET_TOPIC under spec v7 section 3.4`,
          );
        }
        throw new Error(
          `${relative}: source_url channel ${channelId} is not an admitted LIVE2 set-topic channel under spec v7 section 3.4`,
        );
      }
      const admittedBy = frontmatterScalar(markdown, 'admitted_by', relative);
      const admissionFailure = admissionError(channelId, admittedBy, relative);
      if (admissionFailure) throw new Error(admissionFailure);
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

  return { checkedFiles: files.length, sourceRoutes };
}

async function main() {
  const defaultRoot = fileURLToPath(new URL('../../', import.meta.url));
  const repositoryRoot = path.resolve(process.argv[2] ?? defaultRoot);
  const { checkedFiles } = await verifyCorpusProvenance(repositoryRoot);
  console.log(
    `PASS corpus provenance: ${checkedFiles} set-topic source file(s) have admitted channel provenance.`,
  );
}

const invokedPath = process.argv[1] ? path.resolve(process.argv[1]) : '';
if (invokedPath === fileURLToPath(import.meta.url)) {
  main().catch((error) => {
    console.error(error instanceof Error ? error.message : error);
    process.exitCode = 1;
  });
}
