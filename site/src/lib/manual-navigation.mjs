const NUMBERED_CHAPTER = /^(\d+)\.\s+(.+)$/;

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
  return manualChaptersFromHeadings(headings).map((chapter) => ({
    label: chapter.label,
    collapsed: true,
    items: [
      sidebarLink('Chapter overview', chapter.slug, manualPath),
      ...chapter.sections.map((section) => sidebarLink(section.label, section.slug, manualPath)),
    ],
  }));
}
