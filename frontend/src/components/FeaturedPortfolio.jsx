import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { ProjectCard } from "./ProjectCard";
import { ProjectModal } from "./ProjectModal";
import { getFeaturedProjects } from "../data/portfolio";

// Featured projects grid for the Home page.
export function FeaturedPortfolio() {
  const [active, setActive] = useState(null);
  const projects = getFeaturedProjects().slice(0, 6);

  return (
    <section
      className="py-24 md:py-32 bg-white"
      data-testid="featured-portfolio-section"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="text-left space-y-4 max-w-2xl">
            <p className="font-mono text-xs font-semibold tracking-[0.2em] uppercase text-green-600">
              Selected Work
            </p>
            <h2
              className="text-3xl sm:text-4xl tracking-tight font-heading font-medium text-zinc-950"
              data-testid="featured-portfolio-heading"
            >
              Real Client Work, Real Business Results
            </h2>
            <p className="text-sm text-zinc-500 font-body">
              Live client websites, apps, and campaigns delivered by E26 Media.
            </p>
          </div>
          <Link
            to="/portfolio"
            className="shrink-0 inline-flex items-center gap-1.5 text-sm font-body font-semibold text-zinc-900 hover:text-green-600 transition-colors"
            data-testid="featured-portfolio-view-all"
          >
            View full portfolio
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((p) => (
            <ProjectCard key={p.id} project={p} onView={setActive} />
          ))}
        </div>
      </div>
      <ProjectModal project={active} onClose={() => setActive(null)} />
    </section>
  );
}
