import type { LocationPage } from "@/types";
import { MANGALORE_WEB_DEVELOPMENT } from "@/data/locations/mangalore-web-development";

type CityProfile = {
  name: string;
  region: string;
  businessContext: string;
  localInsight: string;
};

const CITIES: Record<string, CityProfile> = {
  mangalore: {
    name: "Mangalore",
    region: "coastal Karnataka",
    businessContext:
      "Mangalore is a fast-growing commercial hub on the Karnataka coast, home to ports, educational institutions, healthcare networks, hospitality brands, and a thriving SME ecosystem. Businesses here compete for visibility across Kannada and English-speaking audiences while serving both local customers and international clients.",
    localInsight:
      "From Kadri to Bejai and the industrial corridors around Baikampady, Mangalore companies need digital presence that reflects trust, speed, and regional relevance — especially on mobile, where most local searches happen.",
  },
  bengaluru: {
    name: "Bengaluru",
    region: "India's technology capital",
    businessContext:
      "Bengaluru's market demands enterprise-grade delivery, rapid iteration, and design quality that matches global standards. Whether you are a funded startup in Koramangala or an established enterprise in Whitefield, your technology partner must balance innovation with reliability.",
    localInsight:
      "Competition in Bengaluru is intense. Differentiation comes from polished UX, performance, SEO, and a partner who can align engineering with business KPIs — not just ship features.",
  },
  udupi: {
    name: "Udupi",
    region: "coastal Karnataka",
    businessContext:
      "Udupi's economy blends hospitality, education, healthcare, and retail — with strong ties to tourism and pilgrimage traffic. Local businesses benefit from websites and apps that convert seasonal visitors into repeat customers.",
    localInsight:
      "Restaurants, hotels, clinics, and educational institutions in Udupi often rely on word-of-mouth. A professional digital presence amplifies that trust to audiences searching before they arrive.",
  },
  mysuru: {
    name: "Mysuru",
    region: "heritage and emerging tech",
    businessContext:
      "Mysuru combines heritage tourism with manufacturing, education, and a growing startup scene. Brands here need digital experiences that feel premium yet approachable — reflecting the city's culture and business ambition.",
    localInsight:
      "Manufacturers, hospitality groups, and institutions in Mysuru are investing in automation and online lead generation. The right technology partner helps them modernize without disrupting operations.",
  },
  hubballi: {
    name: "Hubballi",
    region: "North Karnataka",
    businessContext:
      "Hubballi–Dharwad is a major trade and logistics centre in North Karnataka. Businesses here serve regional distributors, retailers, and B2B clients who expect reliable software, clear communication, and on-time delivery.",
    localInsight:
      "As digital adoption accelerates beyond metro cities, Hubballi companies that invest early in websites, ERP systems, and marketing gain a measurable edge over competitors still relying on manual processes.",
  },
};

type ServiceProfile = {
  slug: string;
  label: string;
  categoryHref: string;
  focus: string;
  deliverables: string[];
  outcomes: string[];
};

const SERVICES: Record<string, ServiceProfile> = {
  "website-development": {
    slug: "website-development",
    label: "Website Development",
    categoryHref: "/services/website-development",
    focus: "high-performance, SEO-ready websites",
    deliverables: [
      "Corporate and business websites with conversion-focused layouts",
      "Landing pages for campaigns and product launches",
      "Industry-specific sites for healthcare, education, hospitality, and NGOs",
      "Website redesigns that improve speed, accessibility, and lead capture",
      "Ongoing maintenance, security updates, and content support",
    ],
    outcomes: [
      "Higher organic traffic from Google and local search",
      "More qualified enquiries through clear CTAs and forms",
      "Faster load times that improve user trust and rankings",
      "A professional brand presence that competes nationally",
    ],
  },
  "software-development": {
    slug: "software-development",
    label: "Software Development",
    categoryHref: "/services/software-development",
    focus: "custom software tailored to your workflows",
    deliverables: [
      "ERP, CRM, inventory, HRMS, billing, and POS systems",
      "Hospital and school management platforms",
      "Business automation that eliminates manual bottlenecks",
      "API integrations with accounting, payment, and logistics tools",
      "Scalable architecture with documentation and training",
    ],
    outcomes: [
      "Reduced operational overhead and human error",
      "Real-time visibility into sales, inventory, and operations",
      "Faster reporting for management decisions",
      "Software that grows with your team — not against it",
    ],
  },
  "mobile-app-development": {
    slug: "mobile-app-development",
    label: "Mobile App Development",
    categoryHref: "/services/mobile-app-development",
    focus: "Android, iOS, Flutter, React Native, and PWA apps",
    deliverables: [
      "Native and cross-platform apps for consumer and B2B use cases",
      "PWAs for businesses that want app-like experiences without app-store friction",
      "Secure authentication, push notifications, and offline support",
      "App Store and Play Store submission assistance",
      "Post-launch analytics, updates, and feature roadmaps",
    ],
    outcomes: [
      "Direct customer engagement on the devices they use daily",
      "Streamlined field operations and internal workflows",
      "Higher retention through thoughtful UX and performance",
      "A mobile channel that complements your website and CRM",
    ],
  },
  "ai-solutions": {
    slug: "ai-solutions",
    label: "AI Solutions",
    categoryHref: "/services/ai-solutions",
    focus: "practical AI that saves time and improves service",
    deliverables: [
      "AI chatbots and assistants for websites and WhatsApp",
      "Customer support automation with human handoff",
      "Document processing and workflow integration",
      "AI-powered internal tools for teams",
      "Responsible implementation with clear ROI metrics",
    ],
    outcomes: [
      "Faster response times without scaling headcount linearly",
      "24/7 availability for common customer questions",
      "Staff freed to focus on high-value work",
      "Measurable efficiency gains within weeks of launch",
    ],
  },
  "cloud-solutions": {
    slug: "cloud-solutions",
    label: "Cloud Solutions",
    categoryHref: "/services/cloud-solutions",
    focus: "cloud migration, hosting, and infrastructure",
    deliverables: [
      "AWS, Azure, and Google Cloud architecture and migration",
      "Managed hosting with monitoring and backups",
      "Infrastructure design for scalability and cost control",
      "DevOps pipelines for reliable deployments",
      "Disaster recovery and business continuity planning",
    ],
    outcomes: [
      "Reduced downtime and infrastructure risk",
      "Predictable monthly costs with right-sized resources",
      "Faster releases through automated deployment",
      "Confidence that your data and applications are protected",
    ],
  },
  seo: {
    slug: "digital-marketing",
    label: "SEO",
    categoryHref: "/services/digital-marketing",
    focus: "search engine optimization and local visibility",
    deliverables: [
      "Technical SEO audits and site speed improvements",
      "On-page optimization for target keywords",
      "Local SEO for Google Business Profile and maps rankings",
      "Content strategy aligned to buyer intent",
      "Monthly reporting with rankings, traffic, and conversion insights",
    ],
    outcomes: [
      "Higher rankings for commercial and local keywords",
      "More organic leads without proportional ad spend",
      "Improved Google Business Profile visits and calls",
      "Long-term compounding traffic as content authority grows",
    ],
  },
  "digital-marketing": {
    slug: "digital-marketing",
    label: "Digital Marketing",
    categoryHref: "/services/digital-marketing",
    focus: "full-funnel digital marketing",
    deliverables: [
      "Google Ads and Meta Ads campaign management",
      "Social media strategy and creative production",
      "Content marketing and email automation",
      "Conversion rate optimization for landing pages",
      "Analytics setup and performance dashboards",
    ],
    outcomes: [
      "Predictable lead flow from paid and organic channels",
      "Lower cost per acquisition through testing and optimization",
      "Stronger brand recall across social platforms",
      "Marketing decisions backed by data — not guesswork",
    ],
  },
  branding: {
    slug: "branding",
    label: "Branding",
    categoryHref: "/services/branding",
    focus: "brand identity and creative design",
    deliverables: [
      "Logo design and visual identity systems",
      "Brand guidelines for consistent communication",
      "Packaging, social creatives, and presentation design",
      "Company profile and pitch deck design",
      "Brand refreshes for businesses ready to level up",
    ],
    outcomes: [
      "A cohesive brand that builds trust at first glance",
      "Materials your sales team is proud to share",
      "Differentiation in crowded local and national markets",
      "Creative assets that work across print and digital",
    ],
  },
};

function buildSections(city: CityProfile, service: ServiceProfile): LocationPage["sections"] {
  const svc = service.label.toLowerCase();
  return [
    {
      heading: `Why ${city.name} businesses invest in ${svc}`,
      body: `${city.businessContext} For many organisations in ${city.name}, ${service.focus} is no longer optional — it is how customers discover you, how teams operate efficiently, and how you compete with larger players. E26 Media works with businesses across ${city.region} to deliver ${svc} that is built for real-world constraints: budget clarity, timeline discipline, and outcomes you can measure. ${city.localInsight}`,
    },
    {
      heading: `Our approach to ${service.label.toLowerCase()} in ${city.name}`,
      body: `Every engagement begins with listening. We map your goals, audience, and existing systems before recommending architecture or design. For ${city.name} clients, that often means balancing local language considerations, mobile-first users, and integration with WhatsApp, Google Business Profile, or existing ERP tools. Our delivery model combines discovery workshops, iterative design reviews, agile development sprints, and structured QA — so you see progress weekly, not only at the end of a long black-box project.`,
    },
    {
      heading: "What we deliver",
      body: service.deliverables.map((d) => `• ${d}`).join("\n\n"),
    },
    {
      heading: "Business outcomes you can expect",
      body: service.outcomes.map((o) => `• ${o}`).join("\n\n"),
    },
    {
      heading: `Local expertise, global standards`,
      body: `E26 Media is headquartered in Mangalore with a team experienced in serving clients across Karnataka and internationally. Whether you are based in ${city.name} or partnering with us remotely, you get the same premium delivery: transparent communication, documented handover, and support after launch. We have delivered websites, software, and marketing for hospitality brands, healthcare providers, educational institutions, and growing SMEs — work you can explore in our portfolio.`,
    },
    {
      heading: "Industries we serve in Karnataka",
      body: `Our ${svc} practice supports healthcare, education, manufacturing, retail, hospitality, restaurants, real estate, construction, finance, NGOs, corporate enterprises, and startups. Industry context shapes UX, compliance needs, and integration requirements — we bring that context into every ${city.name} project instead of applying one-size-fits-all templates.`,
    },
    {
      heading: "Technology and quality",
      body: `We build with modern, maintainable stacks — React, Next.js, Node.js, Flutter, cloud platforms, and proven CMS and ecommerce tools where appropriate. Performance, accessibility, and SEO are baked in from day one. For software and apps, we emphasize clean architecture, automated testing, and security best practices so your investment remains viable for years.`,
    },
    {
      heading: "Getting started",
      body: `Book a free consultation to discuss your ${svc} goals in ${city.name}. We will review your current setup, recommend a practical roadmap, and provide a clear quote with milestones. Most clients hear back within 24 business hours. Call ${"+91 8495901407"}, WhatsApp us, or use the contact form on this page — whichever is easiest for you.`,
    },
  ];
}

function buildFaqs(city: CityProfile, service: ServiceProfile): LocationPage["faqs"] {
  const svc = service.label.toLowerCase();
  return [
    {
      question: `Why choose E26 Media for ${svc} in ${city.name}?`,
      answer: `We combine local understanding of ${city.region} with enterprise-grade delivery. You get a dedicated team, transparent pricing, and a portfolio of real client work — not generic templates.`,
    },
    {
      question: `Do you meet clients in ${city.name}?`,
      answer: `Yes. We offer in-person meetings for ${city.name} and nearby areas, plus video calls for clients across Karnataka and abroad. Our head office is in Mangalore at Shalimar Complex, Kanakanady.`,
    },
    {
      question: `How much does ${svc} cost in ${city.name}?`,
      answer: `Costs depend on scope — page count, features, integrations, and timeline. After a free consultation we provide a fixed quote with no hidden fees.`,
    },
    {
      question: `How long does a typical ${svc} project take?`,
      answer: `Websites often launch in 3–8 weeks; software and mobile apps typically require 8–16+ weeks. We share a milestone plan before work begins.`,
    },
    {
      question: `Do you provide support after launch?`,
      answer: `Yes. We offer maintenance, hosting support, marketing retainers, and enhancement sprints so your solution keeps performing as your business grows.`,
    },
    {
      question: `Can you help with SEO and Google Business Profile for ${city.name} businesses?`,
      answer: `Absolutely. Local SEO is core to our digital marketing practice — including GBP optimization, reviews strategy, and location landing pages like this one.`,
    },
  ];
}

function buildLocation(
  cityKey: keyof typeof CITIES,
  serviceKey: keyof typeof SERVICES,
  slug: string
): LocationPage {
  const city = CITIES[cityKey];
  const service = SERVICES[serviceKey];
  const title = `${service.label} Company in ${city.name}`;

  return {
    slug,
    title,
    city: city.name,
    serviceSlug: service.slug,
    metaTitle: `${title} | E26 Media`,
    metaDescription: `Leading ${service.label.toLowerCase()} company in ${city.name}, Karnataka. E26 Media delivers ${service.focus} for local businesses. Free consultation — call +91 8495901407.`,
    intro: `Looking for a trusted ${service.label.toLowerCase()} partner in ${city.name}? E26 Media helps businesses across ${city.region} build digital solutions that generate leads, streamline operations, and scale with confidence.`,
    sections: buildSections(city, service),
    whyChoose: [
      "3+ years delivering technology projects across Karnataka",
      "Verifiable portfolio of real client work — Lamiya Alkhaleej, Abrar Caterers, Tawakkal Overseas, and more",
      "Transparent scoping, fixed quotes, and weekly progress updates",
      "Portfolio of verifiable client work — not stock demos",
      "Post-launch support, maintenance, and growth packages",
    ],
    relatedServices: [
      { label: service.label, href: service.categoryHref },
      { label: "All Services", href: "/services" },
      { label: "Portfolio", href: "/portfolio" },
      { label: "Contact", href: "/contact" },
    ],
    faqs: buildFaqs(city, service),
  };
}

export const LOCATIONS: LocationPage[] = [
  MANGALORE_WEB_DEVELOPMENT,
  buildLocation("mangalore", "software-development", "software-development-company-mangalore"),
  buildLocation("mangalore", "mobile-app-development", "mobile-app-development-company-mangalore"),
  buildLocation("mangalore", "ai-solutions", "ai-solutions-company-mangalore"),
  buildLocation("mangalore", "cloud-solutions", "cloud-solutions-company-mangalore"),
  buildLocation("mangalore", "seo", "seo-company-mangalore"),
  buildLocation("mangalore", "digital-marketing", "digital-marketing-agency-mangalore"),
  buildLocation("mangalore", "branding", "branding-agency-mangalore"),
  buildLocation("bengaluru", "website-development", "website-development-company-bengaluru"),
  buildLocation("udupi", "website-development", "website-development-company-udupi"),
  buildLocation("mysuru", "website-development", "website-development-company-mysuru"),
  buildLocation("hubballi", "website-development", "website-development-company-hubballi"),
];

export function getLocation(slug: string) {
  return LOCATIONS.find((l) => l.slug === slug);
}

export function getLocationsByService(serviceSlug: string) {
  return LOCATIONS.filter((l) => l.serviceSlug === serviceSlug);
}

export const FOOTER_LOCATION_LINKS = LOCATIONS.map((l) => ({
  label: l.title,
  href: `/service-areas/${l.slug}`,
}));
