import { createReadStream } from 'node:fs';
import { access, readFile, readdir, stat } from 'node:fs/promises';
import http from 'node:http';
import path from 'node:path';
import process from 'node:process';
import { fileURLToPath, pathToFileURL } from 'node:url';

import { verifyCorpusProvenance } from './verify-corpus-provenance.mjs';

const contentTypes = {
  '.css': 'text/css; charset=utf-8',
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.pagefind': 'application/octet-stream',
  '.wasm': 'application/wasm',
};

async function filesBelow(directory, extension) {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const entryPath = path.join(directory, entry.name);
    if (entry.isDirectory()) files.push(...(await filesBelow(entryPath, extension)));
    else if (entry.isFile() && entry.name.toLowerCase().endsWith(extension)) files.push(entryPath);
  }
  return files;
}

function decodeHtmlEntities(value) {
  const named = { amp: '&', apos: "'", gt: '>', lt: '<', quot: '"' };
  return value.replace(/&(#(?:x[\da-f]+|\d+)|amp|apos|gt|lt|quot);/gi, (entity, token) => {
    if (token[0] !== '#') return named[token.toLowerCase()] ?? entity;
    const hexadecimal = token[1]?.toLowerCase() === 'x';
    const codePoint = Number.parseInt(token.slice(hexadecimal ? 2 : 1), hexadecimal ? 16 : 10);
    try {
      return String.fromCodePoint(codePoint);
    } catch {
      return entity;
    }
  });
}

function titleFromHtml(html, relativePath) {
  const heading = html.match(/<h1\b[^>]*>([\s\S]*?)<\/h1>/i)?.[1];
  const title = decodeHtmlEntities((heading ?? '').replace(/<[^>]+>/g, ' '))
    .replace(/\s+/g, ' ')
    .trim();
  if (!title) throw new Error(`${relativePath}: built corpus page has no usable <h1> title`);
  return title;
}

function routeFromRelativeHtml(relativePath) {
  let route = relativePath.replaceAll('\\', '/');
  if (route === 'index.html') return '/';
  if (route.endsWith('/index.html')) route = route.slice(0, -'index.html'.length);
  else if (route.endsWith('.html')) route = route.slice(0, -'.html'.length);
  return `/${route.replace(/^\/+|\/+$/g, '')}/`;
}

export async function inspectBuiltCorpus(distDirectory) {
  const dist = path.resolve(distDirectory);
  const htmlFiles = (await filesBelow(dist, '.html')).sort();
  if (htmlFiles.length === 0) throw new Error(`Search verification found no built HTML under ${dist}`);

  const pages = await Promise.all(
    htmlFiles.map(async (file) => {
      const relativePath = path.relative(dist, file).replaceAll('\\', '/');
      const html = await readFile(file, 'utf8');
      return {
        file,
        html,
        indexable: /\bdata-pagefind-body(?:\s|=|>)/i.test(html),
        relativePath,
        route: routeFromRelativeHtml(relativePath),
      };
    }),
  );

  const sectionPages = (section) =>
    pages
      .filter(
        (page) =>
          page.relativePath.startsWith(`${section}/`) &&
          page.relativePath !== `${section}/index.html`,
      )
      .map((page) => ({ ...page, title: titleFromHtml(page.html, page.relativePath) }));

  const manualPages = sectionPages('manual');
  const setTopicPages = sectionPages('set-topics');
  if (manualPages.length === 0) {
    throw new Error('Search verification failed: built manual section has no corpus pages');
  }
  if (setTopicPages.length === 0) {
    throw new Error('Search verification failed: built set-topics section has no corpus pages');
  }

  const unindexedCorpusPages = [...manualPages, ...setTopicPages].filter((page) => !page.indexable);
  if (unindexedCorpusPages.length > 0) {
    throw new Error(
      `Search verification failed: built corpus page(s) lack data-pagefind-body:\n- ${unindexedCorpusPages
        .map((page) => page.relativePath)
        .join('\n- ')}`,
    );
  }

  return {
    builtPageCount: pages.length,
    indexablePageCount: pages.filter((page) => page.indexable).length,
    manualPages,
    pages,
    setTopicPages,
  };
}

export async function readPagefindPageCount(pagefindDirectory) {
  const entryPath = path.join(pagefindDirectory, 'pagefind-entry.json');
  let entry;
  try {
    entry = JSON.parse(await readFile(entryPath, 'utf8'));
  } catch (error) {
    throw new Error(`Could not read Pagefind page count from ${entryPath}: ${error.message}`);
  }

  const languages = Object.entries(entry?.languages ?? {});
  if (languages.length === 0) throw new Error(`${entryPath}: no Pagefind language indexes found`);
  let total = 0;
  for (const [language, metadata] of languages) {
    if (!Number.isSafeInteger(metadata?.page_count) || metadata.page_count < 1) {
      throw new Error(`${entryPath}: invalid page_count for Pagefind language ${language}`);
    }
    total += metadata.page_count;
  }
  return total;
}

export function assertIndexedPageCount(indexablePageCount, pagefindPageCount) {
  if (indexablePageCount !== pagefindPageCount) {
    throw new Error(
      `Search verification failed: ${indexablePageCount} built page(s) declare data-pagefind-body, ` +
        `but Pagefind reports ${pagefindPageCount} indexed page(s)`,
    );
  }
}

export const SET_TOPIC_ROUTE_WHITELIST = new Set(['/set-topics/']);

export function assertSetTopicRouteParity(sourceRoutes, builtPages) {
  const guardedRoutes = new Set(sourceRoutes);
  const builtRoutes = new Set(
    builtPages
      .map((page) => page.route)
      .filter(
        (route) =>
          route.startsWith('/set-topics/') && !SET_TOPIC_ROUTE_WHITELIST.has(route),
      ),
  );
  const missingBuiltRoutes = [...guardedRoutes].filter((route) => !builtRoutes.has(route)).sort();
  const unguardedBuiltRoutes = [...builtRoutes].filter((route) => !guardedRoutes.has(route)).sort();

  if (missingBuiltRoutes.length > 0 || unguardedBuiltRoutes.length > 0) {
    const details = [];
    if (missingBuiltRoutes.length > 0) {
      details.push(
        `guarded set-topic source route(s) missing from build:\n- ${missingBuiltRoutes.join('\n- ')}`,
      );
    }
    if (unguardedBuiltRoutes.length > 0) {
      details.push(
        `built set-topic route(s) without guarded corpus sources:\n- ${unguardedBuiltRoutes.join('\n- ')}`,
      );
    }
    throw new Error(`Set-topic source/build parity failed:\n${details.join('\n')}`);
  }
}

function canonicalRoute(value) {
  let route = value.replace(/\/{2,}/g, '/');
  if (route.endsWith('/index.html')) route = route.slice(0, -'index.html'.length);
  else if (route.endsWith('.html')) route = route.slice(0, -'.html'.length);
  if (!route.startsWith('/')) route = `/${route}`;
  if (!route.endsWith('/')) route = `${route}/`;
  return route;
}

export function resultRoute(resultUrl, configuredBase) {
  const parsed = new URL(resultUrl, 'https://pagefind-verifier.invalid');
  let route = decodeURIComponent(parsed.pathname);
  const base = canonicalRoute(configuredBase || '/');
  if (base !== '/' && route.startsWith(base)) route = route.slice(base.length - 1);
  return canonicalRoute(route);
}

function createStaticServer(dist) {
  return http.createServer(async (request, response) => {
    try {
      const requestUrl = new URL(request.url ?? '/', 'http://127.0.0.1');
      const requested = decodeURIComponent(requestUrl.pathname).replace(/^\/+/, '');
      const file = path.resolve(dist, requested);
      const relative = path.relative(dist, file);

      if (relative.startsWith('..') || path.isAbsolute(relative)) {
        response.writeHead(403).end('Forbidden');
        return;
      }

      const info = await stat(file);
      if (!info.isFile()) throw new Error('Not a file');

      response.writeHead(200, {
        'Content-Type': contentTypes[path.extname(file)] ?? 'application/octet-stream',
        'Cache-Control': 'no-store',
      });
      createReadStream(file).pipe(response);
    } catch {
      response.writeHead(404).end('Not found');
    }
  });
}

async function closeServer(server) {
  await new Promise((resolve, reject) =>
    server.close((error) => (error ? reject(error) : resolve())),
  );
}

export async function verifySearch(distDirectory, configuredBase, repositoryRoot) {
  const dist = path.resolve(distDirectory);
  const pagefindDir = path.join(dist, 'pagefind');
  const pagefindModule = path.join(pagefindDir, 'pagefind.js');
  await access(pagefindModule);

  const corpus = await inspectBuiltCorpus(dist);
  const defaultRepositoryRoot = fileURLToPath(new URL('../../', import.meta.url));
  const provenance = await verifyCorpusProvenance(repositoryRoot ?? defaultRepositoryRoot);
  assertSetTopicRouteParity(provenance.sourceRoutes, corpus.pages);
  const pagefindPageCount = await readPagefindPageCount(pagefindDir);
  assertIndexedPageCount(corpus.indexablePageCount, pagefindPageCount);

  const base = canonicalRoute(configuredBase);
  const server = createStaticServer(dist);
  await new Promise((resolve) => server.listen(0, '127.0.0.1', resolve));
  const address = server.address();
  if (!address || typeof address === 'string') {
    await closeServer(server);
    throw new Error('Could not start Pagefind test server');
  }
  const origin = `http://127.0.0.1:${address.port}`;

  let pagefind;
  const failures = [];
  try {
    pagefind = await import(`${pathToFileURL(pagefindModule).href}?verify=${Date.now()}`);
    await pagefind.options({
      basePath: `${origin}/pagefind/`,
      baseUrl: base,
    });
    await pagefind.init();

    for (const page of [...corpus.manualPages, ...corpus.setTopicPages]) {
      const search = await pagefind.search(page.title);
      const results = await Promise.all(search.results.map((result) => result.data()));
      const routes = results.map((result) => resultRoute(result.url, base));
      const ok = routes.includes(page.route);
      if (!ok) failures.push(`${page.relativePath}: title query "${page.title}" did not find ${page.route}`);
      console.log(
        `${ok ? 'PASS' : 'FAIL'} built title "${page.title}" -> ${page.route} (${results.length} hit(s))`,
      );
    }
  } finally {
    if (pagefind) await pagefind.destroy();
    await closeServer(server);
  }

  if (failures.length > 0) {
    throw new Error(`Pagefind corpus verification failed:\n- ${failures.join('\n- ')}`);
  }

  console.log(
    `PASS Pagefind count: ${pagefindPageCount}/${corpus.indexablePageCount} indexable built pages ` +
      `(${corpus.builtPageCount} HTML pages total).`,
  );
  console.log(
    `PASS set-topic parity: ${provenance.checkedFiles} guarded source route(s) match the build.`,
  );
  console.log(`Pagefind API verified against ${path.relative(process.cwd(), pagefindDir)}.`);
  return corpus;
}

async function main() {
  const dist = path.resolve(process.argv[2] ?? 'dist');
  const configuredBase = String(process.env.BASE_PATH ?? '/fnl-docs-v2');
  await verifySearch(dist, configuredBase);
}

const invokedPath = process.argv[1] ? path.resolve(process.argv[1]) : '';
if (invokedPath === fileURLToPath(import.meta.url)) {
  main().catch((error) => {
    console.error(error instanceof Error ? error.message : error);
    process.exitCode = 1;
  });
}
