// @ts-nocheck -- helper; import.meta.env types come from the Vite client typings
// © André Macedo da Rosa — portfólio original. Clones devem creditar o autor.
/**
 * Resolves a file that lives in the site's public folder against the deploy base path,
 * so download links keep working both at the site root and under a subfolder
 * (for example GitHub Pages: https://user.github.io/repo/).
 */
export function publicUrl(path: string): string {
  const base = (import.meta as any).env?.BASE_URL || '/';
  const clean = String(path).replace(/^\/+/, '');
  return base.endsWith('/') ? `${base}${clean}` : `${base}/${clean}`;
}
