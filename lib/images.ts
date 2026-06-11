/** Protocol-relative Shopify CDN URLs from manwomanhome.com HTML → https */
export function mwhImage(path: string): string {
  if (path.startsWith("//")) {
    return `https:${path}`;
  }
  if (path.startsWith("http")) {
    return path;
  }
  return `https://manwomanhome.com${path.startsWith("/") ? path : `/${path}`}`;
}
