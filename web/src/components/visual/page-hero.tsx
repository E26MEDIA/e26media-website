import { Sparkles } from "lucide-react";
import { Container } from "@/components/ui/section";

export function PageHero({
  badge,
  title,
  highlight,
  description,
}: {
  badge?: string;
  title: string;
  highlight?: string;
  description?: string;
}) {
  const parts = highlight ? title.split(highlight) : [title];

  return (
    <section className="relative overflow-hidden border-b border-zinc-200/60 bg-white pt-28 pb-16 dark:border-zinc-800 dark:bg-zinc-950 md:pt-36 md:pb-20">
      <div className="absolute inset-0 grid-bg pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-green-200/20 blur-[80px]" />
      <Container className="relative z-10 text-center">
        {badge && (
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-green-200/50 bg-green-50 px-3 py-1 font-mono text-xs uppercase tracking-wider text-green-700 dark:border-green-900 dark:bg-green-950/40 dark:text-green-400">
            <Sparkles className="h-3.5 w-3.5" />
            {badge}
          </div>
        )}
        <h1 className="mx-auto max-w-4xl font-heading text-4xl font-medium tracking-tighter text-zinc-950 dark:text-white sm:text-5xl">
          {highlight && parts.length > 1 ? (
            <>
              {parts[0]}
              <span className="gradient-text">{highlight}</span>
              {parts[1]}
            </>
          ) : (
            title
          )}
        </h1>
        {description && (
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-zinc-600 dark:text-zinc-400 sm:text-lg">
            {description}
          </p>
        )}
      </Container>
    </section>
  );
}
