type CategoryProfile = {
  focus: string;
  audience: string;
  tech: string[];
  localAngle: string;
};

const PROFILES: Record<string, CategoryProfile> = {
  "website-development": {
    focus: "high-performance, SEO-optimized websites",
    audience: "SMEs, corporates, hospitals, schools, NGOs, and hospitality brands",
    tech: ["Next.js", "React", "WordPress", "Headless CMS", "Vercel", "Tailwind CSS"],
    localAngle:
      "Karnataka businesses — especially in Mangalore, Udupi, Bengaluru, and Mysuru — lose enquiries when sites load slowly or fail on mobile. We engineer Core Web Vitals-friendly builds that rank on Google and convert visitors in under three seconds.",
  },
  "software-development": {
    focus: "custom ERP, CRM, billing, inventory, and business automation software",
    audience: "manufacturers, retailers, hospitals, schools, and growing enterprises",
    tech: ["Node.js", "PostgreSQL", "React", "Python", "REST APIs", "Docker"],
    localAngle:
      "Many Karnataka SMEs still run on spreadsheets and WhatsApp threads. Custom software centralises operations, reduces errors, and gives owners real-time visibility — whether you operate from Mangalore or Hubballi.",
  },
  "mobile-app-development": {
    focus: "Android, iOS, Flutter, React Native, and PWA applications",
    audience: "consumer brands, field teams, startups, and service businesses",
    tech: ["Flutter", "React Native", "Kotlin", "Swift", "Firebase", "Google Play"],
    localAngle:
      "Mobile-first users dominate search in coastal Karnataka. Apps like our Tawakkal Muslim launch on Google Play demonstrate how local businesses can reach customers directly — without relying solely on social media algorithms.",
  },
  "ai-solutions": {
    focus: "AI chatbots, assistants, workflow automation, and document processing",
    audience: "customer support teams, operations managers, and growth-focused SMEs",
    tech: ["OpenAI APIs", "LangChain", "WhatsApp Business API", "Node.js", "Vector DBs"],
    localAngle:
      "Practical AI saves staff time on repetitive enquiries — common questions about pricing, hours, and services — while keeping human handoff for complex cases. We implement AI with clear ROI, not hype.",
  },
  "cloud-solutions": {
    focus: "AWS, Azure, GCP migration, hosting, backups, and infrastructure",
    audience: "businesses outgrowing shared hosting or legacy on-premise servers",
    tech: ["AWS", "Azure", "Google Cloud", "Docker", "Kubernetes", "Terraform"],
    localAngle:
      "Reliable cloud infrastructure means fewer Sunday-night outages before Monday sales. We right-size resources so Karnataka businesses pay for performance — not unused capacity.",
  },
  "digital-marketing": {
    focus: "SEO, local SEO, Google Ads, Meta Ads, and conversion optimization",
    audience: "local service businesses, ecommerce, B2B, and hospitality",
    tech: ["Google Analytics 4", "Search Console", "Google Ads", "Meta Business Suite"],
    localAngle:
      "Ranking for 'website development company in Mangalore' or 'caterers near me' requires local SEO discipline — Google Business Profile, reviews, citations, and location pages. We combine organic and paid channels for predictable lead flow.",
  },
  branding: {
    focus: "logo design, brand identity, guidelines, and creative assets",
    audience: "startups, restaurants, corporates, and NGOs building market presence",
    tech: ["Figma", "Adobe Creative Suite", "Brand strategy workshops"],
    localAngle:
      "In competitive Karnataka markets, visual consistency builds trust before a prospect reads a single line of copy. Strong branding supports websites, social media, and sales decks with one coherent story.",
  },
  "ui-ux-design": {
    focus: "research-driven UI, wireframes, prototypes, and design systems",
    audience: "product teams, SaaS founders, and businesses redesigning digital products",
    tech: ["Figma", "FigJam", "Prototyping", "Usability testing", "Design tokens"],
    localAngle:
      "Good UX reduces support calls and cart abandonment. We validate flows with real users before development — saving rework and budget for Mangalore and Bengaluru clients alike.",
  },
  "it-consulting": {
    focus: "digital transformation, technology roadmaps, and product strategy",
    audience: "SME owners, startup founders, and operations leaders modernising systems",
    tech: ["Architecture reviews", "Stack audits", "Agile roadmapping"],
    localAngle:
      "Not every problem needs custom software. Sometimes the right answer is integrating existing tools, phased migration, or an MVP to test demand. We advise honestly — based on business goals, not billable hours.",
  },
};

export function buildRichServiceContent(
  categorySlug: string,
  title: string,
  tagline: string
) {
  const lower = title.toLowerCase();
  const profile = PROFILES[categorySlug] ?? PROFILES["website-development"];

  const overview = [
    `E26 Media delivers professional ${lower} for ${profile.audience} across Karnataka and internationally. ${tagline}.`,
    `Based in Mangalore with clients from Lamiya Alkhaleej, Abrar Caterers, Tawakkal Overseas, Floriva Gifts, and Al Mirath, we combine ${profile.focus} with transparent project management — fixed scopes, weekly demos, and documented handover.`,
    profile.localAngle,
    `Whether you are launching a new product or modernising legacy systems, our team handles discovery, design, development, QA, deployment, and post-launch support so you can focus on running your business.`,
  ].join(" ");

  const problems = [
    `Manual or outdated processes slowing ${lower} delivery and increasing operational cost`,
    `Low-quality vendor work producing template-like results that hurt brand credibility and SEO rankings`,
    `Poor mobile experience — over 70% of Karnataka users browse on smartphones first`,
    `No clear analytics or conversion tracking, making marketing spend impossible to optimise`,
    `Disconnected tools (WhatsApp, spreadsheets, legacy software) creating data silos and reporting delays`,
    `Difficulty finding a Mangalore-area technology partner who communicates clearly and meets deadlines`,
  ];

  const solutions = [
    `Custom ${lower} mapped to your workflows, KPIs, and growth targets — not one-size-fits-all templates`,
    `Performance-first engineering targeting 90+ Lighthouse scores and fast Time to First Byte`,
    `SEO-ready architecture: semantic HTML, structured data, meta tags, sitemaps, and internal linking`,
    `Responsive design tested on real devices — Android-heavy markets like India included`,
    `Integrations with Google Business Profile, payment gateways, CRM, WhatsApp, and accounting tools`,
    `Dedicated project manager, weekly progress updates, and training for your internal team`,
  ];

  const benefits = [
    `Faster time-to-market with agile sprints and early prototype validation`,
    `Higher conversion rates through UX optimised for your specific audience and industry`,
    `Improved Google visibility for commercial and local keywords in Karnataka`,
    `Reduced long-term cost via maintainable code, documentation, and scalable architecture`,
    `Professional brand presence that competes with national and international players`,
    `Ongoing support packages — maintenance, monitoring, updates, and feature enhancements`,
  ];

  const features = [
    "Discovery workshop and detailed requirement document (SRS)",
    "Competitive and keyword research for SEO-led projects",
    "Wireframes and interactive UI prototypes before development",
    "Agile development with staging environment and client demos",
    "Cross-browser and mobile QA, accessibility checks (WCAG basics)",
    "Google Analytics 4, Search Console, and conversion tracking setup",
    "Deployment to production with SSL, CDN, and performance tuning",
    "Training session and handover documentation for your team",
    "30-day post-launch support window on every project",
  ];

  const contentSections = [
    {
      heading: `Why ${title} matters for Karnataka businesses`,
      paragraphs: [
        `Businesses investing in ${lower} today are not chasing trends — they are removing friction from how customers discover, trust, and buy from them. ${profile.localAngle}`,
        `E26 Media has spent 3+ years serving clients across Mangalore, Udupi, Bengaluru, Mysuru, and Hubballi, plus international brands in the UAE and Australia. That regional context shapes how we approach language, mobile usage, payment preferences, and local search behaviour.`,
      ],
    },
    {
      heading: "What makes E26 Media different",
      paragraphs: [
        `We are not a template shop. Every ${lower} engagement starts with understanding your business model, competitors, and success metrics. You work with the same team from discovery through launch — no bait-and-switch to junior developers mid-project.`,
        `Our portfolio includes live production work you can verify: corporate websites, ecommerce stores, mobile apps on Google Play, and digital marketing campaigns with measurable lead growth. We welcome technical due diligence before you sign.`,
      ],
    },
    {
      heading: "Technology and quality standards",
      paragraphs: [
        `We build with ${profile.tech.join(", ")} — choosing the stack based on your timeline, budget, and long-term maintainability rather than hype.`,
        `Security, backups, and role-based access are standard on software projects. Marketing projects include ethical SEO — no black-hat tactics that risk Google penalties.`,
      ],
    },
    {
      heading: "Getting started with E26 Media",
      paragraphs: [
        `Book a free consultation at our Mangalore head office (Shalimar Complex, Kanakanady) or via video call. We respond within 24 business hours with a recommended approach, timeline, and transparent quote.`,
        `Call +91 8495901407, WhatsApp us, or submit the contact form on this page. Mention '${title}' and we'll prepare relevant case studies from our portfolio before the call.`,
      ],
    },
  ];

  const faqs = [
    {
      question: `How much does ${lower} cost in Mangalore / Karnataka?`,
      answer: `Pricing depends on scope — features, integrations, content volume, and timeline. Landing pages start lower; ERP and mobile apps require larger investment. After a free consultation we provide a fixed quote with milestone payments. No hidden fees.`,
    },
    {
      question: `How long does a ${lower} project take?`,
      answer: `Focused websites often launch in 3–8 weeks. Software and mobile apps typically run 8–16+ weeks depending on complexity. We share a Gantt-style milestone plan before development begins.`,
    },
    {
      question: `Do you serve clients outside Mangalore?`,
      answer: `Yes. We work with businesses across Karnataka, India, and internationally via video calls and collaborative tools. In-person meetings are available in Mangalore and nearby coastal cities.`,
    },
    {
      question: "Do you provide SEO with website projects?",
      answer: `Yes. Technical SEO — site speed, meta tags, schema markup, sitemap, robots.txt, and mobile optimisation — is included in website builds. Ongoing content SEO and local SEO are available as marketing retainers.`,
    },
    {
      question: "What support do you offer after launch?",
      answer: `We offer maintenance plans covering security updates, backups, uptime monitoring, content changes, and feature enhancements. Marketing clients receive monthly performance reports with actionable recommendations.`,
    },
    {
      question: "How do I get started?",
      answer: `Visit our Contact page or WhatsApp +91 8495901407. Share your goals, timeline, and budget range. We'll schedule a discovery call and follow up with a written proposal.`,
    },
  ];

  return {
    overview,
    problems,
    solutions,
    benefits,
    features,
    contentSections,
    faqs,
    technologies: profile.tech,
    industries: getIndustriesForCategory(categorySlug),
  };
}

function getIndustriesForCategory(slug: string): string[] {
  const map: Record<string, string[]> = {
    "website-development": ["Healthcare", "Education", "Hospitality", "Retail", "NGOs", "Corporate"],
    "software-development": ["Manufacturing", "Retail", "Healthcare", "Education", "Finance"],
    "mobile-app-development": ["Startups", "Retail", "Healthcare", "Education", "Hospitality"],
    "ai-solutions": ["Corporate", "Retail", "Healthcare", "Startups", "Hospitality"],
    "cloud-solutions": ["Corporate", "Finance", "Manufacturing", "Healthcare"],
    "digital-marketing": ["Hospitality", "Restaurants", "Real Estate", "Retail", "Healthcare"],
    branding: ["Restaurants", "Startups", "Retail", "NGOs", "Corporate"],
    "ui-ux-design": ["Startups", "Corporate", "Healthcare", "Education", "Finance"],
    "it-consulting": ["Corporate", "Manufacturing", "Startups", "Finance", "Construction"],
  };
  return map[slug] ?? ["Corporate", "Retail", "Startups", "Healthcare", "Education"];
}
