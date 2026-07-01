import type { Metadata } from "next";
import { SITE } from "@/data/site";

type PageSEO = {
  title: string;
  description: string;
  path?: string;
  image?: string;
  noIndex?: boolean;
};

export function buildMetadata({
  title,
  description,
  path = "",
  image,
  noIndex,
}: PageSEO): Metadata {
  const url = `${SITE.url}${path}`;
  const ogImage = image ?? "/logo.png";

  return {
    title,
    description,
    metadataBase: new URL(SITE.url),
    alternates: { canonical: url },
    robots: noIndex ? { index: false, follow: false } : { index: true, follow: true },
    openGraph: {
      title,
      description,
      url,
      siteName: SITE.name,
      type: "website",
      locale: "en_IN",
      images: [{ url: ogImage, width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}
