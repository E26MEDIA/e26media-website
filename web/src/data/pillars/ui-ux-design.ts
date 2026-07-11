import type { ServicePillar } from "@/types";
import { buildPillarFaqs } from "@/lib/pillar-faqs";

const PROCESS = [
  { step: "Research", description: "User interviews, analytics review, competitor UX audit, and journey mapping for key personas." },
  { step: "Structure", description: "Information architecture, user flows, and low-fidelity wireframes validated before visual design." },
  { step: "Design", description: "High-fidelity UI, component library, responsive breakpoints, and interactive prototypes." },
  { step: "Test", description: "Usability feedback on prototypes, accessibility checks, and stakeholder approval on critical flows." },
  { step: "Handoff", description: "Design specs, assets, and developer-ready documentation for implementation." },
  { step: "Iterate", description: "Post-launch analytics review, A/B test recommendations, and design system updates." },
];

export const UI_UX_DESIGN_PILLAR: ServicePillar = {
  slug: "ui-ux-design",
  metaTitle: "UI/UX Design Agency in Mangalore — Web & App Interface Design | E26 Media",
  metaDescription:
    "Professional UI/UX design in Mangalore: wireframes, prototypes, app interfaces, dashboards, and design systems. Research-driven experiences for web and mobile.",
  hero: {
    badge: "UI/UX Design",
    title: "UI/UX design users understand on first visit",
    highlight: "UI/UX design",
    description:
      "Research-driven UI/UX for websites, mobile apps, and dashboards — wireframes, prototypes, and design systems that development teams can ship accurately.",
  },
  intro: [
    "A beautiful interface that users cannot navigate is worse than a plain one that works. In Karnataka's mobile-first market, most of your customers will experience your product on a phone — often on a slow connection, often while multitasking. UI/UX design is the discipline of making every screen clear, fast, and purposeful so visitors become customers instead of bounces.",
    "E26 Media provides UI/UX design services from Mangalore for websites, mobile applications, admin dashboards, and SaaS products. Our designers work alongside developers and brand strategists — so designs are not thrown over the wall as unattainable mockups, but structured as component systems your engineering team can implement efficiently.",
    "Whether you need wireframes for investor demos, a full redesign of an underperforming website, app UI for Android and iOS, or a scalable design system for a growing product team, we scope fixed deliverables with clear revision rounds.",
  ],
  sections: [
    {
      heading: "Why UI/UX design matters for business outcomes",
      paragraphs: [
        "Conversion rate is a design problem as much as a marketing problem. Confusing navigation, hidden contact buttons, forms with too many fields, and checkout flows that break on mobile directly reduce revenue. Professional UX research identifies where users drop off and fixes the friction before you spend more on ads.",
        "For B2B and corporate sites, design signals credibility. Prospects comparing three vendors in Mangalore or Bengaluru often eliminate options based on website quality before reading a single service description. Consistent typography, spacing, and visual hierarchy communicate professionalism that stock templates cannot replicate.",
        "For software products and internal tools, good UX reduces training costs, support tickets, and employee frustration. Dashboards that surface the right metrics at the right time help managers decide faster — bad dashboards hide data behind clicks nobody discovers.",
      ],
    },
    {
      heading: "UI/UX design services we offer",
      paragraphs: [
        "Website UI design — marketing sites, landing pages, ecommerce storefronts, and corporate portals with mobile-first responsive layouts.",
        "App UI design — native Android and iOS interfaces, Flutter and React Native screen systems, and progressive web app experiences.",
        "Wireframes and information architecture — sitemap validation, user flow diagrams, and low-fidelity layouts before expensive visual design begins.",
        "Interactive prototypes — clickable Figma prototypes for stakeholder approval, usability testing, and developer reference.",
        "Dashboard and admin UI — data tables, filters, charts, role-based views, and complex form workflows for ERP, CRM, and operations software.",
        "Design systems — reusable component libraries, spacing and colour tokens, and documentation so your team ships consistent UI as the product grows.",
      ],
    },
    {
      heading: "Our UI/UX design process",
      paragraphs: [
        "We start with research, not pixels. Who uses the product? What are they trying to accomplish? What devices and contexts matter? Analytics from existing products, competitor reviews, and short user interviews inform every design decision.",
        "Wireframes validate structure and flow without colour distraction. Stakeholders approve navigation, page hierarchy, and critical user journeys before high-fidelity design investment. This prevents expensive rework when someone says 'the homepage feels wrong' after full visual design is complete.",
        "Visual design applies your brand identity — or our branding team's output — across components, states, and breakpoints. We design empty states, error messages, and loading skeletons, not just happy-path screens.",
        "Developer handoff includes annotated Figma files, export assets, spacing specs, and a walkthrough session with your engineering team. When E26 Media also builds the product, design and development share one Figma source of truth.",
      ],
    },
    {
      heading: "UI/UX for web vs mobile vs dashboards",
      paragraphs: [
        "Web marketing sites prioritise scanability, SEO-friendly structure, fast-loading hero sections, and prominent CTAs. Mobile layouts are designed first; desktop extends the same component system with additional content zones.",
        "Mobile apps require platform conventions — Android material patterns, iOS navigation norms, thumb-zone placement, and offline-tolerant states. We design for real device constraints, not desktop mockups shrunk to phone size.",
        "Dashboard and admin interfaces demand information density without chaos: filterable tables, role-based menus, bulk actions, and chart readability at a glance. We balance power-user efficiency with onboarding clarity for new staff.",
      ],
    },
    {
      heading: "Industries we design for",
      paragraphs: [
        "Healthcare and hospitals — patient-friendly portals, appointment flows, and clinician dashboards with accessibility considerations.",
        "Education — admission funnels, parent communication interfaces, and student portals.",
        "Hospitality and restaurants — menu browsing, booking flows, and catering enquiry experiences optimised for mobile.",
        "Retail and ecommerce — product discovery, cart, checkout, and post-purchase tracking.",
        "Finance and corporate — trust-focused layouts, secure form patterns, and executive reporting dashboards.",
        "Startups — MVP interfaces that validate product-market fit without over-investing in polish before traction is proven.",
      ],
    },
    {
      heading: "Why businesses choose E26 Media for UI/UX design",
      paragraphs: [
        "Design and development under one roof — mockups match what ships because the same team implements them.",
        "Mangalore studio with Karnataka and international client experience — video collaboration, async Figma comments, and structured review rounds.",
        "Fixed-scope packages with defined revision rounds — no open-ended design retainers unless you want ongoing support.",
        "Accessibility and performance awareness baked in — contrast ratios, touch targets, and image weight considered during design, not flagged in QA.",
      ],
    },
    {
      heading: "Mobile-first UI design for Karnataka users",
      paragraphs: [
        "Over seventy percent of web traffic in Mangalore, Udupi, and Bengaluru originates on smartphones — often mid-range Android devices on 4G connections that fluctuate in speed. Mobile-first UI design is not a trend label; it is a survival requirement for local businesses competing for 'near me' searches and WhatsApp referral traffic.",
        "We design thumb-reachable navigation, minimum 44-pixel touch targets, legible 16-pixel base typography, and forms that use appropriate mobile keyboards for phone numbers and email. Hero images are compressed and lazy-loaded so above-the-fold content appears before users abandon slow pages.",
        "Click-to-call and click-to-WhatsApp buttons sit in persistent positions on service business sites — caterers, clinics, cleaners, and retailers convert when contact is one tap away, not buried in hamburger menus three levels deep.",
        "Testing on real devices common in Karnataka — not only flagship iPhones in design reviews — catches layout breaks that emulators miss. Your customers' experience defines conversion, not your designer's laptop screen.",
      ],
    },
    {
      heading: "Wireframing and prototyping before visual design",
      paragraphs: [
        "Wireframes strip colour and decoration to validate structure: Does the homepage communicate value in five seconds? Can users find services without scrolling endlessly? Is the enquiry form reachable from every major page? Stakeholders approve logic before pixels absorb budget.",
        "Low-fidelity wireframes speed iteration — moving a section costs hours, not days. We map user flows for critical journeys: first visit to enquiry, product browse to checkout, login to dashboard task completion.",
        "Interactive prototypes in Figma simulate clicks, modals, and multi-step wizards. Sales teams demo product concepts to investors; hospital administrators walk through appointment flows; restaurant owners validate menu navigation before development sprints begin.",
        "Prototype testing with five to eight representative users surfaces confusion points early. Watching someone struggle to find pricing teaches more than internal debates. Fixes at wireframe stage cost ten times less than rework during development.",
      ],
    },
    {
      heading: "Design systems for scalable products",
      paragraphs: [
        "A design system documents buttons, inputs, cards, typography scales, colour tokens, spacing grids, and icon styles — so every new screen looks cohesive without redesigning from scratch. Startups scaling from MVP to dozens of features need systems to avoid visual debt.",
        "Component libraries in Figma mirror React or Flutter components in code — designers and developers share vocabulary: 'Use the primary button variant' means the same thing in both tools. Handoff friction drops; sprint velocity rises.",
        "Documentation covers usage rules: when to use destructive red buttons, how much padding surrounds data tables, accessibility requirements for focus states. New hires onboard faster when standards are written, not tribal knowledge.",
        "E26 Media delivers design systems as part of product design programmes or as standalone engagements for teams with existing apps needing visual and UX consistency repairs.",
      ],
    },
    {
      heading: "Dashboard and enterprise UI complexity",
      paragraphs: [
        "Admin dashboards for ERP, CRM, inventory, and hospital management cram dense data into screens users stare at for hours. Good dashboard UI prioritises hierarchy: KPIs visible immediately, drill-down for detail, filters that persist across sessions, bulk actions that do not misclick easily.",
        "Role-based interfaces show clerks simplified views while managers access reporting — same application, tailored navigation. Permission-aware design prevents accidental exposure of sensitive fields on shared screens.",
        "Data tables need sortable columns, pagination, empty states, loading skeletons, and error recovery — not infinite spinners. Charts require accessible colour contrast and labels readable when projected in conference rooms.",
        "We have designed operational interfaces for supermarket POS backends, cleaning service admin panels, and corporate reporting tools — always mapping real job tasks, not generic dashboard templates copied from Dribbble.",
      ],
    },
    {
      heading: "UI/UX design pricing and engagement models",
      paragraphs: [
        "Wireframe-only packages suit teams with in-house visual designers needing structure validation. Full UI packages include high-fidelity screens, responsive breakpoints, and developer handoff. Product design programmes add research, prototypes, and design systems for software products.",
        "Investment ranges from ₹40,000 for focused wireframe scopes to ₹6,00,000+ for multi-module product design with ongoing iteration retainers. Fixed quotes follow discovery — page counts, platform count (web + iOS + Android), revision rounds, and illustration or icon customisation.",
        "Bundling UI/UX with E26 Media development eliminates vendor gaps: designers attend sprint planning; developers flag feasibility during design reviews; launch day matches approved Figma files because the same organisation owns both.",
        "Book a free consultation with links to interfaces you admire and screenshots of problems in your current product. We respond within 24 business hours with recommended scope and investment band.",
      ],
    },
    {
      heading: "Accessibility and inclusive design standards",
      paragraphs: [
        "Accessible design benefits everyone — not only users with disabilities. Sufficient colour contrast, keyboard navigability, screen reader labels, and clear error messages reduce abandonment for all visitors including older users and mobile users in bright sunlight.",
        "We follow WCAG-oriented practices: semantic heading hierarchy, alt text for meaningful images, form labels tied to inputs, focus indicators on interactive elements, and motion reduced for users who prefer it. Compliance depth scales with industry — public sector and healthcare projects receive stricter audit attention.",
        "Inclusive design also covers language clarity: short sentences, jargon explained, numbers formatted for local conventions, and Kannada or multilingual expansion planned in layout when clients serve diverse Karnataka audiences.",
      ],
    },
  ],
  pricingTiers: [
    {
      name: "Wireframe Package",
      range: "₹40,000 – ₹80,000",
      description: "User flows and low-fidelity wireframes for a defined scope (e.g. 5–8 key screens).",
      includes: ["Research summary", "User flow diagrams", "Wireframes", "1 revision round", "Developer handoff notes"],
    },
    {
      name: "Full UI Design",
      range: "₹80,000 – ₹2,50,000",
      description: "High-fidelity UI for websites or apps — responsive breakpoints and component specs.",
      includes: ["Wireframes", "Visual design system", "Mobile + desktop layouts", "2 revision rounds", "Figma handoff"],
    },
    {
      name: "Product Design Programme",
      range: "₹2,50,000 – ₹6,00,000+",
      description: "End-to-end UX for software products — research, prototypes, design system, and iteration.",
      includes: ["User research", "Interactive prototypes", "Design system", "Dashboard/complex flows", "Dev collaboration"],
    },
  ],
  deliverables: [
    "UX research summary and user personas",
    "Information architecture and user flow diagrams",
    "Wireframes for approved scope",
    "High-fidelity UI in Figma",
    "Interactive prototype (package dependent)",
    "Design system components and tokens",
    "Developer handoff session and documentation",
  ],
  whyChoose: [
    "Designers who work daily with React, Next.js, and mobile developers",
    "Mobile-first approach critical for Karnataka markets",
    "Wireframe-first process reduces costly rework",
    "Figma handoff with annotations developers actually use",
    "Bundled with branding and development for seamless rollout",
    "Fixed quotes after scope definition — clear revision rounds",
  ],
  process: PROCESS,
  portfolioSlugs: ["cleanpro", "alfiya", "abrar-caterers", "lamiya-alkhaleej"],
  faqs: buildPillarFaqs("UI/UX Design", [
    { question: "Do you design in Figma?", answer: "Yes. Figma is our primary design tool for wireframes, UI, prototypes, and developer handoff. Source files are yours upon delivery." },
    { question: "Can you redesign only our homepage?", answer: "Yes. Scoped redesigns for high-traffic pages are common. We recommend analytics review first to prioritise pages with the highest drop-off." },
    { question: "Do you conduct user testing?", answer: "Lightweight usability feedback on prototypes is included in product design programmes. Formal lab testing can be scoped for larger engagements." },
    { question: "Will you design for our existing brand guidelines?", answer: "Absolutely. We work within your brand book, or our branding team can create identity first if you are starting fresh." },
    { question: "Can UI/UX be bundled with development?", answer: "Yes — bundling is our recommended model. Design and build together reduces miscommunication and speeds delivery." },
    { question: "Do you design admin dashboards for custom software?", answer: "Yes. Dashboard and ERP-style interfaces are a core strength — we design for data density, role-based access, and real operational workflows." },
  ]),
};
