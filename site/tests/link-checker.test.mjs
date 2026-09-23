import assert from 'node:assert/strict';
import { spawnSync } from 'node:child_process';
import { mkdtemp, mkdir, readFile, rm, writeFile } from 'node:fs/promises';
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


test('labdscape fragment regression fails the deployed build gate and corrected anchor passes', async () => {
  const { createMarkdownProcessor } = await import('@astrojs/markdown-remark');
  const renderer = await createMarkdownProcessor();
  const { code } = await renderer.render('# Landscape\n\n[Landscape](#labdscape)\n');
  assert.match(code, /id="landscape"/);
  const root = await createFixture({ 'index.html': code });
  try {
    const rejected = runChecker(root);
    assert.equal(rejected.status, 1, rejected.stderr || rejected.stdout);
    assert.match(rejected.stderr, /#labdscape has no matching anchor/);
    await writeFile(path.join(root, 'index.html'), code.replace('href="#labdscape"', 'href="#landscape"'));
    const accepted = runChecker(root);
    assert.equal(accepted.status, 0, accepted.stderr);
  } finally {
    await rm(root, { recursive: true, force: true });
  }

  // Assert the gate is mandatory before artifact upload/deployment. A correct
  // checker that CI silently stops running is still a deployment regression.
  const pkg = JSON.parse(await readFile(new URL('../package.json', import.meta.url), 'utf8'));
  assert.equal(pkg.scripts['check:links'], 'node scripts/check-internal-links.mjs');
  assert.ok(pkg.scripts['build:verify'].split(' && ').includes('pnpm run check:links'));
  const workflow = await readFile(new URL('../../.github/workflows/deploy-pages.yml', import.meta.url), 'utf8');
  const admission = workflow.indexOf('run: node site/scripts/verify-corpus-provenance.mjs .');
  assert.ok(admission > workflow.indexOf('run: pnpm install --frozen-lockfile'));
  assert.ok(admission < workflow.indexOf('run: pnpm run build:verify'));
  const gate = workflow.indexOf('run: pnpm run build:verify');
  assert.ok(gate >= 0 && gate < workflow.indexOf('uses: actions/upload-pages-artifact@'));
  assert.doesNotMatch(workflow, /continue-on-error:\s*true|\|\|\s*true/);
});
