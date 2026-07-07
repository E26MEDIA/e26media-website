import Link from "next/link";
import { ArrowRight, BookOpen, Download, Layers } from "lucide-react";
import { buildMetadata } from "@/lib/seo";
import { Container, SectionHeading } from "@/components/ui/section";
import { buttonVariants } from "@/components/ui/button";
import { PageHero } from "@/components/visual/page-hero";
import { CtaBand } from "@/components/visual/cta-band";
import { BLOG_POSTS, KNOWLEDGE_CATEGORIES } from "@/data/knowledge";

export const metadata = buildMetadata({
  title: "Knowledge Center — E26 Media | Guides, Insights & Downloads",
  description:
    "E26 Media Knowledge Center: expert guides on website development, software, AI, SEO, branding, and digital growth for Karnataka businesses.",
  path: "/knowledge",
});

const COMMERCIAL_LINKS = [
  { label: "Website Development", href: "/services/website-development" },
  { label: "Software Development", href: "/services/software-development" },
  { label: "AI Solutions", href: "/services/ai-solutions" },
  { label: "SEO Services", href: "/services/digital-marketing/seo" },
  { label: "Digital Marketing", href: "/services/digital-marketing" },
  { label: "Branding", href: "/services/branding" },
];

export default function KnowledgeHubPage() {
  const latest = BLOG_POSTS.slice(0, 3);
  const topics = KNOWLEDGE_CATEGORIES.filter((c) => c.type === "topic");

  return (
    <>
      <PageHero
        badge="Knowledge Center"
        title="Expert guides for smarter business decisions"
        highlight="smarter business"
        description="Practical insights on technology, SEO, and growth — written for business owners in Karnataka. Every guide links back to services that drive results."
      />

      <Container className="space-y-20 py-16 md:py-24">
        <section className="grid gap-6 md:grid-cols-3">
          <Link href="/knowledge/guides" className="group rounded-xl border border-zinc-200 bg-white p-8 transition hover:border-green-300 hover:shadow-lg dark:border-zinc-800 dark:bg-zinc-950">
            <BookOpen className="h-8 w-8 text-green-600" />
            <h2 className="mt-4 font-heading text-xl font-semibold group-hover:text-green-600">Guides & Articles</h2>
            <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">{BLOG_POSTS.length} in-depth articles on web, software, SEO, and growth.</p>
            <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-green-600">Browse guides <ArrowRight className="h-4 w-4" /></span>
          </Link>
          <Link href="/knowledge/downloads" className="group rounded-xl border border-zinc-200 bg-white p-8 transition hover:border-green-300 hover:shadow-lg dark:border-zinc-800 dark:bg-zinc-950">
            <Download className="h-8 w-8 text-green-600" />
            <h2 className="mt-4 font-heading text-xl font-semibold group-hover:text-green-600">Downloads</h2>
            <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">Free checklists and templates for planning projects.</p>
            <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-green-600">Get downloads <ArrowRight className="h-4 w-4" /></span>
          </Link>
          <Link href="/tools/website-cost-estimator" className="group rounded-xl border border-zinc-200 bg-white p-8 transition hover:border-green-300 hover:shadow-lg dark:border-zinc-800 dark:bg-zinc-950">
            <Layers className="h-8 w-8 text-green-600" />
            <h2 className="mt-4 font-heading text-xl font-semibold group-hover:text-green-600">Cost Estimator</h2>
            <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">Free website budget calculator for Karnataka — shareable and linkable.</p>
            <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-green-600">Try the tool <ArrowRight className="h-4 w-4" /></span>
          </Link>
        </section>

        <section className="space-y-8">
          <SectionHeading eyebrow="Topics" title="Browse by topic" />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {topics.map((cat) => (
              <Link
                key={cat.slug}
                href={`/knowledge/${cat.slug}`}
                className="rounded-xl border border-zinc-200 p-5 transition hover:border-green-300 hover:shadow-md dark:border-zinc-800"
              >
                <h3 className="font-semibold">{cat.title}</h3>
                <p className="mt-2 line-clamp-2 text-sm text-zinc-600 dark:text-zinc-400">{cat.description}</p>
              </Link>
            ))}
          </div>
        </section>

        <section className="space-y-8">
          <SectionHeading eyebrow="Latest" title="Recent guides" />
          <div className="grid gap-6 md:grid-cols-3">
            {latest.map((post) => (
              <Link key={post.slug} href={`/knowledge/guides/${post.slug}`} className="group rounded-xl border border-zinc-200 p-6 dark:border-zinc-800">
                <p className="font-mono text-[10px] uppercase tracking-wider text-green-600">{post.category}</p>
                <h3 className="mt-2 font-heading font-semibold group-hover:text-green-600">{post.title}</h3>
                <p className="mt-2 line-clamp-2 text-sm text-zinc-600 dark:text-zinc-400">{post.excerpt}</p>
              </Link>
            ))}
          </div>
          <div className="text-center">
            <Link href="/knowledge/guides" className={buttonVariants({ variant: "outline" })}>View all guides</Link>
          </div>
        </section>

        <section className="rounded-xl border border-green-200 bg-green-50 p-8 dark:border-green-900 dark:bg-green-950/30">
          <SectionHeading
            eyebrow="Ready to act?"
            title="Turn insights into results"
            description="Our commercial service pages are built for enquiries — book a consultation when you are ready to implement."
          />
          <div className="mt-6 flex flex-wrap gap-3">
            {COMMERCIAL_LINKS.map((link) => (
              <Link key={link.href} href={link.href} className="rounded-full bg-white px-4 py-2 text-sm font-semibold shadow-sm hover:text-green-600 dark:bg-zinc-950">
                {link.label} →
              </Link>
            ))}
          </div>
          <Link href="/contact" className={`${buttonVariants({ size: "lg" })} mt-8 inline-flex`}>
            Book Free Consultation
          </Link>
        </section>
      </Container>

      <CtaBand />
    </>
  );
}
