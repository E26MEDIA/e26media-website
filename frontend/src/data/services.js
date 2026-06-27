// ============================================================
// SERVICES DATA — Add / edit services here. Each service has its
// own dedicated page at /services/:slug. Icons map to lucide-react.
//
// CLIENT WORK FORMAT (per service) — add sites you built for clients:
//   clientWork: [
//     {
//       name: "Client Business Name",
//       url: "https://clientwebsite.com",
//       image: "https://clientwebsite.com/path-to-screenshot-or-og-image.jpg",
//     },
//   ],
// Tip: use the site's og:image, or a screenshot saved to /public/client-work/
const sitePreview = (url) =>
  `https://image.thum.io/get/width/800/crop/600/noanimate/${url}`;
// ============================================================
export const SERVICES = [
  {
    slug: "web-design-development",
    icon: "Monitor",
    title: "Web Design & Development",
    tagline: "Conversion-focused web experiences",
    short:
      "We build fast, responsive, and visually stunning web experiences engineered to convert traffic into loyal business clients.",
    heroImage:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
    overview:
      "From corporate flagship sites to high-volume ecommerce platforms, we design and engineer web products that load instantly, rank well, and convert. Every build is responsive, accessible, and tuned for Core Web Vitals.",
    offerings: [
      { title: "Corporate Websites", desc: "Premium brand-led sites for enterprises and growing companies." },
      { title: "Business Websites", desc: "Lead-generating marketing sites with clear conversion paths." },
      { title: "Ecommerce Websites", desc: "Headless, secure, hyper-optimized storefronts that scale." },
      { title: "Landing Pages", desc: "High-converting campaign pages built for paid traffic." },
      { title: "UI/UX Design", desc: "Research-driven interfaces and design systems." },
      { title: "CMS Development", desc: "Editable content structures your team can manage." },
    ],
    benefits: [
      { title: "Blazing Performance", desc: "Sub-second loads and 95+ Lighthouse scores out of the box." },
      { title: "SEO Engineered", desc: "Semantic HTML and technical SEO baked into every page." },
      { title: "Pixel-Perfect Design", desc: "Premium, on-brand UI that builds instant trust." },
      { title: "Built To Scale", desc: "Modular architecture ready for long-term growth." },
    ],
    gallery: [
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
      "https://images.pexels.com/photos/7621358/pexels-photo-7621358.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      "https://images.pexels.com/photos/6476253/pexels-photo-6476253.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      "https://images.pexels.com/photos/4841737/pexels-photo-4841737.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    ],
    clientWork: [
      {
        name: "Lamiya Alkhaleej",
        url: "https://www.lamiyaalkhaleej.com/",
        image: sitePreview("https://www.lamiyaalkhaleej.com/"),
      },
      {
        name: "Abrar Caterers",
        url: "https://www.abrarcaterers.com/",
        image: sitePreview("https://www.abrarcaterers.com/"),
      },
      {
        name: "Tawakkal Muslim",
        url: "https://www.tawakkalmuslim.com/",
        image: sitePreview("https://www.tawakkalmuslim.com/"),
      },
    ],
  },
  {
    slug: "software-development",
    icon: "Cpu",
    title: "Software Development",
    tagline: "Enterprise systems that automate growth",
    short:
      "Empower your organization with tailored, highly scalable enterprise solutions that automate complex business processes.",
    heroImage:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
    overview:
      "We architect bespoke business software — ERPs, CRMs, billing engines, and automation tools — that replace manual workflows with secure, real-time systems. Built on modern cloud infrastructure for reliability at scale.",
    offerings: [
      { title: "ERP Systems", desc: "Unified operations, inventory, and finance in one platform." },
      { title: "CRM Solutions", desc: "Custom pipelines, automation, and customer 360 views." },
      { title: "Billing Software", desc: "Automated invoicing, subscriptions, and reconciliation." },
      { title: "Automation Tools", desc: "Eliminate repetitive work with smart workflow engines." },
      { title: "Enterprise Applications", desc: "Mission-critical internal apps built for scale." },
      { title: "Cloud Software", desc: "Resilient, secure SaaS deployed on AWS / Docker." },
    ],
    benefits: [
      { title: "Process Automation", desc: "Cut manual overhead and reduce costly human error." },
      { title: "Real-Time Data", desc: "Live dashboards and WebSocket-driven insights." },
      { title: "Enterprise Security", desc: "Role-based access, encryption, and audit trails." },
      { title: "Scalable Cloud", desc: "Infrastructure that grows with your operations." },
    ],
    gallery: [
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
      "https://images.unsplash.com/photo-1686061594225-3e92c0cd51b0",
      "https://images.unsplash.com/photo-1560472354-b33ff0c44a43",
      "https://images.pexels.com/photos/340152/pexels-photo-340152.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    ],
    clientWork: [
      {
        name: "Floriva Gifts Ecommerce",
        url: "https://florivagifts.com/country/australia",
        image: sitePreview("https://florivagifts.com/country/australia"),
      },
    ],
  },
  {
    slug: "mobile-app-development",
    icon: "Smartphone",
    title: "Mobile App Development",
    tagline: "Native & cross-platform mobile apps",
    short:
      "Deliver powerful, seamless mobile user experiences on iOS and Android platforms engineered with modern codebases.",
    heroImage:
      "https://images.pexels.com/photos/35052818/pexels-photo-35052818.jpeg",
    overview:
      "We craft beautiful, performant mobile apps — native and Flutter cross-platform — with offline support, secure auth, and deep API integration. From consumer ecommerce apps to enterprise field tools.",
    offerings: [
      { title: "Android Apps", desc: "Native Kotlin apps tuned for the Play Store." },
      { title: "iOS Apps", desc: "Native Swift apps polished for the App Store." },
      { title: "Flutter Apps", desc: "One codebase, both platforms, native performance." },
      { title: "Business Apps", desc: "Internal field, sales, and operations tools." },
      { title: "Ecommerce Apps", desc: "Mobile commerce with secure payments." },
      { title: "API Integration", desc: "Seamless connections to your backend systems." },
    ],
    benefits: [
      { title: "Cross-Platform Reach", desc: "Ship to iOS and Android from a single codebase." },
      { title: "Native Performance", desc: "60fps interactions and instant launch times." },
      { title: "Secure By Design", desc: "Biometric login and encrypted data at rest." },
      { title: "Ongoing Support", desc: "Continuous updates and store compliance." },
    ],
    gallery: [
      "https://images.pexels.com/photos/35052818/pexels-photo-35052818.jpeg",
      "https://images.pexels.com/photos/35052791/pexels-photo-35052791.jpeg",
      "https://images.unsplash.com/photo-1634403665481-74948d815f03",
      "https://images.unsplash.com/photo-1629494893504-d41e26a02631",
    ],
    clientWork: [
      {
        name: "FitTrack",
        url: "https://play.google.com/store/apps/details?id=com.tawakkalmuslim&hl=en_IN",
        image:
          "https://play-lh.googleusercontent.com/_L6Sb1W6ZD9NGNN0at3zbMVdrtV-Hiq4gbfjDLnaoM_Oz_TbZqX0Fd06UZqTmFFQrhOPcDwH8dVRtWHv_vxK",
      },
    ],
  },
  {
    slug: "digital-marketing",
    icon: "TrendingUp",
    title: "Digital Marketing",
    tagline: "Data-driven growth & lead generation",
    short:
      "Drive predictable, results-focused business growth with data-driven paid advertising, organic search, and branding strategies.",
    heroImage:
      "https://images.pexels.com/photos/927576/pexels-photo-927576.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    overview:
      "We turn marketing spend into measurable revenue. Our team blends technical SEO, high-ROI paid media, and sharp branding to fill your pipeline with qualified leads — backed by transparent analytics.",
    offerings: [
      { title: "SEO", desc: "Technical + content SEO that ranks and converts." },
      { title: "Google Ads", desc: "High-intent search campaigns with strong ROAS." },
      { title: "Meta Ads", desc: "Creative-led social campaigns across Meta." },
      { title: "Social Media Marketing", desc: "Consistent, on-brand organic growth." },
      { title: "Branding", desc: "Identity, messaging, and positioning that resonate." },
      { title: "Lead Generation", desc: "Funnels engineered to capture qualified demand." },
    ],
    benefits: [
      { title: "Predictable Pipeline", desc: "Reliable, qualified lead flow month over month." },
      { title: "Measurable ROI", desc: "Transparent reporting tied to revenue, not vanity." },
      { title: "Full-Funnel Strategy", desc: "Awareness to conversion, all aligned." },
      { title: "Creative That Converts", desc: "Ad creative and copy built to perform." },
    ],
    gallery: [
      "https://images.pexels.com/photos/927576/pexels-photo-927576.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      "https://images.pexels.com/photos/12813050/pexels-photo-12813050.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      "https://images.unsplash.com/photo-1526628953301-3e589a6a8b74",
      "https://images.pexels.com/photos/9553905/pexels-photo-9553905.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    ],
    clientWork: [
      {
        name: "BrightLeaf",
        url: "https://brightleaf.com",
        image: sitePreview("https://brightleaf.com"),
      },
      {
        name: "Abrar Caterers",
        url: "https://www.abrarcaterers.com/",
        image: sitePreview("https://www.abrarcaterers.com/"),
      },
      {
        name: "Al Mirath",
        url: "https://www.almirath.ae/",
        image: sitePreview("https://www.almirath.ae/"),
      },
    ],
  },
];

export const getServiceBySlug = (slug) =>
  SERVICES.find((s) => s.slug === slug);
