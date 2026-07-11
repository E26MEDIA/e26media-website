import type { ServicePillar } from "@/types";
import { buildPillarFaqs } from "@/lib/pillar-faqs";

const PROCESS = [
  { step: "Listen", description: "Executive interviews, stakeholder mapping, current-state technology audit, and business goal alignment." },
  { step: "Analyse", description: "Gap analysis, vendor landscape review, risk assessment, and total cost of ownership modelling." },
  { step: "Recommend", description: "Prioritised roadmap with quick wins, phased investments, and build-vs-buy decisions documented." },
  { step: "Plan", description: "Implementation blueprint: timelines, budgets, team structure, and success metrics." },
  { step: "Execute", description: "Hands-on delivery or vendor oversight — E26 Media can implement or guide your internal team." },
  { step: "Measure", description: "KPI tracking, retrospective reviews, and roadmap updates as the business evolves." },
];

export const IT_CONSULTING_PILLAR: ServicePillar = {
  slug: "it-consulting",
  metaTitle: "IT Consulting in Mangalore — Digital Transformation & Technology Strategy | E26 Media",
  metaDescription:
    "IT consulting and digital transformation in Mangalore: technology roadmaps, product strategy, automation advisory, and startup consulting for Karnataka businesses.",
  hero: {
    badge: "IT Consulting",
    title: "IT consulting aligned with your business goals",
    highlight: "IT consulting",
    description:
      "Digital transformation, product strategy, and technology roadmaps — honest advisory from a team that also builds software, websites, and cloud infrastructure.",
  },
  intro: [
    "Choosing the wrong technology stack, hiring the wrong vendor, or automating the wrong process costs Karnataka businesses months of lost momentum and lakhs in rework. IT consulting is not about slide decks — it is about making clear decisions on what to build, what to buy, what to integrate, and what to stop doing.",
    "E26 Media provides IT consulting from Mangalore for SMEs, enterprises, manufacturers, finance firms, and startups. Unlike pure advisory firms, we implement what we recommend — custom software, websites, mobile apps, cloud migrations, and AI automation. That means our advice is grounded in delivery reality, not theoretical frameworks disconnected from your budget and timeline.",
    "Engagements range from one-week technology audits and vendor selection support to multi-quarter digital transformation programmes with phased implementation. Every engagement ends with a documented roadmap your leadership team can act on immediately.",
  ],
  sections: [
    {
      heading: "When businesses need IT consulting",
      paragraphs: [
        "Growth has outpaced your systems — spreadsheets, WhatsApp groups, and manual processes that worked at ₹1 crore revenue break at ₹10 crore. You need an honest assessment of what to automate first and what ERP or custom software actually requires.",
        "You are about to invest significantly in technology — a new website, mobile app, ERP, or cloud migration — and want independent validation of vendor quotes, architecture choices, and timelines before signing.",
        "Digital transformation is a board-level priority but nobody owns the roadmap. Departments propose conflicting tools; IT is overloaded; consultants sell products instead of outcomes. You need a single prioritised plan tied to business KPIs.",
        "Startups need product strategy before burning runway on the wrong MVP features. Founders benefit from a partner who has shipped apps, websites, and AI products — not just pitch deck feedback.",
      ],
    },
    {
      heading: "IT consulting services we provide",
      paragraphs: [
        "Digital transformation consulting — assess current operations, identify automation opportunities, design phased technology adoption, and oversee implementation with measurable milestones.",
        "Technology consulting — stack selection, architecture review, API strategy, security posture assessment, and build-vs-buy analysis for software investments.",
        "Product strategy — MVP scoping, feature prioritisation, user journey definition, and go-to-market technology planning for startups and new product lines.",
        "Business automation consulting — map manual workflows, quantify time and error costs, recommend RPA, custom software, or integration solutions, and estimate ROI.",
        "Startup consulting — founder-friendly technology advisory: what to build first, how to hire or outsource, how to structure equity with technical co-founders, and when to raise vs bootstrap development.",
      ],
    },
    {
      heading: "Our consulting approach — advisory plus execution",
      paragraphs: [
        "Many consultancies deliver reports that gather dust. We structure deliverables as actionable roadmaps: prioritised initiatives, estimated investment ranges, dependency mapping, and recommended vendors or internal team structure. When you are ready to execute, the same E26 Media team can build — eliminating handoff friction between advisor and implementer.",
        "We are vendor-neutral on platforms but opinionated on quality. We will tell you when WordPress is sufficient, when you need custom software, when off-the-shelf ERP fits, and when it does not — even if that means a smaller project for us.",
        "Confidentiality is standard. NDAs, restricted data handling, and executive-only readouts are available for sensitive manufacturing, finance, and healthcare engagements.",
      ],
    },
    {
      heading: "Digital transformation for Karnataka industries",
      paragraphs: [
        "Manufacturing — connect shop floor data to office ERP, automate inventory reporting, and migrate legacy servers to managed cloud.",
        "Retail and distribution — unify POS, ecommerce, and warehouse systems; reduce stock-outs and manual reconciliation.",
        "Healthcare — patient portal strategy, HMS selection or custom build advisory, and compliance-aware cloud hosting.",
        "Finance and corporate — client portal roadmaps, document workflow automation, and secure integration with banking and accounting tools.",
        "Hospitality and food service — ordering channel strategy (app vs web vs aggregator), kitchen operations software, and local SEO tied to technology investment.",
        "Startups — MVP definition, technical co-founder gap analysis, and investor-ready technology narrative.",
      ],
    },
    {
      heading: "What you receive from an IT consulting engagement",
      paragraphs: [
        "Current-state assessment document — systems inventory, pain points, and risk register.",
        "Prioritised technology roadmap with phases, timelines, and investment bands.",
        "Architecture recommendations and vendor shortlist where applicable.",
        "ROI framing for proposed automations — time saved, errors reduced, revenue enabled.",
        "Executive presentation and optional board-ready summary.",
        "Optional implementation kickoff with E26 Media development, cloud, or marketing teams.",
      ],
    },
    {
      heading: "Why choose E26 Media for IT consulting",
      paragraphs: [
        "Practitioner consultants — we ship production software weekly, not just advise on it.",
        "Mangalore head office with on-site workshops across Karnataka and video engagement for international clients.",
        "Honest scoping — we recommend smaller investments when they solve the problem; we do not upsell unnecessary rebuilds.",
        "End-to-end continuity from strategy through development, cloud, and ongoing support.",
        "Fixed-fee discovery engagements available before larger transformation programmes.",
      ],
    },
    {
      heading: "Digital transformation roadmap for Karnataka SMEs",
      paragraphs: [
        "Digital transformation is not buying software — it is aligning technology investments with measurable business outcomes: fewer manual hours, faster order processing, fewer billing errors, better customer response times, and data visibility for decisions previously based on gut feel.",
        "SMEs in Mangalore and across Karnataka often accumulate tools organically: WhatsApp for orders, Excel for inventory, a basic website nobody updates, accounting software disconnected from operations. Transformation maps this fragmented reality and sequences fixes that compound — not a rip-and-replace fantasy that paralyses staff for months.",
        "Phase one might digitise enquiry capture and CRM; phase two inventory sync; phase three customer self-service portals. Each phase delivers ROI that funds the next, building organisational confidence in technology change.",
        "We facilitate workshops with owners, operations managers, and front-line staff — because adoption fails when consultants only interview executives who never touch daily workflows.",
      ],
    },
    {
      heading: "Technology vendor selection and quote validation",
      paragraphs: [
        "Received three wildly different quotes for the same ERP project? We normalise scope definitions, identify missing line items (training, migration, support, hosting), and flag red flags in ultra-low bids that imply templates, offshore bait-and-switch, or zero post-launch support.",
        "Vendor-neutral assessment compares off-the-shelf SaaS, open-source platforms, and custom development honestly. Sometimes Zoho or a vertical SaaS wins; sometimes only custom software fits your workflow — we document why with TCO over three to five years, not just licence sticker price.",
        "RFP support includes requirement matrices, demo scripts, and scoring rubrics so comparisons are structured — not decided by whichever sales rep bought the best lunch.",
        "Implementation oversight ensures vendors deliver what they promised: milestone acceptance criteria, staging reviews, and penalty clauses you can actually enforce because we speak technical delivery language.",
      ],
    },
    {
      heading: "Product strategy and MVP scoping for startups",
      paragraphs: [
        "Founders burn runway building features users never wanted. Product strategy engagements define the smallest viable product that tests core assumptions — audience, pricing, channel, retention — before investing in polish nobody sees because acquisition failed.",
        "We map user stories to business hypotheses: 'If we ship mobile ordering, repeat purchase rate rises' — then define metrics and minimum feature set to validate in eight to twelve weeks.",
        "Build-vs-buy analysis covers no-code tools, vertical SaaS APIs, and custom development with honest timeline and team requirements. Fundraising decks benefit from credible technical roadmaps investors can diligence against our portfolio.",
        "Startup consulting includes technical co-founder gap assessment: hire, outsource to E26 Media, or hybrid — with equity and IP implications flagged for your legal advisor, not glossed over.",
      ],
    },
    {
      heading: "Business automation and process mapping",
      paragraphs: [
        "Automation consulting starts on paper: swimlane diagrams of how work actually flows — not how the org chart claims it flows. Bottlenecks reveal themselves: duplicate data entry, approval chains via email, reports compiled manually every Monday.",
        "ROI estimation quantifies hours saved × loaded labour cost × error reduction value. Not every process deserves automation — low-volume edge cases stay manual; high-volume repetitive tasks get RPA, integrations, or custom modules.",
        "Integration strategy connects accounting, CRM, ecommerce, warehouse, and communication tools so data syncs without CSV exports. Zapier suits light glue; custom APIs suit high-volume transactional sync.",
        "Change management is planned alongside technology — staff training, parallel running periods, and rollback plans when new systems strain operations during learning curves.",
      ],
    },
    {
      heading: "IT consulting across industries and cities",
      paragraphs: [
        "Manufacturing clients in Hubballi and Belagavi need shop-floor data reaching ERP dashboards. Hospitality groups in coastal Karnataka need unified booking and guest communication strategy. Bengaluru SaaS startups need architecture reviews before scaling traffic tenfold.",
        "Finance and professional services firms need client portal roadmaps with security appropriate to sensitive documents. NGOs need donor systems within tight budgets — maximising impact per rupee spent on technology.",
        "Our Mangalore head office anchors on-site discovery across Karnataka; video workshops serve international clients in UAE and Australia with timezone-friendly scheduling.",
        "Engagements start with a free initial call — bring your chaos; we help structure it into a roadmap you can execute internally, with E26 Media, or with vendors we help you select.",
      ],
    },
    {
      heading: "From roadmap to implementation with one partner",
      paragraphs: [
        "The biggest consulting failure mode is beautiful strategy with no execution capacity. E26 Media offers optional implementation — websites, software, cloud migrations, AI automation, and marketing — by the team that wrote your roadmap. Context transfers seamlessly; no six-month re-discovery with a separate vendor.",
        "Milestone-based programmes let you fund phase one after audit approval, measure results, then authorise phase two with confidence. You are never locked into multi-year contracts for work that has not proved value.",
        "Documentation deliverables — architecture diagrams, vendor scorecards, process maps, RACI matrices — remain yours regardless of who implements. We want informed clients, not dependent ones.",
        "Contact E26 Media in Mangalore to schedule a free discovery call and receive a practical technology roadmap tailored to your Karnataka business.",
      ],
    },
  ],
  pricingTiers: [
    {
      name: "Technology Audit",
      range: "₹50,000 – ₹1,50,000",
      description: "1–2 week assessment of systems, vendors, and quick-win recommendations.",
      includes: ["Stakeholder interviews", "Systems inventory", "Risk and gap analysis", "Prioritised recommendations", "Executive summary"],
    },
    {
      name: "Strategy Roadmap",
      range: "₹1,50,000 – ₹4,00,000",
      description: "Multi-week engagement with detailed transformation roadmap and vendor selection support.",
      includes: ["Deep process mapping", "Architecture options", "Phased roadmap", "Budget modelling", "Board presentation"],
    },
    {
      name: "Ongoing Advisory",
      range: "₹25,000 – ₹75,000 / month",
      description: "Retainer for CTO-as-a-service, vendor oversight, and quarterly roadmap reviews.",
      includes: ["Monthly strategy calls", "Vendor quote review", "Architecture guidance", "Team hiring support", "Implementation oversight"],
    },
  ],
  deliverables: [
    "Current-state technology assessment",
    "Stakeholder interview summaries",
    "Gap analysis and risk register",
    "Prioritised roadmap with phases and timelines",
    "Investment range estimates per initiative",
    "Vendor evaluation criteria (where applicable)",
    "Executive presentation and documentation handover",
  ],
  whyChoose: [
    "Consultants who also build — advice tied to real delivery experience",
    "Vendor-neutral recommendations with honest build-vs-buy guidance",
    "Mangalore-based with Karnataka-wide and international client experience",
    "NDA and confidential handling for sensitive industries",
    "Seamless handoff to E26 development, cloud, and AI teams",
    "Fixed-fee discovery options before large programmes",
  ],
  process: PROCESS,
  portfolioSlugs: ["supermarket", "alfiya", "e26-website-chatbot"],
  faqs: buildPillarFaqs("IT Consulting", [
    { question: "How is IT consulting different from hiring a developer?", answer: "Consulting answers what to build and why before you commit budget. Development executes the plan. We offer both — many clients start with a short audit, then engage implementation." },
    { question: "Do you help select ERP or off-the-shelf software?", answer: "Yes. We evaluate options against your workflows, budget, and integration needs — and can implement custom extensions when off-the-shelf falls short." },
    { question: "Can startups afford IT consulting?", answer: "Our startup engagements focus on MVP scoping and founder advisory — often a fixed-fee workshop that saves months of wrong-direction development." },
    { question: "Will you implement the roadmap you recommend?", answer: "Yes, optionally. You can take the roadmap to any vendor, or engage E26 Media for phased implementation with the same team that wrote the plan." },
    { question: "Do you provide CTO-as-a-service?", answer: "Yes, on monthly retainer — architecture decisions, vendor management, hiring support, and board reporting without a full-time executive hire." },
    { question: "How long does a technology audit take?", answer: "Typically 1–2 weeks for SMEs, 3–4 weeks for multi-department enterprises — depending on systems complexity and stakeholder availability." },
  ]),
};
