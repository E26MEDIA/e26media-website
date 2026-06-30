import Image from "next/image";
import Link from "next/link";
import { CLIENTS } from "@/data/clients";
import { ClientLogoImage } from "@/components/ui/client-logo-image";

export function LogoMarquee() {
  const doubled = [...CLIENTS, ...CLIENTS, ...CLIENTS];

  return (
    <section className="overflow-hidden border-y border-zinc-200/60 bg-white py-16 dark:border-zinc-800 dark:bg-zinc-950 md:py-20">
      <p className="mb-10 text-center font-mono text-xs font-semibold uppercase tracking-[0.2em] text-zinc-400">
        Trusted by ambitious businesses worldwide
      </p>
      <div className="relative flex w-full items-center overflow-hidden">
        <div className="pointer-events-none absolute bottom-0 left-0 top-0 z-10 w-16 bg-gradient-to-r from-white to-transparent dark:from-zinc-950 md:w-40" />
        <div className="pointer-events-none absolute bottom-0 right-0 top-0 z-10 w-16 bg-gradient-to-l from-white to-transparent dark:from-zinc-950 md:w-40" />
        <div className="animate-marquee flex items-center gap-12 whitespace-nowrap md:gap-20">
          {doubled.map((client, idx) => {
            const inner = (
              <>
                <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl border border-zinc-200/80 bg-white p-2 shadow-sm transition-all duration-300 group-hover:border-green-200 group-hover:shadow-[0_0_18px_rgba(22,163,74,0.2)] dark:border-zinc-700 dark:bg-zinc-900">
                  <ClientLogoImage src={client.logo} alt={client.name} size={44} />
                </span>
                <span className="font-heading text-xl font-semibold tracking-tight transition-colors duration-300">
                  {client.name}
                </span>
              </>
            );
            const cls = "group inline-flex items-center gap-3 text-zinc-500 transition-all duration-300 hover:text-green-600";
            return client.url ? (
              <Link key={`${client.name}-${idx}`} href={client.url} target="_blank" rel="noopener noreferrer" className={cls} aria-label={client.name}>
                {inner}
              </Link>
            ) : (
              <div key={`${client.name}-${idx}`} className={cls}>{inner}</div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
