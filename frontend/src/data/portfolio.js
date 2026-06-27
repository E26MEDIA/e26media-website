// ============================================================
// PORTFOLIO DATA — Add new projects here. They appear instantly
// on the Portfolio page (with filters) and Home featured grid.
// category must match one of PORTFOLIO_CATEGORIES.
// ============================================================
export const PORTFOLIO_CATEGORIES = [
  "All",
  "Web Development",
  "Software Development",
  "Mobile Apps",
  "Digital Marketing",
];

export const PROJECTS = [
  {
    id: "nexus-portal",
    title: "Nexus Enterprise Portal",
    category: "Web Development",
    tag: "Corporate Website",
    description:
      "A fast-loading enterprise hub serving 5M+ monthly visitors at a 99% Lighthouse score.",
    longDescription:
      "We re-architected Nexus Finance Group's flagship corporate website with React and Next.js, delivering sub-second loads, a modular CMS for their marketing team, and a 99% Lighthouse performance rating across 5M+ monthly visitors.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
    stack: ["React", "Next.js", "Tailwind", "Vercel"],
    results: ["99% Lighthouse", "5M+ monthly visits", "-60% load time"],
    featured: true,
  },
  {
    id: "veloce-commerce",
    title: "Veloce Commerce Platform",
    category: "Web Development",
    tag: "Ecommerce Store",
    description:
      "A headless, hyper-optimized checkout that scaled sales throughput by 140%.",
    longDescription:
      "A secure, headless ecommerce platform with a frictionless checkout and real-time inventory. Conversion rates climbed 140% within three months of launch.",
    image:
      "https://images.pexels.com/photos/7621358/pexels-photo-7621358.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    stack: ["Next.js", "Node.js", "Stripe", "MongoDB"],
    results: ["+140% conversions", "99.99% uptime", "PCI compliant"],
    featured: true,
  },
  {
    id: "aero-logistics",
    title: "AeroLogistics Supply Engine",
    category: "Software Development",
    tag: "ERP Dashboard",
    description:
      "A real-time ERP tracking and dispatching global supply-chain workloads.",
    longDescription:
      "A comprehensive ERP ecosystem running on real-time WebSockets to track, manage, and dispatch global supply chain workloads — replacing five legacy tools with one platform.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
    stack: ["React", "FastAPI", "WebSockets", "PostgreSQL"],
    results: ["5 tools → 1", "Real-time tracking", "-35% ops cost"],
    featured: true,
  },
  {
    id: "synthetix-crm",
    title: "Synthetix Client Hub",
    category: "Software Development",
    tag: "CRM Software",
    description:
      "Bespoke CRM automating onboarding, billing, and helpdesk workflows.",
    longDescription:
      "A bespoke internal CRM automating onboarding cycles, billing records, and helpdesk workflows for enterprise staff — cutting manual admin time in half.",
    image: "https://images.unsplash.com/photo-1686061594225-3e92c0cd51b0",
    stack: ["React", "Node.js", "MySQL", "Docker"],
    results: ["-50% admin time", "Automated billing", "Unified pipeline"],
    featured: true,
  },
  {
    id: "zetta-finance-app",
    title: "Zetta Finance App",
    category: "Mobile Apps",
    tag: "Mobile App",
    description:
      "Native iOS & Android finance app with biometric login and instant trades.",
    longDescription:
      "A state-of-the-art Flutter app featuring secure biometric login, multi-chain operations, and instant trades — rated 4.8 across the App Store and Play Store.",
    image: "https://images.pexels.com/photos/35052818/pexels-photo-35052818.jpeg",
    stack: ["Flutter", "Firebase", "Node.js"],
    results: ["4.8★ rating", "Biometric auth", "iOS + Android"],
    featured: true,
  },
  {
    id: "equinox-energy",
    title: "Equinox Energy Portal",
    category: "Web Development",
    tag: "Business Website",
    description:
      "Interactive investor-relations platform for a clean-energy leader.",
    longDescription:
      "An elegant, interactive portfolio and investor-relations platform communicating the vision of clean-energy development across APAC.",
    image:
      "https://images.pexels.com/photos/6476253/pexels-photo-6476253.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    stack: ["Next.js", "Framer Motion", "Sanity CMS"],
    results: ["+2x engagement", "CMS-driven", "Investor portal"],
    featured: true,
  },
  {
    id: "pulse-growth",
    title: "PulseMetrics Growth Campaign",
    category: "Digital Marketing",
    tag: "SEO & Paid Ads",
    description:
      "Full-funnel SEO + paid media that 3x'd qualified pipeline in 6 months.",
    longDescription:
      "A full-funnel growth program combining technical SEO, Google and Meta ads, and conversion-optimized landing pages — tripling qualified pipeline in six months at a 4.2x ROAS.",
    image:
      "https://images.pexels.com/photos/927576/pexels-photo-927576.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    stack: ["SEO", "Google Ads", "Meta Ads", "GA4"],
    results: ["3x pipeline", "4.2x ROAS", "-38% CPA"],
    featured: false,
  },
  {
    id: "fleetsync-ops",
    title: "FleetSync Mobile Ops",
    category: "Mobile Apps",
    tag: "Business App",
    description:
      "Field-operations app with offline mode for 2,000+ daily drivers.",
    longDescription:
      "A cross-platform field-operations app with offline-first sync, route optimization, and live dispatch for a fleet of 2,000+ daily drivers.",
    image: "https://images.unsplash.com/photo-1634403665481-74948d815f03",
    stack: ["Flutter", "FastAPI", "MongoDB"],
    results: ["2,000+ drivers", "Offline-first", "Live dispatch"],
    featured: false,
  },
  {
    id: "orbit-retail",
    title: "Orbit Retail Dashboard",
    category: "Software Development",
    tag: "Inventory System",
    description:
      "Inventory & billing platform unifying 40 retail locations in real time.",
    longDescription:
      "A real-time inventory and billing platform unifying 40 retail locations, with predictive restock alerts and centralized reporting.",
    image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43",
    stack: ["React", "Node.js", "Redis", "PostgreSQL"],
    results: ["40 locations", "Predictive restock", "Central reporting"],
    featured: false,
  },
  {
    id: "brightleaf-brand",
    title: "BrightLeaf Brand Launch",
    category: "Digital Marketing",
    tag: "Branding",
    description:
      "End-to-end brand identity and launch campaign for a wellness startup.",
    longDescription:
      "A complete brand identity, messaging system, and multi-channel launch campaign that took a wellness startup from zero to 50k engaged followers in 90 days.",
    image:
      "https://images.pexels.com/photos/12813050/pexels-photo-12813050.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    stack: ["Branding", "Social", "Content", "Email"],
    results: ["0 → 50k followers", "Full identity", "90-day launch"],
    featured: false,
  },
];

export const getFeaturedProjects = () => PROJECTS.filter((p) => p.featured);
