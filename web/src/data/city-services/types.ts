export type CitySlug = "mangalore" | "bangalore";

export type ServiceSlug =
  | "website-development"
  | "software-development"
  | "mobile-app-development"
  | "digital-marketing";

export type CityServicePage = {
  service: ServiceSlug;
  city: CitySlug;
  cityLabel: string;
  serviceLabel: string;
  path: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  heroEyebrow: string;
  heroSubtitle: string;
  aboutHeading: string;
  aboutParagraphs: string[];
  whyChooseHeading: string;
  whyChooseItems: { title: string; body: string }[];
  processHeading: string;
  processSteps: { step: string; title: string; description: string }[];
  technologiesHeading: string;
  technologies: string[];
  industriesHeading: string;
  industries: { name: string; description: string }[];
  benefitsHeading: string;
  benefits: string[];
  whyBusinessesHeading: string;
  whyBusinessesParagraphs: string[];
  portfolioHeading: string;
  portfolioSlugs: string[];
  testimonialsHeading: string;
  faqHeading: string;
  faqs: { question: string; answer: string }[];
  ctaTitle: string;
  ctaDescription: string;
  relatedLinks: { label: string; href: string }[];
};
