import { createReadStream } from 'node:fs';
import { access, stat } from 'node:fs/promises';
import http from 'node:http';
import path from 'node:path';
import process from 'node:process';
import { pathToFileURL } from 'node:url';

const dist = path.resolve(process.argv[2] ?? 'dist');
const pagefindDir = path.join(dist, 'pagefind');
const pagefindModule = path.join(pagefindDir, 'pagefind.js');
await access(pagefindModule);

const configuredBase = String(process.env.BASE_PATH ?? '/fnl-docs-v2')
  .replace(/^\/+|\/+$/g, '');
const base = configuredBase ? `/${configuredBase}/` : '/';
const queries = [
  { query: 'water meshes', expected: ['/manual/', '/set-topics/'] },
  { query: 'volumetrics', expected: ['/manual/', '/set-topics/'] },
  { query: 'simulation resolution', expected: ['/manual/', '/set-topics/'] },
  { query: 'movie render queue', expected: ['/manual/', '/set-topics/'] },
  { query: 'volume fog', expected: ['/manual/', '/set-topics/'] },
];

const contentTypes = {
  '.css': 'text/css; charset=utf-8',
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.pagefind': 'application/octet-stream',
  '.wasm': 'application/wasm',
};

const server = http.createServer(async (request, response) => {
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

await new Promise((resolve) => server.listen(0, '127.0.0.1', resolve));
const address = server.address();
if (!address || typeof address === 'string') throw new Error('Could not start Pagefind test server');
const origin = `http://127.0.0.1:${address.port}`;

let failed = false;
try {
  const pagefind = await import(`${pathToFileURL(pagefindModule).href}?verify=${Date.now()}`);
  await pagefind.options({
    basePath: `${origin}/pagefind/`,
    baseUrl: base,
  });
  await pagefind.init();

  for (const sample of queries) {
    const search = await pagefind.search(sample.query);
    const results = await Promise.all(search.results.slice(0, 50).map((result) => result.data()));
    const urls = results.map((result) => result.url);
    const ok = sample.expected.every((segment) => urls.some((url) => url.includes(segment)));
    failed ||= !ok;
    console.log(
      `${ok ? 'PASS' : 'FAIL'} "${sample.query}" -> ${urls.slice(0, 8).join(', ') || 'no hits'}`,
    );
  }

  await pagefind.destroy();
} finally {
  await new Promise((resolve, reject) =>
    server.close((error) => (error ? reject(error) : resolve())),
  );
}

console.log(`Pagefind API verified against ${path.relative(process.cwd(), pagefindDir)}.`);
if (failed) process.exitCode = 1;
