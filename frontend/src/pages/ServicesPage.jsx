import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Check } from "lucide-react";
import { PageHero } from "../components/PageHero";
import { CTASection } from "../components/CTASection";
import { Technologies } from "../components/Technologies";
import { Icon } from "../components/Icon";
import { SERVICES } from "../data/services";
import { Seo } from "../components/Seo";
import { SEO } from "../data/site";

export function ServicesPage() {
  return (
    <>
      <Seo {...SEO.services} />
      <PageHero
        badge="Our Services"
        title="End-to-end digital solutions for"
        highlight="modern businesses"
        subtitle="From custom software to high-converting websites, mobile apps, and data-driven marketing — we deliver the full stack of capabilities your business needs to scale."
      />

      <section className="py-16 md:py-24 bg-white" data-testid="services-hub-list">
        <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-12 md:space-y-20">
          {SERVICES.map((service, idx) => (
            <div
              key={service.slug}
              className={`grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center ${
                idx % 2 === 1 ? "lg:[direction:rtl]" : ""
              }`}
              data-testid={`services-hub-item-${service.slug}`}
            >
              {/* Image */}
              <div className="lg:col-span-6 [direction:ltr]">
                <div className="relative rounded-2xl overflow-hidden border border-zinc-200 shadow-sm aspect-[4/3] group">
                  <img
                    src={service.heroImage}
                    alt={service.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4 w-12 h-12 rounded-lg bg-white/90 backdrop-blur-md border border-zinc-200/50 flex items-center justify-center text-green-600 shadow-sm">
                    <Icon name={service.icon} className="w-6 h-6" />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="lg:col-span-6 [direction:ltr] space-y-5 text-left">
                <p className="font-mono text-xs font-semibold tracking-[0.2em] uppercase text-green-600">
                  {service.tagline}
                </p>
                <h2 className="text-2xl sm:text-3xl tracking-tight font-heading font-medium text-zinc-950">
                  {service.title}
                </h2>
                <p className="text-base text-zinc-600 font-body leading-relaxed">
                  {service.short}
                </p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
                  {service.offerings.slice(0, 6).map((o) => (
                    <li
                      key={o.title}
                      className="flex items-center gap-2 text-sm text-zinc-700 font-body"
                    >
                      <Check className="w-3.5 h-3.5 text-green-600 shrink-0" />
                      {o.title}
                    </li>
                  ))}
                </ul>
                <Link
                  to={`/services/${service.slug}`}
                  className="inline-flex items-center gap-2 bg-zinc-950 hover:bg-zinc-800 text-white rounded-md px-6 py-3 text-sm font-body font-semibold transition-all shadow-sm transform hover:-translate-y-0.5 mt-2"
                  data-testid={`services-hub-cta-${service.slug}`}
                >
                  Explore {service.title}
                  <ArrowRight className="w-4 h-4 text-green-400" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Technologies />
      <CTASection />
    </>
  );
}

export default ServicesPage;
