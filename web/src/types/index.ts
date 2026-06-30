export type NavLink = { label: string; href: string };

export type SocialLink = { name: string; href: string };

export type ServiceCategory = {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  icon: string;
  items: ServiceItem[];
};

export type ServiceItem = {
  slug: string;
  title: string;
  tagline: string;
  overview: string;
  problems: string[];
  solutions: string[];
  benefits: string[];
  features: string[];
  process: { step: string; description: string }[];
  technologies: string[];
  industries: string[];
  faqs: { question: string; answer: string }[];
  contentSections?: { heading: string; paragraphs: string[] }[];
};

export type PortfolioProject = {
  slug: string;
  title: string;
  category: "website" | "software" | "mobile" | "branding" | "marketing" | "ai";
  client: string;
  clientLogo: string;
  url?: string;
  image: string;
  excerpt: string;
  problem: string;
  solution: string;
  technologies: string[];
  outcome: string;
  highlights?: string[];
  testimonial?: string;
  featured?: boolean;
};

export type Testimonial = {
  id: string;
  name: string;
  role: string;
  company: string;
  text: string;
  service?: string;
  logo?: string;
};

export type Client = { name: string; url?: string; logo: string };

export type FAQ = { question: string; answer: string };

export type Industry = {
  slug: string;
  title: string;
  overview: string;
  challenges: string[];
  solutions: string[];
  services: string[];
  detail?: string;
  automation?: string[];
  faqs?: FAQ[];
};

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  author: string;
  date: string;
  readingTime: string;
  featured?: boolean;
  metaDescription: string;
  sections: { heading?: string; paragraphs: string[] }[];
  faqs?: FAQ[];
};

export type LocationPage = {
  slug: string;
  title: string;
  city: string;
  serviceSlug: string;
  metaTitle: string;
  metaDescription: string;
  intro: string;
  sections: { heading: string; body: string }[];
  whyChoose: string[];
  relatedServices: { label: string; href: string }[];
  faqs: FAQ[];
};

export type Resource = {
  slug: string;
  title: string;
  description: string;
  category: string;
};
