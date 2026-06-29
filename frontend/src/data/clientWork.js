import { SERVICES } from "./services";

const SERVICE_META = {
  "web-design-development": {
    category: "Web Development",
    tag: "Client Website",
    stack: ["React", "Responsive UI", "SEO"],
    results: ["Live website", "Mobile-first", "Fast loading"],
  },
  "software-development": {
    category: "Software Development",
    tag: "Ecommerce Platform",
    stack: ["Ecommerce", "Secure checkout", "Cloud hosted"],
    results: ["Online store live", "Order flow", "Scalable build"],
  },
  "mobile-app-development": {
    category: "Mobile Apps",
    tag: "Mobile App",
    stack: ["Android", "Google Play", "Native UX"],
    results: ["Play Store live", "User-ready app", "Ongoing support"],
  },
  "digital-marketing": {
    category: "Digital Marketing",
    tag: "Growth & Visibility",
    stack: ["SEO", "Paid media", "Brand reach"],
    results: ["More visibility", "Lead generation", "Brand growth"],
  },
};

const slugify = (name) =>
  name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

export function getAllClientWork() {
  const byUrl = new Map();

  for (const service of SERVICES) {
    const meta = SERVICE_META[service.slug] || {};
    for (const work of service.clientWork || []) {
      if (!work?.url || byUrl.has(work.url)) continue;
      byUrl.set(work.url, {
        ...work,
        serviceSlug: service.slug,
        serviceTitle: service.title,
        ...meta,
      });
    }
  }

  return Array.from(byUrl.values());
}

export function clientWorkToProject(work, index) {
  const host = work.url.replace(/^https?:\/\/(www\.)?/, "").split("/")[0];

  return {
    id: slugify(work.name),
    title: work.name,
    category: work.category,
    tag: work.tag,
    url: work.url,
    description: `${work.serviceTitle} project for ${work.name} — live at ${host}.`,
    longDescription: `E26 Media delivered this ${work.serviceTitle.toLowerCase()} project for ${work.name}. The work is live and supports their business goals with a professional digital presence, reliable performance, and a user experience built for real customers.`,
    image: work.image,
    stack: work.stack,
    results: work.results,
    featured: index < 6,
  };
}

export function getClientPortfolioProjects() {
  return getAllClientWork().map(clientWorkToProject);
}
