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
export const SEO_TITLE_MIN = 30;
const BRAND_SUFFIX = ` | ${SITE.name}`;

const TITLE_EXPANDERS = [
  " for Karnataka Businesses",
  " — Mangalore & Karnataka",
  " — Expert Guides",
];

function applyTitleLengthBounds(base: string): string {
  let result = `${base}${BRAND_SUFFIX}`;

  if (result.length > SEO_TITLE_MAX) {
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
    result = `${trimmed.trim()}${BRAND_SUFFIX}`;
  }

  if (result.length < SEO_TITLE_MIN) {
    for (const expander of TITLE_EXPANDERS) {
      const expanded = `${base}${expander}${BRAND_SUFFIX}`;
      if (expanded.length >= SEO_TITLE_MIN && expanded.length <= SEO_TITLE_MAX) {
        return expanded;
      }
    }
  }

  return result;
}

/** Strip existing brand suffixes and enforce 30–65 chars for SERP display. */
export function formatSeoTitle(title: string): string {
  const base = title
    .replace(/\s*[|–—-]\s*E26 Media(?:\s+Knowledge Center)?[^|—–-]*$/i, "")
    .replace(/\s*[|–—-]\s*E26 Media\s+Mangalore[^|—–-]*$/i, "")
    .trim();

  return applyTitleLengthBounds(base);
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
    icons: {
      icon: [
        { url: "/favicon.png", type: "image/png" },
        { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      ],
      apple: [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }],
    },
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
