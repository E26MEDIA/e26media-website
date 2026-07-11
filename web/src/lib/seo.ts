import type { Metadata } from "next";
import { SITE } from "@/data/site";

type PageSEO = {
  title: string;
  description: string;
  path?: string;
  image?: string;
  noIndex?: boolean;
};

export const SEO_TITLE_MAX = 65;
const BRAND_SUFFIX = ` | ${SITE.name}`;

/** Strip existing brand suffixes and enforce ≤65 chars for SERP display. */
export function formatSeoTitle(title: string): string {
  let base = title
    .replace(/\s*[|–—-]\s*E26 Media(?:\s+Knowledge Center)?[^|—–-]*$/i, "")
    .replace(/\s*[|–—-]\s*E26 Media\s+Mangalore[^|—–-]*$/i, "")
    .trim();

  const withSuffix = `${base}${BRAND_SUFFIX}`;
  if (withSuffix.length <= SEO_TITLE_MAX) return withSuffix;

  const maxBase = SEO_TITLE_MAX - BRAND_SUFFIX.length;
  if (base.length > maxBase && base.includes(":")) {
    const beforeColon = base.split(":")[0]!.trim();
    if (beforeColon.length >= 20 && `${beforeColon}${BRAND_SUFFIX}`.length <= SEO_TITLE_MAX) {
      return `${beforeColon}${BRAND_SUFFIX}`;
    }
  }

  let trimmed = base.slice(0, maxBase);
  const lastSpace = trimmed.lastIndexOf(" ");
  if (lastSpace > maxBase * 0.55) trimmed = trimmed.slice(0, lastSpace);

  return `${trimmed.trim()}${BRAND_SUFFIX}`;
}

export function buildMetadata({
  title,
  description,
  path = "",
  image,
  noIndex,
}: PageSEO): Metadata {
  const formattedTitle = formatSeoTitle(title);
  const url = `${SITE.url}${path}`;
  const ogImage = image ?? "/logo.png";

  return {
    title: formattedTitle,
    description,
    metadataBase: new URL(SITE.url),
    alternates: { canonical: url },
    robots: noIndex ? { index: false, follow: false } : { index: true, follow: true },
    openGraph: {
      title: formattedTitle,
      description,
      url,
      siteName: SITE.name,
      type: "website",
      locale: "en_IN",
      images: [{ url: ogImage, width: 1200, height: 630, alt: formattedTitle }],
    },
    twitter: {
      card: "summary_large_image",
      title: formattedTitle,
      description,
      images: [ogImage],
    },
  };
}
