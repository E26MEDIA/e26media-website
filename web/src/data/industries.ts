import type { Industry } from "@/types";

export const INDUSTRIES: Industry[] = [
  {
    slug: "healthcare",
    title: "Healthcare",
    overview: "Digital solutions for hospitals, clinics, and health-tech providers.",
    challenges: ["Patient engagement", "Appointment management", "Compliance and data security"],
    solutions: ["Hospital websites", "HMS software", "Patient portals", "SEO for local discovery"],
    services: ["website-development", "software-development", "digital-marketing"],
  },
  {
    slug: "education",
    title: "Education",
    overview: "Websites and software for schools, colleges, and ed-tech.",
    challenges: ["Enrollment visibility", "Admin workload", "Parent communication"],
    solutions: ["Educational websites", "School management systems", "Learning portals"],
    services: ["website-development", "software-development", "ui-ux-design"],
  },
  {
    slug: "manufacturing",
    title: "Manufacturing",
    overview: "ERP, automation, and digital systems for production and supply chain.",
    challenges: ["Inventory inaccuracy", "Manual reporting", "Disconnected shop floor and office"],
    solutions: ["Inventory and ERP systems", "Production dashboards", "B2B portals"],
    services: ["software-development", "cloud-solutions", "it-consulting"],
  },
  {
    slug: "retail",
    title: "Retail & Ecommerce",
    overview: "Online stores and retail operations technology.",
    challenges: ["Cart abandonment", "Inventory sync", "Omnichannel presence"],
    solutions: ["Ecommerce platforms", "POS integration", "Performance marketing"],
    services: ["website-development", "software-development", "digital-marketing"],
  },
  {
    slug: "hospitality",
    title: "Hospitality",
    overview: "Booking, brand experiences, and operations tech for hotels and resorts.",
    challenges: ["Online bookings", "Guest communication", "Brand consistency across properties"],
    solutions: ["Hotel websites", "Booking integrations", "Local SEO and paid campaigns"],
    services: ["website-development", "branding", "digital-marketing"],
  },
  {
    slug: "restaurants",
    title: "Restaurants",
    overview: "Menus, ordering, and local discovery for food and beverage brands.",
    challenges: ["Local discovery", "Menu updates", "Repeat customer engagement"],
    solutions: ["Restaurant websites", "Social campaigns", "Google Business Profile optimization"],
    services: ["website-development", "branding", "digital-marketing"],
  },
  {
    slug: "real-estate",
    title: "Real Estate",
    overview: "Lead generation and project showcase for property developers and agents.",
    challenges: ["Lead quality", "Project visibility", "Trust building"],
    solutions: ["Property websites", "CRM integration", "Paid search and local SEO"],
    services: ["website-development", "software-development", "digital-marketing"],
  },
  {
    slug: "construction",
    title: "Construction",
    overview: "Project portfolios, tenders, and operations tools for builders.",
    challenges: ["Project documentation", "Vendor coordination", "Client updates"],
    solutions: ["Corporate websites", "Project galleries", "Workflow automation"],
    services: ["website-development", "software-development", "branding"],
  },
  {
    slug: "finance",
    title: "Finance",
    overview: "Professional digital presence and systems for financial services.",
    challenges: ["Trust and compliance", "Legacy processes", "Client reporting"],
    solutions: ["Corporate websites", "Client portals", "Automation and integrations"],
    services: ["software-development", "it-consulting", "cloud-solutions"],
  },
  {
    slug: "ngos",
    title: "NGOs",
    overview: "Websites and tools for non-profits, trusts, and social enterprises.",
    challenges: ["Donor engagement", "Volunteer coordination", "Limited budgets"],
    solutions: ["NGO websites", "Donation flows", "Impact storytelling"],
    services: ["website-development", "branding", "digital-marketing"],
  },
  {
    slug: "corporate",
    title: "Corporate",
    overview: "Enterprise websites, intranets, and digital transformation for B2B.",
    challenges: ["Brand consistency", "Multi-location operations", "Integration complexity"],
    solutions: ["Corporate websites", "ERP/CRM", "Cloud migration"],
    services: ["software-development", "it-consulting", "cloud-solutions"],
  },
  {
    slug: "startups",
    title: "Startups",
    overview: "MVP to scale — technology partners for ambitious founders.",
    challenges: ["Limited budget", "Speed to market", "Product-market fit"],
    solutions: ["MVPs", "Product strategy", "Growth marketing"],
    services: ["mobile-app-development", "ai-solutions", "it-consulting"],
  },
];

export function getIndustry(slug: string) {
  return INDUSTRIES.find((i) => i.slug === slug);
}
