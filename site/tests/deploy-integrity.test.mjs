import assert from 'node:assert/strict';
import { mkdir, mkdtemp, rm, writeFile } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import path from 'node:path';
import test from 'node:test';

import {
  LIVE2_CHANNEL_IDS,
  setTopicRouteFromSource,
  sourceChannelId,
  verifyCorpusProvenance,
} from '../scripts/verify-corpus-provenance.mjs';
import {
  assertIndexedPageCount,
  assertSetTopicRouteParity,
  inspectBuiltCorpus,
  readPagefindPageCount,
  resultRoute,
} from '../scripts/verify-search.mjs';

async function temporaryDirectory(prefix, run) {
  const directory = await mkdtemp(path.join(tmpdir(), prefix));
  try {
    return await run(directory);
  } finally {
    await rm(directory, { force: true, recursive: true });
  }
}

function setTopic(sourceUrl) {
  return `---
doc_type: SET_TOPIC
title: Synthetic fixture
date: 2026-07-17
source_url: "${sourceUrl}"
---

Synthetic test content that never enters the repository corpus.
`;
}

async function writeSetTopic(root, name, channelId, { bom = false } = {}) {
  const directory = path.join(root, 'set-topics');
  const target = path.join(directory, ...name.split('/'));
  await mkdir(path.dirname(target), { recursive: true });
  await writeFile(
    target,
    `${bom ? '\uFEFF' : ''}${setTopic(
      `https://discord.com/channels/850913821240983553/${channelId}/999999999999999999`,
    )}`,
  );
}

test('provenance guard accepts admitted LIVE2 channels and ignores non-built templates', async () => {
  await temporaryDirectory('fnlkb-provenance-valid-', async (root) => {
    await writeSetTopic(root, 'valid.md', LIVE2_CHANNEL_IDS.info);
    await writeSetTopic(root, 'bom.md', LIVE2_CHANNEL_IDS.info, { bom: true });
    await writeSetTopic(root, '_TEMPLATE.md', '100000000000000000');

    const result = await verifyCorpusProvenance(root);
    assert.deepEqual(result, {
      checkedFiles: 2,
      sourceRoutes: ['/set-topics/bom/', '/set-topics/valid/'],
    });
  });
});

test('set-topic source routes mirror Astro documentId normalization', () => {
  assert.equal(
    setTopicRouteFromSource('set-topics/nested_name/topic_name.MD'),
    '/set-topics/nested-name/topic-name/',
  );
});

test('sourceChannelId pins canonical Discord host and protocol handling', () => {
  const pathSuffix = `/channels/850913821240983553/${LIVE2_CHANNEL_IDS.info}/999999999999999999`;
  assert.equal(
    sourceChannelId(`https://DISCORD.COM${pathSuffix}`),
    LIVE2_CHANNEL_IDS.info,
  );
  for (const sourceUrl of [
    `https://example.com${pathSuffix}`,
    `https://ptb.discord.com${pathSuffix}`,
    `https://canary.discord.com${pathSuffix}`,
    `http://discord.com${pathSuffix}`,
  ]) {
    assert.throws(() => sourceChannelId(sourceUrl), /canonical Discord message URL/);
  }
});

test('provenance guard fails a synthetic legacy-channel fixture in a temporary corpus', async () => {
  await temporaryDirectory('fnlkb-provenance-contaminated-', async (root) => {
    await writeSetTopic(root, '_looks-ignored/contaminated.md', '100000000000000000');

    await assert.rejects(
      verifyCorpusProvenance(root),
      /source_url channel 100000000000000000 is not an admitted LIVE2 set-topic channel/,
    );
  });
});

test('provenance guard rejects flywheel-only public-discussion pages and an empty section', async () => {
  await temporaryDirectory('fnlkb-provenance-public-', async (root) => {
    await writeSetTopic(root, 'public-discussion.md', LIVE2_CHANNEL_IDS.publicDiscussion);
    await assert.rejects(verifyCorpusProvenance(root), /live2-public-discussion.*flywheel-only/);
  });

  await temporaryDirectory('fnlkb-provenance-empty-', async (root) => {
    await assert.rejects(verifyCorpusProvenance(root), /no set-topic source files found/);
  });
});

async function writeHtml(dist, relativePath, title, { indexable = true } = {}) {
  const target = path.join(dist, ...relativePath.split('/'));
  await mkdir(path.dirname(target), { recursive: true });
  await writeFile(
    target,
    `<html><body><main${indexable ? ' data-pagefind-body' : ''}><h1>${title}</h1></main></body></html>`,
  );
}

test('search verification derives corpus titles and counts solely from the built output', async () => {
  await temporaryDirectory('fnlkb-search-built-', async (dist) => {
    await writeHtml(dist, 'index.html', 'Home');
    await writeHtml(dist, '404.html', 'Not found', { indexable: false });
    await writeHtml(dist, 'manual/index.html', 'Manual');
    await writeHtml(dist, 'manual/synthetic-manual/index.html', 'Generated Manual Title &amp; Guide');
    await writeHtml(dist, 'set-topics/index.html', 'Set Topics');
    await writeHtml(dist, 'set-topics/synthetic-topic/index.html', 'Generated Set Topic');
    await mkdir(path.join(dist, 'pagefind'), { recursive: true });
    await writeFile(
      path.join(dist, 'pagefind', 'pagefind-entry.json'),
      JSON.stringify({ languages: { en: { page_count: 5 } } }),
    );

    const corpus = await inspectBuiltCorpus(dist);
    assert.equal(corpus.builtPageCount, 6);
    assert.equal(corpus.indexablePageCount, 5);
    assert.deepEqual(corpus.manualPages.map((page) => page.title), [
      'Generated Manual Title & Guide',
    ]);
    assert.deepEqual(corpus.setTopicPages.map((page) => page.title), ['Generated Set Topic']);

    const pagefindCount = await readPagefindPageCount(path.join(dist, 'pagefind'));
    assert.equal(pagefindCount, 5);
    assert.doesNotThrow(() => assertIndexedPageCount(corpus.indexablePageCount, pagefindCount));
    assert.throws(() => assertIndexedPageCount(corpus.indexablePageCount, 4), /Pagefind reports 4/);
    assert.equal(
      resultRoute('/repository/set-topics/synthetic-topic/', '/repository/'),
      '/set-topics/synthetic-topic/',
    );
  });
});

test('search verification fails loudly when either built corpus section is empty', async () => {
  await temporaryDirectory('fnlkb-search-empty-', async (dist) => {
    await writeHtml(dist, 'manual/synthetic-manual/index.html', 'Generated Manual');
    await writeHtml(dist, 'set-topics/index.html', 'Set Topics');
    await assert.rejects(inspectBuiltCorpus(dist), /built set-topics section has no corpus pages/);
  });
});

test('set-topic parity rejects a guarded source dropped by the build', () => {
  const builtPages = [
    { route: '/set-topics/' },
    { route: '/set-topics/expected/' },
  ];
  assert.throws(
    () =>
      assertSetTopicRouteParity(
        ['/set-topics/expected/', '/set-topics/dropped-source/'],
        builtPages,
      ),
    /guarded set-topic source route\(s\) missing from build:[\s\S]*\/set-topics\/dropped-source\//,
  );
});

test('set-topic parity rejects an injected site-content page without a guarded source', () => {
  const builtPages = [
    { route: '/set-topics/' },
    { route: '/set-topics/expected/' },
    { route: '/set-topics/injected-site-content/' },
  ];
  assert.throws(
    () => assertSetTopicRouteParity(['/set-topics/expected/'], builtPages),
    /built set-topic route\(s\) without guarded corpus sources:[\s\S]*\/set-topics\/injected-site-content\//,
  );
});
