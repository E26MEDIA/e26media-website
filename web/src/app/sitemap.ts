import type { MetadataRoute } from "next";
import { SITE } from "@/data/site";
import { getAllServices } from "@/data/services";
import { PORTFOLIO } from "@/data/portfolio";
import { INDUSTRIES } from "@/data/industries";

import { LOCATIONS } from "@/data/locations";
import { BLOG_POSTS } from "@/data/blogs";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = SITE.url;
  const staticPages = ["", "/about", "/services", "/portfolio", "/case-studies", "/contact", "/industries", "/blog", "/careers", "/resources"].map(
    (path) => ({
      url: `${base}${path}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: path === "" ? 1 : 0.8,
    })
  );

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
      priority: 0.75,
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
    priority: 0.65,
  }));

  const locations = LOCATIONS.map((l) => ({
    url: `${base}/locations/${l.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.85,
  }));

  const blogs = BLOG_POSTS.map((b) => ({
    url: `${base}/blog/${b.slug}`,
    lastModified: new Date(b.date),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticPages, ...categories, ...services, ...portfolio, ...industries, ...locations, ...blogs];
}
