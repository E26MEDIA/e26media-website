import { buildMetadata } from "@/lib/seo";
import { PORTFOLIO } from "@/data/portfolio";
import { Container, SectionHeading } from "@/components/ui/section";
import { PageHero } from "@/components/visual/page-hero";
import { CtaBand } from "@/components/visual/cta-band";
import { LongFormArticle } from "@/components/content/long-form-article";
import { HUB_PAGE_CONTENT } from "@/data/long-form/hub-pages";
import { PortfolioGrid } from "@/components/portfolio/portfolio-grid";

const CONTENT = HUB_PAGE_CONTENT.portfolio;

export const metadata = buildMetadata({
  title: "Portfolio | Real Client Work — E26 Media",
  description:
    "Browse E26 Media client projects: websites, software, mobile apps, branding, marketing, and AI solutions for businesses in Karnataka and beyond.",
  path: "/portfolio",
});

export default function PortfolioPage() {
  return (
    <>
      <PageHero
        badge="Portfolio"
        title="Work that speaks for itself"
        highlight="speaks for itself"
        description="Real projects for real businesses across India, the Gulf, Australia, and beyond."
      />
      <Container className="space-y-8 py-12 md:py-16">
        <SectionHeading
          eyebrow={`${PORTFOLIO.length} projects`}
          title="Client work across web, software, mobile, and AI"
          description="Websites, applications, marketing campaigns, and intelligent automation — explore each case study below."
        />
      </Container>
      <PortfolioGrid projects={PORTFOLIO} />
      <Container className="py-16 md:py-24">
        <LongFormArticle content={CONTENT} />
      </Container>
      <CtaBand text="Want results like these for your business? Let's discuss your project." />
    </>
  );
}
