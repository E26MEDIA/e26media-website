import type { FAQ } from "@/types";

// Homepage FAQs live in home-seo.ts (expanded for SEO + People Also Ask).
export { HOME_FAQS } from "@/data/home-seo";

export const SERVICE_FAQS: FAQ[] = [
  {
    question: "How do you scope a new project?",
    answer:
      "We start with a free consultation, document goals and constraints, then share a fixed quote with milestones before work begins.",
  },
  {
    question: "Who owns the code and assets?",
    answer:
      "Clients own deliverables upon full payment as defined in the contract — including source files and credentials where applicable.",
  },
];
