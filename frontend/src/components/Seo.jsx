import React from "react";
import { Helmet } from "react-helmet-async";
import { SITE, SEO } from "../data/site";

// Reusable SEO head manager. Pass a SEO key or explicit title/description.
export function Seo({ title, description, path = "", image }) {
  const d = SEO.default;
  const finalTitle = title || d.title;
  const finalDesc = description || d.description;
  const finalImage = image || d.image;
  const canonical = `${SITE.url}${path}`;

  return (
    <Helmet prioritizeSeoTags>
      <title>{finalTitle}</title>
      <meta name="description" content={finalDesc} />
      <meta name="keywords" content={d.keywords} />
      <link rel="canonical" href={canonical} />
      <meta name="robots" content="index, follow" />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={SITE.name} />
      <meta property="og:title" content={finalTitle} />
      <meta property="og:description" content={finalDesc} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={finalImage} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={finalTitle} />
      <meta name="twitter:description" content={finalDesc} />
      <meta name="twitter:image" content={finalImage} />
    </Helmet>
  );
}
