import Link from "next/link";
import { notFound } from "next/navigation";
import { ExternalLink } from "lucide-react";
import { buildMetadata } from "@/lib/seo";
import { Container } from "@/components/ui/section";
import { Card } from "@/components/ui/card";
import { buttonVariants } from "@/components/ui/button";
import { PORTFOLIO, getPortfolioProject } from "@/data/portfolio";
import { ProjectHeroImage } from "@/components/ui/client-logo-image";
import { projectShowsLogoHero } from "@/lib/client-logo";
import { cn } from "@/lib/utils";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return PORTFOLIO.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const project = getPortfolioProject(slug);
  if (!project) return {};
  return buildMetadata({
    title: `${project.title} Case Study — E26 Media`,
    description: project.excerpt,
    path: `/portfolio/${slug}`,
  });
}

export default async function PortfolioDetailPage({ params }: Props) {
  const { slug } = await params;
  const project = getPortfolioProject(slug);
  if (!project) notFound();

  const logoHero = projectShowsLogoHero(project.image, project.clientLogo);

  return (
    <Container className="space-y-10 py-14 md:py-20">
      <div className="grid gap-8 lg:grid-cols-2 lg:items-start">
        <div className="space-y-5">
          <div>
            <p className="font-mono text-xs uppercase tracking-wider text-green-600">{project.category}</p>
            <p className="mt-1 text-sm font-semibold text-zinc-500">{project.client}</p>
          </div>
          <h1 className="font-heading text-4xl font-semibold tracking-tight">{project.title}</h1>
          <p className="text-lg text-zinc-600 dark:text-zinc-400">{project.excerpt}</p>
          {project.url && (
            <a href={project.url} target="_blank" rel="noopener noreferrer" className={buttonVariants({ variant: "outline" })}>
              <ExternalLink className="h-4 w-4" /> Visit live project
            </a>
          )}
        </div>
        <div
          className={cn(
            "relative aspect-[16/10] overflow-hidden rounded-2xl border border-zinc-200 dark:border-zinc-800",
            logoHero ? "bg-zinc-50 dark:bg-zinc-900" : "bg-zinc-100"
          )}
        >
          <ProjectHeroImage src={project.image} alt={project.title} contain={logoHero} sizes="50vw" priority />
        </div>
      </div>

      <div className="grid gap-5 md:grid-cols-3">
        <Card>
          <h2 className="font-semibold">Problem</h2>
          <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">{project.problem}</p>
        </Card>
        <Card>
          <h2 className="font-semibold">Solution</h2>
          <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">{project.solution}</p>
        </Card>
        <Card>
          <h2 className="font-semibold">Outcome</h2>
          <p className="mt-2 text-sm font-medium text-green-700 dark:text-green-400">{project.outcome}</p>
        </Card>
      </div>

      {project.highlights && project.highlights.length > 0 && (
        <Card>
          <h2 className="font-semibold">Key highlights</h2>
          <ul className="mt-4 grid gap-2 sm:grid-cols-2">
            {project.highlights.map((h) => (
              <li key={h} className="flex gap-2 text-sm text-zinc-600 dark:text-zinc-400">
                <span className="text-green-600">✓</span> {h}
              </li>
            ))}
          </ul>
        </Card>
      )}

      <div className="flex flex-wrap gap-2">
        {project.technologies.map((t) => (
          <span key={t} className="rounded-full border border-zinc-200 px-3 py-1 font-mono text-xs dark:border-zinc-700">
            {t}
          </span>
        ))}
      </div>

      <Link href="/contact" className={buttonVariants({ size: "lg" })}>
        Start a similar project
      </Link>
    </Container>
  );
}
