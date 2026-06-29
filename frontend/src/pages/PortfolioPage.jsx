import React, { useState } from "react";
import { PageHero } from "../components/PageHero";
import { CTASection } from "../components/CTASection";
import { ProjectCard } from "../components/ProjectCard";
import { ProjectModal } from "../components/ProjectModal";
import { PROJECTS, PORTFOLIO_CATEGORIES } from "../data/portfolio";
import { Seo } from "../components/Seo";
import { SEO } from "../data/site";

export function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [active, setActive] = useState(null);

  const filtered =
    activeCategory === "All"
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === activeCategory);

  return (
    <>
      <Seo {...SEO.portfolio} />
      <PageHero
        badge="Our Portfolio"
        title="Engineering & growth work that"
        highlight="moves the needle"
        subtitle="Explore a selection of our enterprise websites, custom software, mobile apps, and marketing campaigns — filter by capability to see relevant work."
      />

      <section className="pb-24 md:pb-32 bg-white" data-testid="portfolio-page-grid">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          {/* Filters */}
          <div
            className="flex flex-wrap gap-2 justify-center mb-12 border border-zinc-200/60 rounded-xl p-1.5 bg-zinc-50 w-fit mx-auto"
            data-testid="portfolio-filter-container"
          >
            {PORTFOLIO_CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 text-xs sm:text-sm font-body font-semibold rounded-lg transition-all ${
                  activeCategory === cat
                    ? "bg-green-600 text-white shadow-sm"
                    : "text-zinc-500 hover:text-zinc-900"
                }`}
                data-testid={`portfolio-filter-${cat.replace(/\s+/g, "-").toLowerCase()}`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid */}
          {filtered.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {filtered.map((p) => (
                <ProjectCard key={p.id} project={p} onView={setActive} />
              ))}
            </div>
          ) : (
            <p className="text-center text-zinc-500 font-body py-20">
              No projects in this category yet.
            </p>
          )}
        </div>
      </section>

      <CTASection />
      <ProjectModal project={active} onClose={() => setActive(null)} />
    </>
  );
}

export default PortfolioPage;
