import assert from 'node:assert/strict';
import { spawnSync } from 'node:child_process';
import { mkdir, mkdtemp, rm, writeFile } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import test from 'node:test';

import {
  setTopicRouteFromSource,
  sourceChannelId,
  verifyCorpusProvenance,
} from '../scripts/verify-corpus-provenance.mjs';
import grandfathered from '../scripts/pre-wave11-admission.json' with { type: 'json' };
import {
  assertIndexedPageCount,
  assertSetTopicRouteParity,
  inspectBuiltCorpus,
  readPagefindPageCount,
  resultRoute,
} from '../scripts/verify-search.mjs';

const repositoryRoot = fileURLToPath(new URL('../../', import.meta.url));
const guard = fileURLToPath(new URL('../scripts/verify-corpus-provenance.mjs', import.meta.url));
// Former privileged channels and legacy channels must behave identically.
const channels = ['1460577812795883572', '1466643263774527741', '1319654748873560145',
  '1319655034803458069', '850913821827792940', '851482546100633601', '1460578674695868510'];
const reviewer = 'reviewer-capture:200522590853267456';

async function temporaryDirectory(prefix, run) {
  const directory = await mkdtemp(path.join(tmpdir(), prefix));
  try { return await run(directory); }
  finally { await rm(directory, { force: true, recursive: true }); }
}

function setTopic(channelId, { docType = 'SET_TOPIC', admission = `"${reviewer}"`, date = '2026-07-17' } = {}) {
  return `---\ndoc_type: ${docType}\ntitle: Synthetic fixture\ndate: ${date}\n` +
    `source_url: "https://discord.com/channels/850913821240983553/${channelId}/999999999999999999"\n` +
    (admission === null ? '' : `admitted_by: ${admission}\n`) +
    '---\n\nSynthetic test content that never enters the repository corpus.\n';
}

async function writeSource(root, relative, markdown) {
  const target = path.join(root, relative);
  await mkdir(path.dirname(target), { recursive: true });
  await writeFile(target, markdown);
}

function runGuard(root) {
  return spawnSync(process.execPath, [guard, root], { encoding: 'utf8' });
}

test('live canon passes the same admission guard used by CI', async () => {
  const result = await verifyCorpusProvenance(repositoryRoot);
  assert.ok(result.checkedFiles > 0);
  assert.ok(result.corpusFiles > result.checkedFiles);
  const cli = runGuard(repositoryRoot);
  assert.equal(cli.status, 0, cli.stderr);
  assert.match(cli.stdout, /PASS corpus admission/);
});

test('pinned grandfather list is exact, unique and auditable against its historical tree', async () => {
  assert.equal(grandfathered.sourceCommit, '291ec1ab3cc2069fb4a229f96d0c6ecc0000b053');
  assert.equal(grandfathered.paths.length, 20);
  assert.deepEqual(grandfathered.paths, [...new Set(grandfathered.paths)].sort());
  for (const relative of grandfathered.paths) {
    assert.match(relative, /^set-topics\/[a-z0-9-]+\.md$/);
  }
  // Full local history proves the manifest against git. Shallow standalone CI
  // still enforces the pinned list above and all behavioral tests below.
  const tree = spawnSync('git', ['ls-tree', '-r', '--name-only', grandfathered.sourceCommit],
    { cwd: repositoryRoot, encoding: 'utf8' });
  if (tree.status === 0) {
    const paths = tree.stdout.trim().split(/\r?\n/).filter(p => p.startsWith('set-topics/') && p.endsWith('.md'));
    assert.deepEqual(grandfathered.paths, paths);
  }
});

test('SET_TOPIC and USECASE admission is channel independent in every corpus folder', async () => {
  await temporaryDirectory('fnlkb-wave11-admitted-', async root => {
    for (const docType of ['SET_TOPIC', 'USECASE']) {
      for (const section of ['manual', 'descriptors', 'set-topics', 'support', 'releases']) {
        for (const channel of channels) {
          await writeSource(root, `${section}/${docType}-${channel}.md`, setTopic(channel, { docType }));
        }
      }
    }
    assert.equal((await verifyCorpusProvenance(root)).corpusFiles, 70);
  });
});

test('CI exits 1 for unadmitted ungrandfathered docs, including former dedicated channels and old dates', async () => {
  for (const docType of ['SET_TOPIC', 'USECASE']) {
    for (const channel of channels) {
      await temporaryDirectory('fnlkb-wave11-denied-', async root => {
        await writeSource(root, 'set-topics/unadmitted.md', setTopic(channel, { docType, admission: null, date: '2001-01-01' }));
        const cli = runGuard(root);
        assert.equal(cli.status, 1, cli.stderr || cli.stdout);
        assert.match(cli.stderr, /unadmitted\.md: expected exactly one admitted_by field/);
      });
    }
  }
});

test('only exact pinned paths are grandfathered; dates, folders and route aliases grant nothing', async () => {
  const pinned = grandfathered.paths[0];
  for (const docType of ['SET_TOPIC', 'USECASE']) {
    await temporaryDirectory('fnlkb-wave11-grandfather-', async root => {
      await writeSource(root, pinned, setTopic(channels[5], { docType, admission: null, date: '2099-01-01' }));
      assert.equal((await verifyCorpusProvenance(root)).checkedFiles, 1);
      for (const relative of [pinned.replaceAll('-', '_').replace('set_topics', 'set-topics'),
        `support/${path.basename(pinned)}`, `set-topics/nested/${path.basename(pinned)}`, 'set-topics/new.md']) {
        await writeSource(root, relative, setTopic(channels[0], { docType, admission: null }));
        await assert.rejects(verifyCorpusProvenance(root), /admitted_by|invalid YAML frontmatter/);
        await rm(path.join(root, relative));
      }
    });
  }
});

test('presence does not reintroduce marker/channel-specific admission gates', async () => {
  await temporaryDirectory('fnlkb-wave11-presence-', async root => {
    await writeSource(root, 'set-topics/explicit.md', setTopic(channels[5], { admission: '"conductor-approved"' }));
    await writeSource(root, 'set-topics/legacy-marker.md', setTopic(channels[5], { admission: '"auto-capture:850913821827792940"' }));
    assert.equal((await verifyCorpusProvenance(root)).checkedFiles, 2);
  });
});

test('empty, null, collection, alias, tagged and duplicate admission values fail closed', async () => {
  for (const admission of ['', '""', 'null', '~', 'false', '# no reviewer', '.nan', '.inf', '[]', '{}', '*reviewer', '&reviewer value',
    '!!str reviewer', '|', '>', '123', '"unterminated', "'unterminated", 'reviewer # comment', `"${reviewer}"\nadmitted_by: "${reviewer}"`]) {
    await temporaryDirectory('fnlkb-wave11-malformed-', async root => {
      await writeSource(root, 'set-topics/malformed.md', setTopic(channels[0], { admission }));
      await assert.rejects(verifyCorpusProvenance(root), /admitted_by|invalid YAML frontmatter/);
    });
  }
});

test('BOM and ignored templates retain existing behavior', async () => {
  await temporaryDirectory('fnlkb-wave11-bom-', async root => {
    await writeSource(root, 'set-topics/bom.md', '\uFEFF' + setTopic(channels[0]));
    await writeSource(root, 'set-topics/_TEMPLATE.md', 'not frontmatter');
    const result = await verifyCorpusProvenance(root);
    assert.deepEqual(result, { checkedFiles: 1, corpusFiles: 1, sourceRoutes: ['/set-topics/bom/'] });
  });
});

test('doc_type is authoritative outside set-topics; unsupported YAML cannot bypass admission', async () => {
  for (const docType of ['SET_TOPIC # comment', '!!str SET_TOPIC', '&scope SET_TOPIC', '"SET_TOPIC" # comment']) {
    for (const section of ['manual', 'descriptors', 'set-topics', 'support', 'releases']) {
      await temporaryDirectory('fnlkb-wave11-type-', async root => {
        await writeSource(root, 'set-topics/valid.md', setTopic(channels[0]));
        await writeSource(root, `${section}/invalid.md`, setTopic(channels[0], { docType }));
        await assert.rejects(verifyCorpusProvenance(root), /doc_type must (?:use one canonical v7 scalar|be a canonical quoted scalar|be a canonical non-empty string field)/);
      });
    }
  }
});

test('grandfathering does not bypass URL integrity checks', async () => {
  await temporaryDirectory('fnlkb-wave11-url-', async root => {
    await writeSource(root, grandfathered.paths[0], setTopic(channels[0], { admission: null }).replace('discord.com', 'example.com'));
    await assert.rejects(verifyCorpusProvenance(root), /canonical Discord message URL/);
  });
});

test('set-topic source routes mirror Astro documentId normalization', () => {
  assert.equal(setTopicRouteFromSource('set-topics/nested_name/topic_name.MD'), '/set-topics/nested-name/topic-name/');
});

test('sourceChannelId pins canonical Discord host and protocol handling', () => {
  const suffix = `/channels/850913821240983553/${channels[0]}/999999999999999999`;
  assert.equal(sourceChannelId(`https://DISCORD.COM${suffix}`), channels[0]);
  for (const sourceUrl of [`https://example.com${suffix}`, `https://ptb.discord.com${suffix}`,
    `https://canary.discord.com${suffix}`, `http://discord.com${suffix}`, `https://user:pass@discord.com${suffix}`,
    `https://discord.com:443${suffix}`, `https://discord.com:bad${suffix}`, `https://discord.com${suffix}/`,
    `https://discord.com${suffix}?x=1`, `https://discord.com${suffix}#fragment`,
    `https://discord.com${suffix.replaceAll('/', '//')}`]) {
    assert.throws(() => sourceChannelId(sourceUrl), /canonical Discord message URL/);
  }
});

test('underscore directories cannot hide an unadmitted document', async () => {
  await temporaryDirectory('fnlkb-wave11-nested-', async root => {
    await writeSource(root, 'set-topics/_looks-ignored/contaminated.md', setTopic(channels[0], { admission: null }));
    await assert.rejects(verifyCorpusProvenance(root), /admitted_by|invalid YAML frontmatter/);
  });
});

test('site-layer set-topics cannot shadow guarded canon', async () => {
  await temporaryDirectory('fnlkb-wave11-shadow-', async root => {
    await writeSource(root, 'set-topics/valid.md', setTopic(channels[0]));
    const section = 'site/src/content/docs/set-topics';
    await writeSource(root, `${section}/index.mdx`, '---\ntitle: Index\n---\n# Index\n');
    await writeSource(root, `${section}/valid.mdx`, '# Shadowing body\n');
    await assert.rejects(verifyCorpusProvenance(root), /site-layer set-topics content is forbidden/);
    await rm(path.join(root, section, 'valid.mdx'));
    assert.equal((await verifyCorpusProvenance(root)).checkedFiles, 1);
  });
});

test('route collisions and an empty source section still fail closed', async () => {
  await temporaryDirectory('fnlkb-wave11-collision-', async root => {
    await assert.rejects(verifyCorpusProvenance(root), /no set-topic source files found/);
    await writeSource(root, 'set-topics/a_b.md', setTopic(channels[0]));
    await writeSource(root, 'set-topics/a-b.md', setTopic(channels[0]));
    await assert.rejects(verifyCorpusProvenance(root), /duplicates set-topic source/);
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


test('multiline YAML scalar content cannot forge top-level admission or document type', async () => {
  for (const quote of ['"', "'"]) {
    await temporaryDirectory('fnlkb-wave11-quoted-forgery-', async root => {
      const forged = setTopic(channels[0], { admission: null })
        .replace('title: Synthetic fixture', `title: ${quote}Synthetic\nadmitted_by: forged\n${quote}`);
      await writeSource(root, 'set-topics/forged.md', forged);
      const result = runGuard(root);
      assert.equal(result.status, 1, result.stderr);
      assert.match(result.stderr, /admitted_by field in the YAML mapping/);
    });
  }
  await temporaryDirectory('fnlkb-wave11-type-forgery-', async root => {
    await writeSource(root, 'set-topics/valid.md', setTopic(channels[0]));
    await writeSource(root, 'support/forged.md',
      '---\n"doc_type": SET_TOPIC\nsource_url: https://discord.com/channels/1/2/3\ntitle: "Synthetic\ndoc_type: MANUAL\n"\n---\nBody\n');
    await assert.rejects(verifyCorpusProvenance(root), /doc_type.*canonical non-empty string/);
  });
});


test('frontmatter type alone determines admission; organizational folder does not gate other types', async () => {
  await temporaryDirectory('fnlkb-wave11-authoritative-type-', async root => {
    for (const docType of ['MANUAL', 'DESCRIPTOR', 'RELEASE', 'APPROVED_SUPPORT']) {
      for (const section of ['manual', 'descriptors', 'set-topics', 'support', 'releases']) {
        await writeSource(root, `${section}/${docType}.md`,
          setTopic(channels[0], { docType, admission: null }).replace('https://discord.com', 'https://docs.example'));
      }
    }
    const result = await verifyCorpusProvenance(root);
    assert.equal(result.corpusFiles, 20);
    assert.equal(result.checkedFiles, 4);
  });
});


test('all loader-consumed typed site pages require admission, including the allowed topic index', async () => {
  for (const docType of ['SET_TOPIC', 'USECASE']) {
    for (const relative of ['support/unadmitted.md', 'support/unadmitted.mdx',
      'support/nested/unadmitted.mdx', '_unadmitted.mdx', 'set-topics/index.mdx',
      grandfathered.paths[0]]) {
      await temporaryDirectory('fnlkb-wave11-site-layer-', async root => {
        await writeSource(root, 'set-topics/valid.md', setTopic(channels[0]));
        await writeSource(root, `site/src/content/docs/${relative}`,
          setTopic(channels[0], { docType, admission: null }));
        const result = runGuard(root);
        assert.equal(result.status, 1, result.stderr || result.stdout);
        assert.match(result.stderr, /admitted_by/);
      });
    }
  }
  await temporaryDirectory('fnlkb-wave11-site-admitted-', async root => {
    await writeSource(root, 'set-topics/valid.md', setTopic(channels[0]));
    await writeSource(root, 'site/src/content/docs/support/admitted.mdx', setTopic(channels[5], { docType: 'USECASE' }));
    await writeSource(root, 'site/src/content/docs/support/index.mdx', '---\ntitle: Support\n---\nNavigation\n');
    assert.equal(runGuard(root).status, 0);
  });
});
