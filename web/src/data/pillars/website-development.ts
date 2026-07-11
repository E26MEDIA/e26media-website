import type { ServicePillar } from "@/types";
import { buildPillarFaqs } from "@/lib/pillar-faqs";

const PROCESS = [
  { step: "Discover", description: "Stakeholder interviews, competitor review, goal mapping, and technical audit of your current digital presence." },
  { step: "Plan", description: "Sitemap, wireframe direction, SEO keyword map, fixed quote, and milestone timeline with clear deliverables." },
  { step: "Design", description: "High-fidelity UI aligned to your brand, mobile-first layouts, and client approval before development begins." },
  { step: "Build", description: "Next.js or platform-based development with weekly staging demos, performance budgets, and integration testing." },
  { step: "Launch", description: "Cross-device QA, Core Web Vitals tuning, SSL, analytics, Search Console setup, and go-live support." },
  { step: "Grow", description: "Post-launch monitoring, SEO recommendations, A/B tests, and optional maintenance or content retainers." },
];

export const WEBSITE_DEVELOPMENT_PILLAR: ServicePillar = {
  slug: "website-development",
  metaTitle: "Website Development Company in Mangalore & Karnataka — E26 Media",
  metaDescription:
    "Professional website development in Mangalore: corporate sites, ecommerce, landing pages, and SEO-ready builds. Free consultation. Clients include Lamiya Alkhaleej, Abrar Caterers, Floriva Gifts.",
  hero: {
    badge: "Website Development",
    title: "Website development that ranks, loads fast, and converts",
    highlight: "ranks, loads fast, and converts",
    description:
      "Custom websites for businesses across Karnataka — engineered for Google visibility, mobile-first UX, and measurable lead generation. Not templates. Not shortcuts.",
  },
  intro: [
    "Your website is not a brochure — it is your highest-leverage sales asset. In Mangalore, Udupi, Bengaluru, and across Karnataka, the majority of customers research on mobile before they call, visit, or buy. If your site loads slowly, looks outdated, or fails to appear on Google, you are losing enquiries to competitors every day.",
    "E26 Media builds production websites for real businesses — Lamiya Alkhaleej, Abrar Caterers, Floriva Gifts, CleanPro, Alfiya, and Layan Products among them. Every project is custom-scoped, SEO-ready from day one, and delivered with staging demos so you see progress weekly — not just promises at launch.",
    "Whether you need a corporate presence, lead-generating business site, ecommerce store, hospital portal, or campaign landing page, our team handles strategy, design, development, integrations, and launch support from our Kanakanady head office.",
  ],
  sections: [
    {
      heading: "Why Karnataka businesses invest in professional website development",
      paragraphs: [
        "Coastal and inland Karnataka markets are increasingly competitive online. Restaurants, caterers, healthcare providers, retailers, and exporters all depend on Google visibility and WhatsApp-ready contact flows. A professionally built website establishes trust before a prospect reads a single line of copy — especially when competing with national brands.",
        "Template websites and ultra-cheap vendors often produce duplicate code, poor mobile performance, and zero technical SEO. Google rewards fast, well-structured sites with clear service pages and local signals. We engineer for Core Web Vitals, semantic HTML, structured data, and internal linking — the foundations of long-term organic growth.",
        "Beyond rankings, your website must convert. Clear calls to action, click-to-call on mobile, enquiry forms connected to your workflow, and fast-loading galleries and service pages turn traffic into qualified leads. We design every page around your commercial goals — not around what is easiest to ship.",
      ],
    },
    {
      heading: "Types of websites we design and develop",
      paragraphs: [
        "Corporate and business websites — multi-page sites with service architecture, team profiles, case studies, blog or knowledge sections, and CRM-ready forms. Ideal for B2B, professional services, and established SMEs scaling across Karnataka.",
        "Ecommerce and catalogue sites — product management, secure checkout, GST invoicing, shipping rules, and inventory integrations. We have delivered international ecommerce for clients such as Floriva Gifts.",
        "Industry-specific sites — hospital and clinic websites with doctor profiles and appointment flows; educational institution sites with admission funnels; NGO and mission-driven sites; restaurant and catering sites optimised for events and local search.",
        "Landing pages and campaign sites — focused pages for Google Ads, product launches, and seasonal promotions with conversion tracking built in from the start.",
        "Website redesign and migration — modernise legacy WordPress or static sites, improve speed scores, preserve SEO equity, and restructure content for clarity and rankings.",
      ],
    },
    {
      heading: "Our website development approach",
      paragraphs: [
        "We start with discovery — not mockups. Who are your customers? What keywords and locations matter? What does a qualified lead look like? We review competitors in Mangalore and your target markets, audit any existing site, and define success metrics before design begins.",
        "Design is mobile-first and brand-aligned. Wireframes validate structure; high-fidelity UI follows your visual identity or our branding team's input. You approve designs before development — eliminating expensive rework mid-build.",
        "Development uses modern stacks — typically Next.js and React for performance-critical builds, with WordPress or headless CMS where content teams need flexible editing. We integrate WhatsApp, Google Maps, payment gateways, booking tools, and analytics as required.",
        "Every launch includes technical SEO: meta titles, descriptions, canonical URLs, XML sitemap, robots.txt, schema markup, image optimisation, and Search Console setup. You own the code, hosting credentials, and documentation.",
      ],
    },
    {
      heading: "SEO, speed, and performance — built in, not bolted on",
      paragraphs: [
        "Google uses page experience signals — load speed, mobile usability, HTTPS, and stable layouts — as ranking factors. We target 90+ Lighthouse performance scores on marketing sites and optimise images, fonts, and JavaScript delivery accordingly.",
        "Local SEO is critical for Mangalore and Karnataka service businesses. We structure location pages, Google Business Profile alignment, NAP consistency, and service-area content so you compete for 'near me' and city-specific searches.",
        "We set up Google Analytics 4 and conversion events — form submits, calls, WhatsApp clicks — so you know which pages and campaigns drive revenue. Ongoing SEO retainers are available for content, link building, and local citation management.",
      ],
    },
    {
      heading: "Technologies we use for website projects",
      paragraphs: [
        "Next.js and React for high-performance marketing and product sites; WordPress and headless CMS for content-heavy teams; Tailwind CSS for maintainable design systems; Vercel or cloud hosting with CDN and SSL; integrations with Razorpay, WhatsApp Business API, Zoho, HubSpot, and custom APIs.",
        "Stack selection depends on your timeline, budget, internal skills, and long-term roadmap — we recommend honestly rather than forcing a trendy framework.",
      ],
    },
    {
      heading: "Industries we build websites for",
      paragraphs: [
        "Healthcare and hospitals, education and schools, hospitality and hotels, restaurants and catering, retail and ecommerce, real estate, manufacturing, NGOs, corporates, and startups across Karnataka and international markets.",
        "Our portfolio includes live production sites you can verify before signing — ask us for relevant examples during your free consultation.",
      ],
    },
    {
      heading: "Why businesses choose E26 Media for website development",
      paragraphs: [
        "We are based in Mangalore with 3+ years of production delivery and verifiable client work — not stock imagery or fictional case studies. You work with the same team from discovery through launch.",
        "Fixed-scope quotes, milestone payments, weekly demos, and documented handover reduce the risk that plagues outsourced web projects. We welcome technical and reference due diligence.",
      ],
    },
  ],
  pricingTiers: [
    {
      name: "Landing Page",
      range: "₹25,000 – ₹75,000",
      description: "Single campaign or product page optimised for ads and conversions.",
      includes: ["Responsive design", "Contact or lead form", "Basic SEO", "Analytics setup", "1 revision round"],
    },
    {
      name: "Business Website",
      range: "₹60,000 – ₹2,50,000",
      description: "5–15 page site for SMEs — services, about, portfolio, blog structure, local SEO.",
      includes: ["Custom UI design", "WhatsApp & map integration", "Technical SEO", "Mobile optimisation", "30-day support"],
    },
    {
      name: "Corporate / Ecommerce",
      range: "₹2,50,000 – ₹10,00,000+",
      description: "Enterprise sites, multi-language, ecommerce, integrations, and advanced functionality.",
      includes: ["Discovery & SRS", "Staging environment", "Payment & CRM integrations", "Performance tuning", "Training & documentation"],
    },
  ],
  deliverables: [
    "Responsive website across mobile, tablet, and desktop",
    "Custom UI design or approved brand-aligned templates",
    "Technical SEO setup and Search Console configuration",
    "Google Analytics 4 with conversion tracking",
    "Contact forms and WhatsApp integration",
    "SSL certificate and production deployment",
    "Admin training and handover documentation",
    "30-day post-launch support window",
  ],
  whyChoose: [
    "Live portfolio — Lamiya Alkhaleej, Abrar Caterers, Floriva Gifts, CleanPro, and more",
    "Mangalore head office with Karnataka-wide and international delivery",
    "Performance-first engineering targeting 90+ Lighthouse scores",
    "SEO-ready architecture from day one — not an afterthought",
    "Fixed quotes, milestone payments, weekly staging demos",
    "You own source code, hosting access, and documentation",
  ],
  process: PROCESS,
  portfolioSlugs: ["lamiya-alkhaleej", "abrar-caterers", "floriva-gifts", "cleanpro", "alfiya", "layan-products"],
  faqs: buildPillarFaqs("Website Development", [
    { question: "Do you build websites with WordPress?", answer: "Yes — when content teams need familiar editing workflows. We also build Next.js sites for maximum performance and recommend the stack based on your goals." },
    { question: "Is SEO included in website development?", answer: "Technical SEO — site speed, meta tags, schema, sitemap, mobile optimisation — is standard. Ongoing content SEO and link building are available as marketing retainers." },
    { question: "Can you redesign my existing website without losing Google rankings?", answer: "Yes. We plan 301 redirects, preserve URL structure where possible, and migrate content carefully to protect SEO equity." },
    { question: "Do you write website content?", answer: "We structure pages for conversion and SEO. Professional copywriting can be included in scope or coordinated with your team." },
    { question: "Can you integrate WhatsApp on my website?", answer: "Yes. Click-to-WhatsApp buttons, prefilled messages, and enquiry routing are standard integrations for Karnataka businesses." },
    { question: "Do you build ecommerce websites?", answer: "Yes — product catalogues, checkout, payment gateways, and shipping rules for India and international markets." },
    { question: "Will my website work on all mobile phones?", answer: "Yes. We test on real Android devices — critical for Indian markets where mobile traffic dominates." },
    { question: "Can you host my website?", answer: "We deploy to reliable cloud hosting (Vercel, AWS, or your preferred provider) and can include managed hosting in maintenance plans." },
  ]),
};
