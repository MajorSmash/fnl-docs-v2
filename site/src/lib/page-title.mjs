export function hasSourceDocumentTitle(data, headings) {
  return Boolean(
    data?.doc_type &&
      Array.isArray(headings) &&
      headings.some((heading) => heading?.depth === 1),
  );
}
