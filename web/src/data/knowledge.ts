import type { BlogPost } from "@/types";
import { BLOG_POSTS } from "@/data/blogs";
import { RESOURCES } from "@/data/resources";

export type KnowledgeCategory = {
  slug: string;
  title: string;
  description: string;
  type: "topic" | "format";
  intro?: string[];
};

export const KNOWLEDGE_CATEGORIES: KnowledgeCategory[] = [
  {
    slug: "website-development",
    title: "Website Development",
    description: "Guides on websites, pricing, and web strategy for Karnataka businesses.",
    type: "topic",
    intro: [
      "A professional website is the foundation of digital credibility for businesses in Mangalore, Bengaluru, Udupi, and across Karnataka. Whether you need a corporate presence, lead-generating business site, ecommerce store, or industry-specific portal, the guides in this section help you plan scope, budget, and vendor selection before you invest.",
      "Our website development articles cover pricing transparency, technology choices (WordPress vs custom Next.js), SEO readiness, mobile performance, and conversion-focused design — written for business owners, not developers. Each guide links to E26 Media's commercial website services when you are ready to implement.",
      "Browse articles on website cost in Karnataka, redesign best practices, local SEO alignment, and checklist-driven project planning. New guides are added as clients ask recurring questions during consultations.",
    ],
  },
  {
    slug: "software",
    title: "Software",
    description: "Custom software, ERP, CRM, and business systems.",
    type: "topic",
    intro: [
      "Custom software replaces spreadsheets, WhatsApp coordination, and manual processes that break as your business scales. This section covers ERP, CRM, inventory systems, billing platforms, and bespoke applications for manufacturers, retailers, healthcare providers, and service companies in Karnataka.",
      "Articles explain when off-the-shelf tools suffice versus when custom development pays off, typical investment ranges, implementation timelines, and how to scope a software requirements document. We draw on delivery experience from supermarket POS systems, hospital management modules, and business automation projects.",
      "Use these guides to prepare for a software consultation — or explore our software development services when you need a build partner from discovery through launch and support.",
    ],
  },
  {
    slug: "ai",
    title: "AI",
    description: "Practical AI, chatbots, and automation.",
    type: "topic",
    intro: [
      "Artificial intelligence is most valuable when it solves repetitive business problems — customer support at scale, document processing, workflow automation, and intelligent routing — not when it is deployed as a buzzword slide. Our AI guides focus on practical ROI for Karnataka SMEs and international clients.",
      "Topics include website chatbots, WhatsApp AI assistants, IVR voice automation, and integration patterns that connect AI to your existing CRM, ecommerce, or operations tools. Case references include Floriva Gifts' Australia chatbots and E26 Media's own website assistant.",
      "Read before you buy: understand costs, data requirements, human handoff design, and maintenance expectations. When ready, our AI solutions team scopes fixed projects with live demos of similar deployments.",
    ],
  },
  {
    slug: "branding",
    title: "Branding",
    description: "Logo, identity, and brand strategy.",
    type: "topic",
    intro: [
      "Strong branding precedes effective websites, ads, and sales materials. Before a prospect reads your services, they judge your logo, colours, typography, and visual consistency — especially when competing with established players in Mangalore and Bengaluru markets.",
      "Guides in this section cover logo design investment, brand identity systems, guidelines documentation, packaging, and when to rebrand versus refresh. We explain how branding integrates with website development so you design once and deploy everywhere.",
      "Whether you are launching a restaurant, startup, NGO, or corporate rebrand, these articles help you brief designers clearly and budget realistically for deliverables you will actually use.",
    ],
  },
  {
    slug: "seo",
    title: "SEO",
    description: "Search rankings, local SEO, and organic growth.",
    type: "topic",
    intro: [
      "Search engine optimisation drives qualified traffic without paying per click — but only when technical foundations, content, and local signals align. For Karnataka businesses, local SEO (Google Business Profile, city pages, reviews, NAP consistency) often matters as much as national keyword rankings.",
      "Our SEO guides cover technical audits, content strategy, local search for Mangalore and coastal Karnataka, Core Web Vitals, and how SEO connects to website development and ongoing marketing retainers. Articles are written for owners and marketing managers evaluating agencies or DIY efforts.",
      "Organic growth compounds over months. Use this section to build a realistic roadmap, then engage our digital marketing and dedicated SEO services for implementation and reporting.",
    ],
  },
  {
    slug: "marketing",
    title: "Marketing",
    description: "Digital marketing, ads, and growth.",
    type: "topic",
    intro: [
      "Digital marketing connects your offer to buyers searching on Google, scrolling social feeds, and comparing vendors on their phones. Paid ads deliver immediate visibility; content and SEO build long-term equity — most Karnataka businesses need both, sequenced to budget and seasonality.",
      "Guides here address Google Ads, Meta advertising, social media strategy, email nurture, conversion optimisation, and analytics setup so you know which channels produce leads versus vanity metrics. We share frameworks from campaigns for hospitality, retail, B2B corporate, and international clients.",
      "Marketing works best on a fast, conversion-ready website. Browse these articles to plan channel mix and measurement, then explore our digital marketing services for managed execution from Mangalore.",
    ],
  },
  {
    slug: "cloud",
    title: "Cloud",
    description: "Hosting, migration, and infrastructure.",
    type: "topic",
    intro: [
      "Cloud infrastructure replaces fragile on-premise servers with scalable, monitored environments on AWS, Azure, or Google Cloud. For web applications, ecommerce, and custom software, hosting decisions directly affect uptime, security, and customer experience during traffic spikes.",
      "Articles in this section explain migration planning, backup and disaster recovery, cost optimisation, managed hosting versus self-administration, and when cloud investment makes sense for SMEs in Karnataka. We draw on delivery experience hosting production apps for retail, ecommerce, and service businesses.",
      "Use these guides to assess your current hosting risks and prepare for a cloud consultation — or engage our cloud solutions team for migration, setup, and managed support.",
    ],
  },
  {
    slug: "mobile",
    title: "Mobile",
    description: "App development and mobile strategy.",
    type: "topic",
    intro: [
      "Mobile apps create owned channels for ordering, engagement, and loyalty — beyond websites and social algorithms. Karnataka users overwhelmingly browse on Android; app strategy must account for device diversity, network conditions, and Play Store or App Store compliance.",
      "Guides cover native Android and iOS, Flutter and React Native cross-platform choices, MVP scoping for startups, PWA alternatives, and post-launch maintenance. Reference projects include published Play Store apps and restaurant ordering systems for Mangalore clients.",
      "Read before building: understand timeline, store policies, and build-vs-responsive-web trade-offs. Our mobile app development team delivers from wireframes through store launch with documented handover.",
    ],
  },
  { slug: "guides", title: "Guides", description: "In-depth articles and playbooks.", type: "format" },
  { slug: "downloads", title: "Downloads", description: "Free checklists and templates.", type: "format" },
];

const BLOG_CATEGORY_MAP: Record<string, string> = {
  "Website Development": "website-development",
  "Software Development": "software",
  SEO: "seo",
  "Mobile App Development": "mobile",
  AI: "ai",
  "Digital Marketing": "marketing",
  "Cloud Solutions": "cloud",
  Branding: "branding",
};

export function getKnowledgeCategoryForPost(post: BlogPost): string {
  return BLOG_CATEGORY_MAP[post.category] ?? "guides";
}

export function getPostsByKnowledgeCategory(categorySlug: string): BlogPost[] {
  if (categorySlug === "guides") return BLOG_POSTS;
  return BLOG_POSTS.filter((p) => getKnowledgeCategoryForPost(p) === categorySlug);
}

export function getKnowledgeCategory(slug: string): KnowledgeCategory | undefined {
  return KNOWLEDGE_CATEGORIES.find((c) => c.slug === slug);
}

export { BLOG_POSTS, RESOURCES };
