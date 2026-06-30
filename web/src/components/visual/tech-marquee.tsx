import { TECHNOLOGIES } from "@/data/technologies";

export function TechMarquee() {
  const doubled = [...TECHNOLOGIES, ...TECHNOLOGIES, ...TECHNOLOGIES];

  return (
    <section className="overflow-hidden border-y border-zinc-200/60 bg-zinc-50 py-14 dark:border-zinc-800 dark:bg-zinc-900/40">
      <p className="mb-8 text-center font-mono text-xs font-semibold uppercase tracking-[0.2em] text-green-600">
        Technologies we work with
      </p>
      <div className="relative overflow-hidden">
        <div className="pointer-events-none absolute bottom-0 left-0 top-0 z-10 w-16 bg-gradient-to-r from-zinc-50 to-transparent dark:from-zinc-900 md:w-32" />
        <div className="pointer-events-none absolute bottom-0 right-0 top-0 z-10 w-16 bg-gradient-to-l from-zinc-50 to-transparent dark:from-zinc-900 md:w-32" />
        <div className="animate-marquee flex items-center gap-6" style={{ animationDuration: "35s" }}>
          {doubled.map((t, i) => (
            <span
              key={`${t.name}-${i}`}
              className="inline-flex shrink-0 items-center rounded-full border border-zinc-200 bg-white px-5 py-2.5 font-mono text-sm font-medium text-zinc-700 shadow-sm dark:border-zinc-700 dark:bg-zinc-950 dark:text-zinc-300"
            >
              {t.name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
