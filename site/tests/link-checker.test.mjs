import assert from 'node:assert/strict';
import { spawnSync } from 'node:child_process';
import { mkdtemp, mkdir, rm, writeFile } from 'node:fs/promises';
import os from 'node:os';
import path from 'node:path';
import test from 'node:test';

const checker = path.resolve('scripts/check-internal-links.mjs');

async function createFixture(files) {
  const root = await mkdtemp(path.join(os.tmpdir(), 'fnl-link-check-'));
  for (const [relativePath, content] of Object.entries(files)) {
    const target = path.join(root, relativePath);
    await mkdir(path.dirname(target), { recursive: true });
    await writeFile(target, content);
  }
  return root;
}

function runChecker(root) {
  return spawnSync(process.execPath, [checker, root], {
    encoding: 'utf8',
    env: { ...process.env, BASE_PATH: '/fnl-docs-v2' },
  });
}

test('link checker validates links, assets, fragments, and Open Graph images', async () => {
  const root = await createFixture({
    'index.html': `<!doctype html>
      <link href="/fnl-docs-v2/favicon.svg" rel="icon">
      <meta property="og:image" content="https://docs.example/fnl-docs-v2/og.png">
      <a href="/fnl-docs-v2/target/#answer">Answer</a>
      <img src="/fnl-docs-v2/image.png" alt="">
      <script src="/fnl-docs-v2/app.js"></script>`,
    'favicon.svg': '<svg xmlns="http://www.w3.org/2000/svg"/>',
    'og.png': 'png',
    'image.png': 'png',
    'app.js': 'export {};',
    'target/index.html': '<h1 id="answer">Answer</h1>',
  });

  try {
    const result = runChecker(root);
    assert.equal(result.status, 0, result.stderr || result.stdout);
  } finally {
    await rm(root, { recursive: true, force: true });
  }
});

test('link checker rejects missing src assets and case-mismatched targets', async () => {
  const cases = [
    {
      html: '<img src="/fnl-docs-v2/missing.png" alt="">',
      files: {},
    },
    {
      html: '<link href="/fnl-docs-v2/Favicon.svg" rel="icon">',
      files: { 'favicon.svg': '<svg xmlns="http://www.w3.org/2000/svg"/>' },
    },
    {
      html: '<a href="/fnl-docs-v2/Target/#answer">Answer</a>',
      files: { 'target/index.html': '<h1 id="answer">Answer</h1>' },
    },
  ];

  for (const fixture of cases) {
    const root = await createFixture({
      'index.html': fixture.html,
      ...fixture.files,
    });

    try {
      const result = runChecker(root);
      assert.notEqual(result.status, 0, `checker accepted: ${fixture.html}`);
      assert.match(result.stderr, /has no built target/);
    } finally {
      await rm(root, { recursive: true, force: true });
    }
  }
});
