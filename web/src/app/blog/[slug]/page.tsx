import Link from "next/link";
import { notFound } from "next/navigation";
import { buildMetadata } from "@/lib/seo";
import { Container } from "@/components/ui/section";
import { BLOG_POSTS, getBlogPost } from "@/data/blogs";
import { PageHero } from "@/components/visual/page-hero";
import { CtaBand } from "@/components/visual/cta-band";
import { FaqJsonLd } from "@/components/seo/json-ld";
import { buttonVariants } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return BLOG_POSTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return {};
  return buildMetadata({
    title: `${post.title} — E26 Media Blog`,
    description: post.metaDescription,
    path: `/blog/${slug}`,
  });
}

export default async function BlogArticlePage({ params }: Props) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) notFound();

  const related = BLOG_POSTS.filter((p) => p.slug !== slug && p.category === post.category).slice(0, 2);

  return (
    <>
      {post.faqs && <FaqJsonLd faqs={post.faqs} />}

      <PageHero badge={post.category} title={post.title} description={post.excerpt} />

      <Container className="py-16 md:py-24">
        <div className="mx-auto max-w-3xl">
          <div className="mb-10 flex flex-wrap items-center gap-4 border-b border-zinc-200 pb-8 text-sm text-zinc-500 dark:border-zinc-800">
            <span>{post.author}</span>
            <span>·</span>
            <time dateTime={post.date}>
              {new Date(post.date).toLocaleDateString("en-IN", { dateStyle: "long" })}
            </time>
            <span>·</span>
            <span>{post.readingTime} read</span>
          </div>

          <article className="prose prose-zinc max-w-none dark:prose-invert">
            {post.sections.map((section, i) => (
              <div key={i} className="mb-10">
                {section.heading && (
                  <h2 className="font-heading text-2xl font-semibold tracking-tight text-zinc-950 dark:text-white">
                    {section.heading}
                  </h2>
                )}
                {section.paragraphs.map((p) => (
                  <p key={p.slice(0, 50)} className="mt-4 text-base leading-relaxed text-zinc-600 dark:text-zinc-400">
                    {p}
                  </p>
                ))}
              </div>
            ))}
          </article>

          {post.faqs && post.faqs.length > 0 && (
            <div className="mt-16 space-y-6 border-t border-zinc-200 pt-12 dark:border-zinc-800">
              <h2 className="font-heading text-2xl font-semibold">Frequently asked questions</h2>
              {post.faqs.map((f) => (
                <div key={f.question} className="rounded-xl border border-zinc-200 p-6 dark:border-zinc-800">
                  <h3 className="font-semibold">{f.question}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">{f.answer}</p>
                </div>
              ))}
            </div>
          )}

          {related.length > 0 && (
            <div className="mt-16 border-t border-zinc-200 pt-12 dark:border-zinc-800">
              <h2 className="font-heading text-xl font-semibold">Related articles</h2>
              <ul className="mt-4 space-y-3">
                {related.map((r) => (
                  <li key={r.slug}>
                    <Link href={`/blog/${r.slug}`} className="font-medium text-green-600 hover:underline">
                      {r.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className="mt-12">
            <Link href="/blog" className={buttonVariants({ variant: "outline" })}>
              <ArrowLeft className="h-4 w-4" /> Back to blog
            </Link>
          </div>
        </div>
      </Container>

      <CtaBand text="Need help implementing what you just read? Book a free consultation with E26 Media." />
    </>
  );
}
