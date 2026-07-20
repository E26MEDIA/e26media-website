import { SITE } from "@/data/site";

export function OrganizationJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE.legalName,
    url: SITE.url,
    logo: `${SITE.url}/logo.png`,
    email: SITE.contact.email,
    telephone: SITE.contact.phoneRaw,
    address: {
      "@type": "PostalAddress",
      streetAddress: SITE.contact.address,
      addressLocality: "Mangalore",
      addressRegion: "Karnataka",
      addressCountry: "IN",
    },
    sameAs: SITE.social.map((s) => s.href),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function LocalBusinessJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: SITE.contact.placeName,
    image: `${SITE.url}/logo.png`,
    url: SITE.url,
    telephone: SITE.contact.phoneRaw,
    email: SITE.contact.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: SITE.contact.address,
      addressLocality: "Mangalore",
      addressRegion: "Karnataka",
      postalCode: "575002",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 12.8680171,
      longitude: 74.8579696,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        opens: "09:30",
        closes: "18:30",
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function FaqJsonLd({ faqs }: { faqs: { question: string; answer: string }[] }) {
  const data = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function BreadcrumbJsonLd({ items }: { items: { name: string; path: string }[] }) {
  const data = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${SITE.url}${item.path}`,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function ServiceJsonLd({
  name,
  description,
  path,
  city,
  serviceType,
}: {
  name: string;
  description: string;
  path: string;
  city: string;
  serviceType: string;
}) {
  const data = {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    serviceType,
    url: `${SITE.url}${path}`,
    provider: {
      "@type": "Organization",
      name: SITE.legalName,
      url: SITE.url,
      telephone: SITE.contact.phoneRaw,
      address: {
        "@type": "PostalAddress",
        streetAddress: SITE.contact.address,
        addressLocality: "Mangalore",
        addressRegion: "Karnataka",
        postalCode: "575002",
        addressCountry: "IN",
      },
    },
    areaServed: {
      "@type": "City",
      name: city,
      containedInPlace: {
        "@type": "State",
        name: "Karnataka",
      },
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function ArticleJsonLd({
  title,
  description,
  path,
  datePublished,
  author = "E26 Media Team",
}: {
  title: string;
  description: string;
  path: string;
  datePublished: string;
  author?: string;
}) {
  const data = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    author: { "@type": "Organization", name: author, url: SITE.url },
    publisher: {
      "@type": "Organization",
      name: SITE.legalName,
      logo: { "@type": "ImageObject", url: `${SITE.url}/logo.png` },
    },
    datePublished,
    dateModified: datePublished,
    mainEntityOfPage: `${SITE.url}${path}`,
    image: `${SITE.url}/logo.png`,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
