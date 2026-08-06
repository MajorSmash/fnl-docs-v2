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

function setTopic(sourceUrl, docType = 'SET_TOPIC', admittedBy) {
  const admission = admittedBy === undefined ? '' : `admitted_by: "${admittedBy}"\n`;
  return `---
doc_type: ${docType}
title: Synthetic fixture
date: 2026-07-17
source_url: "${sourceUrl}"
${admission}---

Synthetic test content that never enters the repository corpus.
`;
}

async function writeSetTopic(
  root,
  name,
  channelId,
  { bom = false, docType = 'SET_TOPIC', section = 'set-topics', admittedBy } = {},
) {
  const directory = path.join(root, section);
  const target = path.join(directory, ...name.split('/'));
  await mkdir(path.dirname(target), { recursive: true });
  await writeFile(
    target,
    `${bom ? '\uFEFF' : ''}${setTopic(
      `https://discord.com/channels/850913821240983553/${channelId}/999999999999999999`,
      docType,
      admittedBy,
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

test('provenance guard admits review-gated general and reviewer-captured readable channels', async () => {
  await temporaryDirectory('fnlkb-provenance-general-', async (root) => {
    await writeSetTopic(root, 'general.md', LIVE2_CHANNEL_IDS.general, {
      admittedBy: `auto-capture:${LIVE2_CHANNEL_IDS.general}`,
    });
    await writeSetTopic(root, 'dev-lab.md', '1460578674695868510', {
      admittedBy: 'reviewer-capture:200522590853267456',
    });
    const result = await verifyCorpusProvenance(root);
    assert.equal(result.checkedFiles, 2);
  });

  await temporaryDirectory('fnlkb-provenance-general-usecase-', async (root) => {
    await writeSetTopic(root, 'valid.md', LIVE2_CHANNEL_IDS.info);
    await writeSetTopic(root, 'general-usecase.md', LIVE2_CHANNEL_IDS.general, {
      docType: 'USECASE',
      section: 'support',
    });
    await assert.rejects(
      verifyCorpusProvenance(root),
      /general .*admitted only for SET_TOPIC/,
    );
  });

  for (const [name, channelId] of Object.entries({
    'tips-tricks': '851482546100633601',
    'ninjalive-issues': '850926358196125726',
  })) {
    await temporaryDirectory(`fnlkb-provenance-${name}-`, async (root) => {
      await writeSetTopic(root, 'valid.md', LIVE2_CHANNEL_IDS.info);
      await writeSetTopic(root, `${name}.md`, channelId);
      await assert.rejects(
        verifyCorpusProvenance(root),
        new RegExp(`${name}\\.md: expected exactly one admitted_by field`),
      );
    });
  }
});

test('provenance guard fails closed on absent or malformed non-dedicated admission', async () => {
  for (const [name, channelId, admittedBy] of [
    ['general-absent', LIVE2_CHANNEL_IDS.general, undefined],
    ['legacy-absent', '851482546100633601', undefined],
    ['reviewer-text', '1460578674695868510', 'reviewer-capture:not-a-snowflake'],
    ['reviewer-short', '1460578674695868510', 'reviewer-capture:123'],
    [
      'reviewer-comment',
      '1460578674695868510',
      'reviewer-capture:200522590853267456 # forged comment',
    ],
    ['wrong-auto-source', '1460578674695868510', 'auto-capture:1460578674695868510'],
    ['general-wrong-auto', LIVE2_CHANNEL_IDS.general, 'auto-capture:1319655034803458069'],
  ]) {
    await temporaryDirectory(`fnlkb-provenance-admission-${name}-`, async (root) => {
      await writeSetTopic(root, 'valid.md', LIVE2_CHANNEL_IDS.info);
      await writeSetTopic(root, `${name}.md`, channelId, { admittedBy });
      await assert.rejects(verifyCorpusProvenance(root), /admitted_by/);
    });
  }
});

test('provenance guard rejects duplicate admission fields', async () => {
  await temporaryDirectory('fnlkb-provenance-admission-duplicate-', async (root) => {
    const directory = path.join(root, 'set-topics');
    await mkdir(directory, { recursive: true });
    const sourceUrl =
      'https://discord.com/channels/850913821240983553/1460578674695868510/999999999999999999';
    const admission = 'reviewer-capture:200522590853267456';
    const duplicate = setTopic(sourceUrl, 'SET_TOPIC', admission).replace(
      `admitted_by: "${admission}"\n---`,
      `admitted_by: "${admission}"\nadmitted_by: "${admission}"\n---`,
    );
    await writeFile(path.join(directory, 'duplicate.md'), duplicate);

    await assert.rejects(verifyCorpusProvenance(root), /expected exactly one admitted_by field/);
  });
});

test('reviewer admission is SET_TOPIC-only and cannot admit a USECASE', async () => {
  await temporaryDirectory('fnlkb-provenance-usecase-admission-', async (root) => {
    await writeSetTopic(root, 'valid.md', LIVE2_CHANNEL_IDS.info);
    await writeSetTopic(root, 'reviewer-usecase.md', '1460578674695868510', {
      docType: 'USECASE',
      section: 'support',
      admittedBy: 'reviewer-capture:200522590853267456',
    });
    await assert.rejects(
      verifyCorpusProvenance(root),
      /not an admitted LIVE2 set-topic channel/,
    );
  });
});

test('provenance guard fails closed on YAML doc_type spellings it cannot parse canonically', async () => {
  for (const [name, docType] of Object.entries({
    comment: 'SET_TOPIC # comment',
    tag: '!!str SET_TOPIC',
    anchor: '&scope SET_TOPIC',
    'quoted-comment': '"SET_TOPIC" # comment',
  })) {
    for (const section of ['manual', 'descriptors', 'set-topics', 'support', 'releases']) {
      await temporaryDirectory(`fnlkb-provenance-yaml-${section}-${name}-`, async (root) => {
        await writeSetTopic(root, 'valid.md', LIVE2_CHANNEL_IDS.info);
        await writeSetTopic(root, `${name}.md`, '851482546100633601', {
          docType,
          section,
        });
        await assert.rejects(
          verifyCorpusProvenance(root),
          /doc_type must use one canonical v7 scalar/,
        );
      });
    }
  }
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
    `https://user:pass@discord.com${pathSuffix}`,
    `https://discord.com:444${pathSuffix}`,
    `https://discord.com:443${pathSuffix}`,
    `https://discord.com:bad${pathSuffix}`,
    `https://discord.com${pathSuffix}/`,
    `https://discord.com${pathSuffix}?x=1`,
    `https://discord.com${pathSuffix}#fragment`,
    `https://discord.com${pathSuffix.replaceAll('/', '//')}`,
  ]) {
    assert.throws(() => sourceChannelId(sourceUrl), /canonical Discord message URL/);
  }
});

test('provenance guard fails a synthetic legacy-channel fixture in a temporary corpus', async () => {
  await temporaryDirectory('fnlkb-provenance-contaminated-', async (root) => {
    await writeSetTopic(root, '_looks-ignored/contaminated.md', '100000000000000000');

    await assert.rejects(
      verifyCorpusProvenance(root),
      /expected exactly one admitted_by field/,
    );
  });
});

test('provenance guard rejects site-layer set-topics content beyond the whitelisted index', async () => {
  await temporaryDirectory('fnlkb-provenance-shadow-', async (root) => {
    await writeSetTopic(root, 'valid.md', LIVE2_CHANNEL_IDS.info);
    const siteSection = path.join(root, 'site', 'src', 'content', 'docs', 'set-topics');
    await mkdir(siteSection, { recursive: true });
    await writeFile(path.join(siteSection, 'index.mdx'), '# Section index\n');
    await writeFile(path.join(siteSection, 'valid.mdx'), '# Shadowing body\n');

    await assert.rejects(
      verifyCorpusProvenance(root),
      /valid\.mdx: site-layer set-topics content is forbidden/,
    );

    await rm(path.join(siteSection, 'valid.mdx'));
    const result = await verifyCorpusProvenance(root);
    assert.equal(result.checkedFiles, 1);
  });
});

test('provenance guard admits review-gated public-discussion and rejects it without metadata', async () => {
  await temporaryDirectory('fnlkb-provenance-public-', async (root) => {
    await writeSetTopic(root, 'public-discussion.md', LIVE2_CHANNEL_IDS.publicDiscussion, {
      admittedBy: `auto-capture:${LIVE2_CHANNEL_IDS.publicDiscussion}`,
    });
    await writeSetTopic(root, 'public-reviewer.md', LIVE2_CHANNEL_IDS.publicDiscussion, {
      admittedBy: 'reviewer-capture:200522590853267456',
    });
    const result = await verifyCorpusProvenance(root);
    assert.equal(result.checkedFiles, 2);
  });

  await temporaryDirectory('fnlkb-provenance-public-unadmitted-', async (root) => {
    await writeSetTopic(root, 'public-discussion.md', LIVE2_CHANNEL_IDS.publicDiscussion);
    await assert.rejects(verifyCorpusProvenance(root), /admitted_by/);
  });
});

test('provenance guard rejects an empty set-topic section', async () => {
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
