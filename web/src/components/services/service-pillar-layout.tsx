import Link from "next/link";
import { CheckCircle2, ArrowRight } from "lucide-react";
import type { ServiceCategory } from "@/types";
import type { ServicePillar } from "@/types";
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
import { getLocationsByService } from "@/data/locations";
import { SeoInternalLinks } from "@/components/seo/seo-internal-links";
import { getServiceSeoLinks } from "@/lib/internal-links";

type Props = {
  pillar: ServicePillar;
  category: ServiceCategory;
};

export function ServicePillarLayout({ pillar, category }: Props) {
  const sheetsUrl = getGoogleSheetsUrl();
  const portfolio = pillar.portfolioSlugs
    .map((slug) => PORTFOLIO.find((p) => p.slug === slug))
    .filter(Boolean);
  const locationLinks = getLocationsByService(category.slug);

  return (
    <>
      <PageHero
        badge={pillar.hero.badge}
        title={pillar.hero.title}
        highlight={pillar.hero.highlight}
        description={pillar.hero.description}
      />

      <Container className="space-y-20 py-16 md:py-24">
        {/* Intro + primary CTA */}
        <div className="mx-auto max-w-3xl space-y-6">
          <nav aria-label="Breadcrumb" className="text-sm text-zinc-500">
            <Link href="/services" className="hover:text-green-600">
              Services
            </Link>
            <span aria-hidden> / </span>
            <span className="text-zinc-950 dark:text-white">{category.title}</span>
          </nav>
          {pillar.intro.map((p) => (
            <p key={p.slice(0, 48)} className="text-lg leading-relaxed text-zinc-700 dark:text-zinc-300">
              {p}
            </p>
          ))}
          <div className="flex flex-wrap gap-4 pt-2">
            <Link href="/contact" className={buttonVariants({ size: "lg" })}>
              Book Free Consultation <ArrowRight className="h-4 w-4" />
            </Link>
            <Link href="/portfolio" className={buttonVariants({ variant: "outline", size: "lg" })}>
              View Our Work
            </Link>
            <Link href="/pricing" className={buttonVariants({ variant: "outline", size: "lg" })}>
              View Pricing
            </Link>
          </div>
        </div>

        {/* SEO cross-link for digital marketing */}
        {category.slug === "digital-marketing" && (
          <div className="mx-auto max-w-3xl rounded-xl border border-green-200 bg-green-50 p-6 dark:border-green-900 dark:bg-green-950/30">
            <p className="text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
              Looking specifically for search rankings?{" "}
              <Link href="/services/digital-marketing/seo" className="font-semibold text-green-700 hover:underline dark:text-green-400">
                View our dedicated SEO services page
              </Link>{" "}
              — technical SEO, local SEO, and ranking programmes for Mangalore and Karnataka.
            </p>
          </div>
        )}

        {/* Long-form commercial sections */}
        {pillar.sections.map((section) => (
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

        {/* Pricing */}
        <section className="space-y-8">
          <SectionHeading
            eyebrow="Investment"
            title="Transparent pricing bands"
            description="Exact quotes follow discovery. These ranges help you budget realistically before our consultation call."
            align="center"
          />
          <div className="grid gap-6 md:grid-cols-3">
            {pillar.pricingTiers.map((tier) => (
              <Card key={tier.name} className="flex flex-col">
                <p className="font-mono text-xs font-semibold uppercase tracking-wider text-green-600">{tier.name}</p>
                <p className="mt-2 font-heading text-2xl font-semibold text-zinc-950 dark:text-white">{tier.range}</p>
                <p className="mt-3 text-sm text-zinc-600 dark:text-zinc-400">{tier.description}</p>
                <ul className="mt-6 flex-1 space-y-2">
                  {tier.includes.map((item) => (
                    <li key={item} className="flex gap-2 text-sm text-zinc-600 dark:text-zinc-400">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-green-600" />
                      {item}
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </section>

        {/* Deliverables + Why choose */}
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="rounded-xl border border-zinc-200 bg-zinc-50 p-8 dark:border-zinc-800 dark:bg-zinc-900">
            <h2 className="font-heading text-xl font-semibold">What you receive</h2>
            <ul className="mt-6 space-y-3">
              {pillar.deliverables.map((d) => (
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
              {pillar.whyChoose.map((w) => (
                <li key={w} className="flex gap-2 text-sm text-zinc-600 dark:text-zinc-400">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-green-600" />
                  {w}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Process */}
        <section className="space-y-8">
          <SectionHeading title="How we deliver" align="center" />
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {pillar.process.map((step, i) => (
              <div key={step.step} className="rounded-xl border border-zinc-200 p-6 dark:border-zinc-800">
                <span className="font-mono text-xs font-bold text-green-600">
                  {String(i + 1).padStart(2, "0")} · {step.step}
                </span>
                <p className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">{step.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Portfolio proof */}
        {portfolio.length > 0 && (
          <section className="space-y-8">
            <SectionHeading
              eyebrow="Proof"
              title="Related client work"
              description="Live production projects you can verify before signing."
            />
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {portfolio.map((project) => (
                <ProjectCard key={project!.slug} project={project!} href={`/portfolio/${project!.slug}`} />
              ))}
            </div>
          </section>
        )}

        {/* Service offerings grid */}
        <section className="space-y-8">
          <SectionHeading
            eyebrow="Offerings"
            title={`${category.title} services`}
            description="Explore specific solutions — each links to a detailed service page."
          />
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {category.items.map((item) => (
              <Link key={item.slug} href={`/services/${category.slug}/${item.slug}`}>
                <Card className="h-full transition hover:border-green-300 hover:shadow-md">
                  <h3 className="font-semibold">{item.title}</h3>
                  <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">{item.tagline}</p>
                </Card>
              </Link>
            ))}
          </div>
        </section>

        {/* FAQs */}
        {locationLinks.length > 0 && (
          <section className="mx-auto max-w-3xl rounded-xl border border-zinc-200 bg-zinc-50 p-6 dark:border-zinc-800 dark:bg-zinc-900">
            <h2 className="font-heading text-lg font-semibold text-zinc-950 dark:text-white">Local service pages</h2>
            <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
              {category.title} across Karnataka — city-specific information and consultation:
            </p>
            <ul className="mt-4 flex flex-wrap gap-3">
              {locationLinks.map((loc) => (
                <li key={loc.slug}>
                  <Link
                    href={`/service-areas/${loc.slug}`}
                    className="text-sm font-medium text-green-700 hover:underline dark:text-green-400"
                  >
                    {loc.city}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/service-areas" className="text-sm font-medium text-green-700 hover:underline dark:text-green-400">
                  All cities →
                </Link>
              </li>
            </ul>
          </section>
        )}

        <SeoInternalLinks title="SEO resources & pricing" links={getServiceSeoLinks(category.slug).slice(0, 6)} />

        <section className="mx-auto max-w-3xl space-y-8">
          <SectionHeading
            title="Frequently asked questions"
            description={`Common questions about ${category.title.toLowerCase()} in Mangalore and Karnataka.`}
            align="center"
          />
          <FaqAccordion faqs={pillar.faqs} />
        </section>

        {/* Contact form */}
        <section className="grid gap-8 rounded-xl border border-zinc-200 bg-zinc-50 p-8 lg:grid-cols-2 lg:items-start dark:border-zinc-800 dark:bg-zinc-900">
          <SectionHeading
            title="Request a free consultation"
            description="Tell us about your project. We respond within 24 business hours with a clear next step and relevant case studies."
          />
          <ContactForm sheetsUrl={sheetsUrl} />
        </section>
      </Container>

      <CtaBand heading={`Start your ${category.title.toLowerCase()} project today`} />
    </>
  );
}
