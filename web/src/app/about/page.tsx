import Link from "next/link";
import { buildMetadata } from "@/lib/seo";
import { Container, SectionHeading } from "@/components/ui/section";
import { buttonVariants } from "@/components/ui/button";
import { STATS } from "@/data/site";
import { WHY_CHOOSE } from "@/data/technologies";
import {
  ABOUT_STORY,
  MISSION,
  VISION,
  CORE_VALUES,
  CULTURE,
} from "@/data/about";
import { PageHero } from "@/components/visual/page-hero";
import { CtaBand } from "@/components/visual/cta-band";
import { CheckCircle2 } from "lucide-react";

export const metadata = buildMetadata({
  title: "About E26 Media | Technology Partner in Mangalore",
  description:
    "E26 Media builds websites, software, mobile apps, and AI solutions for clients including Floriva Gifts, CleanPro, Alfiya, and Layan Products — from Mangalore, Karnataka.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <PageHero
        badge="About Us"
        title="Technology partners for ambitious businesses in Karnataka"
        highlight="ambitious businesses"
        description="E26 Media Private Limited — Mangalore's premium technology studio for websites, software, mobile apps, AI, cloud, and digital growth."
      />

      <section className="bg-white py-24 dark:bg-zinc-950 md:py-32">
        <Container>
          <div className="mx-auto max-w-3xl space-y-6">
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-green-600">Our Story</p>
            <h2 className="font-heading text-3xl font-medium tracking-tight text-zinc-950 dark:text-white">
              Built in Mangalore. Trusted globally.
            </h2>
            {ABOUT_STORY.paragraphs.map((p) => (
              <p key={p.slice(0, 40)} className="text-base leading-relaxed text-zinc-600 dark:text-zinc-400">
                {p}
              </p>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-y border-zinc-200/60 bg-zinc-50 py-24 dark:border-zinc-800 dark:bg-zinc-900/40 md:py-32">
        <Container>
          <div className="grid gap-8 md:grid-cols-2">
            <div className="rounded-xl border border-zinc-200 bg-white p-10 dark:border-zinc-800 dark:bg-zinc-950">
              <p className="font-mono text-xs uppercase tracking-wider text-green-600">Mission</p>
              <p className="mt-4 text-lg leading-relaxed text-zinc-700 dark:text-zinc-300">{MISSION}</p>
            </div>
            <div className="rounded-xl border border-zinc-200 bg-white p-10 dark:border-zinc-800 dark:bg-zinc-950">
              <p className="font-mono text-xs uppercase tracking-wider text-green-600">Vision</p>
              <p className="mt-4 text-lg leading-relaxed text-zinc-700 dark:text-zinc-300">{VISION}</p>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-white py-24 dark:bg-zinc-950 md:py-32">
        <Container className="space-y-12">
          <SectionHeading eyebrow="Values" title="What drives every project we ship" align="center" />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {CORE_VALUES.map((v) => (
              <div key={v.title} className="rounded-xl border border-zinc-200 p-8 transition-all hover:border-green-200 hover:shadow-lg dark:border-zinc-800">
                <CheckCircle2 className="mb-4 h-6 w-6 text-green-600" />
                <h3 className="font-heading font-semibold">{v.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">{v.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-y border-zinc-200/60 bg-zinc-950 py-20 text-white">
        <Container>
          <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
            {STATS.map((s) => (
              <div key={s.label} className="text-center">
                <p className="font-heading text-4xl font-semibold text-green-400">{s.value}</p>
                <p className="mt-2 font-mono text-xs uppercase tracking-wider text-zinc-500">{s.label}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-white py-24 dark:bg-zinc-950 md:py-32">
        <Container className="space-y-12">
          <SectionHeading eyebrow="Culture" title="Why people love working here" />
          <ul className="mx-auto grid max-w-3xl gap-4">
            {CULTURE.map((c) => (
              <li key={c} className="flex gap-3 rounded-xl border border-zinc-200 p-5 dark:border-zinc-800">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-green-600" />
                <span className="text-sm text-zinc-700 dark:text-zinc-300">{c}</span>
              </li>
            ))}
          </ul>
          <div className="text-center">
            <Link href="/careers" className={buttonVariants({ size: "lg" })}>
              View open positions
            </Link>
          </div>
        </Container>
      </section>

      <section className="border-t border-zinc-200/60 bg-zinc-50 py-24 dark:border-zinc-800 dark:bg-zinc-900/40 md:py-32">
        <Container className="space-y-12">
          <SectionHeading title="Why businesses choose E26 Media" />
          <div className="grid gap-6 md:grid-cols-2">
            {WHY_CHOOSE.map((w) => (
              <div key={w.title} className="rounded-xl border border-zinc-200 bg-white p-8 dark:border-zinc-800 dark:bg-zinc-950">
                <h3 className="font-semibold">{w.title}</h3>
                <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">{w.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <CtaBand heading="Ready to work with E26 Media?" />
    </>
  );
}
