import Link from "next/link";
import { buildMetadata } from "@/lib/seo";
import { Container, SectionHeading } from "@/components/ui/section";
import { Card } from "@/components/ui/card";
import { PageHero } from "@/components/visual/page-hero";
import { CtaBand } from "@/components/visual/cta-band";
import { LongFormArticle } from "@/components/content/long-form-article";
import { HUB_PAGE_CONTENT } from "@/data/long-form/hub-pages";
import { LOCATIONS } from "@/data/locations";
import { CITY_SERVICE_PAGES } from "@/data/city-services";
import { BreadcrumbJsonLd } from "@/components/seo/json-ld";

const CONTENT = HUB_PAGE_CONTENT.locations;

export const metadata = buildMetadata({
  title: "Service Areas Across Karnataka",
  description:
    "E26 Media serves Mangalore, Bengaluru, Udupi, Mysuru, Hubballi and beyond — website development, software, mobile apps, SEO, and digital marketing.",
  path: "/service-areas",
});

export default function LocationsHubPage() {
  const byCity = LOCATIONS.reduce<Record<string, typeof LOCATIONS>>((acc, loc) => {
    (acc[loc.city] ??= []).push(loc);
    return acc;
  }, {});

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "Service Areas", path: "/service-areas" },
        ]}
      />

      <PageHero
        badge="Service Areas"
        title="Technology partner across Karnataka"
        description="City-specific service pages for businesses searching locally — each links to detailed capabilities, pricing, and consultation."
      />

      <Container className="space-y-16 py-16 md:py-24">
        <section className="space-y-6">
          <SectionHeading
            title="Primary local landing pages"
            description="SEO-focused pages for website, software, mobile, and digital marketing in Mangalore and Bangalore."
          />
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {CITY_SERVICE_PAGES.map((page) => (
              <Link key={page.path} href={page.path}>
                <Card className="h-full transition hover:border-green-300 hover:shadow-md">
                  <p className="text-xs font-semibold uppercase tracking-wide text-green-600">
                    {page.cityLabel}
                  </p>
                  <h3 className="mt-2 font-semibold">{page.serviceLabel}</h3>
                  <p className="mt-2 line-clamp-2 text-sm text-zinc-600 dark:text-zinc-400">
                    {page.h1}
                  </p>
                </Card>
              </Link>
            ))}
          </div>
        </section>

        {Object.entries(byCity).map(([city, locations]) => (
          <section key={city} className="space-y-6">
            <SectionHeading title={city} description={`${locations.length} service pages for ${city} businesses.`} />
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {locations.map((loc) => (
                <Link key={loc.slug} href={`/service-areas/${loc.slug}`}>
                  <Card className="h-full transition hover:border-green-300 hover:shadow-md">
                    <h3 className="font-semibold">{loc.title}</h3>
                    <p className="mt-2 line-clamp-2 text-sm text-zinc-600 dark:text-zinc-400">{loc.intro}</p>
                  </Card>
                </Link>
              ))}
            </div>
          </section>
        ))}

        <section className="rounded-xl border border-zinc-200 bg-zinc-50 p-8 dark:border-zinc-800 dark:bg-zinc-900">
          <h3 className="font-semibold">Resources for local growth</h3>
          <ul className="mt-4 grid gap-2 sm:grid-cols-2">
            <li>
              <Link href="/knowledge/guides/local-seo-mangalore-businesses" className="text-sm font-medium text-green-600 hover:underline">
                Local SEO guide for Mangalore →
              </Link>
            </li>
            <li>
              <Link href="/tools/website-cost-estimator" className="text-sm font-medium text-green-600 hover:underline">
                Website cost estimator →
              </Link>
            </li>
            <li>
              <Link href="/pricing" className="text-sm font-medium text-green-600 hover:underline">
                Service pricing →
              </Link>
            </li>
            <li>
              <Link href="/media" className="text-sm font-medium text-green-600 hover:underline">
                Media kit & citations →
              </Link>
            </li>
          </ul>
        </section>

        <LongFormArticle content={CONTENT} />
      </Container>

      <CtaBand />
    </>
  );
}
