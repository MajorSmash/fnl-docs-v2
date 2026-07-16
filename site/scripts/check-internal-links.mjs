import { readdir, readFile } from 'node:fs/promises';
import path from 'node:path';
import process from 'node:process';

const root = path.resolve(process.argv[2] ?? 'dist');
const configuredBase = String(process.env.BASE_PATH ?? '/fnl-docs-v2')
  .replace(/^\/+|\/+$/g, '');
const base = configuredBase ? `/${configuredBase}/` : '/';

async function walk(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const full = path.join(directory, entry.name);
    if (entry.isDirectory()) files.push(...(await walk(full)));
    if (entry.isFile()) files.push(full);
  }
  return files;
}

function relativeFile(file) {
  return path.relative(root, file).replaceAll(path.sep, '/');
}

function routeForFile(file) {
  const relative = relativeFile(file);
  if (relative === 'index.html') return base;
  if (relative.endsWith('/index.html')) return `${base}${relative.slice(0, -'index.html'.length)}`;
  return `${base}${relative}`;
}

function idsFromHtml(html) {
  const ids = new Set();
  for (const match of html.matchAll(/\s(?:id|name)=["']([^"']+)["']/gi)) {
    ids.add(match[1]);
  }
  return ids;
}

function attribute(tag, name) {
  return tag.match(new RegExp(`\\b${name}=["']([^"']+)["']`, 'i'))?.[1];
}

function referencesFromHtml(html) {
  const references = [];
  for (const match of html.matchAll(/<(a|link|img|script)\b[^>]*>/gi)) {
    const tagName = match[1].toLocaleLowerCase();
    const attrName = tagName === 'img' || tagName === 'script' ? 'src' : 'href';
    const value = attribute(match[0], attrName);
    if (value) {
      references.push({
        value,
        label: `${tagName}[${attrName}]`,
        checkFragment: tagName === 'a',
        forceInternal: false,
      });
    }
  }

  for (const match of html.matchAll(/<meta\b[^>]*>/gi)) {
    if (attribute(match[0], 'property')?.toLocaleLowerCase() !== 'og:image') continue;
    const value = attribute(match[0], 'content');
    if (value) {
      references.push({
        value,
        label: 'meta[property="og:image"]',
        checkFragment: false,
        forceInternal: true,
      });
    }
  }

  return references;
}

function candidatesForPath(urlPath) {
  const decoded = decodeURIComponent(urlPath);
  const relative = decoded.startsWith(base) ? decoded.slice(base.length) : decoded.replace(/^\/+/, '');
  const normalized = relative.replace(/^\/+/, '');

  if (!normalized || normalized.endsWith('/')) {
    return [`${normalized}index.html`];
  }
  if (path.posix.extname(normalized)) return [normalized];
  return [normalized, `${normalized}.html`, `${normalized}/index.html`];
}

const allFiles = await walk(root);
const files = allFiles.filter((file) => file.endsWith('.html'));
const htmlByFile = new Map();
const idsByRelativeFile = new Map();
for (const file of files) {
  const html = await readFile(file, 'utf8');
  htmlByFile.set(file, html);
  idsByRelativeFile.set(relativeFile(file), idsFromHtml(html));
}

const knownFiles = new Set(allFiles.map(relativeFile));
const failures = [];

for (const [sourceFile, html] of htmlByFile) {
  const sourceRoute = routeForFile(sourceFile);
  for (const reference of referencesFromHtml(html)) {
    const { value, label, checkFragment, forceInternal } = reference;
    if (/^(?:mailto:|tel:|javascript:|data:)/i.test(value)) continue;

    let resolved;
    try {
      resolved = new URL(value, `https://internal.invalid${sourceRoute}`);
    } catch {
      failures.push(`${sourceRoute} -> ${label} ${value} is not a valid URL`);
      continue;
    }

    if (!forceInternal && resolved.origin !== 'https://internal.invalid') continue;
    if (!resolved.pathname.startsWith(base)) {
      failures.push(`${sourceRoute} -> ${label} ${value} escapes configured base ${base}`);
      continue;
    }

    let candidates;
    try {
      candidates = candidatesForPath(resolved.pathname);
    } catch {
      failures.push(`${sourceRoute} -> ${label} ${value} has invalid path encoding`);
      continue;
    }

    const targetRelativeFile = candidates.find((candidate) => knownFiles.has(candidate));
    if (!targetRelativeFile) {
      failures.push(`${sourceRoute} -> ${label} ${value} has no built target`);
      continue;
    }

    if (checkFragment && resolved.hash) {
      const fragment = decodeURIComponent(resolved.hash.slice(1));
      if (!idsByRelativeFile.get(targetRelativeFile)?.has(fragment)) {
        failures.push(`${sourceRoute} -> ${label} ${value} has no matching anchor`);
      }
    }
  }
}

if (failures.length) {
  console.error(`Broken internal links (${failures.length}):`);
  for (const failure of failures) console.error(`- ${failure}`);
  process.exitCode = 1;
} else {
  console.log(`Internal link check passed across ${files.length} HTML pages (base ${base}).`);
}
