import Link from "next/link";
import { cn } from "@/lib/utils";
import type { PortfolioProject } from "@/types";
import { ProjectHeroImage } from "@/components/ui/client-logo-image";
import { projectShowsLogoHero } from "@/lib/client-logo";

type Props = {
  project: PortfolioProject;
  href: string;
  className?: string;
};

export function ProjectCard({ project, href, className }: Props) {
  const logoHero = projectShowsLogoHero(project.image, project.clientLogo);

  return (
    <Link href={href} className={cn("group block", className)}>
      <article className="flex h-full flex-col overflow-hidden rounded-xl border border-zinc-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-green-200 hover:shadow-lg dark:border-zinc-800 dark:bg-zinc-950">
        <div
          className={cn(
            "relative aspect-[16/10] overflow-hidden",
            logoHero ? "bg-zinc-50 dark:bg-zinc-900" : "bg-zinc-100 dark:bg-zinc-900"
          )}
        >
          <ProjectHeroImage
            src={project.image}
            alt={`${project.title} — ${project.client}`}
            contain={logoHero}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
        <div className="flex flex-1 flex-col p-5">
          <div className="flex items-center justify-between gap-2">
            <p className="font-mono text-[10px] uppercase tracking-wider text-green-600">{project.category}</p>
            <p className="truncate text-[11px] font-semibold text-zinc-500">{project.client}</p>
          </div>
          <h2 className="mt-2 font-heading text-lg font-semibold leading-snug group-hover:text-green-600">{project.title}</h2>
          <p className="mt-2 line-clamp-2 flex-1 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">{project.excerpt}</p>
        </div>
      </article>
    </Link>
  );
}
