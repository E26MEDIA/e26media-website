import Link from "next/link";
import { CheckCircle2, ArrowRight } from "lucide-react";
import type { ServiceCategory, ServiceItem, ServiceDetailEnhancement } from "@/types";
import { Container, SectionHeading } from "@/components/ui/section";
import { Card } from "@/components/ui/card";
import { buttonVariants } from "@/components/ui/button";
import { PageHero } from "@/components/visual/page-hero";
import { CtaBand } from "@/components/visual/cta-band";
import { FaqAccordion } from "@/components/sections/faq-accordion";
import { ContactForm } from "@/components/forms/contact-form";
import { ProjectCard } from "@/components/portfolio/project-card";
import { PORTFOLIO } from "@/data/portfolio";
import { getGoogleSheetsUrl } from "@/lib/sheets-url";
import { SeoInternalLinks } from "@/components/seo/seo-internal-links";
import { BreadcrumbJsonLd } from "@/components/seo/json-ld";
import { getServiceSeoLinks } from "@/lib/internal-links";

type Props = {
  enhancement: ServiceDetailEnhancement;
  category: ServiceCategory;
  item: ServiceItem;
};

export function ServiceDetailLayout({ enhancement, category, item }: Props) {
  const sheetsUrl = getGoogleSheetsUrl();
  const portfolio = enhancement.portfolioSlugs
    .map((slug) => PORTFOLIO.find((p) => p.slug === slug))
    .filter(Boolean);

  const related = (enhancement.relatedSlugs ?? [])
    .map((slug) => category.items.find((i) => i.slug === slug))
    .filter(Boolean);

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
          { name: category.title, path: `/services/${category.slug}` },
          { name: item.title, path: `/services/${category.slug}/${item.slug}` },
        ]}
      />
      <PageHero
        badge={category.title}
        title={item.title}
        highlight={enhancement.heroHighlight}
        description={item.tagline}
      />

      <Container className="space-y-20 py-16 md:py-24">
        <div className="mx-auto max-w-3xl space-y-6">
          <nav aria-label="Breadcrumb" className="text-sm text-zinc-500">
            <Link href="/services" className="hover:text-green-600">
              Services
            </Link>
            <span aria-hidden> / </span>
            <Link href={`/services/${category.slug}`} className="hover:text-green-600">
              {category.title}
            </Link>
            <span aria-hidden> / </span>
            <span className="text-zinc-950 dark:text-white">{item.title}</span>
          </nav>
          {enhancement.intro.map((p) => (
            <p key={p.slice(0, 48)} className="text-lg leading-relaxed text-zinc-700 dark:text-zinc-300">
              {p}
            </p>
          ))}
          <div className="flex flex-wrap gap-4 pt-2">
            <Link href="/contact" className={buttonVariants({ size: "lg" })}>
              Book Free Consultation <ArrowRight className="h-4 w-4" />
            </Link>
            <Link href={`/services/${category.slug}`} className={buttonVariants({ variant: "outline", size: "lg" })}>
              All {category.title}
            </Link>
          </div>
        </div>

        {enhancement.sections.map((section) => (
          <article key={section.heading} className="mx-auto max-w-3xl">
            <h2 className="font-heading text-2xl font-semibold tracking-tight text-zinc-950 dark:text-white sm:text-3xl">
              {section.heading}
            </h2>
            {section.paragraphs.map((p) => (
              <p key={p.slice(0, 48)} className="mt-4 text-base leading-relaxed text-zinc-600 dark:text-zinc-400">
                {p}
              </p>
            ))}
          </article>
        ))}

        <section className="space-y-8">
          <SectionHeading
            eyebrow="Investment"
            title={`${item.title} pricing`}
            description="Exact quotes follow discovery. These bands help you plan budget before our consultation."
            align="center"
          />
          <div className="grid gap-6 md:grid-cols-3">
            {enhancement.pricingTiers.map((tier) => (
              <Card key={tier.name} className="flex flex-col">
                <p className="font-mono text-xs font-semibold uppercase tracking-wider text-green-600">{tier.name}</p>
                <p className="mt-2 font-heading text-2xl font-semibold text-zinc-950 dark:text-white">{tier.range}</p>
                <p className="mt-3 text-sm text-zinc-600 dark:text-zinc-400">{tier.description}</p>
                <ul className="mt-6 flex-1 space-y-2">
                  {tier.includes.map((inc) => (
                    <li key={inc} className="flex gap-2 text-sm text-zinc-600 dark:text-zinc-400">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-green-600" />
                      {inc}
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </section>

        <div className="grid gap-8 lg:grid-cols-2">
          <div className="rounded-xl border border-zinc-200 bg-zinc-50 p-8 dark:border-zinc-800 dark:bg-zinc-900">
            <h2 className="font-heading text-xl font-semibold">Deliverables</h2>
            <ul className="mt-6 space-y-3">
              {enhancement.deliverables.map((d) => (
                <li key={d} className="flex gap-2 text-sm text-zinc-600 dark:text-zinc-400">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-green-600" />
                  {d}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-xl border border-zinc-200 bg-white p-8 dark:border-zinc-800 dark:bg-zinc-950">
            <h2 className="font-heading text-xl font-semibold">Why E26 Media</h2>
            <ul className="mt-6 space-y-3">
              {enhancement.whyChoose.map((w) => (
                <li key={w} className="flex gap-2 text-sm text-zinc-600 dark:text-zinc-400">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-green-600" />
                  {w}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <section className="space-y-8">
          <SectionHeading title="Delivery process" align="center" />
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {item.process.map((step, i) => (
              <div key={step.step} className="rounded-xl border border-zinc-200 p-6 dark:border-zinc-800">
                <span className="font-mono text-xs font-bold text-green-600">
                  {String(i + 1).padStart(2, "0")} · {step.step}
                </span>
                <p className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">{step.description}</p>
              </div>
            ))}
          </div>
        </section>

        {portfolio.length > 0 && (
          <section className="space-y-8">
            <SectionHeading eyebrow="Proof" title="Related client work" />
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {portfolio.map((project) => (
                <ProjectCard key={project!.slug} project={project!} href={`/portfolio/${project!.slug}`} />
              ))}
            </div>
          </section>
        )}

        {related.length > 0 && (
          <section className="space-y-8">
            <SectionHeading title="Related services" />
            <div className="grid gap-4 md:grid-cols-3">
              {related.map((rel) => (
                <Link key={rel!.slug} href={`/services/${category.slug}/${rel!.slug}`}>
                  <Card className="h-full transition hover:border-green-300 hover:shadow-md">
                    <h3 className="font-semibold">{rel!.title}</h3>
                    <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">{rel!.tagline}</p>
                  </Card>
                </Link>
              ))}
            </div>
          </section>
        )}

        <SeoInternalLinks
          title="Local pages & resources"
          links={getServiceSeoLinks(category.slug)}
        />

        <section className="mx-auto max-w-3xl space-y-8">
          <SectionHeading
            title="Frequently asked questions"
            description={`Common questions about ${item.title.toLowerCase()} in Mangalore and Karnataka.`}
            align="center"
          />
          <FaqAccordion faqs={enhancement.faqs} />
        </section>

        <section className="grid gap-8 rounded-xl border border-zinc-200 bg-zinc-50 p-8 lg:grid-cols-2 lg:items-start dark:border-zinc-800 dark:bg-zinc-900">
          <SectionHeading
            title={`Start your ${item.title.toLowerCase()} project`}
            description="Share your requirements. We respond within 24 business hours with a clear quote and relevant case studies."
          />
          <ContactForm sheetsUrl={sheetsUrl} />
        </section>
      </Container>

      <CtaBand heading={`Ready to begin your ${item.title.toLowerCase()} project?`} />
    </>
  );
}
