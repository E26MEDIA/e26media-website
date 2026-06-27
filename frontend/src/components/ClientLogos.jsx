import React from "react";
import { Icon } from "./Icon";
import { CLIENTS } from "../data/clients";

export function ClientLogos() {
  const doubled = [...CLIENTS, ...CLIENTS, ...CLIENTS];
  return (
    <section
      className="py-16 md:py-20 bg-white border-y border-zinc-200/60 overflow-hidden"
      data-testid="client-logos-section"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-10 text-center">
        <p className="font-mono text-xs font-semibold tracking-[0.2em] uppercase text-zinc-400">
          Trusted by ambitious businesses worldwide
        </p>
      </div>
      <div className="relative w-full overflow-hidden flex items-center">
        <div className="absolute left-0 top-0 bottom-0 w-16 md:w-40 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 md:w-40 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
        <div className="animate-marquee whitespace-nowrap flex items-center gap-12 md:gap-20">
          {doubled.map((client, idx) => (
            <div
              key={idx}
              className="inline-flex items-center gap-2.5 cursor-default text-zinc-400 hover:text-zinc-900 transition-colors duration-300 grayscale hover:grayscale-0"
              data-testid={`client-logo-${idx}`}
            >
              <Icon name={client.icon} className="w-6 h-6 text-green-600/70" />
              <span className="font-heading font-semibold text-xl tracking-tight">
                {client.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
