import assert from 'node:assert/strict';
import { access, readFile } from 'node:fs/promises';
import test from 'node:test';

const css = await readFile(new URL('../src/styles/custom.css', import.meta.url), 'utf8');
const config = await readFile(new URL('../astro.config.mjs', import.meta.url), 'utf8');

async function pngDimensions(url) {
  const png = await readFile(url);
  assert.equal(png.subarray(1, 4).toString('ascii'), 'PNG');
  return { width: png.readUInt32BE(16), height: png.readUInt32BE(20) };
}

test('WP-5F brand and reading-density contract remains explicit', () => {
  assert.match(css, /--fnl-red:\s*#d82f35/i);
  assert.match(css, /--fnl-link:\s*#6080a8/i);
  assert.match(css, /--sl-line-height:\s*1\.55/);
  assert.match(css, /--sl-content-width:\s*54rem/);
  assert.match(css, /body\s*{[^}]*background:\s*var\(--sl-color-bg\)/s);
  assert.doesNotMatch(css, /radial-gradient|linear-gradient|background-image/);
});

test('WP-5F jumpers and text code blocks do not underline, scroll, or clip words', () => {
  assert.match(css, /\.sl-markdown-content a:not\(\.sl-anchor-link\)[^{]*{[^}]*text-decoration:\s*none/s);
  assert.match(css, /white-space:\s*pre-wrap/);
  assert.match(css, /overflow-wrap:\s*anywhere/);
  assert.match(css, /overflow-x:\s*clip/);
});

test('WP-5F root route, brand assets, dark mode, and IA order are pinned', () => {
  assert.match(config, /['"]\/['"]:\s*`\$\{base\}\/manual\/ninjalive2-manual\/`/);
  assert.match(config, /favicon:\s*['"]\/favicon\.png['"]/);
  assert.match(config, /fluidninja-live-2-logo\.png/);
  assert.match(config, /ThemeProvider:[\s\S]*ThemeSelect:/);
  assert.match(config, /name:\s*['"]color-scheme['"],\s*content:\s*['"]dark['"]/);

  const manual = config.indexOf('...manualSidebar');
  const parameters = config.indexOf("label: 'Parameters'", manual);
  const setTopics = config.indexOf("label: 'Set Topics'", parameters);
  const support = config.indexOf("label: 'Q&A / Support'", setTopics);
  const releases = config.indexOf("label: 'Releases'", support);
  assert.ok(manual >= 0 && manual < parameters && parameters < setTopics && setTopics < support && support < releases);
});

test('WP-5F official logo derivatives exist at deployment dimensions', async () => {
  await access(new URL('../src/assets/fluidninja-live-2-logo.png', import.meta.url));
  assert.deepEqual(await pngDimensions(new URL('../public/favicon.png', import.meta.url)), {
    width: 64,
    height: 64,
  });
  assert.deepEqual(await pngDimensions(new URL('../public/og.png', import.meta.url)), {
    width: 1200,
    height: 630,
  });
});
