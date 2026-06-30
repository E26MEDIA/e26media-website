import dynamic from "next/dynamic";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ArrowUpRight, CheckCircle2, Sparkles, Star } from "lucide-react";
import { Container, SectionHeading } from "@/components/ui/section";
import { buttonVariants } from "@/components/ui/button";
import { SITE, STATS, TRUST_STATS } from "@/data/site";
import { SERVICE_CATEGORIES } from "@/data/services";
import { PORTFOLIO } from "@/data/portfolio";
import { TESTIMONIALS } from "@/data/testimonials";
import { HOME_FAQS } from "@/data/faqs";
import { INDUSTRIES } from "@/data/industries";
import { BLOG_POSTS } from "@/data/blogs";
import { PROCESS_STEPS } from "@/data/technologies";
import { FaqJsonLd } from "@/components/seo/json-ld";
import { ContactForm } from "@/components/forms/contact-form";
import { LogoMarquee } from "@/components/visual/logo-marquee";
import { TechMarquee } from "@/components/visual/tech-marquee";
import { CtaBand } from "@/components/visual/cta-band";
import { ServiceIcon } from "@/components/visual/service-icon";
import { FaqAccordion } from "@/components/sections/faq-accordion";
import { ABOUT_STORY } from "@/data/about";
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
  const featured = PORTFOLIO.filter((p) => p.featured).slice(0, 6);
  const topServices = SERVICE_CATEGORIES.slice(0, 4);

  return (
    <>
      <FaqJsonLd faqs={HOME_FAQS} />

      {/* Hero — matches live site */}
      <section className="relative flex min-h-screen items-center overflow-hidden bg-white pt-28 pb-20 dark:bg-zinc-950 md:pt-36 md:pb-28">
        <div className="absolute inset-0 grid-bg pointer-events-none" />
        <div className="absolute top-1/4 left-1/4 h-[350px] w-[350px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-green-200/20 blur-[80px]" />
        <div className="absolute bottom-1/4 right-1/4 h-[450px] w-[450px] translate-x-1/2 translate-y-1/2 rounded-full bg-emerald-200/10 blur-[100px]" />

        <Container className="relative z-10 w-full">
          <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-8">
            <div className="space-y-8 text-left lg:col-span-6">
              <div className="inline-flex items-center gap-2 rounded-full border border-green-200/50 bg-green-50 px-3 py-1 font-mono text-xs uppercase tracking-wider text-green-700 dark:border-green-900 dark:bg-green-950/40 dark:text-green-400">
                <Sparkles className="h-3.5 w-3.5" />
                Next-Gen Software & Marketing
              </div>
              <h1 className="font-heading text-4xl font-medium leading-none tracking-tighter text-zinc-950 dark:text-white sm:text-5xl lg:text-6xl">
                Transforming Businesses Through{" "}
                <span className="gradient-text">Innovative Digital Solutions</span>
              </h1>
              <p className="max-w-xl text-base leading-relaxed text-zinc-600 dark:text-zinc-400 sm:text-lg">
                {SITE.description}
              </p>
              <div className="flex flex-wrap gap-4 pt-2">
                <Link href="/contact" className={buttonVariants({ size: "lg" })}>
                  Get Started <ArrowRight className="h-4 w-4" />
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

      {/* Services preview — 4 large cards like live site */}
      <section className="border-y border-zinc-200/60 bg-zinc-50 py-24 dark:border-zinc-800 dark:bg-zinc-900/40 md:py-32">
        <Container>
          <div className="mb-16 flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <div className="max-w-2xl space-y-4">
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-green-600">What We Do</p>
              <h2 className="font-heading text-3xl font-medium tracking-tight text-zinc-950 dark:text-white sm:text-4xl">
                Core Digital Capabilities Designed For Business Scale
              </h2>
            </div>
            <Link href="/services" className="inline-flex shrink-0 items-center gap-1.5 text-sm font-semibold text-zinc-900 hover:text-green-600 dark:text-white">
              Explore all services <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid gap-8 md:grid-cols-2">
            {topServices.map((cat) => (
              <Link
                key={cat.slug}
                href={`/services/${cat.slug}`}
                className="group flex flex-col rounded-xl border border-zinc-200 bg-white p-8 text-left transition-all duration-300 hover:-translate-y-1 hover:shadow-lg dark:border-zinc-800 dark:bg-zinc-950"
              >
                <div className="icon-box mb-6">
                  <ServiceIcon name={cat.icon} className="h-6 w-6" />
                </div>
                <h3 className="mb-3 font-heading text-xl font-medium tracking-tight text-zinc-900 transition-colors group-hover:text-green-600 dark:text-white sm:text-2xl">
                  {cat.title}
                </h3>
                <p className="mb-6 flex-1 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400 sm:text-base">
                  {cat.description}
                </p>
                <span className="inline-flex items-center gap-1 text-sm font-semibold text-zinc-800 group-hover:text-green-600 dark:text-zinc-200">
                  Learn more <ArrowUpRight className="h-4 w-4" />
                </span>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      {/* Portfolio */}
      <section className="bg-white py-16 dark:bg-zinc-950 md:py-20">
        <Container className="space-y-8">
          <SectionHeading
            eyebrow="Portfolio"
            title="Real client work, real business results"
            description="Every project in our portfolio is live production work — websites, apps, and campaigns delivering measurable outcomes."
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

      {/* About — company story */}
      <section className="border-y border-zinc-200/60 bg-zinc-50 py-24 dark:border-zinc-800 dark:bg-zinc-900/40 md:py-32">
        <Container>
          <div className="mx-auto max-w-3xl space-y-8">
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-green-600">
              About E26 Media
            </p>
            <h2 className="font-heading text-3xl font-medium leading-snug tracking-tight text-zinc-950 dark:text-white sm:text-4xl">
              {ABOUT_STORY.intro}
            </h2>
            <p className="text-base leading-relaxed text-zinc-600 dark:text-zinc-400 sm:text-lg">
              {ABOUT_STORY.paragraphs[0]}
            </p>
            <p className="text-sm leading-relaxed text-zinc-500 dark:text-zinc-500">
              {ABOUT_STORY.paragraphs[1]}
            </p>
            <Link href="/about" className={buttonVariants({ variant: "outline" })}>
              Our story <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </Container>
      </section>

      {/* Process */}
      <section className="bg-white py-24 dark:bg-zinc-950 md:py-32">
        <Container className="space-y-12">
          <SectionHeading eyebrow="Our Process" title="From idea to launch — with clarity at every step" align="center" />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
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
      <section className="border-y border-zinc-200/60 bg-zinc-50 py-24 dark:border-zinc-800 dark:bg-zinc-900/40 md:py-32">
        <Container className="space-y-12">
          <SectionHeading eyebrow="Industries" title="Sector expertise across Karnataka" />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {INDUSTRIES.slice(0, 8).map((ind) => (
              <Link
                key={ind.slug}
                href={`/industries/${ind.slug}`}
                className="group rounded-xl border border-zinc-200 bg-white p-6 transition-all hover:-translate-y-1 hover:border-green-200 hover:shadow-md dark:border-zinc-800 dark:bg-zinc-950"
              >
                <h3 className="font-heading font-semibold group-hover:text-green-600">{ind.title}</h3>
                <p className="mt-2 line-clamp-2 text-sm text-zinc-600 dark:text-zinc-400">{ind.overview}</p>
              </Link>
            ))}
          </div>
          <div className="text-center">
            <Link href="/industries" className={buttonVariants({ variant: "outline" })}>All industries</Link>
          </div>
        </Container>
      </section>

      {/* Case studies */}
      <section className="bg-white py-16 dark:bg-zinc-950 md:py-20">
        <Container className="space-y-8">
          <SectionHeading
            eyebrow="Case Studies"
            title="Problems solved, outcomes delivered"
            description="Deep dives into how we helped real clients grow."
          />
          <div className="grid gap-6 lg:grid-cols-3">
            {featured.slice(0, 3).map((p) => (
              <ProjectCard key={p.slug} project={p} href={`/portfolio/${p.slug}`} />
            ))}
          </div>
          <div className="text-center">
            <Link href="/case-studies" className={buttonVariants({ variant: "outline" })}>
              All case studies
            </Link>
          </div>
        </Container>
      </section>

      {/* Testimonials */}
      <section className="border-y border-zinc-200/60 bg-zinc-50 py-24 dark:border-zinc-800 dark:bg-zinc-900/40 md:py-32">
        <Container className="space-y-12">
          <SectionHeading eyebrow="Testimonials" title="What our clients say" align="center" />
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {TESTIMONIALS.slice(0, 6).map((t) => (
              <div key={t.id} className="flex flex-col rounded-xl border border-zinc-200 bg-white p-8 dark:border-zinc-800 dark:bg-zinc-950">
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
                  {t.logo && <Image src={t.logo} alt="" width={40} height={40} className="rounded-full" />}
                  <div>
                    <p className="text-sm font-semibold">{t.name}</p>
                    <p className="text-xs text-zinc-500">{t.role}, {t.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Trust stats dark band */}
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
          <SectionHeading eyebrow="Insights" title="Latest from our blog" />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {BLOG_POSTS.slice(0, 6).map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="group flex flex-col rounded-xl border border-zinc-200 p-6 transition-all hover:-translate-y-0.5 hover:border-green-200 hover:shadow-lg dark:border-zinc-800">
                <p className="font-mono text-[10px] uppercase tracking-wider text-green-600">{post.category}</p>
                <h3 className="mt-2 font-heading text-lg font-semibold leading-snug group-hover:text-green-600">{post.title}</h3>
                <p className="mt-2 line-clamp-3 flex-1 text-sm text-zinc-600 dark:text-zinc-400">{post.excerpt}</p>
                <p className="mt-4 font-mono text-[11px] text-zinc-500">{post.readingTime} read</p>
              </Link>
            ))}
          </div>
          <div className="text-center">
            <Link href="/blog" className={buttonVariants({ variant: "outline" })}>
              View all articles
            </Link>
          </div>
        </Container>
      </section>

      {/* FAQ */}
      <section className="border-t border-zinc-200/60 bg-zinc-50 py-24 dark:border-zinc-800 dark:bg-zinc-900/40 md:py-32">
        <Container className="mx-auto max-w-3xl space-y-10">
          <SectionHeading
            eyebrow="FAQ"
            title="Common questions"
            description="Answers about our services, timelines, and how we work with businesses across Karnataka and beyond."
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

      {/* Quick enquiry */}
      <section className="bg-white py-24 dark:bg-zinc-950 md:py-32">
        <Container className="grid gap-12 lg:grid-cols-2 lg:items-start">
          <div className="space-y-6">
            <SectionHeading
              eyebrow="Get Started"
              title="Book your free consultation"
              description="Tell us about your project. We respond within 24 business hours."
            />
            <ul className="space-y-3">
              {["No obligation strategy call", "Transparent scoping and timelines", "Dedicated project team"].map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm text-zinc-600 dark:text-zinc-400">
                  <CheckCircle2 className="h-4 w-4 text-green-600" /> {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-xl border border-zinc-200 bg-zinc-50 p-8 dark:border-zinc-800 dark:bg-zinc-900">
            <ContactForm />
          </div>
        </Container>
      </section>

      <CtaBand />
    </>
  );
}
