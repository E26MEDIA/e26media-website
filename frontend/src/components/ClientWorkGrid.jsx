import React from "react";
import { ExternalLink } from "lucide-react";

export function ClientWorkGrid({ items, serviceTitle }) {
  if (!items?.length) return null;

  return (
    <section
      className="py-16 md:py-24 bg-white border-y border-zinc-200/60"
      data-testid="service-client-work"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-left max-w-2xl mb-12 space-y-3">
          <p className="font-mono text-xs font-semibold tracking-[0.2em] uppercase text-green-600">
            Client websites
          </p>
          <h2 className="text-2xl sm:text-3xl font-heading font-medium text-zinc-950 tracking-tight">
            {serviceTitle} projects we&apos;ve delivered
          </h2>
          <p className="text-sm text-zinc-500 font-body">
            A selection of live client sites built and maintained by E26 Media.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((client) => (
            <a
              key={client.url}
              href={client.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-zinc-50 border border-zinc-200 rounded-xl overflow-hidden hover:shadow-lg hover:border-green-200/80 transition-all text-left"
              data-testid={`client-work-${client.name}`}
            >
              <div className="aspect-[16/10] overflow-hidden bg-zinc-100">
                <img
                  src={client.image}
                  alt={`${client.name} website preview`}
                  loading="lazy"
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-5 flex items-center justify-between gap-3">
                <div>
                  <h3 className="font-heading font-semibold text-zinc-900 group-hover:text-green-600 transition-colors">
                    {client.name}
                  </h3>
                  <p className="text-xs text-zinc-400 font-mono mt-1 truncate max-w-[200px]">
                    {client.url.replace(/^https?:\/\/(www\.)?/, "")}
                  </p>
                </div>
                <ExternalLink className="w-4 h-4 text-zinc-400 group-hover:text-green-600 shrink-0" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
