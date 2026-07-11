import Link from "next/link";
import { buildMetadata } from "@/lib/seo";
import { Container, SectionHeading } from "@/components/ui/section";
import { Card } from "@/components/ui/card";
import { PageHero } from "@/components/visual/page-hero";
import { CtaBand } from "@/components/visual/cta-band";
import { LongFormArticle } from "@/components/content/long-form-article";
import { HUB_PAGE_CONTENT } from "@/data/long-form/hub-pages";
import { INDUSTRIES } from "@/data/industries";

const CONTENT = HUB_PAGE_CONTENT.industries;

export const metadata = buildMetadata({
  title: "Industries We Serve — E26 Media",
  description: "Technology solutions for healthcare, education, retail, hospitality, real estate, finance, and startups across Karnataka.",
  path: "/industries",
});

export default function IndustriesPage() {
  return (
    <>
      <PageHero
        badge="Industries"
        title="Solutions tailored to your sector"
        highlight="your sector"
        description="We understand industry-specific challenges and build technology that fits — from discovery through launch and support."
      />

      <Container className="space-y-16 py-16 md:py-24">
        <section className="space-y-8">
          <SectionHeading eyebrow="Sectors" title="Industries we serve" />
          <div className="grid gap-6 md:grid-cols-2">
            {INDUSTRIES.map((ind) => (
              <Link key={ind.slug} href={`/industries/${ind.slug}`}>
                <Card className="h-full transition hover:border-green-300">
                  <h2 className="text-lg font-semibold">{ind.title}</h2>
                  <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">{ind.overview}</p>
                  <p className="mt-3 text-sm font-medium text-green-600">Explore {ind.title.toLowerCase()} solutions →</p>
                </Card>
              </Link>
            ))}
          </div>
        </section>

        <LongFormArticle content={CONTENT} />
      </Container>

      <CtaBand text="Not sure which industry page fits? Tell us about your business — we will point you to the right services." />
    </>
  );
}
