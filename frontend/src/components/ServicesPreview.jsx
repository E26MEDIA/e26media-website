import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Icon } from "./Icon";
import { SERVICES } from "../data/services";

// Compact 4-card services overview for the Home page.
export function ServicesPreview() {
  return (
    <section
      className="py-24 md:py-32 bg-zinc-50 border-y border-zinc-200/60"
      data-testid="services-preview-section"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="text-left space-y-4 max-w-2xl">
            <p className="font-mono text-xs font-semibold tracking-[0.2em] uppercase text-green-600">
              What We Do
            </p>
            <h2
              className="text-3xl sm:text-4xl tracking-tight font-heading font-medium text-zinc-950"
              data-testid="services-preview-heading"
            >
              Core Digital Capabilities Designed For Business Scale
            </h2>
          </div>
          <Link
            to="/services"
            className="shrink-0 inline-flex items-center gap-1.5 text-sm font-body font-semibold text-zinc-900 hover:text-green-600 transition-colors"
            data-testid="services-preview-view-all"
          >
            Explore all services
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SERVICES.map((service) => (
            <Link
              key={service.slug}
              to={`/services/${service.slug}`}
              className="group bg-white border border-zinc-200 rounded-xl p-8 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 text-left flex flex-col"
              data-testid={`services-preview-card-${service.slug}`}
            >
              <div className="w-12 h-12 rounded-lg bg-green-50 border border-green-200/50 flex items-center justify-center text-green-600 mb-6 group-hover:bg-green-600 group-hover:text-white transition-colors">
                <Icon name={service.icon} className="w-6 h-6" />
              </div>
              <h3 className="text-xl sm:text-2xl tracking-tight font-heading font-medium text-zinc-900 mb-3 group-hover:text-green-600 transition-colors">
                {service.title}
              </h3>
              <p className="text-sm sm:text-base text-zinc-600 font-body mb-6 leading-relaxed flex-1">
                {service.short}
              </p>
              <span className="inline-flex items-center gap-1 text-sm font-body font-semibold text-zinc-800 group-hover:text-green-600 transition-colors">
                Learn more
                <ArrowUpRight className="w-4 h-4" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
