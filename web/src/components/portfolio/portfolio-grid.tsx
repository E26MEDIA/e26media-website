"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import type { PortfolioProject } from "@/types";
import { ProjectCard } from "@/components/portfolio/project-card";

const FILTERS = [
  { id: "all", label: "All Projects" },
  { id: "website", label: "Website" },
  { id: "software", label: "Software" },
  { id: "mobile", label: "Mobile" },
  { id: "branding", label: "Branding" },
  { id: "marketing", label: "Marketing" },
  { id: "ai", label: "AI" },
] as const;

type FilterId = (typeof FILTERS)[number]["id"];

export function PortfolioGrid({ projects }: { projects: PortfolioProject[] }) {
  const [active, setActive] = useState<FilterId>("all");

  const filtered =
    active === "all" ? projects : projects.filter((p) => p.category === active);

  return (
    <>
      <section className="border-b border-zinc-200/60 bg-white py-6 dark:border-zinc-800 dark:bg-zinc-950">
        <div className="mx-auto max-w-7xl px-6 md:px-12">
          <div className="flex flex-wrap gap-2" role="tablist" aria-label="Filter portfolio projects">
            {FILTERS.map((f) => (
              <button
                key={f.id}
                type="button"
                role="tab"
                aria-selected={active === f.id}
                onClick={() => setActive(f.id)}
                className={cn(
                  "rounded-full border px-4 py-1.5 font-mono text-xs uppercase tracking-wider transition-all",
                  active === f.id
                    ? "border-green-600 bg-green-600 text-white shadow-sm"
                    : "border-zinc-200 text-zinc-600 hover:border-green-300 hover:text-green-700 dark:border-zinc-700 dark:text-zinc-400"
                )}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-zinc-50 py-16 dark:bg-zinc-900/40 md:py-20">
        <div className="mx-auto max-w-7xl px-6 md:px-12">
          {filtered.length === 0 ? (
            <p className="py-12 text-center text-sm text-zinc-500">
              No projects in this category yet.{" "}
              <button type="button" onClick={() => setActive("all")} className="font-semibold text-green-600 hover:underline">
                View all projects
              </button>
            </p>
          ) : (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {filtered.map((p) => (
                <ProjectCard key={p.slug} project={p} href={`/portfolio/${p.slug}`} />
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
