import type { ServicePillar } from "@/types";
import { WEBSITE_DEVELOPMENT_PILLAR } from "./website-development";
import { SOFTWARE_DEVELOPMENT_PILLAR } from "./software-development";
import { AI_SOLUTIONS_PILLAR } from "./ai-solutions";
import { MOBILE_APP_PILLAR } from "./mobile-app-development";
import { DIGITAL_MARKETING_PILLAR, SEO_SERVICES_PILLAR } from "./digital-marketing";
import { BRANDING_PILLAR } from "./branding";
import { CLOUD_SOLUTIONS_PILLAR } from "./cloud-solutions";
import { UI_UX_DESIGN_PILLAR } from "./ui-ux-design";
import { IT_CONSULTING_PILLAR } from "./it-consulting";

export const COMMERCIAL_PILLAR_SLUGS = [
  "website-development",
  "software-development",
  "ai-solutions",
  "mobile-app-development",
  "digital-marketing",
  "branding",
  "cloud-solutions",
  "ui-ux-design",
  "it-consulting",
] as const;

const PILLARS: Record<string, ServicePillar> = {
  "website-development": WEBSITE_DEVELOPMENT_PILLAR,
  "software-development": SOFTWARE_DEVELOPMENT_PILLAR,
  "ai-solutions": AI_SOLUTIONS_PILLAR,
  "mobile-app-development": MOBILE_APP_PILLAR,
  "digital-marketing": DIGITAL_MARKETING_PILLAR,
  branding: BRANDING_PILLAR,
  "cloud-solutions": CLOUD_SOLUTIONS_PILLAR,
  "ui-ux-design": UI_UX_DESIGN_PILLAR,
  "it-consulting": IT_CONSULTING_PILLAR,
  seo: SEO_SERVICES_PILLAR,
};

export function getCategoryPillar(slug: string): ServicePillar | null {
  return PILLARS[slug] ?? null;
}

export function getServicePillar(categorySlug: string, serviceSlug: string): ServicePillar | null {
  if (categorySlug === "digital-marketing" && serviceSlug === "seo") {
    return SEO_SERVICES_PILLAR;
  }
  return null;
}

export function hasCommercialPillar(slug: string): boolean {
  return slug in PILLARS && slug !== "seo";
}
