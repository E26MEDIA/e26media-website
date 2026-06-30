import Link from "next/link";
import { buildMetadata } from "@/lib/seo";
import { Container, SectionHeading } from "@/components/ui/section";
import { Card } from "@/components/ui/card";
import { INDUSTRIES } from "@/data/industries";

export const metadata = buildMetadata({
  title: "Industries We Serve — E26 Media",
  description: "Technology solutions for healthcare, education, retail, hospitality, real estate, finance, and startups.",
  path: "/industries",
});

export default function IndustriesPage() {
  return (
    <Container className="py-16 md:py-24 space-y-12">
      <SectionHeading
        eyebrow="Industries"
        title="Solutions tailored to your sector"
        description="We understand industry-specific challenges and build technology that fits."
      />
      <div className="grid gap-6 md:grid-cols-2">
        {INDUSTRIES.map((ind) => (
          <Link key={ind.slug} href={`/industries/${ind.slug}`}>
            <Card className="h-full transition hover:border-green-300">
              <h2 className="text-lg font-semibold">{ind.title}</h2>
              <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">{ind.overview}</p>
            </Card>
          </Link>
        ))}
      </div>
    </Container>
  );
}
