import { readdir, readFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

import { parseFrontmatter } from 'astro/markdown';

export const STATIC_SOCIAL_DESCRIPTION =
  'Canonical FluidNinja LIVE 2 manual, parameter references, release notes, set topics, and approved support answers.';

const SOCIAL_DESCRIPTION_LEAD =
  'Canonical FluidNinja LIVE 2 documentation — manual, parameters, level content.';

function lexicalFileOrder(left, right) {
  return left < right ? -1 : left > right ? 1 : 0;
}

function releaseDate(rawFrontmatter, sourcePath) {
  const matches = [...rawFrontmatter.matchAll(/^date[ \t]*:[ \t]*(.*?)[ \t]*$/gm)];
  if (matches.length !== 1) {
    throw new Error(`${sourcePath}: expected exactly one top-level date field`);
  }

  let value = matches[0][1].trim();
  if (
    value.length >= 2 &&
    ((value.startsWith('"') && value.endsWith('"')) ||
      (value.startsWith("'") && value.endsWith("'")))
  ) {
    value = value.slice(1, -1);
  }
  const match = value.match(/^(\d{4})-(\d{2})-(\d{2})$/);
  if (!match) {
    throw new Error(`${sourcePath}: date must use YYYY-MM-DD`);
  }

  const year = Number.parseInt(match[1], 10);
  const month = Number.parseInt(match[2], 10);
  const day = Number.parseInt(match[3], 10);
  const date = new Date(Date.UTC(year, month - 1, day));
  if (
    date.getUTCFullYear() !== year ||
    date.getUTCMonth() !== month - 1 ||
    date.getUTCDate() !== day
  ) {
    throw new Error(`${sourcePath}: date must be a real calendar day`);
  }
  return date;
}

function requiredDisplayString(value, field, sourcePath) {
  if (typeof value !== 'string') {
    throw new Error(`${sourcePath}: ${field} must be a string`);
  }
  const display = value.trim();
  if (!display) throw new Error(`${sourcePath}: ${field} must be present`);
  return display;
}

function unrealEngineVersion(value, sourcePath) {
  const display = requiredDisplayString(value, 'ue_versions entry', sourcePath);
  const match = display.match(/^(\d+)\.(\d+)$/);
  if (!match) {
    throw new Error(`${sourcePath}: unsupported Unreal Engine version ${JSON.stringify(display)}`);
  }
  return {
    display,
    major: Number.parseInt(match[1], 10),
    minor: Number.parseInt(match[2], 10),
  };
}

export function formatUnrealEngineVersions(values, sourcePath = 'release') {
  if (!Array.isArray(values) || values.length === 0) {
    throw new Error(`${sourcePath}: ue_versions must be a non-empty list`);
  }

  const ordered = values
    .map((value) => unrealEngineVersion(value, sourcePath))
    .sort((left, right) => left.major - right.major || left.minor - right.minor)
    .filter(
      (value, index, all) =>
        index === 0 || value.major !== all[index - 1].major || value.minor !== all[index - 1].minor,
    );

  const runs = [];
  for (const value of ordered) {
    const run = runs.at(-1);
    if (
      run &&
      run.at(-1).major === value.major &&
      run.at(-1).minor + 1 === value.minor
    ) {
      run.push(value);
    } else {
      runs.push([value]);
    }
  }

  return runs
    .map((run) =>
      run.length === 1 ? run[0].display : `${run[0].display}–${run.at(-1).display}`,
    )
    .join(', ');
}

export function composeSocialDescription(release) {
  const version = requiredDisplayString(
    release?.version,
    'version',
    release?.sourcePath ?? 'release',
  );
  const ueVersions = formatUnrealEngineVersions(
    release?.ueVersions,
    release?.sourcePath ?? 'release',
  );
  return `${SOCIAL_DESCRIPTION_LEAD} Current release ${version} · Unreal Engine ${ueVersions}.`;
}

export function selectLatestRelease(releases) {
  // readReleaseRegistry supplies ascending lexical filenames. Replacing on an
  // equal date makes the later filename the deterministic file-order winner.
  return releases.reduce(
    (latest, candidate) =>
      !latest || candidate.date.getTime() >= latest.date.getTime() ? candidate : latest,
    undefined,
  );
}

export async function readReleaseRegistry(releasesDirectory) {
  const directory =
    releasesDirectory instanceof URL
      ? fileURLToPath(releasesDirectory)
      : path.resolve(releasesDirectory);
  const entries = await readdir(directory, { withFileTypes: true });
  const fileNames = entries
    .filter(
      (entry) =>
        entry.isFile() && !entry.name.startsWith('_') && entry.name.toLowerCase().endsWith('.md'),
    )
    .map((entry) => entry.name)
    .sort(lexicalFileOrder);

  const releases = [];
  for (const fileName of fileNames) {
    const sourcePath = path.join(directory, fileName);
    let frontmatter;
    let rawFrontmatter;
    try {
      ({ frontmatter, rawFrontmatter } = parseFrontmatter(await readFile(sourcePath, 'utf8')));
    } catch (error) {
      throw new Error(`${sourcePath}: could not parse release frontmatter: ${error.message}`);
    }

    if (frontmatter.doc_type !== 'RELEASE') {
      throw new Error(`${sourcePath}: doc_type must be RELEASE`);
    }
    const ueVersions = frontmatter.ue_versions;
    formatUnrealEngineVersions(ueVersions, sourcePath);
    releases.push({
      date: releaseDate(rawFrontmatter, sourcePath),
      fileName,
      sourcePath,
      ueVersions,
      version: requiredDisplayString(frontmatter.version, 'version', sourcePath),
    });
  }
  return releases;
}

export async function socialDescriptionFromRegistry(releasesDirectory) {
  const latest = selectLatestRelease(await readReleaseRegistry(releasesDirectory));
  return latest ? composeSocialDescription(latest) : STATIC_SOCIAL_DESCRIPTION;
}
