import assert from 'node:assert/strict';
import { mkdtemp, rm, writeFile } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import path from 'node:path';
import { pathToFileURL } from 'node:url';
import test from 'node:test';

import {
  STATIC_SOCIAL_DESCRIPTION,
  formatUnrealEngineVersions,
  readReleaseRegistry,
  selectLatestRelease,
  socialDescriptionFromRegistry,
} from '../src/lib/release-social-description.mjs';
import { decodeHtmlAttribute, metaContent } from '../scripts/verify-social-metadata.mjs';

async function withRegistry(run) {
  const directory = await mkdtemp(path.join(tmpdir(), 'fnl-release-social-'));
  try {
    return await run(directory);
  } finally {
    await rm(directory, { force: true, recursive: true });
  }
}

async function writeRelease(directory, fileName, { date, ueVersions, version }) {
  await writeFile(
    path.join(directory, fileName),
    `---\ndoc_type: RELEASE\nversion: ${JSON.stringify(version)}\ndate: ${date}\nue_versions: ${JSON.stringify(ueVersions)}\n---\n\n## Added\n`,
  );
}

test('empty registry ignores underscore templates and preserves the static fallback verbatim', async () => {
  await withRegistry(async (directory) => {
    await writeFile(
      path.join(directory, '_TEMPLATE.md'),
      '---\ndoc_type: RELEASE\nversion: "0.0.0-EXAMPLE"\ndate: 2099-01-01\nue_versions: ["5.x"]\n---\n',
    );
    assert.deepEqual(await readReleaseRegistry(directory), []);
    assert.equal(
      await socialDescriptionFromRegistry(pathToFileURL(`${directory}${path.sep}`)),
      STATIC_SOCIAL_DESCRIPTION,
    );
  });
});

test('one release supplies the version and collapses a contiguous Unreal Engine range', async () => {
  await withRegistry(async (directory) => {
    await writeRelease(directory, '2.0.0.56.md', {
      date: '2026-08-01',
      ueVersions: ['5.8', '5.6', '5.7'],
      version: '2.0.0.56',
    });
    assert.equal(
      await socialDescriptionFromRegistry(directory),
      'Canonical FluidNinja LIVE 2 documentation — manual, parameters, level content. Current release 2.0.0.56 · Unreal Engine 5.6–5.8.',
    );
  });
});

test('multiple releases select the latest date and use later lexical filename order for ties', async () => {
  await withRegistry(async (directory) => {
    await writeRelease(directory, 'z-old.md', {
      date: '2026-07-31',
      ueVersions: ['5.5'],
      version: 'old',
    });
    await writeRelease(directory, 'a-latest.md', {
      date: '2026-08-02',
      ueVersions: ['5.6'],
      version: 'tie-a',
    });
    await writeRelease(directory, 'b-latest.md', {
      date: '2026-08-02',
      ueVersions: ['5.6', '5.8'],
      version: 'tie-b',
    });
    await writeRelease(directory, '_ignored-future.md', {
      date: '2099-01-01',
      ueVersions: ['9.9'],
      version: 'ignored',
    });

    const releases = await readReleaseRegistry(directory);
    assert.deepEqual(releases.map((release) => release.fileName), [
      'a-latest.md',
      'b-latest.md',
      'z-old.md',
    ]);
    assert.equal(selectLatestRelease(releases).version, 'tie-b');
    assert.equal(
      await socialDescriptionFromRegistry(directory),
      'Canonical FluidNinja LIVE 2 documentation — manual, parameters, level content. Current release tie-b · Unreal Engine 5.6, 5.8.',
    );
  });
});

test('Unreal Engine formatting collapses each contiguous run and leaves gaps listed', () => {
  assert.equal(
    formatUnrealEngineVersions(['5.9', '5.7', '5.4', '5.5', '5.7', '6.0']),
    '5.4–5.5, 5.7, 5.9, 6.0',
  );
  assert.throws(() => formatUnrealEngineVersions(['5.x']), /unsupported Unreal Engine version/);
});

test('release dates must be deterministic ISO calendar dates', async () => {
  for (const [date, message] of [
    ['null', /date must use YYYY-MM-DD/],
    ['2026-02-31', /date must be a real calendar day/],
    ['08/01/2026', /date must use YYYY-MM-DD/],
    ['2026-08-01T12:00:00Z', /date must use YYYY-MM-DD/],
  ]) {
    await withRegistry(async (directory) => {
      await writeRelease(directory, 'invalid-date.md', {
        date,
        ueVersions: ['5.8'],
        version: '2.0.0.56',
      });
      await assert.rejects(readReleaseRegistry(directory), message);
    });
  }
});

test('numeric YAML display values are rejected before they can lose formatting', async () => {
  await withRegistry(async (directory) => {
    await writeFile(
      path.join(directory, 'numeric-version.md'),
      '---\ndoc_type: RELEASE\nversion: 2.0\ndate: 2026-08-01\nue_versions: ["5.10"]\n---\n',
    );
    await assert.rejects(readReleaseRegistry(directory), /version must be a string/);
  });

  await withRegistry(async (directory) => {
    await writeFile(
      path.join(directory, 'numeric-ue.md'),
      '---\ndoc_type: RELEASE\nversion: "2.0"\ndate: 2026-08-01\nue_versions: [5.10]\n---\n',
    );
    await assert.rejects(readReleaseRegistry(directory), /ue_versions entry must be a string/);
  });
});

test('social verification compares HTML-escaped opaque display versions semantically', () => {
  assert.equal(
    decodeHtmlAttribute('LIVE 2 &amp; Beyond &quot;Plus&#x2013;Plus&quot;'),
    'LIVE 2 & Beyond "Plus–Plus"',
  );
  assert.equal(
    metaContent(
      '<meta name="description" content="Developer\'s LIVE 2 &amp; Beyond">',
      'name',
      'description',
    ),
    "Developer's LIVE 2 & Beyond",
  );
});

test('non-semver display versions remain opaque registry strings', async () => {
  await withRegistry(async (directory) => {
    await writeRelease(directory, 'opaque-version.md', {
      date: '2026-08-01',
      ueVersions: ['5.8'],
      version: 'LIVE 2 & Beyond "Preview"',
    });
    assert.match(
      await socialDescriptionFromRegistry(directory),
      /Current release LIVE 2 & Beyond "Preview" · Unreal Engine 5\.8\.$/,
    );
  });
});

test('every real release is validated, including entries older than the selected latest', async () => {
  await withRegistry(async (directory) => {
    await writeFile(
      path.join(directory, 'a-invalid-old.md'),
      '---\ndoc_type: RELEASE\nversion: "old"\ndate: 2026-07-01\nue_versions: []\n---\n',
    );
    await writeRelease(directory, 'b-valid-latest.md', {
      date: '2026-08-01',
      ueVersions: ['5.8'],
      version: 'latest',
    });
    await assert.rejects(readReleaseRegistry(directory), /ue_versions must be a non-empty list/);
  });
});
