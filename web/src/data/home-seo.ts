import type { FAQ } from "@/types";

/** Homepage SEO metadata (brand suffix added by formatSeoTitle). */
export const HOME_SEO = {
  metaTitle: "Web, Software & Apps in Mangalore & Bangalore",
  metaDescription:
    "E26 Media is a website, software, and mobile app development company in Mangalore & Bangalore — plus digital marketing. Fixed quotes. Free consultation.",
  h1: "Website, Software & Mobile App Development Company in Mangalore & Bangalore",
  heroEyebrow: "E26 Media · Mangalore & Bangalore",
  heroDescription:
    "E26 Media Production Pvt. Ltd. builds custom websites, business software, mobile apps, and digital marketing systems for startups, SMEs, and enterprises across Mangalore, Bangalore, and Karnataka. We combine SEO-friendly development, transparent fixed quotes, and post-launch support so your digital investment generates leads — not just a pretty homepage.",
  heroHighlights: [
    "Custom Website Development",
    "Software Development",
    "Mobile App Development",
    "Digital Marketing",
    "AI Automation Solutions",
  ],
  aboutHeading: "About E26 Media — technology partner for Karnataka businesses",
  aboutParagraphs: [
    "E26 Media is a Mangalore-headquartered digital agency serving clients in Bangalore and across South India. For 3+ years we have delivered websites, custom software, Flutter and React Native apps, SEO, Google Ads, and Meta Ads for healthcare, education, restaurants, retail, manufacturing, and professional services.",
    "Our team works with modern stacks — Next.js, React, Node.js, Flutter, MongoDB, PostgreSQL, AWS, Vercel, and Firebase — and a customer-first process: discovery, fixed scope, weekly demos, and dedicated support after launch. Whether you are a startup in Koramangala or an SME in Kanakanady, you get the same premium delivery without enterprise agency overhead.",
  ],
  whyChooseHeading: "Why businesses choose E26 Media",
  whyChoose: [
    { title: "Experienced Team", body: "Designers, engineers, and marketers who ship production work — not demos — for Karnataka and international clients." },
    { title: "Custom Solutions", body: "Every build is scoped to your workflows, buyers, and growth goals — not a recycled template." },
    { title: "Affordable, Transparent Pricing", body: "Fixed quotes after discovery. No surprise invoices mid-project." },
    { title: "Fast Delivery", body: "Clear milestones. Most business websites launch in 3–8 weeks; apps and software follow an agreed roadmap." },
    { title: "SEO-Friendly Development", body: "Clean structure, performance, and local SEO foundations baked in from sprint one." },
    { title: "Scalable Architecture", body: "Systems that grow with your catalogue, users, and integrations." },
    { title: "Latest Technologies", body: "Next.js, React, Flutter, cloud hosting, and AI automation where they create real ROI." },
    { title: "Dedicated Support", body: "Maintenance, marketing retainers, and enhancement sprints after go-live." },
  ],
  serviceCards: [
    {
      slug: "website-development",
      title: "Website Development",
      description:
        "Corporate, business, and lead-generation websites engineered for speed, mobile users, and local search in Mangalore and Bangalore.",
      benefits: ["SEO-ready structure", "Mobile-first design", "Enquiry & WhatsApp CTAs"],
      href: "/website-development/mangalore",
      secondaryHref: "/website-development/bangalore",
    },
    {
      slug: "software-development",
      title: "Software Development",
      description:
        "Custom ERP, CRM, billing, inventory, and automation software that replaces spreadsheets with reliable workflows.",
      benefits: ["Tailored to your process", "Secure & scalable", "Training & handover"],
      href: "/software-development/mangalore",
      secondaryHref: "/software-development/bangalore",
    },
    {
      slug: "mobile-app-development",
      title: "Mobile App Development",
      description:
        "Android, iOS, Flutter, and React Native apps for customer engagement and field operations.",
      benefits: ["Cross-platform options", "Store-ready polish", "API & backend support"],
      href: "/mobile-app-development/mangalore",
      secondaryHref: "/mobile-app-development/bangalore",
    },
    {
      slug: "digital-marketing",
      title: "Digital Marketing",
      description:
        "SEO, Google Ads, Meta Ads, and content marketing that turn your website into a predictable lead channel.",
      benefits: ["Local SEO", "Paid campaigns", "Conversion tracking"],
      href: "/digital-marketing/mangalore",
      secondaryHref: "/digital-marketing/bangalore",
    },
  ],
  trustSignals: [
    "Free Consultation",
    "100% Custom Development",
    "Transparent Pricing",
    "Dedicated Support",
    "SEO-Friendly Development",
    "Scalable Solutions",
    "Modern Technologies",
  ],
  cityLinks: [
    { label: "Website Development in Mangalore", href: "/website-development/mangalore" },
    { label: "Website Development in Bangalore", href: "/website-development/bangalore" },
    { label: "Software Development in Mangalore", href: "/software-development/mangalore" },
    { label: "Software Development in Bangalore", href: "/software-development/bangalore" },
    { label: "Mobile Apps in Mangalore", href: "/mobile-app-development/mangalore" },
    { label: "Mobile Apps in Bangalore", href: "/mobile-app-development/bangalore" },
    { label: "Digital Marketing in Mangalore", href: "/digital-marketing/mangalore" },
    { label: "Digital Marketing in Bangalore", href: "/digital-marketing/bangalore" },
  ],
  ctaTitle: "Ready to grow your business?",
  ctaText:
    "Let's build your next website, software system, mobile app, or digital marketing campaign — with a free consultation and a clear fixed quote.",
} as const;

export const HOME_FAQS: FAQ[] = [
  {
    question: "Why choose E26 Media for website and software development?",
    answer:
      "E26 Media combines a Mangalore head office with delivery for Bangalore and South India clients. You get fixed quotes, weekly progress updates, SEO-friendly builds, and verifiable portfolio work — not stock demos.",
  },
  {
    question: "Are you a website development company in Mangalore?",
    answer:
      "Yes. E26 Media is headquartered in Kanakanady, Mangalore, and builds SEO-ready, mobile-first websites for coastal Karnataka businesses. See our Mangalore website development page for details.",
  },
  {
    question: "Do you offer website development in Bangalore?",
    answer:
      "Yes. We serve Bangalore startups and SMEs with custom websites, landing pages, and redesigns — via video collaboration and in-person workshops when needed.",
  },
  {
    question: "How much does website development cost?",
    answer:
      "Most business websites range from ₹25,000 for a focused presence to ₹2,00,000+ for custom catalogues or complex builds. After a free discovery call we provide a fixed quote with no hidden fees.",
  },
  {
    question: "How long does software development take?",
    answer:
      "Custom software typically runs 8–16+ weeks depending on modules, integrations, and data migration. We share a milestone plan before development starts.",
  },
  {
    question: "Do you build mobile apps for Android and iOS?",
    answer:
      "Yes. We deliver Android, iOS, Flutter, and React Native apps, plus PWAs when a store app is not required yet.",
  },
  {
    question: "Do you provide SEO and digital marketing?",
    answer:
      "Yes. Our digital marketing practice covers local SEO, Google Ads, Meta Ads, content, and conversion tracking — often paired with a new or redesigned website.",
  },
  {
    question: "Do you work with startups and small businesses?",
    answer:
      "Absolutely. We scope lean MVPs for startups and practical systems for SMEs — transparent pricing and timelines that fit growing teams.",
  },
  {
    question: "Which industries do you serve?",
    answer:
      "Healthcare, education, restaurants and hospitality, retail, manufacturing, real estate, finance, travel, legal, ecommerce, and corporate services across Mangalore, Bangalore, and beyond.",
  },
  {
    question: "Do you provide post-launch support?",
    answer:
      "Yes. Maintenance, hosting guidance, SEO retainers, ads management, and enhancement sprints keep your product performing after go-live.",
  },
  {
    question: "Can I visit your office in Mangalore?",
    answer:
      "Yes. Our head office is at 5th Floor Shalimar Complex, Near Old Ganesh Medical, Kanakanady, Mangalore - 575002. Call +91 8495901407 to schedule a meeting.",
  },
  {
    question: "How do we get started with E26 Media?",
    answer:
      "Book a free consultation via our contact form, call +91 8495901407, or WhatsApp us. Most enquiries receive a response within 24 business hours.",
  },
];
