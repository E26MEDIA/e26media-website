import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { buildMetadata } from "@/lib/seo";
import { Container } from "@/components/ui/section";
import { PORTFOLIO } from "@/data/portfolio";
import { PageHero } from "@/components/visual/page-hero";
import { CtaBand } from "@/components/visual/cta-band";
import { buttonVariants } from "@/components/ui/button";
import { ProjectHeroImage } from "@/components/ui/client-logo-image";
import { projectShowsLogoHero } from "@/lib/client-logo";
import { cn } from "@/lib/utils";

export const metadata = buildMetadata({
  title: "Case Studies | Client Success Stories — E26 Media",
  description:
    "Case studies from E26 Media — Lamiya Alkhaleej, Abrar Caterers, Floriva Gifts, CleanPro, Alfiya, Layan Products, AI chatbots, and more.",
  path: "/case-studies",
});

export default function CaseStudiesPage() {
  return (
    <>
      <PageHero
        badge="Case Studies"
        title="How we help businesses win with technology"
        highlight="win with technology"
        description="Real client projects — websites, software, mobile apps, and AI systems built and deployed by E26 Media across Karnataka and beyond."
      />

      <section className="bg-zinc-50 py-16 dark:bg-zinc-900/40 md:py-20">
        <Container className="space-y-8">
          {PORTFOLIO.map((project, index) => {
            const logoHero = projectShowsLogoHero(project.image, project.clientLogo);
            return (
              <article
                key={project.slug}
                className={cn(
                  "grid gap-6 overflow-hidden rounded-2xl border border-zinc-200 bg-white lg:grid-cols-2 lg:items-stretch dark:border-zinc-800 dark:bg-zinc-950",
                  index % 2 === 1 && "lg:[&>*:first-child]:order-2"
                )}
              >
                <div
                  className={cn(
                    "relative min-h-[220px] lg:min-h-0 lg:aspect-[16/10]",
                    logoHero ? "bg-zinc-50 dark:bg-zinc-900" : "bg-zinc-100"
                  )}
                >
                  <ProjectHeroImage
                    src={project.image}
                    alt={project.title}
                    contain={logoHero}
                    sizes="(max-width:1024px) 100vw, 50vw"
                  />
                </div>
                <div className="flex flex-col justify-center space-y-4 p-6 lg:p-8">
                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-wider text-green-600">{project.category}</p>
                    <p className="text-xs font-semibold text-zinc-500">{project.client}</p>
                    <h2 className="mt-2 font-heading text-xl font-semibold tracking-tight sm:text-2xl">{project.title}</h2>
                  </div>
                  <div>
                    <p className="font-mono text-xs uppercase tracking-wider text-zinc-400">The Challenge</p>
                    <p className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">{project.problem}</p>
                  </div>
                  <div>
                    <p className="font-mono text-xs uppercase tracking-wider text-zinc-400">Our Solution</p>
                    <p className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">{project.solution}</p>
                  </div>
                  <div>
                    <p className="font-mono text-xs uppercase tracking-wider text-zinc-400">Outcome</p>
                    <p className="mt-2 text-sm font-medium text-green-700 dark:text-green-400">{project.outcome}</p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 5).map((t) => (
                      <span key={t} className="rounded-full border border-zinc-200 px-3 py-1 font-mono text-xs dark:border-zinc-700">
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-3 pt-1">
                    <Link href={`/portfolio/${project.slug}`} className={buttonVariants({ variant: "outline", size: "sm" })}>
                      Read full case study
                    </Link>
                    {project.url && (
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={buttonVariants({ variant: "ghost", size: "sm" })}
                      >
                        <ExternalLink className="h-4 w-4" /> Live project
                      </a>
                    )}
                  </div>
                </div>
              </article>
            );
          })}
        </Container>
      </section>

      <CtaBand />
    </>
  );
}
