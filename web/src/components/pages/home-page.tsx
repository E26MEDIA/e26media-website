import dynamic from "next/dynamic";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ArrowUpRight, CheckCircle2, Phone, Sparkles, Star } from "lucide-react";
import { Container, SectionHeading } from "@/components/ui/section";
import { buttonVariants } from "@/components/ui/button";
import { SITE, STATS, TRUST_STATS } from "@/data/site";
import { SERVICE_CATEGORIES } from "@/data/services";
import { PORTFOLIO } from "@/data/portfolio";
import { TESTIMONIALS } from "@/data/testimonials";
import { HOME_FAQS, HOME_SEO } from "@/data/home-seo";
import { INDUSTRIES } from "@/data/industries";
import { BLOG_POSTS } from "@/data/blogs";
import { PROCESS_STEPS } from "@/data/technologies";
import { BreadcrumbJsonLd, FaqJsonLd, WebSiteJsonLd } from "@/components/seo/json-ld";
import { ContactForm } from "@/components/forms/contact-form";
import { getGoogleSheetsUrl } from "@/lib/sheets-url";
import { LogoMarquee } from "@/components/visual/logo-marquee";
import { TechMarquee } from "@/components/visual/tech-marquee";
import { CtaBand } from "@/components/visual/cta-band";
import { ServiceIcon } from "@/components/visual/service-icon";
import { FaqAccordion } from "@/components/sections/faq-accordion";
import { ProjectCard } from "@/components/portfolio/project-card";

const HeroMockup = dynamic(
  () => import("@/components/visual/hero-mockup").then((m) => m.HeroMockup),
  {
    ssr: true,
    loading: () => (
      <div className="mx-auto aspect-square w-full max-w-lg animate-pulse rounded-2xl bg-zinc-100 dark:bg-zinc-900" />
    ),
  }
);

export function HomePage() {
  const sheetsUrl = getGoogleSheetsUrl();
  const featured = PORTFOLIO.filter((p) => p.featured).slice(0, 6);
  const iconBySlug = Object.fromEntries(SERVICE_CATEGORIES.map((c) => [c.slug, c.icon]));

  return (
    <>
      <WebSiteJsonLd />
      <FaqJsonLd faqs={HOME_FAQS} />
      <BreadcrumbJsonLd items={[{ name: "Home", path: "/" }]} />

      {/* Hero */}
      <section className="relative flex min-h-screen items-center overflow-hidden bg-white pt-28 pb-20 dark:bg-zinc-950 md:pt-36 md:pb-28">
        <div className="absolute inset-0 grid-bg pointer-events-none" />
        <div className="absolute top-1/4 left-1/4 h-[350px] w-[350px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-green-200/20 blur-[80px]" />
        <div className="absolute bottom-1/4 right-1/4 h-[450px] w-[450px] translate-x-1/2 translate-y-1/2 rounded-full bg-emerald-200/10 blur-[100px]" />

        <Container className="relative z-10 w-full">
          <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-8">
            <div className="space-y-8 text-left lg:col-span-6">
              <div className="inline-flex items-center gap-2 rounded-full border border-green-200/50 bg-green-50 px-3 py-1 font-mono text-xs uppercase tracking-wider text-green-700 dark:border-green-900 dark:bg-green-950/40 dark:text-green-400">
                <Sparkles className="h-3.5 w-3.5" />
                {HOME_SEO.heroEyebrow}
              </div>
              <h1 className="font-heading text-3xl font-medium leading-[1.1] tracking-tighter text-zinc-950 dark:text-white sm:text-4xl lg:text-5xl">
                Website, Software &amp; Mobile App Development Company in{" "}
                <span className="gradient-text">Mangalore &amp; Bangalore</span>
              </h1>
              <p className="max-w-xl text-base leading-relaxed text-zinc-600 dark:text-zinc-400 sm:text-lg">
                {HOME_SEO.heroDescription}
              </p>
              <ul className="flex flex-wrap gap-2">
                {HOME_SEO.heroHighlights.map((item) => (
                  <li
                    key={item}
                    className="inline-flex items-center gap-1.5 rounded-full border border-zinc-200 bg-white px-3 py-1 text-xs font-medium text-zinc-700 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-300"
                  >
                    <CheckCircle2 className="h-3.5 w-3.5 text-green-600" aria-hidden />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-3 pt-2">
                <Link href="/contact" className={buttonVariants({ size: "lg" })}>
                  Get Free Consultation <ArrowRight className="h-4 w-4" />
                </Link>
                <Link href="/contact" className={buttonVariants({ variant: "outline", size: "lg" })}>
                  Request a Quote
                </Link>
                <Link href="/portfolio" className={buttonVariants({ variant: "outline", size: "lg" })}>
                  View Portfolio
                </Link>
              </div>
              <div className="grid max-w-md grid-cols-3 gap-6 border-t border-zinc-200/60 pt-6 dark:border-zinc-800">
                {STATS.map((s) => (
                  <div key={s.label}>
                    <p className="font-heading text-2xl font-semibold text-zinc-950 dark:text-white">{s.value}</p>
                    <p className="font-mono text-xs uppercase tracking-wider text-zinc-500">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex justify-center lg:col-span-6">
              <HeroMockup />
            </div>
          </div>
        </Container>
      </section>

      <LogoMarquee />

      {/* Services */}
      <section className="border-y border-zinc-200/60 bg-zinc-50 py-24 dark:border-zinc-800 dark:bg-zinc-900/40 md:py-32">
        <Container>
          <div className="mb-16 flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <div className="max-w-2xl space-y-4">
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-green-600">Services</p>
              <h2 className="font-heading text-3xl font-medium tracking-tight text-zinc-950 dark:text-white sm:text-4xl">
                Website, software, apps &amp; digital marketing for Mangalore and Bangalore
              </h2>
              <p className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-400 sm:text-base">
                Four core services — each with dedicated local landing pages so you can explore how we work in your city.
              </p>
            </div>
            <Link href="/services" className="inline-flex shrink-0 items-center gap-1.5 text-sm font-semibold text-zinc-900 hover:text-green-600 dark:text-white">
              Explore all services <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid gap-8 md:grid-cols-2">
            {HOME_SEO.serviceCards.map((card) => (
              <article
                key={card.slug}
                className="group flex flex-col rounded-xl border border-zinc-200 bg-white p-8 text-left transition-all duration-300 hover:-translate-y-1 hover:shadow-lg dark:border-zinc-800 dark:bg-zinc-950"
              >
                <div className="icon-box mb-6">
                  <ServiceIcon name={iconBySlug[card.slug] ?? "Monitor"} className="h-6 w-6" />
                </div>
                <h3 className="mb-3 font-heading text-xl font-medium tracking-tight text-zinc-900 dark:text-white sm:text-2xl">
                  {card.title}
                </h3>
                <p className="mb-4 flex-1 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400 sm:text-base">
                  {card.description}
                </p>
                <ul className="mb-6 space-y-2">
                  {card.benefits.map((b) => (
                    <li key={b} className="flex items-center gap-2 text-sm text-zinc-600 dark:text-zinc-400">
                      <CheckCircle2 className="h-4 w-4 shrink-0 text-green-600" /> {b}
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-3">
                  <Link href={card.href} className="inline-flex items-center gap-1 text-sm font-semibold text-green-600 hover:underline">
                    Mangalore <ArrowUpRight className="h-4 w-4" />
                  </Link>
                  <Link href={card.secondaryHref} className="inline-flex items-center gap-1 text-sm font-semibold text-green-600 hover:underline">
                    Bangalore <ArrowUpRight className="h-4 w-4" />
                  </Link>
                  <Link href={`/services/${card.slug}`} className="inline-flex items-center gap-1 text-sm font-semibold text-zinc-800 hover:text-green-600 dark:text-zinc-200">
                    Learn more <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      {/* About */}
      <section className="bg-white py-24 dark:bg-zinc-950 md:py-32">
        <Container>
          <div className="mx-auto max-w-3xl space-y-8">
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-green-600">About E26 Media</p>
            <h2 className="font-heading text-3xl font-medium leading-snug tracking-tight text-zinc-950 dark:text-white sm:text-4xl">
              {HOME_SEO.aboutHeading}
            </h2>
            {HOME_SEO.aboutParagraphs.map((p) => (
              <p key={p.slice(0, 40)} className="text-base leading-relaxed text-zinc-600 dark:text-zinc-400 sm:text-lg">
                {p}
              </p>
            ))}
            <ul className="grid gap-3 sm:grid-cols-2">
              {HOME_SEO.trustSignals.map((signal) => (
                <li key={signal} className="flex items-center gap-2 text-sm text-zinc-700 dark:text-zinc-300">
                  <CheckCircle2 className="h-4 w-4 text-green-600" /> {signal}
                </li>
              ))}
            </ul>
            <Link href="/about" className={buttonVariants({ variant: "outline" })}>
              Our story <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </Container>
      </section>

      {/* Why choose */}
      <section className="border-y border-zinc-200/60 bg-zinc-50 py-24 dark:border-zinc-800 dark:bg-zinc-900/40 md:py-32">
        <Container className="space-y-12">
          <SectionHeading eyebrow="Why E26 Media" title={HOME_SEO.whyChooseHeading} align="center" />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {HOME_SEO.whyChoose.map((item) => (
              <div
                key={item.title}
                className="rounded-xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-950"
              >
                <h3 className="font-heading text-base font-semibold text-zinc-950 dark:text-white">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">{item.body}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Portfolio */}
      <section className="bg-white py-16 dark:bg-zinc-950 md:py-20">
        <Container className="space-y-8">
          <SectionHeading
            eyebrow="Portfolio"
            title="Featured websites, software, apps & campaigns"
            description="Live production work for brands across Karnataka and beyond — not template demos."
          />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {featured.map((p) => (
              <ProjectCard key={p.slug} project={p} href={`/portfolio/${p.slug}`} />
            ))}
          </div>
          <div className="text-center">
            <Link href="/portfolio" className={buttonVariants({ variant: "outline", size: "lg" })}>
              View full portfolio
            </Link>
          </div>
        </Container>
      </section>

      <TechMarquee />

      {/* Process */}
      <section className="border-y border-zinc-200/60 bg-zinc-50 py-24 dark:border-zinc-800 dark:bg-zinc-900/40 md:py-32">
        <Container className="space-y-12">
          <SectionHeading
            eyebrow="Our Development Process"
            title="From idea to launch — with clarity at every step"
            align="center"
          />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {PROCESS_STEPS.map((step, i) => (
              <div
                key={step.step}
                className="group relative overflow-hidden rounded-xl border border-zinc-200 bg-white p-8 transition-all hover:border-green-200 hover:shadow-lg dark:border-zinc-800 dark:bg-zinc-950 dark:hover:border-green-900"
              >
                <span className="font-heading text-5xl font-bold text-green-600/10 transition-colors group-hover:text-green-600/20">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-4 font-heading text-lg font-semibold">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">{step.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Industries */}
      <section className="bg-white py-24 dark:bg-zinc-950 md:py-32">
        <Container className="space-y-12">
          <SectionHeading
            eyebrow="Industries"
            title="Built for healthcare, education, retail, manufacturing & more"
            description="Sector context shapes UX, compliance, and integrations — across Mangalore, Bangalore, and South India."
          />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {INDUSTRIES.slice(0, 12).map((ind) => (
              <Link
                key={ind.slug}
                href={`/industries/${ind.slug}`}
                className="group rounded-xl border border-zinc-200 bg-zinc-50 p-6 transition-all hover:-translate-y-1 hover:border-green-200 hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900/40"
              >
                <h3 className="font-heading font-semibold group-hover:text-green-600">{ind.title}</h3>
                <p className="mt-2 line-clamp-2 text-sm text-zinc-600 dark:text-zinc-400">{ind.overview}</p>
              </Link>
            ))}
          </div>
          <div className="text-center">
            <Link href="/industries" className={buttonVariants({ variant: "outline" })}>
              All industries
            </Link>
          </div>
        </Container>
      </section>

      {/* Local SEO hub links */}
      <section className="border-y border-zinc-200/60 bg-zinc-50 py-16 dark:border-zinc-800 dark:bg-zinc-900/40 md:py-20">
        <Container className="space-y-8">
          <SectionHeading
            eyebrow="Service areas"
            title="Local pages for Mangalore & Bangalore"
            description="Dedicated landing pages for each primary service — built for local search and clear next steps."
          />
          <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {HOME_SEO.cityLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="flex h-full items-center justify-between rounded-xl border border-zinc-200 bg-white px-4 py-3 text-sm font-semibold transition hover:border-green-600 hover:text-green-600 dark:border-zinc-800 dark:bg-zinc-950"
                >
                  {link.label}
                  <span aria-hidden>→</span>
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* Testimonials */}
      <section className="bg-white py-24 dark:bg-zinc-950 md:py-32">
        <Container className="space-y-12">
          <SectionHeading
            eyebrow="Testimonials"
            title="Trusted by businesses in Mangalore, Bangalore & beyond"
            align="center"
          />
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {TESTIMONIALS.slice(0, 6).map((t) => (
              <div key={t.id} className="flex flex-col rounded-xl border border-zinc-200 bg-zinc-50 p-8 dark:border-zinc-800 dark:bg-zinc-900/40">
                <div className="mb-4 flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="flex-1 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">&ldquo;{t.text}&rdquo;</p>
                {t.service && (
                  <span className="mt-4 inline-block w-fit rounded-full bg-green-50 px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-wider text-green-700 dark:bg-green-950/40 dark:text-green-400">
                    {t.service}
                  </span>
                )}
                <div className="mt-6 flex items-center gap-3 border-t border-zinc-100 pt-4 dark:border-zinc-800">
                  {t.logo && (
                    <Image src={t.logo} alt={`${t.company} logo`} width={40} height={40} className="rounded-full" />
                  )}
                  <div>
                    <p className="text-sm font-semibold">{t.name}</p>
                    <p className="text-xs text-zinc-500">
                      {t.role}, {t.company}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Trust stats */}
      <section className="bg-zinc-950 py-20 text-white">
        <Container>
          <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
            {TRUST_STATS.map((s) => (
              <div key={s.label} className="text-center">
                <p className="font-heading text-4xl font-semibold text-green-400">{s.value}</p>
                <p className="mt-2 font-mono text-xs uppercase tracking-wider text-zinc-500">{s.label}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Blog */}
      <section className="bg-white py-16 dark:bg-zinc-950 md:py-20">
        <Container className="space-y-8">
          <SectionHeading eyebrow="Knowledge Center" title="Guides for Karnataka businesses" />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {BLOG_POSTS.slice(0, 6).map((post) => (
              <Link
                key={post.slug}
                href={`/knowledge/guides/${post.slug}`}
                className="group flex flex-col rounded-xl border border-zinc-200 p-6 transition-all hover:-translate-y-0.5 hover:border-green-200 hover:shadow-lg dark:border-zinc-800"
              >
                <p className="font-mono text-[10px] uppercase tracking-wider text-green-600">{post.category}</p>
                <h3 className="mt-2 font-heading text-lg font-semibold leading-snug group-hover:text-green-600">{post.title}</h3>
                <p className="mt-2 line-clamp-3 flex-1 text-sm text-zinc-600 dark:text-zinc-400">{post.excerpt}</p>
                <p className="mt-4 font-mono text-[11px] text-zinc-500">{post.readingTime} read</p>
              </Link>
            ))}
          </div>
          <div className="text-center">
            <Link href="/knowledge/guides" className={buttonVariants({ variant: "outline" })}>
              View all guides
            </Link>
          </div>
        </Container>
      </section>

      {/* FAQ */}
      <section className="border-t border-zinc-200/60 bg-zinc-50 py-24 dark:border-zinc-800 dark:bg-zinc-900/40 md:py-32">
        <Container className="mx-auto max-w-3xl space-y-10">
          <SectionHeading
            eyebrow="FAQ"
            title="Questions about E26 Media in Mangalore & Bangalore"
            description="Clear answers on services, pricing, timelines, and how we work with startups and SMEs across Karnataka."
            align="center"
          />
          <FaqAccordion faqs={HOME_FAQS} />
          <p className="text-center text-sm text-zinc-500">
            Still have questions?{" "}
            <Link href="/contact" className="font-semibold text-green-600 hover:underline">
              Contact our Mangalore team
            </Link>
          </p>
        </Container>
      </section>

      {/* Contact + final CTA */}
      <section className="bg-white py-24 dark:bg-zinc-950 md:py-32">
        <Container className="grid gap-12 lg:grid-cols-2 lg:items-start">
          <div className="space-y-6">
            <SectionHeading
              eyebrow="Get Started"
              title={HOME_SEO.ctaTitle}
              description={HOME_SEO.ctaText}
            />
            <div className="flex flex-wrap gap-3">
              <Link href="/contact" className={buttonVariants({ size: "lg" })}>
                Book Free Consultation
              </Link>
              <a href={`tel:${SITE.contact.phoneRaw}`} className={buttonVariants({ variant: "outline", size: "lg" })}>
                <Phone className="h-4 w-4" /> Call Now
              </a>
              <Link href="/contact" className={buttonVariants({ variant: "outline", size: "lg" })}>
                Get Free Quote
              </Link>
            </div>
            <ul className="space-y-3">
              {["No obligation strategy call", "Transparent scoping and timelines", "Dedicated project team"].map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm text-zinc-600 dark:text-zinc-400">
                  <CheckCircle2 className="h-4 w-4 text-green-600" /> {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-xl border border-zinc-200 bg-zinc-50 p-8 dark:border-zinc-800 dark:bg-zinc-900">
            <ContactForm sheetsUrl={sheetsUrl} />
          </div>
        </Container>
      </section>

      <CtaBand heading={HOME_SEO.ctaTitle} text={HOME_SEO.ctaText} />
    </>
  );
}
