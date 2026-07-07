import { SITE } from "@/data/site";

/** Consistent NAP for directory submissions and citations */
export const CITATION_NAP = {
  name: SITE.legalName,
  shortName: SITE.name,
  url: SITE.url,
  email: SITE.contact.email,
  phone: SITE.contact.phone,
  phoneRaw: SITE.contact.phoneRaw,
  address: SITE.contact.address,
  city: "Mangalore",
  state: "Karnataka",
  postalCode: "575002",
  country: "India",
  mapUrl: SITE.contact.mapUrl,
  categories: [
    "Software Company",
    "Website Designer",
    "Digital Marketing Agency",
    "Mobile App Developer",
    "Branding Agency",
  ],
  description:
    "E26 Media is a Mangalore-based software development and digital marketing company offering websites, custom software, mobile apps, AI solutions, SEO, and branding for businesses across Karnataka and internationally.",
} as const;

/** Pages designed to earn editorial and resource links */
export const LINKABLE_ASSETS = [
  {
    href: "/tools/website-cost-estimator",
    title: "Website Cost Estimator (Karnataka)",
    pitch: "Interactive tool — share with clients planning a website budget.",
  },
  {
    href: "/knowledge/guides/website-development-cost-karnataka-2025",
    title: "Website Development Cost in Karnataka 2025",
    pitch: "Cite in articles about web pricing in India.",
  },
  {
    href: "/knowledge/guides/local-seo-mangalore-businesses",
    title: "Local SEO Guide for Mangalore Businesses",
    pitch: "Resource for coastal Karnataka SME marketing content.",
  },
  {
    href: "/pricing",
    title: "Transparent Service Pricing",
    pitch: "Reference for agency pricing transparency roundups.",
  },
  {
    href: "/knowledge/downloads",
    title: "Free SEO & Website Checklists",
    pitch: "Link as a free resource for small business owners.",
  },
] as const;

/** Directory and profile targets — submit manually with consistent NAP */
export const DIRECTORY_TARGETS = [
  { name: "Google Business Profile", url: "https://business.google.com", priority: "critical", type: "local" },
  { name: "Bing Places", url: "https://www.bingplaces.com", priority: "high", type: "local" },
  { name: "Apple Business Connect", url: "https://businessconnect.apple.com", priority: "medium", type: "local" },
  { name: "JustDial", url: "https://www.justdial.com", priority: "high", type: "india" },
  { name: "IndiaMART", url: "https://www.indiamart.com", priority: "high", type: "india" },
  { name: "Sulekha", url: "https://www.sulekha.com", priority: "medium", type: "india" },
  { name: "Clutch", url: "https://clutch.co", priority: "high", type: "b2b" },
  { name: "GoodFirms", url: "https://www.goodfirms.co", priority: "high", type: "b2b" },
  { name: "DesignRush", url: "https://www.designrush.com", priority: "medium", type: "b2b" },
  { name: "Sortlist", url: "https://www.sortlist.com", priority: "medium", type: "b2b" },
  { name: "LinkedIn Company Page", url: SITE.social.find((s) => s.name === "LinkedIn")!.href, priority: "critical", type: "social" },
  { name: "GitHub Organization", url: SITE.social.find((s) => s.name === "GitHub")!.href, priority: "medium", type: "social" },
] as const;

export const EMBED_BADGE_HTML = `<a href="${SITE.url}" title="Website by E26 Media — Mangalore" rel="noopener" target="_blank" style="display:inline-flex;align-items:center;gap:8px;font-family:system-ui,sans-serif;font-size:13px;color:#52525b;text-decoration:none;">
  <img src="${SITE.url}/logo-nav.png" alt="E26 Media" width="100" height="28" loading="lazy" />
  <span>Website by <strong style="color:#15803d">E26 Media</strong></span>
</a>`;

export const EMBED_TEXT_LINK = `Website by <a href="${SITE.url}" rel="noopener">E26 Media</a> — Software & Digital Marketing, Mangalore`;

export const PRESS_BOILERPLATE = `${SITE.legalName} (${SITE.name}) is a Mangalore-based technology company delivering website development, custom software, mobile applications, AI solutions, and digital marketing for businesses across Karnataka, India, and international markets. Founded with a client-centric approach, E26 Media serves clients including Lamiya Alkhaleej, Abrar Caterers, and Floriva Gifts. Head office: ${SITE.contact.address}. ${SITE.contact.phone} · ${SITE.contact.email} · ${SITE.url}`;

export const SUGGESTED_ANCHOR_TEXTS = [
  "website development company Mangalore",
  "software development company Karnataka",
  "digital marketing agency Mangalore",
  "SEO company Mangalore",
  "E26 Media",
  "mobile app development Mangalore",
] as const;
