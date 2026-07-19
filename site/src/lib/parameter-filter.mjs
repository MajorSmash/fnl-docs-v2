export function parameterSearchText(name, description) {
  return `${String(name ?? '')} ${String(description ?? '')}`.toLocaleLowerCase('en');
}

export function matchesParameterSearch(searchText, query) {
  const normalizedQuery = String(query ?? '').trim().toLocaleLowerCase('en');
  return !normalizedQuery || String(searchText ?? '').includes(normalizedQuery);
}
