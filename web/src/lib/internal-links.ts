import { getLocationsByService } from "@/data/locations";
import { BLOG_POSTS } from "@/data/knowledge";

export type InternalSeoLink = {
  label: string;
  href: string;
  description?: string;
};

const GUIDE_LINKS: InternalSeoLink[] = [
  {
    label: "Website cost in Karnataka 2025",
    href: "/knowledge/guides/website-development-cost-karnataka-2025",
    description: "Pricing guide",
  },
  {
    label: "Local SEO for Mangalore",
    href: "/knowledge/guides/local-seo-mangalore-businesses",
    description: "Rank locally",
  },
  {
    label: "Website cost estimator",
    href: "/tools/website-cost-estimator",
    description: "Free tool",
  },
];

export function getServiceSeoLinks(categorySlug: string): InternalSeoLink[] {
  const locations = getLocationsByService(categorySlug).slice(0, 4).map((loc) => ({
    label: loc.title,
    href: `/service-areas/${loc.slug}`,
    description: loc.city,
  }));

  return [
    { label: "Transparent pricing", href: "/pricing", description: "Budget bands" },
    ...locations,
    ...GUIDE_LINKS.slice(0, 2),
    { label: "All service areas", href: "/service-areas", description: "Karnataka cities" },
  ];
}

export function getLocationSeoLinks(serviceSlug: string, city: string): InternalSeoLink[] {
  const serviceHref =
    serviceSlug === "seo" ? "/services/digital-marketing/seo" : `/services/${serviceSlug}`;
  const relatedGuides = BLOG_POSTS.filter((p) => {
    const cat = p.category.toLowerCase();
    if (serviceSlug.includes("website")) return cat.includes("website");
    if (serviceSlug.includes("software")) return cat.includes("software");
    if (serviceSlug.includes("marketing") || serviceSlug === "seo") return cat.includes("seo") || cat.includes("marketing");
    if (serviceSlug.includes("mobile")) return cat.includes("mobile");
    if (serviceSlug.includes("ai")) return cat.includes("ai");
    return false;
  })
    .slice(0, 2)
    .map((p) => ({
      label: p.title,
      href: `/knowledge/guides/${p.slug}`,
      description: "Guide",
    }));

  return [
    { label: `All ${city} services`, href: "/service-areas", description: "City pages" },
    { label: "Service overview", href: serviceHref, description: "Full capabilities" },
    { label: "Pricing", href: "/pricing", description: "Investment bands" },
    { label: "Case studies", href: "/case-studies", description: "Client outcomes" },
    ...relatedGuides,
  ];
}

export function getKnowledgeSeoLinks(): InternalSeoLink[] {
  return [
    { label: "Website development services", href: "/services/website-development" },
    { label: "SEO services Mangalore", href: "/services/digital-marketing/seo" },
    { label: "Software development", href: "/services/software-development" },
    { label: "Pricing", href: "/pricing" },
    { label: "Website cost estimator", href: "/tools/website-cost-estimator" },
    { label: "Service areas we serve", href: "/service-areas" },
  ];
}
