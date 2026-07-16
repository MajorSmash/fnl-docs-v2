export function sitePath(path = '') {
  const base = import.meta.env.BASE_URL || '/';
  return `${base}${String(path).replace(/^\/+/, '')}`.replace(/\/{2,}/g, '/');
}
