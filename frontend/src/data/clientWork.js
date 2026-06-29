import { SERVICES } from "./services";

const SERVICE_META = {
  "web-design-development": {
    category: "Web Development",
    tag: "Website",
    stack: ["Responsive design", "SEO", "Fast performance"],
    results: ["Live website", "Mobile-first", "Lead-ready"],
  },
  "software-development": {
    category: "Software Development",
    tag: "Ecommerce",
    stack: ["Online store", "Secure checkout", "Order management"],
    results: ["Store live", "Product catalog", "Checkout flow"],
  },
  "mobile-app-development": {
    category: "Mobile Apps",
    tag: "Android app",
    stack: ["Google Play", "Mobile UX", "Cross-device"],
    results: ["Published app", "Play Store live", "User-ready"],
  },
  "digital-marketing": {
    category: "Digital Marketing",
    tag: "Marketing",
    stack: ["SEO", "Paid ads", "Brand growth"],
    results: ["More reach", "Lead generation", "Brand visibility"],
  },
};

const slugify = (name) =>
  name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

export function getProjectHost(url = "") {
  return url.replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, "");
}

export function getPreviewType(url = "") {
  return /play\.google\.com|apps\.apple\.com/i.test(url) ? "app" : "website";
}

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
  const host = getProjectHost(work.url);
  const previewType = getPreviewType(work.url);

  return {
    id: slugify(work.name),
    title: work.name,
    category: work.category,
    tag: work.tag,
    url: work.url,
    host,
    previewType,
    description:
      previewType === "app"
        ? `Mobile app built and published for ${work.name}.`
        : `${work.serviceTitle} delivered for ${work.name}.`,
    longDescription: `E26 Media planned, built, and launched this ${work.serviceTitle.toLowerCase()} project for ${work.name}. The deliverable is live, aligned with the client's brand, and built to support real business goals.`,
    image: work.image,
    stack: work.stack,
    results: work.results,
    featured: index < 6,
  };
}

export function getClientPortfolioProjects() {
  return getAllClientWork().map(clientWorkToProject);
}
