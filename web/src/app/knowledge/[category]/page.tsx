import Link from "next/link";
import { notFound } from "next/navigation";
import { buildMetadata } from "@/lib/seo";
import { Container } from "@/components/ui/section";
import { KNOWLEDGE_CATEGORIES, getKnowledgeCategory, getPostsByKnowledgeCategory } from "@/data/knowledge";
import { KNOWLEDGE_TOPIC_CONTENT } from "@/data/long-form/knowledge-topics";
import { PageHero } from "@/components/visual/page-hero";
import { CtaBand } from "@/components/visual/cta-band";
import { LongFormArticle } from "@/components/content/long-form-article";
import { KnowledgeGrid } from "@/components/knowledge/knowledge-grid";
import { FaqJsonLd } from "@/components/seo/json-ld";
import { buttonVariants } from "@/components/ui/button";

type Props = { params: Promise<{ category: string }> };

const CATEGORY_SERVICE: Record<string, string> = {
  "website-development": "/services/website-development",
  software: "/services/software-development",
  ai: "/services/ai-solutions",
  branding: "/services/branding",
  seo: "/services/digital-marketing/seo",
  marketing: "/services/digital-marketing",
  cloud: "/services/cloud-solutions",
  mobile: "/services/mobile-app-development",
};

export async function generateStaticParams() {
  return KNOWLEDGE_CATEGORIES.filter((c) => c.type === "topic").map((c) => ({ category: c.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { category } = await params;
  const cat = getKnowledgeCategory(category);
  if (!cat) return {};
  return buildMetadata({
    title: `${cat.title} Guides — E26 Media Knowledge Center`,
    description: cat.description,
    path: `/knowledge/${category}`,
  });
}

export default async function KnowledgeCategoryPage({ params }: Props) {
  const { category } = await params;
  const cat = getKnowledgeCategory(category);
  if (!cat || cat.type !== "topic") notFound();

  const posts = getPostsByKnowledgeCategory(category);
  const serviceHref = CATEGORY_SERVICE[category];
  const content = KNOWLEDGE_TOPIC_CONTENT[category];
  if (!content) notFound();

  return (
    <>
      {content.faqs && <FaqJsonLd faqs={content.faqs} />}
      <PageHero badge="Knowledge Center" title={cat.title} description={cat.description} />

      {serviceHref && (
        <Container className="pt-8">
          <div className="rounded-xl border border-green-200 bg-green-50 p-5 dark:border-green-900 dark:bg-green-950/30">
            <p className="text-sm text-zinc-700 dark:text-zinc-300">
              Looking for a partner?{" "}
              <Link href={serviceHref} className="font-semibold text-green-700 hover:underline dark:text-green-400">
                View our {cat.title} services
              </Link>{" "}
              — built for enquiries and consultations.
            </p>
          </div>
        </Container>
      )}

      {posts.length > 0 ? (
        <KnowledgeGrid posts={posts} />
      ) : (
        <Container className="py-16 text-center">
          <p className="text-zinc-600 dark:text-zinc-400">Guides coming soon for this topic.</p>
          <Link href="/knowledge/guides" className={`${buttonVariants({ variant: "outline" })} mt-6 inline-flex`}>
            Browse all guides
          </Link>
        </Container>
      )}

      <Container className="py-16 md:py-24">
        <LongFormArticle content={content} />
      </Container>

      <CtaBand />
    </>
  );
}
