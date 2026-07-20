import Link from "next/link";
import Image from "next/image";
import {
  CheckCircle2,
  Code2,
  Layers,
  MapPin,
  Phone,
  Rocket,
  Sparkles,
} from "lucide-react";
import { buildMetadata } from "@/lib/seo";
import { Container, SectionHeading } from "@/components/ui/section";
import { Card } from "@/components/ui/card";
import { buttonVariants } from "@/components/ui/button";
import { ContactForm } from "@/components/forms/contact-form";
import { FaqAccordion } from "@/components/sections/faq-accordion";
import { CtaBand } from "@/components/visual/cta-band";
import { BreadcrumbJsonLd, FaqJsonLd, ServiceJsonLd } from "@/components/seo/json-ld";
import { getGoogleSheetsUrl } from "@/lib/sheets-url";
import { PORTFOLIO } from "@/data/portfolio";
import { TESTIMONIALS } from "@/data/testimonials";
import { SITE } from "@/data/site";
import { withLogoCache } from "@/lib/client-logo";
import type { CityServicePage } from "@/data/city-services";
import { cn } from "@/lib/utils";

export function cityServiceMetadata(page: CityServicePage) {
  return buildMetadata({
    title: page.metaTitle,
    description: page.metaDescription,
    path: page.path,
  });
}

export function CityServiceLayout({ page }: { page: CityServicePage }) {
  const sheetsUrl = getGoogleSheetsUrl();
  const projects = page.portfolioSlugs
    .map((slug) => PORTFOLIO.find((p) => p.slug === slug))
    .filter(Boolean);
  const testimonials = TESTIMONIALS.slice(0, 3);

  return (
    <>
      <ServiceJsonLd
        name={page.h1}
        description={page.metaDescription}
        path={page.path}
        city={page.cityLabel}
        serviceType={page.serviceLabel}
      />
      <FaqJsonLd faqs={page.faqs} />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: page.serviceLabel, path: `/services/${page.service}` },
          { name: page.cityLabel, path: page.path },
        ]}
      />

      <section className="relative overflow-hidden border-b border-zinc-200 dark:border-zinc-800">
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(22,163,74,0.12),_transparent_55%)]"
          aria-hidden
        />
        <Container className="relative py-16 md:py-24">
          <nav aria-label="Breadcrumb" className="mb-8 text-sm text-zinc-500">
            <ol className="flex flex-wrap items-center gap-2">
              <li>
                <Link href="/" className="hover:text-green-600">
                  Home
                </Link>
              </li>
              <li aria-hidden>/</li>
              <li>
                <Link href={`/services/${page.service}`} className="hover:text-green-600">
                  {page.serviceLabel}
                </Link>
              </li>
              <li aria-hidden>/</li>
              <li className="font-medium text-zinc-950 dark:text-white">{page.cityLabel}</li>
            </ol>
          </nav>

          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-green-600">
            {page.heroEyebrow}
          </p>
          <h1 className="mt-4 max-w-4xl text-4xl font-semibold tracking-tight text-zinc-950 dark:text-white md:text-5xl">
            {page.h1}
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
            {page.heroSubtitle}
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/contact" className={buttonVariants({ size: "lg" })}>
              Book Free Consultation
            </Link>
            <a
              href={`tel:${SITE.contact.phoneRaw}`}
              className={buttonVariants({ variant: "outline", size: "lg" })}
            >
              <Phone className="h-4 w-4" /> Get Free Quote
            </a>
          </div>
          <p className="mt-6 flex items-start gap-2 text-sm text-zinc-500">
            <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-green-600" />
            Serving {page.cityLabel} · Head office Kanakanady, Mangalore
          </p>
        </Container>
      </section>

      <Container className="space-y-20 py-16 md:py-20">
        <article className="max-w-3xl">
          <h2 className="text-2xl font-semibold text-zinc-950 dark:text-white md:text-3xl">
            {page.aboutHeading}
          </h2>
          <div className="mt-6 space-y-4 text-base leading-relaxed text-zinc-600 dark:text-zinc-400">
            {page.aboutParagraphs.map((p) => (
              <p key={p.slice(0, 48)}>{p}</p>
            ))}
          </div>
        </article>

        <section>
          <SectionHeading
            eyebrow="Why E26 Media"
            title={page.whyChooseHeading}
            description={`Transparent delivery for ${page.serviceLabel.toLowerCase()} in ${page.cityLabel}.`}
          />
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {page.whyChooseItems.map((item) => (
              <Card key={item.title} className="h-full">
                <div className="flex gap-3">
                  <Sparkles className="mt-0.5 h-5 w-5 shrink-0 text-green-600" />
                  <div>
                    <h3 className="font-semibold text-zinc-950 dark:text-white">{item.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                      {item.body}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>

        <section>
          <SectionHeading eyebrow="Process" title={page.processHeading} />
          <ol className="mt-10 space-y-4">
            {page.processSteps.map((step) => (
              <li
                key={step.step}
                className="flex gap-4 rounded-xl border border-zinc-200 p-5 dark:border-zinc-800"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-green-600 text-sm font-bold text-white">
                  {step.step}
                </span>
                <div>
                  <h3 className="font-semibold text-zinc-950 dark:text-white">{step.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                    {step.description}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        <section>
          <SectionHeading
            eyebrow="Stack"
            title={page.technologiesHeading}
            description="Modern, maintainable tools chosen for performance and long-term ownership."
          />
          <ul className="mt-8 flex flex-wrap gap-3">
            {page.technologies.map((tech) => (
              <li
                key={tech}
                className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-4 py-2 text-sm font-medium text-zinc-700 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-300"
              >
                <Code2 className="h-3.5 w-3.5 text-green-600" aria-hidden />
                {tech}
              </li>
            ))}
          </ul>
        </section>

        <section>
          <SectionHeading eyebrow="Industries" title={page.industriesHeading} />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {page.industries.map((industry) => (
              <Card key={industry.name}>
                <Layers className="h-5 w-5 text-green-600" aria-hidden />
                <h3 className="mt-3 font-semibold text-zinc-950 dark:text-white">{industry.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                  {industry.description}
                </p>
              </Card>
            ))}
          </div>
        </section>

        <section>
          <SectionHeading eyebrow="Benefits" title={page.benefitsHeading} />
          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {page.benefits.map((benefit) => (
              <li key={benefit} className="flex gap-2 text-sm text-zinc-600 dark:text-zinc-400">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-green-600" />
                {benefit}
              </li>
            ))}
          </ul>
        </section>

        <article className="max-w-3xl">
          <h2 className="text-2xl font-semibold text-zinc-950 dark:text-white md:text-3xl">
            {page.whyBusinessesHeading}
          </h2>
          <div className="mt-6 space-y-4 text-base leading-relaxed text-zinc-600 dark:text-zinc-400">
            {page.whyBusinessesParagraphs.map((p) => (
              <p key={p.slice(0, 48)}>{p}</p>
            ))}
          </div>
        </article>

        {projects.length > 0 && (
          <section>
            <SectionHeading
              eyebrow="Portfolio"
              title={page.portfolioHeading}
              description="Live production work — not mockups."
            />
            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {projects.map((project) =>
                project ? (
                  <Link key={project.slug} href={`/portfolio/${project.slug}`} className="group">
                    <Card className="h-full overflow-hidden p-0 transition group-hover:ring-2 group-hover:ring-green-600/40">
                      <div className="relative aspect-[16/10] bg-zinc-100 dark:bg-zinc-900">
                        <Image
                          src={project.image}
                          alt={`${project.title} — ${page.serviceLabel} project by E26 Media`}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 100vw, 33vw"
                        />
                      </div>
                      <div className="p-5">
                        <h3 className="font-semibold text-zinc-950 dark:text-white">{project.title}</h3>
                        <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">{project.excerpt}</p>
                      </div>
                    </Card>
                  </Link>
                ) : null
              )}
            </div>
            <div className="mt-6">
              <Link href="/portfolio" className="text-sm font-semibold text-green-600 hover:underline">
                View full portfolio →
              </Link>
            </div>
          </section>
        )}

        <section>
          <SectionHeading eyebrow="Testimonials" title={page.testimonialsHeading} />
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {testimonials.map((t) => (
              <Card key={t.id}>
                <p className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                  &ldquo;{t.text}&rdquo;
                </p>
                <p className="mt-4 text-sm font-semibold">{t.name}</p>
                <p className="text-xs text-zinc-500">{t.company}</p>
              </Card>
            ))}
          </div>
        </section>

        <section>
          <SectionHeading eyebrow="FAQ" title={page.faqHeading} />
          <div className="mt-8">
            <FaqAccordion faqs={page.faqs} />
          </div>
        </section>

        <section>
          <SectionHeading eyebrow="Explore more" title="Related pages and resources" />
          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {page.relatedLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="flex items-center justify-between rounded-xl border border-zinc-200 px-4 py-3 text-sm font-semibold transition hover:border-green-600 hover:text-green-600 dark:border-zinc-800"
                >
                  {link.label}
                  <span aria-hidden>→</span>
                </Link>
              </li>
            ))}
          </ul>
        </section>

        <CtaBand heading={page.ctaTitle} text={page.ctaDescription} />

        <div className="grid gap-12 border-t border-zinc-200 pt-16 lg:grid-cols-2 lg:items-start dark:border-zinc-800">
          <div>
            <SectionHeading
              eyebrow="Contact"
              title={`Start your ${page.cityLabel} project`}
              description="Tell us about your goals. Most enquiries receive a response within 24 business hours."
            />
            <ul className="mt-6 space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
              <li className="flex gap-2">
                <Rocket className="mt-0.5 h-4 w-4 text-green-600" />
                Free consultation · fixed quote after discovery
              </li>
              <li className="flex gap-2">
                <Phone className="mt-0.5 h-4 w-4 text-green-600" />
                {SITE.contact.phone}
              </li>
              <li className="flex gap-2">
                <MapPin className="mt-0.5 h-4 w-4 text-green-600" />
                {SITE.contact.address}
              </li>
            </ul>
            <Image
              src={withLogoCache("/logo-icon.png")}
              alt="E26 Media 3D E logo"
              width={64}
              height={64}
              className="mt-8 rounded-xl"
              unoptimized
            />
          </div>
          <Card className={cn("p-6")}>
            <ContactForm sheetsUrl={sheetsUrl} />
          </Card>
        </div>
      </Container>
    </>
  );
}
