import type { CityServicePage, CitySlug, ServiceSlug } from "./types";
import { WEBSITE_MANGALORE } from "./website-mangalore";
import { WEBSITE_BANGALORE } from "./website-bangalore";
import { SOFTWARE_MANGALORE } from "./software-mangalore";
import { SOFTWARE_BANGALORE } from "./software-bangalore";
import { MOBILE_MANGALORE } from "./mobile-mangalore";
import { MOBILE_BANGALORE } from "./mobile-bangalore";
import { MARKETING_MANGALORE } from "./marketing-mangalore";
import { MARKETING_BANGALORE } from "./marketing-bangalore";

export type { CityServicePage, CitySlug, ServiceSlug } from "./types";

export const CITY_SERVICE_PAGES: CityServicePage[] = [
  WEBSITE_MANGALORE,
  WEBSITE_BANGALORE,
  SOFTWARE_MANGALORE,
  SOFTWARE_BANGALORE,
  MOBILE_MANGALORE,
  MOBILE_BANGALORE,
  MARKETING_MANGALORE,
  MARKETING_BANGALORE,
];

export const CITY_SLUGS: CitySlug[] = ["mangalore", "bangalore"];

export const SERVICE_SLUGS: ServiceSlug[] = [
  "website-development",
  "software-development",
  "mobile-app-development",
  "digital-marketing",
];

export function getCityServicePage(service: string, city: string) {
  return CITY_SERVICE_PAGES.find((p) => p.service === service && p.city === city);
}

export function getCityServicePagesByService(service: ServiceSlug) {
  return CITY_SERVICE_PAGES.filter((p) => p.service === service);
}

export function getAllCityServiceParams() {
  return CITY_SERVICE_PAGES.map((p) => ({ service: p.service, city: p.city }));
}
