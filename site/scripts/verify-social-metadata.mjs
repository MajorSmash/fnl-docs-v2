import assert from 'node:assert/strict';
import { createHash } from 'node:crypto';
import { access, readFile } from 'node:fs/promises';
import path from 'node:path';
import process from 'node:process';
import { fileURLToPath } from 'node:url';

import { socialDescriptionFromRegistry } from '../src/lib/release-social-description.mjs';

function normalizeBase(value) {
  const trimmed = String(value || '').trim().replace(/^\/+|\/+$/g, '');
  return trimmed ? `/${trimmed}` : '';
}

function attribute(tag, name) {
  return tag.match(new RegExp(`\\b${name}\\s*=\\s*(["'])(.*?)\\1`, 'i'))?.[2];
}

export function decodeHtmlAttribute(value) {
  return value.replace(
    /&(?:#(\d+)|#x([\da-f]+)|amp|quot|apos|lt|gt);/gi,
    (entity, decimal, hexadecimal) => {
      if (decimal) return String.fromCodePoint(Number.parseInt(decimal, 10));
      if (hexadecimal) return String.fromCodePoint(Number.parseInt(hexadecimal, 16));
      return {
        '&amp;': '&',
        '&apos;': "'",
        '&gt;': '>',
        '&lt;': '<',
        '&quot;': '"',
      }[entity.toLowerCase()];
    },
  );
}

export function metaContent(html, identityAttribute, identityValue) {
  for (const match of html.matchAll(/<meta\b[^>]*>/gi)) {
    if (attribute(match[0], identityAttribute)?.toLowerCase() === identityValue) {
      const content = attribute(match[0], 'content');
      return content === undefined ? undefined : decodeHtmlAttribute(content);
    }
  }
  return undefined;
}

async function pngDimensions(file) {
  const png = await readFile(file);
  assert.equal(png.subarray(1, 4).toString('ascii'), 'PNG', `${file}: expected PNG data`);
  return { width: png.readUInt32BE(16), height: png.readUInt32BE(20) };
}

export async function verifySocialMetadata({
  basePath,
  distDirectory,
  releasesDirectory,
  siteUrl,
}) {
  const base = normalizeBase(basePath);
  const expectedDescription = await socialDescriptionFromRegistry(releasesDirectory);
  const manualPage = path.join(distDirectory, 'manual', 'ninjalive2-manual', 'index.html');
  const imageFile = path.join(distDirectory, 'og.png');
  // Must mirror astro.config.mjs: the card URL carries a content hash so
  // social media proxies re-fetch changed artwork. Deriving it from the SAME
  // bytes here means a drift between config and gate fails the build rather
  // than shipping a silently stale card.
  const expectedImageVersion = createHash('sha256')
    .update(await readFile(imageFile))
    .digest('hex')
    .slice(0, 8);
  const expectedImage = new URL(`${base}/og.png?v=${expectedImageVersion}`, siteUrl).href;
  const html = await readFile(manualPage, 'utf8');

  assert.equal(metaContent(html, 'name', 'description'), expectedDescription);
  assert.equal(metaContent(html, 'property', 'og:description'), expectedDescription);
  assert.equal(metaContent(html, 'name', 'twitter:description'), expectedDescription);
  assert.equal(metaContent(html, 'property', 'og:image'), expectedImage);
  assert.equal(metaContent(html, 'name', 'twitter:image'), expectedImage);
  await access(imageFile);
  assert.deepEqual(await pngDimensions(imageFile), { width: 1200, height: 630 });

  return { expectedDescription, expectedImage, imageFile, manualPage };
}

async function main() {
  const repositoryRoot = fileURLToPath(new URL('../../', import.meta.url));
  const result = await verifySocialMetadata({
    basePath: process.env.BASE_PATH ?? '/fnl-docs-v2',
    distDirectory: path.resolve(process.argv[2] ?? 'dist'),
    releasesDirectory: path.join(repositoryRoot, 'releases'),
    siteUrl: process.env.SITE_URL ?? 'https://example.invalid',
  });
  console.log(`PASS social metadata: ${result.expectedDescription}`);
  console.log(`PASS social artwork: ${result.expectedImage} -> ${result.imageFile}`);
}

const invokedPath = process.argv[1] ? path.resolve(process.argv[1]) : '';
if (invokedPath === fileURLToPath(import.meta.url)) {
  main().catch((error) => {
    console.error(error instanceof Error ? error.message : error);
    process.exitCode = 1;
  });
}
