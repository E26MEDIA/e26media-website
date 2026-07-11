import type { ServiceCategory, ServiceItem, ServiceDetailEnhancement, PillarPricingTier } from "@/types";
import { buildPillarFaqs } from "@/lib/pillar-faqs";

const CATEGORY_PRICING: Record<string, PillarPricingTier[]> = {
  "website-development": [
    { name: "Starter", range: "₹60,000 – ₹1,20,000", description: "Focused website scope for SMEs.", includes: ["Mobile design", "5–8 pages", "SEO basics", "Contact form", "30-day support"] },
    { name: "Professional", range: "₹1,20,000 – ₹3,50,000", description: "Full custom business or corporate site.", includes: ["Custom UI", "Integrations", "Technical SEO", "Analytics", "Training"] },
    { name: "Enterprise", range: "₹3,50,000+", description: "Advanced features and integrations.", includes: ["SRS", "Multi-language", "API integrations", "Performance tuning", "Dedicated PM"] },
  ],
  "software-development": [
    { name: "Module", range: "₹2,00,000 – ₹6,00,000", description: "Single module or MVP.", includes: ["SRS", "Staging demos", "UAT", "Source code", "Documentation"] },
    { name: "Platform", range: "₹6,00,000 – ₹20,00,000", description: "Multi-module business system.", includes: ["Architecture", "Integrations", "Reporting", "Training", "Warranty"] },
    { name: "Enterprise", range: "₹20,00,000+", description: "Large-scale custom software.", includes: ["Dedicated team", "SLA", "Phased rollout", "Security review"] },
  ],
  "mobile-app-development": [
    { name: "MVP", range: "₹3,00,000 – ₹8,00,000", description: "Core app with backend.", includes: ["UX design", "API", "QA", "Store support"] },
    { name: "Full App", range: "₹8,00,000 – ₹18,00,000", description: "Production app both platforms.", includes: ["Cross-platform", "Payments", "Analytics", "Launch"] },
    { name: "Scale", range: "₹18,00,000+", description: "Roadmap and enterprise features.", includes: ["CI/CD", "SLA", "Ongoing dev"] },
  ],
  "ai-solutions": [
    { name: "Pilot", range: "₹75,000 – ₹3,00,000", description: "Focused AI chatbot or automation.", includes: ["Knowledge base", "Deploy", "Handoff", "30-day tune"] },
    { name: "Programme", range: "₹3,00,000 – ₹12,00,000", description: "Multi-workflow AI integration.", includes: ["Integrations", "Dashboard", "Training", "Monitoring"] },
    { name: "Enterprise", range: "Custom", description: "High volume and compliance.", includes: ["SLA", "Security", "Custom models"] },
  ],
  "cloud-solutions": [
    { name: "Migration", range: "₹1,50,000 – ₹5,00,000", description: "Move workloads to cloud safely.", includes: ["Audit", "Migration plan", "Deploy", "Monitoring"] },
    { name: "Managed", range: "₹25,000 – ₹80,000 / month", description: "Ongoing hosting and ops.", includes: ["Backups", "Patches", "Uptime monitoring", "Support"] },
    { name: "Architecture", range: "₹3,00,000+", description: "Enterprise cloud design.", includes: ["Multi-region", "Security", "Cost optimisation"] },
  ],
  "digital-marketing": [
    { name: "Local SEO", range: "₹15,000 – ₹35,000 / mo", description: "Maps and citations.", includes: ["GBP", "On-page", "Reporting", "Reviews"] },
    { name: "Growth", range: "₹35,000 – ₹80,000 / mo", description: "SEO + content + ads support.", includes: ["Content", "Technical SEO", "Ads optional", "Strategy calls"] },
    { name: "Campaigns", range: "Fee + ad spend", description: "Paid media management.", includes: ["Google/Meta", "Landing pages", "Tracking", "ROI reports"] },
  ],
  branding: [
    { name: "Logo", range: "₹25,000 – ₹60,000", description: "Logo design package.", includes: ["Concepts", "Revisions", "Vector files"] },
    { name: "Identity", range: "₹60,000 – ₹1,50,000", description: "Full visual identity.", includes: ["Guidelines", "Stationery", "Social kit"] },
    { name: "Rebrand", range: "₹1,50,000+", description: "Complete brand programme.", includes: ["Workshop", "Rollout", "Web coordination"] },
  ],
  "ui-ux-design": [
    { name: "UX Sprint", range: "₹50,000 – ₹1,50,000", description: "Wireframes and prototype.", includes: ["Research", "Flows", "Prototype", "Handoff"] },
    { name: "UI System", range: "₹1,50,000 – ₹4,00,000", description: "Full UI and design system.", includes: ["Hi-fi UI", "Components", "Specs", "Dev support"] },
    { name: "Product Design", range: "₹4,00,000+", description: "Ongoing product design.", includes: ["Sprints", "Testing", "Iterations"] },
  ],
  "it-consulting": [
    { name: "Audit", range: "₹50,000 – ₹1,50,000", description: "Technology assessment.", includes: ["Stack review", "Roadmap", "Recommendations"] },
    { name: "Strategy", range: "₹1,50,000 – ₹5,00,000", description: "Transformation planning.", includes: ["Workshops", "Architecture", "Vendor selection"] },
    { name: "Advisory", range: "Monthly retainer", description: "Ongoing CTO-style guidance.", includes: ["Calls", "Reviews", "Decision support"] },
  ],
};

const PORTFOLIO_BY_CATEGORY: Record<string, string[]> = {
  "website-development": ["lamiya-alkhaleej", "abrar-caterers", "cleanpro"],
  "software-development": ["supermarket", "restaurant-app"],
  "mobile-app-development": ["tawakkal-muslim-app"],
  "ai-solutions": ["floriva-flower-chatbot", "e26-website-chatbot"],
  "digital-marketing": ["brightleaf", "abrar-caterers"],
  branding: ["lamiya-alkhaleej", "abrar-caterers"],
  "cloud-solutions": ["floriva-gifts"],
  "ui-ux-design": ["lamiya-alkhaleej"],
  "it-consulting": ["brightleaf"],
};

function titleExtras(title: string): { question: string; answer: string }[] {
  const lower = title.toLowerCase();
  const extras: { question: string; answer: string }[] = [];

  if (lower.includes("hospital") || lower.includes("school") || lower.includes("ngo")) {
    extras.push({ question: `Is ${title} suitable for regulated or mission-driven organisations?`, answer: "Yes — we scope compliance-appropriate features, accessibility, and content sensitivity for your sector." });
  }
  if (lower.includes("ecommerce") || lower.includes("retail") || lower.includes("pos")) {
    extras.push({ question: `Does ${title} include payment gateway integration?`, answer: "Yes — Razorpay and other gateways with GST invoicing where required." });
  }
  if (lower.includes("ai") || lower.includes("chatbot")) {
    extras.push({ question: `How do you measure ROI on ${title}?`, answer: "We define metrics upfront — deflection rate, leads captured, hours saved — and review monthly." });
  }
  if (lower.includes("seo") || lower.includes("ads") || lower.includes("marketing")) {
    extras.push({ question: `How do you report results for ${title}?`, answer: "Monthly reports on rankings, traffic, leads, spend, and cost per lead in plain language." });
  }
  if (lower.includes("cloud") || lower.includes("aws") || lower.includes("azure")) {
    extras.push({ question: `Do you provide ongoing cloud support for ${title}?`, answer: "Yes — managed hosting and monitoring retainers are available after migration or setup." });
  }

  extras.push({
    question: `What makes E26 Media the right partner for ${title} in Mangalore?`,
    answer: "Local accountability, verifiable portfolio, fixed milestone quotes, weekly demos, and source ownership on custom builds.",
  });

  return extras;
}

function buildSections(category: ServiceCategory, item: ServiceItem) {
  const lower = item.title.toLowerCase();
  const cat = category.title;

  return [
    {
      heading: `Why ${item.title} matters for Karnataka businesses`,
      paragraphs: [
        `${item.tagline}. Businesses in Mangalore, Bengaluru, Udupi, Mysuru, and Hubballi invest in ${lower} when manual processes, outdated tools, or weak digital presence limit growth.`,
        `E26 Media delivers ${lower} with discovery-first scoping — understanding your workflows, competitors, and KPIs before design or development. You work with one Mangalore-based team from quote to launch.`,
        `Our portfolio includes live production work across ${cat.toLowerCase()} — ask for relevant case studies during your free consultation.`,
      ],
    },
    {
      heading: `What our ${item.title} engagement includes`,
      paragraphs: [
        `Stakeholder discovery and written scope with acceptance criteria. ${item.features.slice(0, 3).join(", ")} and more — tailored to your timeline and budget.`,
        `Weekly staging demos so you see progress, not promises. Quality assurance on real devices and browsers, especially Android-heavy Indian mobile traffic.`,
        `Training, documentation, and post-launch support so your team operates confidently after handover.`,
      ],
    },
    {
      heading: `Technology and quality for ${item.title}`,
      paragraphs: [
        `We use ${item.technologies.slice(0, 4).join(", ")} and related tools — selecting stack based on maintainability, performance, and your team's skills, not hype.`,
        `Security, backups, and role-based access on software projects. Technical SEO and performance budgets on web projects. Ethical marketing practices on growth engagements.`,
      ],
    },
    {
      heading: `Industries we serve with ${item.title}`,
      paragraphs: [
        `Typical clients include ${item.industries.join(", ")} organisations across Karnataka and international markets.`,
        `Whether you are launching, modernising, or scaling, we phase delivery to control risk and match cash flow — MVP first when appropriate, enterprise depth when required.`,
      ],
    },
    {
      heading: `Getting started with ${item.title} at E26 Media`,
      paragraphs: [
        `Book a free consultation at our Kanakanady head office or via video call. Call +91 8495901407, WhatsApp us, or submit the contact form — mention '${item.title}' for relevant examples prepared before the call.`,
        `We respond within 24 business hours with recommended approach, timeline, and transparent fixed quote with milestone payments.`,
      ],
    },
  ];
}

export function buildServiceEnhancement(
  category: ServiceCategory,
  item: ServiceItem
): ServiceDetailEnhancement {
  const pricingTiers = CATEGORY_PRICING[category.slug] ?? CATEGORY_PRICING["website-development"];
  const portfolioSlugs = PORTFOLIO_BY_CATEGORY[category.slug] ?? ["lamiya-alkhaleej"];
  const relatedSlugs = category.items
    .filter((i) => i.slug !== item.slug)
    .slice(0, 3)
    .map((i) => i.slug);

  return {
    categorySlug: category.slug,
    serviceSlug: item.slug,
    metaTitle: `${item.title} in Mangalore | E26 Media`,
    metaDescription: `${item.tagline}. Professional ${item.title.toLowerCase()} for businesses in Mangalore, Bengaluru, and Karnataka. Free consultation — E26 Media.`,
    heroHighlight: item.title,
    intro: [
      `${item.overview.split(".")[0]}.`,
      `E26 Media provides ${item.title.toLowerCase()} for ${category.title.toLowerCase()} clients across Karnataka — with fixed-scope quotes, milestone payments, and weekly progress visibility from our Mangalore studio.`,
      `${item.tagline} — delivered with the same team from discovery through launch and post-launch support.`,
    ],
    sections: buildSections(category, item),
    pricingTiers,
    deliverables: item.features,
    whyChoose: [
      `Specialist ${category.title.toLowerCase()} delivery from Mangalore`,
      "Verifiable portfolio and client references",
      "Fixed quotes with milestone payments",
      "Weekly staging demos",
      "Source code ownership on custom builds",
      "Karnataka and international client experience",
    ],
    portfolioSlugs,
    relatedSlugs,
    faqs: buildPillarFaqs(item.title, [
      ...item.faqs,
      ...titleExtras(item.title),
    ]),
  };
}
