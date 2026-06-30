import { buildMetadata } from "@/lib/seo";
import { BLOG_POSTS } from "@/data/blogs";
import { PageHero } from "@/components/visual/page-hero";
import { CtaBand } from "@/components/visual/cta-band";
import { BlogGrid } from "@/components/blog/blog-grid";

export const metadata = buildMetadata({
  title: "Blog — E26 Media | Web, Software, SEO & Growth Insights",
  description:
    "Expert articles on website development, software, mobile apps, AI, SEO, branding, and digital marketing for Karnataka businesses from E26 Media Mangalore.",
  path: "/blog",
});

export default function BlogPage() {
  return (
    <>
      <PageHero
        badge="Blog"
        title="Insights for smarter digital decisions"
        highlight="smarter digital"
        description="Practical guides on technology, SEO, and growth — written for business owners in Karnataka and beyond."
      />
      <BlogGrid posts={BLOG_POSTS} />
      <CtaBand />
    </>
  );
}
