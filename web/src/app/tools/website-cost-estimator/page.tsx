import Link from "next/link";
import { buildMetadata } from "@/lib/seo";
import { Container, SectionHeading } from "@/components/ui/section";
import { PageHero } from "@/components/visual/page-hero";
import { CtaBand } from "@/components/visual/cta-band";
import { WebsiteCostEstimator } from "@/components/tools/website-cost-estimator";
import { BreadcrumbJsonLd, FaqJsonLd } from "@/components/seo/json-ld";
import { SeoInternalLinks } from "@/components/seo/seo-internal-links";
import { getKnowledgeSeoLinks } from "@/lib/internal-links";

const TOOL_FAQS = [
  {
    question: "How accurate is this website cost estimator?",
    answer:
      "This tool provides realistic budget bands for Karnataka based on E26 Media project data. Your exact quote depends on page count, design depth, integrations, and timeline — book a free consultation for a fixed price.",
  },
  {
    question: "Does the estimate include GST?",
    answer: "No. Listed ranges are exclusive of GST. E26 Media issues tax invoices as E26 Media Private Limited.",
  },
  {
    question: "Can I share this tool on my blog or link to it?",
    answer:
      "Yes. Link to https://www.e26media.com/tools/website-cost-estimator with anchor text like 'website cost calculator Karnataka'. See our media kit for embed guidelines.",
  },
];

export const metadata = buildMetadata({
  title: "Website Cost Estimator Karnataka 2025 — Free Tool | E26 Media",
  description:
    "Free website cost calculator for Karnataka businesses. Estimate landing page, business site, corporate, and ecommerce budgets before your consultation.",
  path: "/tools/website-cost-estimator",
});

export default function WebsiteCostEstimatorPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "Tools", path: "/tools/website-cost-estimator" },
          { name: "Website Cost Estimator", path: "/tools/website-cost-estimator" },
        ]}
      />
      <FaqJsonLd faqs={TOOL_FAQS} />

      <PageHero
        badge="Free Tool"
        title="Website cost estimator for"
        highlight="Karnataka businesses"
        description="Plan your website budget in under a minute. Based on real project ranges from E26 Media Mangalore — share this tool or cite it in your content."
      />

      <Container className="space-y-16 py-16 md:py-24">
        <WebsiteCostEstimator />

        <article className="mx-auto max-w-3xl space-y-4 text-base leading-relaxed text-zinc-600 dark:text-zinc-400">
          <h2 className="font-heading text-2xl font-semibold text-zinc-950 dark:text-white">
            Why we built this calculator
          </h2>
          <p>
            Business owners in Mangalore, Bengaluru, and across Karnataka search for website pricing before contacting
            agencies. This estimator reflects bands from our{" "}
            <Link href="/knowledge/guides/website-development-cost-karnataka-2025" className="text-green-600 hover:underline">
              2025 Karnataka website cost guide
            </Link>{" "}
            and{" "}
            <Link href="/pricing" className="text-green-600 hover:underline">
              published pricing
            </Link>
            . Journalists, consultants, and fellow agencies are welcome to link to this page as a reference.
          </p>
        </article>

        <SeoInternalLinks title="Related services & guides" links={getKnowledgeSeoLinks()} />
      </Container>

      <CtaBand heading="Want a fixed quote for your project?" />
    </>
  );
}
