import type { ServiceDetailEnhancement } from "@/types";
import { buildPillarFaqs } from "@/lib/pillar-faqs";

const WEB_PRICING = [
  {
    name: "Essential",
    range: "₹60,000 – ₹1,20,000",
    description: "Focused scope with core pages and mobile-first design.",
    includes: ["Up to 8 pages", "Contact & WhatsApp", "Technical SEO", "Analytics", "30-day support"],
  },
  {
    name: "Professional",
    range: "₹1,20,000 – ₹3,50,000",
    description: "Full business or corporate site with custom UI and integrations.",
    includes: ["Custom design", "CMS or Next.js", "Blog structure", "Schema markup", "Training"],
  },
  {
    name: "Enterprise",
    range: "₹3,50,000+",
    description: "Multi-language, advanced integrations, and compliance needs.",
    includes: ["Discovery & SRS", "Role-based content", "API integrations", "Performance SLA", "Dedicated PM"],
  },
];

export const WEBSITE_DETAIL_ENHANCEMENTS: ServiceDetailEnhancement[] = [
  {
    categorySlug: "website-development",
    serviceSlug: "corporate-website",
    metaTitle: "Corporate Website Development in Mangalore & Karnataka — E26 Media",
    metaDescription:
      "Premium corporate website development in Mangalore. Multi-page brand sites for B2B, corporates, and professional services. SEO-ready, mobile-first. Clients: Lamiya Alkhaleej.",
    heroHighlight: "Corporate Website",
    intro: [
      "A corporate website is the digital headquarters of your company — the place investors, partners, recruits, and high-value clients evaluate whether you are credible, established, and worth engaging. In Karnataka's competitive B2B landscape, a template site signals template thinking.",
      "E26 Media builds corporate websites with clear information architecture: leadership, services, industries, case studies, careers, investor relations, and contact paths optimised for both desktop research and mobile discovery. Lamiya Alkhaleej and other corporate clients trust us for brand-aligned design and performance engineering.",
      "Every corporate build includes technical SEO, analytics, structured data, and staging demos throughout development — delivered from our Mangalore studio with Karnataka-wide and international support.",
    ],
    sections: [
      {
        heading: "What belongs on a modern corporate website",
        paragraphs: [
          "Homepage with clear value proposition and proof — client logos, certifications, key metrics, and primary CTA. About pages covering history, leadership, and culture. Service or product architecture that mirrors how you sell, not how your org chart looks internally.",
          "Case studies and portfolio sections with measurable outcomes. Careers page for talent acquisition. News or insights hub for SEO and thought leadership. Contact with office locations, maps, forms, and click-to-call for mobile users in India.",
          "Optional: multilingual support (English, Kannada, Arabic for Gulf-facing corporates), gated investor resources, and partner portals.",
        ],
      },
      {
        heading: "Corporate website vs generic business site",
        paragraphs: [
          "Business websites focus on lead generation for SMEs. Corporate websites balance lead gen with brand authority, recruitment, investor confidence, and partner enablement. Design language is more refined; content depth is higher; performance and accessibility standards are stricter.",
          "We scope corporate projects with stakeholder workshops — marketing, sales, HR, and leadership — so the site serves every audience without clutter.",
        ],
      },
      {
        heading: "Technology and performance standards",
        paragraphs: [
          "We typically build corporate sites on Next.js for speed and SEO, or headless CMS when marketing teams need frequent updates. Image optimisation, lazy loading, and CDN delivery target 90+ Lighthouse scores.",
          "Security includes SSL, form spam protection, role-based admin access, and backup policies. Integrations with CRM, marketing automation, and analytics are configured during launch.",
        ],
      },
      {
        heading: "Corporate website timeline and investment",
        paragraphs: [
          "Most corporate websites launch in 6–12 weeks depending on content readiness, page count, and approval cycles. Content creation and photography are often the critical path — we coordinate timelines early.",
          "Book a consultation at our Kanakanady office. We prepare relevant portfolio examples and a milestone quote within 24 business hours.",
        ],
      },
    ],
    pricingTiers: WEB_PRICING,
    deliverables: [
      "Stakeholder discovery and sitemap",
      "Custom UI design with brand alignment",
      "Responsive development across devices",
      "Case study and team page templates",
      "Technical SEO and schema markup",
      "Analytics and conversion tracking",
      "CMS or admin training",
      "30-day post-launch support",
    ],
    whyChoose: [
      "Corporate portfolio including Lamiya Alkhaleej",
      "Mangalore-based team with Gulf and India delivery",
      "Performance and SEO engineered from day one",
      "Weekly staging demos — full transparency",
      "Source code and asset ownership",
    ],
    portfolioSlugs: ["lamiya-alkhaleej", "abrar-caterers"],
    relatedSlugs: ["business-website", "website-redesign", "landing-page"],
    faqs: buildPillarFaqs("Corporate Website", [
      { question: "How many pages does a corporate website need?", answer: "Typically 12–30 pages: home, about, services, industries, case studies, careers, news, contact, and legal. We define sitemap in discovery." },
      { question: "Can you redesign our corporate site without losing SEO?", answer: "Yes — 301 redirects, URL preservation, and content migration protect rankings during redesign." },
      { question: "Do you support multilingual corporate sites?", answer: "Yes — English, Kannada, Arabic, and other languages with proper hreflang SEO." },
    ]),
  },
  {
    categorySlug: "website-development",
    serviceSlug: "business-website",
    metaTitle: "Business Website Development in Mangalore — Lead-Generating Sites | E26 Media",
    metaDescription:
      "Business website development in Mangalore and Karnataka. Lead-focused sites for SMEs with SEO, WhatsApp, and fast mobile UX. Free consultation.",
    heroHighlight: "Business Website",
    intro: [
      "A business website exists to generate enquiries — calls, forms, WhatsApp messages, and store visits. If it only looks good but fails to rank on Google or convert mobile visitors, it is a cost centre, not an asset.",
      "E26 Media builds business websites for Karnataka SMEs — caterers, clinics, retailers, consultants, contractors, and service companies. Abrar Caterers, CleanPro, Alfiya, and Layan Products represent the type of outcomes we deliver: professional presence, local visibility, and enquiry-ready UX.",
      "Every business site includes service pages structured for SEO, trust elements (testimonials, certifications, client logos), and analytics so you know which pages drive leads.",
    ],
    sections: [
      {
        heading: "Essential pages for a lead-generating business website",
        paragraphs: [
          "Homepage answering 'what you do', 'who you serve', and 'why trust you' above the fold on mobile. Dedicated service pages — one per offering — each targeting specific keywords like 'catering services Mangalore' or 'cleaning company Karnataka'.",
          "About page with team faces and story — trust matters for local services. Portfolio or gallery. Testimonials. FAQ page for SEO and objection handling. Contact with map, hours, phone, WhatsApp, and form.",
          "Blog or insights section optional but valuable for long-term SEO growth.",
        ],
      },
      {
        heading: "Local SEO built into business websites",
        paragraphs: [
          "We align your site with Google Business Profile — consistent name, address, phone. Service-area pages for Mangalore, Udupi, Bengaluru when you serve multiple cities. Schema markup for LocalBusiness and services.",
          "Fast load times on 4G networks matter — we optimise images and scripts for Indian mobile users who bounce when pages take more than three seconds.",
        ],
      },
      {
        heading: "Integrations that close the loop",
        paragraphs: [
          "WhatsApp click-to-chat with prefilled messages. Google Maps embed. Razorpay or enquiry forms routed to email and spreadsheet. Optional CRM webhooks for Zoho or HubSpot.",
          "Call tracking and GA4 events on every CTA so you attribute leads to pages and campaigns.",
        ],
      },
    ],
    pricingTiers: [
      {
        name: "Starter",
        range: "₹60,000 – ₹1,00,000",
        description: "5–8 pages for new businesses going online.",
        includes: ["Mobile-first design", "5–8 pages", "Contact form", "WhatsApp", "Basic SEO"],
      },
      {
        name: "Growth",
        range: "₹1,00,000 – ₹2,50,000",
        description: "Full service architecture and content depth.",
        includes: ["10–15 pages", "Blog setup", "Local SEO", "Analytics", "Schema markup"],
      },
      {
        name: "Premium",
        range: "₹2,50,000+",
        description: "Custom features, integrations, multilingual.",
        includes: ["Custom UI", "CRM integration", "Advanced SEO", "Copy support", "Maintenance option"],
      },
    ],
    deliverables: [
      "Service page SEO architecture",
      "Mobile-responsive design",
      "WhatsApp and contact integrations",
      "Google Analytics 4 setup",
      "Search Console submission",
      "Admin training for updates",
    ],
    whyChoose: [
      "Proven SME clients across Karnataka",
      "Local SEO expertise for Mangalore markets",
      "Fast mobile performance",
      "Transparent fixed quotes",
      "Same team from design to launch",
    ],
    portfolioSlugs: ["abrar-caterers", "cleanpro", "alfiya", "layan-products"],
    relatedSlugs: ["corporate-website", "landing-page", "website-redesign"],
    faqs: buildPillarFaqs("Business Website", [
      { question: "How fast can a business website go live?", answer: "4–8 weeks when content and approvals move quickly. Rush launches possible with reduced custom design scope." },
      { question: "Can I update the website myself?", answer: "Yes — we train you on CMS or provide a simple admin for content changes." },
    ]),
  },
  {
    categorySlug: "website-development",
    serviceSlug: "landing-page",
    metaTitle: "Landing Page Design & Development in Mangalore — High-Converting Pages | E26 Media",
    metaDescription:
      "Campaign landing pages in Mangalore — Google Ads, product launches, event registration. Fast, conversion-optimised, mobile-first. E26 Media.",
    heroHighlight: "Landing Page",
    intro: [
      "A landing page has one job: convert visitors from a specific campaign into one action — register, call, buy, or download. Unlike full websites, every element must support a single conversion goal without navigation distraction.",
      "E26 Media builds landing pages for Google Ads, Meta Ads, product launches, webinars, and seasonal promotions. Fast load times, mobile-first layout, clear headline-benefit-proof-CTA structure, and conversion tracking are standard.",
      "Pair landing pages with our digital marketing team for end-to-end campaign performance — or deploy on your existing ad accounts.",
    ],
    sections: [
      {
        heading: "When you need a dedicated landing page",
        paragraphs: [
          "Paid search campaigns — sending Google Ads traffic to your homepage wastes quality score and conversion rate. Dedicated pages match ad copy to landing message.",
          "Product launches, event registration, limited offers, and lead magnets (PDF downloads, consultations). A/B testing variants for headline and CTA optimisation.",
        ],
      },
      {
        heading: "Conversion elements we implement",
        paragraphs: [
          "Above-fold value proposition, social proof (logos, testimonials, counts), benefit bullets, risk reversal (guarantees, free consultation), single primary CTA repeated strategically.",
          "Form minimisation — name, phone, email only when possible. WhatsApp alternative for Indian B2B. Thank-you page with next-step CTA and conversion pixel firing.",
        ],
      },
      {
        heading: "Speed and tracking",
        paragraphs: [
          "Sub-2-second load targets on mobile. Minimal JavaScript. GA4, Google Ads conversion tags, Meta pixel — verified before spend goes live.",
        ],
      },
    ],
    pricingTiers: [
      {
        name: "Single Page",
        range: "₹25,000 – ₹50,000",
        description: "One campaign page with form and mobile design.",
        includes: ["Custom design", "Form integration", "Analytics", "1 revision round"],
      },
      {
        name: "Campaign Set",
        range: "₹50,000 – ₹1,00,000",
        description: "Multiple variants for A/B testing or multi-offer campaigns.",
        includes: ["2–3 variants", "Conversion tracking", "Thank-you flow", "Ad team handoff"],
      },
      {
        name: "Ongoing CRO",
        range: "Monthly retainer",
        description: "Continuous testing and optimisation on live campaigns.",
        includes: ["A/B tests", "Heatmap review", "Copy tweaks", "Monthly report"],
      },
    ],
    deliverables: [
      "Mobile-first landing page design",
      "Form or WhatsApp CTA integration",
      "Conversion and analytics tracking",
      "Thank-you / confirmation page",
      "Staging review before launch",
    ],
    whyChoose: [
      "Marketing + development in one team",
      "Proven conversion structure for Karnataka B2B",
      "Fast turnaround for campaign deadlines",
      "Tracking verified before ads go live",
    ],
    portfolioSlugs: ["cleanpro", "abrar-caterers"],
    relatedSlugs: ["business-website", "corporate-website"],
    faqs: buildPillarFaqs("Landing Page", [
      { question: "Landing page vs website homepage?", answer: "Landing pages are campaign-specific with one CTA; homepages serve many audiences. Never send paid traffic to homepage if a dedicated page converts better." },
      { question: "Can you build landing pages for Google Ads only?", answer: "Yes — we coordinate with your ad team or manage ads in-house." },
    ]),
  },
  {
    categorySlug: "website-development",
    serviceSlug: "website-redesign",
    metaTitle: "Website Redesign Services in Mangalore — Modernise Without Losing SEO | E26 Media",
    metaDescription:
      "Website redesign in Mangalore: faster performance, modern UI, preserved SEO rankings. Migrate from legacy WordPress or outdated sites. E26 Media.",
    heroHighlight: "Website Redesign",
    intro: [
      "An outdated website hurts credibility and rankings. Slow load times, non-mobile layouts, broken forms, and stale content tell prospects you are not keeping pace — even if your service quality is excellent.",
      "E26 Media redesigns websites with SEO preservation as a first-class requirement: 301 redirects, URL mapping, content migration, and performance improvements that often boost rankings after launch.",
      "Whether you are on old WordPress, a static HTML site, or a failed template, we audit, replan, redesign, and relaunch with minimal downtime.",
    ],
    sections: [
      {
        heading: "Signs you need a website redesign",
        paragraphs: [
          "Mobile usability failures, Lighthouse scores below 70, declining organic traffic, high bounce rates, brand refresh without digital update, or embarrassment sending your URL to prospects.",
          "Security issues on unmaintained WordPress — outdated plugins, no SSL, malware risk.",
        ],
      },
      {
        heading: "Our redesign process protects SEO",
        paragraphs: [
          "Full crawl of existing URLs, backlinks, and ranking keywords. Redirect map from old to new structure. Content audit — keep, merge, expand, or retire pages intentionally.",
          "Staging environment for review before DNS cutover. Post-launch Search Console monitoring for 404s and indexation issues.",
        ],
      },
      {
        heading: "Redesign outcomes clients see",
        paragraphs: [
          "Faster load times, improved mobile conversion, modern brand alignment, easier content updates, and often recovered or improved keyword positions within 60–90 days when technical SEO is done right.",
        ],
      },
    ],
    pricingTiers: WEB_PRICING,
    deliverables: [
      "SEO audit and redirect plan",
      "New UI design",
      "Content migration",
      "Performance optimisation",
      "Post-launch SEO monitoring",
      "Training on new CMS",
    ],
    whyChoose: [
      "SEO-safe migration methodology",
      "Before/after performance focus",
      "Experience with WordPress and Next.js",
      "Mangalore team available on-site",
    ],
    portfolioSlugs: ["abrar-caterers", "lamiya-alkhaleej"],
    relatedSlugs: ["business-website", "corporate-website", "website-maintenance"],
    faqs: buildPillarFaqs("Website Redesign", [
      { question: "Will we lose Google rankings during redesign?", answer: "Not when redirects and content migration are planned correctly — rankings often improve with speed and UX gains." },
      { question: "Can you redesign without changing our domain?", answer: "Yes — same domain is standard. We manage DNS cutover with minimal downtime." },
    ]),
  },
  {
    categorySlug: "website-development",
    serviceSlug: "hospital-website",
    metaTitle: "Hospital Website Development in Mangalore & Karnataka — E26 Media",
    metaDescription:
      "Hospital and clinic website development in Mangalore. Doctor profiles, appointments, departments, local healthcare SEO. Trusted healthcare web design.",
    heroHighlight: "Hospital Website",
    intro: [
      "Patients search on mobile before they call — doctor names, specialties, hours, insurance, and directions. A hospital or clinic website must be trustworthy, fast, and easy to navigate under stress.",
      "E26 Media builds healthcare websites for hospitals, multi-specialty clinics, diagnostic centres, and dental practices across Karnataka. Department pages, doctor profiles, appointment enquiry flows, health packages, and Google Maps integration are standard.",
      "We understand healthcare marketing sensitivity — clear disclaimers, accessible design, and HIPAA-aware patterns where applicable for international clients.",
    ],
    sections: [
      {
        heading: "Healthcare website features patients expect",
        paragraphs: [
          "Find-a-doctor directory with specialty filters. Department and service pages (cardiology, orthopaedics, maternity, etc.). Online appointment request — not necessarily full booking engine in phase one.",
          "Emergency contact prominent on mobile. Health checkup packages. Insurance and TPA information. Location, parking, and visiting hours.",
        ],
      },
      {
        heading: "Local healthcare SEO",
        paragraphs: [
          "Rank for 'hospital in Mangalore', specialty + city keywords. Google Business Profile alignment. Schema for MedicalOrganization and Physician where appropriate.",
          "Fast mobile performance — patients on 4G will not wait for heavy image galleries.",
        ],
      },
      {
        heading: "Compliance and trust design",
        paragraphs: [
          "Professional photography direction, accreditation badges, patient testimonial policies, and clear privacy statements for form data collection.",
        ],
      },
    ],
    pricingTiers: WEB_PRICING,
    deliverables: [
      "Doctor and department page templates",
      "Appointment enquiry forms",
      "Healthcare SEO structure",
      "Mobile-optimised design",
      "GBP alignment guidance",
    ],
    whyChoose: [
      "Healthcare page architecture experience",
      "Local SEO for Karnataka clinics",
      "Mobile-first for patient search behaviour",
      "Optional HMS integration path",
    ],
    portfolioSlugs: ["lamiya-alkhaleej"],
    relatedSlugs: ["business-website", "corporate-website"],
    faqs: buildPillarFaqs("Hospital Website", [
      { question: "Can you integrate online appointment booking?", answer: "Yes — enquiry forms in phase one; full booking engines with calendar sync in phase two." },
      { question: "Do you build Hospital Management Software too?", answer: "Yes — see our HMS software service for operations beyond marketing websites." },
    ]),
  },
];
