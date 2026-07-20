import type { MetadataRoute } from "next";
import { SITE } from "@/data/site";
import { getAllServices } from "@/data/services";
import { PORTFOLIO } from "@/data/portfolio";
import { INDUSTRIES } from "@/data/industries";
import { LOCATIONS } from "@/data/locations";
import { CITY_SERVICE_PAGES } from "@/data/city-services";
import { BLOG_POSTS, KNOWLEDGE_CATEGORIES } from "@/data/knowledge";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = SITE.url;
  const staticPages = [
    "",
    "/about",
    "/services",
    "/portfolio",
    "/case-studies",
    "/contact",
    "/industries",
    "/knowledge",
    "/knowledge/guides",
    "/knowledge/downloads",
    "/pricing",
    "/media",
    "/service-areas",
    "/tools/website-cost-estimator",
    "/careers",
  ].map((path) => ({
    url: `${base}${path}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: path === "" ? 1 : path === "/knowledge" ? 0.85 : 0.8,
  }));

  const knowledgeTopics = KNOWLEDGE_CATEGORIES.filter((c) => c.type === "topic").map((c) => ({
    url: `${base}/knowledge/${c.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.75,
  }));

  const services = getAllServices().map(({ category, item }) => ({
    url: `${base}/services/${category.slug}/${item.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const categories = getAllServices()
    .map(({ category }) => category.slug)
    .filter((v, i, a) => a.indexOf(v) === i)
    .map((slug) => ({
      url: `${base}/services/${slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    }));

  const portfolio = PORTFOLIO.map((p) => ({
    url: `${base}/portfolio/${p.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  const industries = INDUSTRIES.map((i) => ({
    url: `${base}/industries/${i.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const locations = LOCATIONS.map((l) => ({
    url: `${base}/service-areas/${l.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const cityServices = CITY_SERVICE_PAGES.map((p) => ({
    url: `${base}${p.path}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.95,
  }));

  const guides = BLOG_POSTS.map((b) => ({
    url: `${base}/knowledge/guides/${b.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.65,
  }));

  return [
    ...staticPages,
    ...knowledgeTopics,
    ...categories,
    ...services,
    ...portfolio,
    ...industries,
    ...cityServices,
    ...locations,
    ...guides,
  ];
}
