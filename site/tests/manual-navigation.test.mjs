import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import test from 'node:test';

import { createMarkdownProcessor } from '@astrojs/markdown-remark';

import {
  manualChaptersFromHeadings,
  manualSidebarFromHeadings,
  pageLevelPagination,
  sidebarWithManualFragments,
} from '../src/lib/manual-navigation.mjs';

const fixtureHeadings = [
  { depth: 1, slug: 'fluidninja-live-2-manual', text: 'FLUIDNINJA LIVE-2 MANUAL' },
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
      label: 'FLUIDNINJA LIVE-2 MANUAL',
      link: '/manual/ninjalive2-manual/',
      attrs: { 'data-manual-fragment': '' },
    },
    {
      label: 'Table of Contents',
      link: '/manual/ninjalive2-manual/',
      attrs: { 'data-manual-fragment': 'contents' },
    },
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

test('manual navigation fails closed when document-top landmarks drift', () => {
  assert.throws(
    () => manualSidebarFromHeadings(fixtureHeadings.filter((heading) => heading.depth !== 1)),
    /exactly one document title heading; found 0/,
  );
  assert.throws(
    () =>
      manualSidebarFromHeadings(
        fixtureHeadings.filter((heading) => heading.text !== 'Table of Contents'),
      ),
    /exactly one heading-derived Table of Contents anchor; found 0/,
  );
});

test('rendered sidebar links append fragments and do not falsely mark chapter 1 current', () => {
  const sidebar = sidebarWithManualFragments([
    {
      type: 'group',
      label: '1. Introduction',
      collapsed: true,
      entries: [
        {
          type: 'link',
          label: 'Chapter overview',
          href: '/fnl-docs-v2/manual/ninjalive2-manual/',
          isCurrent: true,
          attrs: { 'data-manual-fragment': '1-introduction' },
        },
      ],
    },
  ]);

  assert.equal(sidebar[0].entries[0].href, '/fnl-docs-v2/manual/ninjalive2-manual/#1-introduction');
  assert.equal(sidebar[0].entries[0].isCurrent, false);
  assert.deepEqual(sidebar[0].entries[0].attrs, {});
});

test('page pagination excludes synthetic in-document chapter entries', () => {
  const documentLink = { label: 'Parameters', href: '/parameters/', attrs: {} };
  const chapterLink = {
    label: 'Chapter overview',
    href: '/manual/ninjalive2-manual/',
    attrs: { 'data-manual-fragment': '2-assets' },
  };

  assert.deepEqual(pageLevelPagination({ prev: chapterLink, next: documentLink }), {
    prev: undefined,
    next: documentLink,
  });
  assert.deepEqual(pageLevelPagination({ prev: documentLink, next: chapterLink }), {
    prev: documentLink,
    next: undefined,
  });
});

test('the canonical manual currently yields the complete numbered chapter navigation', async () => {
  const source = await readFile(new URL('../../manual/ninjalive2_manual.md', import.meta.url), 'utf8');
  const renderer = await createMarkdownProcessor();
  const { headings } = (await renderer.render(source)).metadata;
  const chapters = manualChaptersFromHeadings(headings);

  assert.equal(chapters.length, 18);
  assert.deepEqual(manualSidebarFromHeadings(headings).slice(0, 2), [
    {
      label: 'FLUIDNINJA LIVE-2 MANUAL',
      link: '/manual/ninjalive2-manual/',
      attrs: { 'data-manual-fragment': '' },
    },
    {
      label: 'Table of Contents',
      link: '/manual/ninjalive2-manual/',
      attrs: { 'data-manual-fragment': 'table-of-contents' },
    },
  ]);
  assert.equal(chapters[0].label, '1. Introduction');
  assert.equal(chapters.at(-1).label, '18. Synonyms');
  assert.ok(chapters.every((chapter) => chapter.slug));
});
