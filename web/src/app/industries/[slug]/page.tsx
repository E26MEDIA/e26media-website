import Link from "next/link";
import { notFound } from "next/navigation";
import { buildMetadata } from "@/lib/seo";
import { Container, SectionHeading } from "@/components/ui/section";
import { buttonVariants } from "@/components/ui/button";
import { INDUSTRIES, getIndustry } from "@/data/industries";
import { enrichIndustry } from "@/lib/industry-content";
import { PageHero } from "@/components/visual/page-hero";
import { CtaBand } from "@/components/visual/cta-band";
import { FaqJsonLd } from "@/components/seo/json-ld";
import { CheckCircle2 } from "lucide-react";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return INDUSTRIES.map((i) => ({ slug: i.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const industry = getIndustry(slug);
  if (!industry) return {};
  const enriched = enrichIndustry(industry);
  return buildMetadata({
    title: `${enriched.title} Technology Solutions — E26 Media Karnataka`,
    description: enriched.detail ?? enriched.overview,
    path: `/industries/${slug}`,
  });
}

export default async function IndustryDetailPage({ params }: Props) {
  const { slug } = await params;
  const raw = getIndustry(slug);
  if (!raw) notFound();
  const industry = enrichIndustry(raw);

  return (
    <>
      {industry.faqs && <FaqJsonLd faqs={industry.faqs} />}

      <PageHero badge="Industry" title={industry.title} description={industry.overview} />

      <Container className="space-y-16 py-16 md:py-24">
        {industry.detail && (
          <article className="mx-auto max-w-3xl">
            <p className="text-base leading-relaxed text-zinc-600 dark:text-zinc-400">{industry.detail}</p>
          </article>
        )}

        <div className="grid gap-8 lg:grid-cols-2">
          <div className="rounded-xl border border-zinc-200 bg-zinc-50 p-8 dark:border-zinc-800 dark:bg-zinc-900">
            <h2 className="font-heading text-xl font-semibold">Common challenges</h2>
            <ul className="mt-6 space-y-3">
              {industry.challenges.map((c) => (
                <li key={c} className="flex gap-2 text-sm text-zinc-600 dark:text-zinc-400">
                  <span className="text-red-400">•</span> {c}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-xl border border-zinc-200 bg-white p-8 dark:border-zinc-800 dark:bg-zinc-950">
            <h2 className="font-heading text-xl font-semibold">How E26 Media helps</h2>
            <ul className="mt-6 space-y-3">
              {industry.solutions.map((s) => (
                <li key={s} className="flex gap-2 text-sm text-zinc-600 dark:text-zinc-400">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-green-600" /> {s}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {industry.automation && (
          <section className="space-y-6">
            <SectionHeading title="Automation opportunities" />
            <div className="grid gap-4 md:grid-cols-2">
              {industry.automation.map((a) => (
                <div key={a} className="rounded-xl border border-zinc-200 p-5 text-sm dark:border-zinc-800">
                  {a}
                </div>
              ))}
            </div>
          </section>
        )}

        <div className="rounded-xl border border-zinc-200 p-8 dark:border-zinc-800">
          <h2 className="font-heading text-xl font-semibold">Relevant services</h2>
          <div className="mt-4 flex flex-wrap gap-3">
            {industry.services.map((s) => (
              <Link key={s} href={`/services/${s}`} className="rounded-full bg-green-50 px-4 py-2 text-sm font-semibold text-green-700 hover:bg-green-100 dark:bg-green-950/40 dark:text-green-400">
                {s.replace(/-/g, " ")} →
              </Link>
            ))}
          </div>
        </div>

        {industry.faqs && (
          <section className="space-y-6">
            <SectionHeading title="Industry FAQ" />
            <div className="grid gap-4 md:grid-cols-2">
              {industry.faqs.map((f) => (
                <div key={f.question} className="rounded-xl border border-zinc-200 p-6 dark:border-zinc-800">
                  <h3 className="font-semibold">{f.question}</h3>
                  <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">{f.answer}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        <Link href="/contact" className={buttonVariants({ size: "lg" })}>
          Discuss your {industry.title.toLowerCase()} project
        </Link>
      </Container>

      <CtaBand />
    </>
  );
}
