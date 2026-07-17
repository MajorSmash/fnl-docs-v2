import assert from 'node:assert/strict';
import { mkdir, mkdtemp, rm, writeFile } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import path from 'node:path';
import test from 'node:test';

import {
  LIVE2_CHANNEL_IDS,
  verifyCorpusProvenance,
} from '../scripts/verify-corpus-provenance.mjs';
import {
  assertIndexedPageCount,
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

async function writeSetTopic(root, name, channelId) {
  const directory = path.join(root, 'set-topics');
  const target = path.join(directory, ...name.split('/'));
  await mkdir(path.dirname(target), { recursive: true });
  await writeFile(
    target,
    setTopic(`https://discord.com/channels/850913821240983553/${channelId}/999999999999999999`),
  );
}

test('provenance guard accepts admitted LIVE2 channels and ignores non-built templates', async () => {
  await temporaryDirectory('fnlkb-provenance-valid-', async (root) => {
    await writeSetTopic(root, 'valid.md', LIVE2_CHANNEL_IDS.info);
    await writeSetTopic(root, '_TEMPLATE.md', '100000000000000000');

    const result = await verifyCorpusProvenance(root);
    assert.deepEqual(result, { checkedFiles: 1 });
  });
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
    await assert.rejects(verifyCorpusProvenance(root), /no built set-topic source files found/);
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
