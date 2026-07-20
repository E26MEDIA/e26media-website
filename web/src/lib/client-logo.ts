const LOGO_CACHE_BUST = "20260720b";

export function isLocalAsset(src: string) {
  return src.startsWith("/") && !src.startsWith("//");
}

export function withLogoCache(src: string) {
  if (!isLocalAsset(src)) return src;
  return `${src}?v=${LOGO_CACHE_BUST}`;
}

export function isLogoHeroImage(src: string) {
  return isLocalAsset(src) && (src.includes("/client-logos/") || src === "/logo.png");
}

/** True when the card should show brand logo as hero (not a website screenshot). */
export function projectShowsLogoHero(image: string, clientLogo: string) {
  return isLogoHeroImage(image) || image === clientLogo;
}
