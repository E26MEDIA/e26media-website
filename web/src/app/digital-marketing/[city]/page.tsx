import { notFound } from "next/navigation";
import {
  CITY_SLUGS,
  getCityServicePage,
  type CitySlug,
} from "@/data/city-services";
import {
  CityServiceLayout,
  cityServiceMetadata,
} from "@/components/city-services/city-service-layout";

const SERVICE = "digital-marketing" as const;

type Props = { params: Promise<{ city: string }> };

export function generateStaticParams() {
  return CITY_SLUGS.map((city) => ({ city }));
}

export async function generateMetadata({ params }: Props) {
  const { city } = await params;
  const page = getCityServicePage(SERVICE, city);
  if (!page) return {};
  return cityServiceMetadata(page);
}

export default async function DigitalMarketingCityPage({ params }: Props) {
  const { city } = await params;
  if (!CITY_SLUGS.includes(city as CitySlug)) notFound();
  const page = getCityServicePage(SERVICE, city);
  if (!page) notFound();
  return <CityServiceLayout page={page} />;
}
