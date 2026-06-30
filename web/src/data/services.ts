import { slugify } from "@/lib/utils";
import { buildRichServiceContent } from "@/lib/service-content";
import type { ServiceCategory, ServiceItem } from "@/types";

function buildService(
  categorySlug: string,
  title: string,
  tagline: string
): ServiceItem {
  const rich = buildRichServiceContent(categorySlug, title, tagline);
  return {
    slug: slugify(title),
    title,
    tagline,
    overview: rich.overview,
    problems: rich.problems,
    solutions: rich.solutions,
    benefits: rich.benefits,
    features: rich.features,
    contentSections: rich.contentSections,
    process: [
      { step: "Discover", description: "Stakeholder interviews, goal mapping, competitor review, and technical audit of existing systems." },
      { step: "Plan", description: "Scope document, sitemap or user flows, architecture diagram, timeline, and fixed quote with milestones." },
      { step: "Design", description: "Wireframes, high-fidelity UI, brand alignment, and client approval before any code is written." },
      { step: "Build", description: "Agile sprints with staging demos, code reviews, and integration testing each week." },
      { step: "Launch", description: "QA across devices, performance tuning, SEO checks, deployment, and team training." },
      { step: "Grow", description: "Analytics review, support retainer, A/B tests, and roadmap for phase-two features." },
    ],
    technologies: rich.technologies,
    industries: rich.industries,
    faqs: rich.faqs,
  };
}

function category(
  slug: string,
  title: string,
  tagline: string,
  description: string,
  icon: string,
  items: [string, string][]
): ServiceCategory {
  return {
    slug,
    title,
    tagline,
    description,
    icon,
    items: items.map(([t, tag]) => buildService(slug, t, tag)),
  };
}

export const SERVICE_CATEGORIES: ServiceCategory[] = [
  category(
    "website-development",
    "Website Development",
    "High-performance websites that convert",
    "Corporate, ecommerce, landing pages, and custom web experiences engineered for speed, SEO, and lead generation.",
    "Monitor",
    [
      ["Corporate Website", "Premium brand-led corporate sites"],
      ["Business Website", "Lead-generating business websites"],
      ["Landing Page", "Campaign pages built to convert"],
      ["Portfolio Website", "Showcase work beautifully"],
      ["Educational Website", "Schools, colleges, and ed-tech"],
      ["Hospital Website", "Healthcare-focused web presence"],
      ["NGO Website", "Mission-driven nonprofit sites"],
      ["Website Redesign", "Modernize and improve performance"],
      ["Website Maintenance", "Ongoing updates and support"],
    ]
  ),
  category(
    "software-development",
    "Software Development",
    "Custom systems that automate growth",
    "ERP, CRM, billing, inventory, and bespoke business software on secure, scalable cloud infrastructure.",
    "Cpu",
    [
      ["Custom Software", "Tailored business applications"],
      ["ERP", "Unified operations and finance"],
      ["CRM", "Customer relationship management"],
      ["Inventory Management", "Stock and warehouse control"],
      ["HRMS", "Human resources management"],
      ["Billing System", "Invoicing and subscriptions"],
      ["POS System", "Point of sale solutions"],
      ["Hospital Management System", "Healthcare operations software"],
      ["School Management System", "Education administration"],
      ["Business Automation", "Workflow and process automation"],
    ]
  ),
  category(
    "mobile-app-development",
    "Mobile App Development",
    "Native-quality mobile experiences",
    "Android, iOS, Flutter, and cross-platform apps with secure APIs and store-ready polish.",
    "Smartphone",
    [
      ["Android App Development", "Native Android applications"],
      ["iOS App Development", "Native iOS applications"],
      ["Flutter App Development", "Cross-platform Flutter apps"],
      ["React Native Apps", "Shared codebase for iOS and Android"],
      ["PWA Development", "Progressive web applications"],
    ]
  ),
  category(
    "ai-solutions",
    "AI Solutions",
    "Intelligent automation for modern business",
    "AI chatbots, assistants, workflow automation, and document processing — practical AI that delivers ROI.",
    "Sparkles",
    [
      ["AI Chatbots", "Customer-facing intelligent chat"],
      ["AI Assistants", "Internal productivity assistants"],
      ["AI Automation", "Automate repetitive workflows"],
      ["AI Customer Support", "24/7 intelligent support flows"],
      ["AI Workflow Integration", "Connect AI to your tools"],
      ["Document Processing", "Extract and process documents with AI"],
    ]
  ),
  category(
    "cloud-solutions",
    "Cloud Solutions",
    "Reliable, scalable cloud infrastructure",
    "Migration, hosting, backup, and managed infrastructure on AWS, Azure, and Google Cloud.",
    "Cloud",
    [
      ["Cloud Migration", "Move workloads to the cloud safely"],
      ["Cloud Hosting", "Managed cloud hosting"],
      ["AWS Solutions", "Amazon Web Services expertise"],
      ["Azure Solutions", "Microsoft Azure deployments"],
      ["Google Cloud Solutions", "GCP architecture and ops"],
      ["Backup Solutions", "Automated backup and recovery"],
      ["Cloud Infrastructure", "Scalable infra design"],
    ]
  ),
  category(
    "digital-marketing",
    "Digital Marketing",
    "Data-driven growth and visibility",
    "SEO, paid media, social, content, and conversion optimization tied to measurable business outcomes.",
    "TrendingUp",
    [
      ["SEO", "Technical and content SEO"],
      ["Local SEO", "Rank in your city and region"],
      ["Google Ads", "High-intent search campaigns"],
      ["Meta Ads", "Facebook and Instagram advertising"],
      ["Social Media Marketing", "Organic social growth"],
      ["Content Marketing", "Authority-building content"],
      ["Email Marketing", "Nurture and retention campaigns"],
      ["Conversion Optimization", "Improve funnel performance"],
    ]
  ),
  category(
    "branding",
    "Branding & Creative",
    "Identity that builds trust",
    "Logo, brand identity, guidelines, packaging, and creative assets for consistent brand presence.",
    "Palette",
    [
      ["Logo Design", "Memorable brand marks"],
      ["Brand Identity", "Complete visual identity systems"],
      ["Brand Guidelines", "Standards for consistent branding"],
      ["Packaging Design", "Product and retail packaging"],
      ["Social Media Creatives", "On-brand social assets"],
      ["Company Profile Design", "Professional company profiles"],
      ["Presentation Design", "Pitch decks and presentations"],
    ]
  ),
  category(
    "ui-ux-design",
    "UI/UX Design",
    "Experiences users love",
    "Research-driven interfaces, wireframes, prototypes, and design systems for web and mobile.",
    "Layers",
    [
      ["Website UI Design", "Marketing and product web UI"],
      ["App UI Design", "Mobile app interface design"],
      ["Wireframes", "Structure before visual design"],
      ["Prototypes", "Interactive design validation"],
      ["Dashboard Design", "Data-rich admin interfaces"],
      ["Design Systems", "Scalable component libraries"],
    ]
  ),
  category(
    "it-consulting",
    "IT Consulting",
    "Strategic technology guidance",
    "Digital transformation, product strategy, and technology roadmaps for startups and enterprises.",
    "Briefcase",
    [
      ["Digital Transformation", "Modernize operations with technology"],
      ["Technology Consulting", "Stack and architecture advisory"],
      ["Product Strategy", "Roadmaps and MVP planning"],
      ["Business Automation Consulting", "Identify automation opportunities"],
      ["Startup Consulting", "Technology for early-stage founders"],
    ]
  ),
];

export function getAllServices(): { category: ServiceCategory; item: ServiceItem }[] {
  return SERVICE_CATEGORIES.flatMap((category) =>
    category.items.map((item) => ({ category, item }))
  );
}

export function getService(categorySlug: string, itemSlug: string) {
  const category = SERVICE_CATEGORIES.find((c) => c.slug === categorySlug);
  const item = category?.items.find((i) => i.slug === itemSlug);
  return category && item ? { category, item } : null;
}

export function getCategory(slug: string) {
  return SERVICE_CATEGORIES.find((c) => c.slug === slug);
}
