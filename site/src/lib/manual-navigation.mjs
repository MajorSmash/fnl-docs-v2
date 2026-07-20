const NUMBERED_CHAPTER = /^(\d+)\.\s+(.+)$/;
const TABLE_OF_CONTENTS = /^table of contents$/i;

function sidebarLink(label, fragment, manualPath) {
  return {
    label,
    link: manualPath,
    attrs: { 'data-manual-fragment': fragment },
  };
}

export function manualChaptersFromHeadings(headings) {
  const chapters = [];
  let currentChapter;

  for (const heading of headings) {
    const text = String(heading.text ?? '').trim();
    const chapterMatch = heading.depth === 2 ? text.match(NUMBERED_CHAPTER) : undefined;

    if (chapterMatch) {
      currentChapter = {
        number: Number(chapterMatch[1]),
        title: chapterMatch[2],
        label: text,
        slug: heading.slug,
        sections: [],
      };
      chapters.push(currentChapter);
      continue;
    }

    if (heading.depth === 3 && currentChapter) {
      currentChapter.sections.push({ label: text, slug: heading.slug });
    }
  }

  if (chapters.length === 0) {
    throw new Error('Manual navigation requires at least one numbered level-two chapter heading.');
  }

  const chapterNumbers = new Set();
  const fragments = new Set();
  for (const chapter of chapters) {
    if (chapterNumbers.has(chapter.number)) {
      throw new Error(`Manual navigation found duplicate chapter number ${chapter.number}.`);
    }
    chapterNumbers.add(chapter.number);

    for (const heading of [chapter, ...chapter.sections]) {
      if (!heading.slug || fragments.has(heading.slug)) {
        throw new Error(`Manual navigation found a missing or duplicate heading slug: ${heading.slug}.`);
      }
      fragments.add(heading.slug);
    }
  }

  return chapters;
}

export function manualSidebarFromHeadings(
  headings,
  manualPath = '/manual/ninjalive2-manual/',
) {
  const documentTitles = headings.filter((heading) => heading.depth === 1);
  const tablesOfContents = headings.filter(
    (heading) => heading.depth === 2 && TABLE_OF_CONTENTS.test(String(heading.text ?? '').trim()),
  );
  if (documentTitles.length !== 1) {
    throw new Error(
      `Manual navigation requires exactly one document title heading; found ${documentTitles.length}.`,
    );
  }
  if (tablesOfContents.length !== 1 || !tablesOfContents[0].slug) {
    throw new Error(
      `Manual navigation requires exactly one heading-derived Table of Contents anchor; found ${tablesOfContents.length}.`,
    );
  }

  return [
    sidebarLink(String(documentTitles[0].text).trim(), '', manualPath),
    sidebarLink(String(tablesOfContents[0].text).trim(), tablesOfContents[0].slug, manualPath),
    ...manualChaptersFromHeadings(headings).map((chapter) => ({
      label: chapter.label,
      collapsed: true,
      items: [
        sidebarLink('Chapter overview', chapter.slug, manualPath),
        ...chapter.sections.map((section) => sidebarLink(section.label, section.slug, manualPath)),
      ],
    })),
  ];
}

export function sidebarWithManualFragments(entries) {
  return entries.map((entry) => {
    if (entry.type === 'group') {
      return { ...entry, entries: sidebarWithManualFragments(entry.entries) };
    }

    const attrs = { ...entry.attrs };
    const fragment = attrs['data-manual-fragment'];
    delete attrs['data-manual-fragment'];
    return {
      ...entry,
      attrs,
      href:
        typeof fragment === 'string' && fragment.length > 0
          ? `${entry.href}#${fragment}`
          : entry.href,
      // Starlight matches current pages by pathname. Every chapter targets the
      // same canonical document, so its first match would otherwise open and
      // mark chapter 1 even when another fragment was requested.
      isCurrent: typeof fragment === 'string' ? false : entry.isCurrent,
    };
  });
}

export function pageLevelPagination(pagination) {
  const isManualFragment = (entry) =>
    typeof entry?.attrs?.['data-manual-fragment'] === 'string';

  // These entries navigate within one canonical page, not between documents.
  // Excluding them prevents Starlight's page pagination from emitting bare,
  // same-page links after it strips the fragment-bearing sidebar attributes.
  return {
    prev: isManualFragment(pagination.prev) ? undefined : pagination.prev,
    next: isManualFragment(pagination.next) ? undefined : pagination.next,
  };
}
