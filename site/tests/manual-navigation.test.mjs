import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import test from 'node:test';

import { createMarkdownProcessor } from '@astrojs/markdown-remark';

import {
  manualChaptersFromHeadings,
  manualSidebarFromHeadings,
} from '../src/lib/manual-navigation.mjs';
import remarkDocumentHeadings from '../src/plugins/remark-document-headings.mjs';

const fixtureHeadings = [
  { depth: 2, slug: 'contents', text: 'Table of Contents' },
  { depth: 2, slug: '1-introduction', text: '1. Introduction' },
  { depth: 3, slug: '11-first-steps', text: '1.1 First Steps' },
  { depth: 4, slug: 'detail', text: 'Detail' },
  { depth: 2, slug: '2-assets', text: '2. Assets' },
];

test('manual navigation exposes numbered chapters as collapsed top-level groups', () => {
  const sidebar = manualSidebarFromHeadings(fixtureHeadings);

  assert.deepEqual(sidebar, [
    {
      label: '1. Introduction',
      collapsed: true,
      items: [
        {
          label: 'Chapter overview',
          link: '/manual/ninjalive2-manual/',
          attrs: { 'data-manual-fragment': '1-introduction' },
        },
        {
          label: '1.1 First Steps',
          link: '/manual/ninjalive2-manual/',
          attrs: { 'data-manual-fragment': '11-first-steps' },
        },
      ],
    },
    {
      label: '2. Assets',
      collapsed: true,
      items: [
        {
          label: 'Chapter overview',
          link: '/manual/ninjalive2-manual/',
          attrs: { 'data-manual-fragment': '2-assets' },
        },
      ],
    },
  ]);
});

test('manual navigation fails closed on duplicate chapter numbers or fragments', () => {
  assert.throws(
    () =>
      manualChaptersFromHeadings([
        ...fixtureHeadings,
        { depth: 2, slug: 'duplicate-number', text: '2. Duplicate' },
      ]),
    /duplicate chapter number 2/,
  );
  assert.throws(
    () =>
      manualChaptersFromHeadings([
        ...fixtureHeadings,
        { depth: 3, slug: '2-assets', text: '2.1 Duplicate Fragment' },
      ]),
    /duplicate heading slug: 2-assets/,
  );
});

test('the canonical manual currently yields the complete numbered chapter navigation', async () => {
  const source = await readFile(new URL('../../manual/ninjalive2_manual.md', import.meta.url), 'utf8');
  const renderer = await createMarkdownProcessor({
    remarkPlugins: [remarkDocumentHeadings],
  });
  const { headings } = (await renderer.render(source)).metadata;
  const chapters = manualChaptersFromHeadings(headings);

  assert.equal(chapters.length, 18);
  assert.equal(chapters[0].label, '1. Introduction');
  assert.equal(chapters.at(-1).label, '18. Synonyms');
  assert.ok(chapters.every((chapter) => chapter.slug));
});
