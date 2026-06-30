import { buildMetadata } from "@/lib/seo";
import { PORTFOLIO } from "@/data/portfolio";
import { PageHero } from "@/components/visual/page-hero";
import { CtaBand } from "@/components/visual/cta-band";
import { PortfolioGrid } from "@/components/portfolio/portfolio-grid";

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
      <PortfolioGrid projects={PORTFOLIO} />
      <CtaBand text="Want results like these for your business? Let's discuss your project." />
    </>
  );
}
