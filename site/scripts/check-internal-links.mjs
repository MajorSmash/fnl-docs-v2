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
    if (entry.isFile() && entry.name.endsWith('.html')) files.push(full);
  }
  return files;
}

function routeForFile(file) {
  const relative = path.relative(root, file).replaceAll(path.sep, '/');
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

function hrefsFromHtml(html) {
  return [...html.matchAll(/<a\b[^>]*\bhref=["']([^"']+)["']/gi)].map((match) => match[1]);
}

function candidatesForPath(urlPath) {
  const decoded = decodeURIComponent(urlPath);
  const relative = decoded.startsWith(base) ? decoded.slice(base.length) : decoded.replace(/^\/+/, '');
  const normalized = relative.replace(/^\/+/, '');

  if (!normalized || normalized.endsWith('/')) {
    return [path.join(root, normalized, 'index.html')];
  }
  if (normalized.endsWith('.html')) return [path.join(root, normalized)];
  return [path.join(root, normalized), path.join(root, `${normalized}.html`), path.join(root, normalized, 'index.html')];
}

const files = await walk(root);
const htmlByFile = new Map();
const idsByFile = new Map();
for (const file of files) {
  const html = await readFile(file, 'utf8');
  htmlByFile.set(file, html);
  idsByFile.set(file, idsFromHtml(html));
}

const knownFiles = new Set(files.map((file) => path.normalize(file).toLocaleLowerCase()));
const failures = [];

for (const [sourceFile, html] of htmlByFile) {
  const sourceRoute = routeForFile(sourceFile);
  for (const href of hrefsFromHtml(html)) {
    if (/^(?:https?:|mailto:|tel:|javascript:|data:)/i.test(href)) continue;

    const resolved = new URL(href, `https://internal.invalid${sourceRoute}`);
    if (!resolved.pathname.startsWith(base)) {
      failures.push(`${sourceRoute} -> ${href} escapes configured base ${base}`);
      continue;
    }

    const targetFile = candidatesForPath(resolved.pathname).find((candidate) =>
      knownFiles.has(path.normalize(candidate).toLocaleLowerCase()),
    );
    if (!targetFile) {
      failures.push(`${sourceRoute} -> ${href} has no built target`);
      continue;
    }

    if (resolved.hash) {
      const fragment = decodeURIComponent(resolved.hash.slice(1));
      if (!idsByFile.get(targetFile)?.has(fragment)) {
        failures.push(`${sourceRoute} -> ${href} has no matching anchor`);
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
