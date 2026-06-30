import type { Industry } from "@/types";

export function enrichIndustry(industry: Industry): Industry {
  const detail = INDUSTRY_DETAILS[industry.slug];
  if (!detail) return industry;
  return { ...industry, ...detail };
}

const INDUSTRY_DETAILS: Record<
  string,
  { detail: string; automation: string[]; faqs: { question: string; answer: string }[] }
> = {
  healthcare: {
    detail:
      "Hospitals, clinics, and diagnostic centres in Mangalore and across Karnataka need digital systems that patients trust. From appointment booking to lab report access, we build HIPAA-aware architectures (where applicable), fast-loading hospital websites, and HMS modules that reduce front-desk workload. Local SEO ensures patients find you on Google Maps before competitors.",
    automation: [
      "Online appointment scheduling with SMS/WhatsApp reminders",
      "Patient registration and digital intake forms",
      "Automated follow-up messages after visits",
      "Inventory alerts for pharmacy and consumables",
    ],
    faqs: [
      { question: "Can you build a hospital website with online appointments?", answer: "Yes. We integrate booking calendars, doctor profiles, department pages, and Google Maps — optimised for local healthcare searches." },
      { question: "Do you develop Hospital Management Software?", answer: "We build custom HMS modules including patient records, billing, appointments, and reporting tailored to your clinic or hospital size." },
    ],
  },
  education: {
    detail:
      "Schools, colleges, and training institutes compete for enrollment visibility online. We deliver educational websites with admission funnels, parent portals, and school management software that automates attendance, fees, and announcements — reducing admin burden for institutions in Udupi, Mangalore, and Bengaluru.",
    automation: ["Fee payment reminders", "Bulk SMS/email to parents", "Online admission forms", "Exam result publishing portals"],
    faqs: [
      { question: "Can parents pay fees online?", answer: "Yes. We integrate Razorpay and other payment gateways with receipt generation and accounting exports." },
      { question: "Do you build learning management features?", answer: "We can add course modules, video content, quizzes, and student dashboards as part of custom ed-tech builds." },
    ],
  },
  manufacturing: {
    detail:
      "Manufacturers in Baikampady, Hubballi, and Mysuru industrial areas benefit from ERP, inventory tracking, and production dashboards that replace manual registers. We connect shop-floor data to management reports so decisions are based on facts — not end-of-month guesses.",
    automation: ["Low-stock alerts", "Purchase order workflows", "Production scheduling", "Vendor payment tracking"],
    faqs: [
      { question: "Can ERP integrate with our existing accounting software?", answer: "Yes. We build API integrations with Tally, Zoho Books, and other platforms commonly used in Karnataka SMEs." },
      { question: "Is cloud or on-premise deployment available?", answer: "Both. We recommend cloud for accessibility; on-premise options are available for specific compliance needs." },
    ],
  },
  retail: {
    detail:
      "Retailers need omnichannel presence — a fast ecommerce site, inventory sync, and Meta/Google campaigns that drive footfall and online sales. We have built ecommerce experiences for clients like Floriva Gifts (Australia) and local retailers seeking Karnataka-wide delivery.",
    automation: ["Abandoned cart emails", "Inventory sync across POS and website", "Automated order status updates", "Customer segmentation for campaigns"],
    faqs: [
      { question: "Do you build ecommerce websites?", answer: "Yes — custom storefronts and platform-based builds with secure checkout, GST invoicing, and shipping integrations." },
      { question: "Can you connect our POS to the website?", answer: "We integrate POS and inventory systems so stock levels stay accurate online and in-store." },
    ],
  },
  hospitality: {
    detail:
      "Hotels and resorts along Karnataka's coast depend on direct bookings, stunning visual websites, and Google visibility. We build hospitality sites with gallery-rich UX, booking engine integration, and local SEO targeting tourists searching Mangalore, Udupi, and coastal destinations.",
    automation: ["Booking confirmation emails", "Review request automation after checkout", "Seasonal rate updates", "Multi-property content management"],
    faqs: [
      { question: "Can you integrate Booking.com or channel managers?", answer: "We work with your existing channel manager or recommend integrations to avoid double bookings." },
      { question: "Do you handle photography and content?", answer: "We structure sites for professional photography; content writing and photo shoots can be coordinated with partners." },
    ],
  },
  restaurants: {
    detail:
      "Restaurants like Abrar Caterers benefit from menu-rich websites, Google Business Profile optimisation, and social campaigns targeting events and catering enquiries. We make it easy for customers to call, WhatsApp, or submit catering requests from mobile.",
    automation: ["Online catering enquiry forms routed to WhatsApp", "Google review request workflows", "Social post scheduling", "Menu PDF and QR code generation"],
    faqs: [
      { question: "Can you help us rank on Google Maps?", answer: "Yes. Local SEO — GBP optimisation, citations, reviews strategy, and location content — is a core service." },
      { question: "Do you build food ordering websites?", answer: "We build ordering flows with menu management; full delivery logistics depend on your operational model." },
    ],
  },
  "real-estate": {
    detail:
      "Developers and agents need project galleries, lead capture forms, and CRM follow-up. We build property websites that load fast on 4G, showcase floor plans and amenities, and integrate with WhatsApp for instant agent contact — critical for Karnataka's competitive real estate market.",
    automation: ["Lead assignment to agents", "Automated brochure PDF delivery", "Site visit scheduling", "Drip email campaigns for warm leads"],
    faqs: [
      { question: "Can you build a property listing portal?", answer: "Yes — searchable listings with filters, map views, and admin panels for your sales team." },
      { question: "Do you run Google Ads for real estate?", answer: "We manage high-intent search campaigns with landing pages optimised for conversion." },
    ],
  },
  construction: {
    detail:
      "Construction firms need credible project portfolios, tender documentation portals, and client update systems. We help builders present completed projects professionally and streamline vendor and client communication.",
    automation: ["Project progress photo galleries", "Document upload portals for tenders", "Client milestone notifications", "Vendor invoice tracking"],
    faqs: [
      { question: "Can you showcase our completed projects?", answer: "Yes — gallery-heavy corporate sites with case studies, timelines, and certification displays." },
      { question: "Do you build internal project management tools?", answer: "Custom software for site reports, material tracking, and client dashboards is available." },
    ],
  },
  finance: {
    detail:
      "Financial services demand trust, compliance-aware UX, and secure client portals. We build professional corporate websites and custom software for reporting, client onboarding, and workflow automation — without compromising performance or accessibility.",
    automation: ["Client document collection portals", "Automated statement delivery", "KYC workflow tracking", "Internal approval chains"],
    faqs: [
      { question: "Is data security a priority?", answer: "Yes. We implement encryption, access controls, audit logs, and secure hosting as standard on finance projects." },
      { question: "Can you modernise legacy systems?", answer: "We assess existing tools and recommend phased migration or API wrappers to reduce risk." },
    ],
  },
  ngos: {
    detail:
      "NGOs and trusts need donation-friendly websites, impact storytelling, and volunteer coordination tools — often on constrained budgets. We deliver mission-driven designs with transparent cost structures and SEO so donors discover your cause organically.",
    automation: ["Donation receipt emails", "Volunteer signup workflows", "Event registration", "Newsletter and donor segmentation"],
    faqs: [
      { question: "Do you offer discounted rates for NGOs?", answer: "Contact us with your 80G/trust documentation — we structure proposals for non-profit budgets where possible." },
      { question: "Can you integrate payment gateways for donations?", answer: "Yes — Razorpay, PayU, and international options for diaspora donors." },
    ],
  },
  corporate: {
    detail:
      "B2B corporates need authoritative websites, intranets, ERP/CRM integration, and cloud migration. E26 Media supports digital transformation for Karnataka enterprises expanding nationally — with documentation and training for internal IT teams.",
    automation: ["Employee onboarding portals", "CRM lead routing", "Automated reporting dashboards", "Cloud backup and monitoring alerts"],
    faqs: [
      { question: "Do you handle enterprise-scale projects?", answer: "We scope honestly — phased delivery for large programmes, with dedicated project management." },
      { question: "Can you work with our in-house IT team?", answer: "Yes. We collaborate via Git, Jira, and shared staging environments." },
    ],
  },
  startups: {
    detail:
      "Startups need MVPs fast, product strategy clarity, and growth marketing without burning runway. We have launched mobile apps on Google Play and marketing sites for founders validating product-market fit across Karnataka and beyond.",
    automation: ["MVP analytics dashboards", "Waitlist and beta signup flows", "App store deployment pipelines", "Growth experiment tracking"],
    faqs: [
      { question: "Can you build an MVP in weeks?", answer: "Focused MVPs are possible in 6–10 weeks depending on features. We prioritise core value first." },
      { question: "Do you offer startup-friendly pricing?", answer: "We offer milestone-based payments and can structure phase-one builds within startup budgets." },
    ],
  },
};
