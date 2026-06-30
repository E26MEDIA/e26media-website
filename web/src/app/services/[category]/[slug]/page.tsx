import Link from "next/link";
import { notFound } from "next/navigation";
import { buildMetadata } from "@/lib/seo";
import { Container, SectionHeading } from "@/components/ui/section";
import { buttonVariants } from "@/components/ui/button";
import { getAllServices, getService } from "@/data/services";
import { FaqJsonLd } from "@/components/seo/json-ld";
import { ContactForm } from "@/components/forms/contact-form";
import { PageHero } from "@/components/visual/page-hero";
import { CtaBand } from "@/components/visual/cta-band";
import { CheckCircle2 } from "lucide-react";

type Props = { params: Promise<{ category: string; slug: string }> };

export async function generateStaticParams() {
  return getAllServices().map(({ category, item }) => ({
    category: category.slug,
    slug: item.slug,
  }));
}

export async function generateMetadata({ params }: Props) {
  const { category, slug } = await params;
  const data = getService(category, slug);
  if (!data) return {};
  return buildMetadata({
    title: `${data.item.title} in Mangalore & Karnataka — E26 Media`,
    description: data.item.overview.slice(0, 155),
    path: `/services/${category}/${slug}`,
  });
}

export default async function ServiceDetailPage({ params }: Props) {
  const { category: catSlug, slug } = await params;
  const data = getService(catSlug, slug);
  if (!data) notFound();
  const { category, item } = data;

  return (
    <>
      <FaqJsonLd faqs={item.faqs} />

      <PageHero badge={category.title} title={item.title} description={item.tagline} />

      <Container className="space-y-20 py-16 md:py-24">
        <div className="mx-auto max-w-3xl space-y-6">
          <p className="text-sm text-zinc-500">
            <Link href="/services" className="hover:text-green-600">Services</Link>
            {" / "}
            <Link href={`/services/${category.slug}`} className="hover:text-green-600">{category.title}</Link>
            {" / "}
            <span className="text-zinc-950 dark:text-white">{item.title}</span>
          </p>
          <p className="text-lg leading-relaxed text-zinc-700 dark:text-zinc-300">{item.overview}</p>
          <Link href="/contact" className={buttonVariants({ size: "lg" })}>
            Book Free Consultation
          </Link>
        </div>

        {item.contentSections?.map((section) => (
          <article key={section.heading} className="mx-auto max-w-3xl">
            <h2 className="font-heading text-2xl font-semibold tracking-tight text-zinc-950 dark:text-white">
              {section.heading}
            </h2>
            {section.paragraphs.map((p) => (
              <p key={p.slice(0, 40)} className="mt-4 text-base leading-relaxed text-zinc-600 dark:text-zinc-400">
                {p}
              </p>
            ))}
          </article>
        ))}

        <div className="grid gap-12 lg:grid-cols-2">
          <div className="rounded-xl border border-zinc-200 bg-zinc-50 p-8 dark:border-zinc-800 dark:bg-zinc-900">
            <SectionHeading title="Business problems we solve" />
            <ul className="mt-6 space-y-3">
              {item.problems.map((p) => (
                <li key={p} className="flex gap-2 text-sm text-zinc-600 dark:text-zinc-400">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-red-400" /> {p}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-xl border border-zinc-200 bg-white p-8 dark:border-zinc-800 dark:bg-zinc-950">
            <SectionHeading title="Our solutions" />
            <ul className="mt-6 space-y-3">
              {item.solutions.map((s) => (
                <li key={s} className="flex gap-2 text-sm text-zinc-600 dark:text-zinc-400">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-green-600" /> {s}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <section className="space-y-8">
          <SectionHeading title="Benefits for your business" align="center" />
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {item.benefits.map((b) => (
              <div key={b} className="rounded-xl border border-zinc-200 p-6 dark:border-zinc-800">
                <CheckCircle2 className="mb-3 h-5 w-5 text-green-600" />
                <p className="text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">{b}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="space-y-8">
          <SectionHeading title="What's included" />
          <div className="grid gap-3 md:grid-cols-2">
            {item.features.map((f) => (
              <div key={f} className="flex gap-2 rounded-lg border border-zinc-200 px-4 py-3 text-sm dark:border-zinc-800">
                <CheckCircle2 className="h-4 w-4 shrink-0 text-green-600" /> {f}
              </div>
            ))}
          </div>
        </section>

        <section className="space-y-8">
          <SectionHeading title="Our delivery process" />
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {item.process.map((step, i) => (
              <div key={step.step} className="rounded-xl border border-zinc-200 p-6 dark:border-zinc-800">
                <span className="font-mono text-xs font-bold text-green-600">{String(i + 1).padStart(2, "0")} · {step.step}</span>
                <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">{step.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="grid gap-8 lg:grid-cols-2">
          <div>
            <SectionHeading title="Technology stack" />
            <div className="mt-4 flex flex-wrap gap-2">
              {item.technologies.map((t) => (
                <span key={t} className="rounded-full border border-zinc-200 px-4 py-1.5 font-mono text-xs dark:border-zinc-700">
                  {t}
                </span>
              ))}
            </div>
          </div>
          <div>
            <SectionHeading title="Industries we serve" />
            <div className="mt-4 flex flex-wrap gap-2">
              {item.industries.map((ind) => (
                <span key={ind} className="rounded-full bg-green-50 px-4 py-1.5 text-xs font-semibold text-green-700 dark:bg-green-950/40 dark:text-green-400">
                  {ind}
                </span>
              ))}
            </div>
          </div>
        </section>

        <section className="space-y-8">
          <SectionHeading title="Frequently asked questions" />
          <div className="grid gap-4 md:grid-cols-2">
            {item.faqs.map((f) => (
              <div key={f.question} className="rounded-xl border border-zinc-200 p-6 dark:border-zinc-800">
                <h3 className="font-semibold">{f.question}</h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">{f.answer}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="grid gap-8 rounded-xl border border-zinc-200 bg-zinc-50 p-8 lg:grid-cols-2 lg:items-start dark:border-zinc-800 dark:bg-zinc-900">
          <SectionHeading
            title="Ready to start?"
            description="Share your requirements. We respond within 24 business hours with a clear next step."
          />
          <ContactForm />
        </section>
      </Container>

      <CtaBand heading={`Start your ${item.title.toLowerCase()} project today`} />
    </>
  );
}
