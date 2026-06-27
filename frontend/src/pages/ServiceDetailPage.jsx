import React, { useState } from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { ArrowRight, Check, ArrowLeft } from "lucide-react";
import { PageHero } from "../components/PageHero";
import { CTASection } from "../components/CTASection";
import { ProjectModal } from "../components/ProjectModal";
import { ClientWorkGrid } from "../components/ClientWorkGrid";
import { Icon } from "../components/Icon";
import { getServiceBySlug } from "../data/services";
import { PROJECTS } from "../data/portfolio";
import { Seo } from "../components/Seo";

// Map service slug -> related portfolio category for the gallery section.
const SLUG_TO_CATEGORY = {
  "web-design-development": "Web Development",
  "software-development": "Software Development",
  "mobile-app-development": "Mobile Apps",
  "digital-marketing": "Digital Marketing",
};

export function ServiceDetailPage() {
  const { slug } = useParams();
  const service = getServiceBySlug(slug);
  const [active, setActive] = useState(null);

  if (!service) return <Navigate to="/services" replace />;

  const relatedProjects = PROJECTS.filter(
    (p) => p.category === SLUG_TO_CATEGORY[slug]
  );

  return (
    <>
      <Seo
        title={`${service.title} | E26 Media`}
        description={service.short}
        path={`/services/${service.slug}`}
        image={service.heroImage}
      />
      <PageHero
        badge={service.tagline}
        title={service.title.split(" ").slice(0, -1).join(" ")}
        highlight={service.title.split(" ").slice(-1)}
        subtitle={service.short}
      >
        <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
          <Link
            to="/contact"
            className="bg-green-600 hover:bg-green-700 text-white rounded-md px-6 py-3 text-sm font-body font-semibold transition-all shadow-sm flex items-center gap-2 transform hover:-translate-y-0.5"
            data-testid="service-detail-cta"
          >
            Get a Free Consultation
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            to="/services"
            className="text-sm font-body font-semibold text-zinc-600 hover:text-zinc-950 transition-colors flex items-center gap-1.5"
          >
            <ArrowLeft className="w-4 h-4" />
            All services
          </Link>
        </div>
      </PageHero>

      {/* Overview + hero image */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="rounded-2xl overflow-hidden border border-zinc-200 shadow-sm aspect-[4/3]">
            <img
              src={service.heroImage}
              alt={service.title}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="space-y-5 text-left">
            <div className="w-12 h-12 rounded-lg bg-green-50 border border-green-200/50 flex items-center justify-center text-green-600">
              <Icon name={service.icon} className="w-6 h-6" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-heading font-medium text-zinc-950 tracking-tight">
              What we deliver
            </h2>
            <p className="text-base text-zinc-600 font-body leading-relaxed">
              {service.overview}
            </p>
          </div>
        </div>
      </section>

      {/* Offerings */}
      <section className="py-16 md:py-24 bg-zinc-50 border-y border-zinc-200/60">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-left max-w-2xl mb-12 space-y-3">
            <p className="font-mono text-xs font-semibold tracking-[0.2em] uppercase text-green-600">
              Capabilities
            </p>
            <h2 className="text-2xl sm:text-3xl font-heading font-medium text-zinc-950 tracking-tight">
              Everything included
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {service.offerings.map((o) => (
              <div
                key={o.title}
                className="bg-white border border-zinc-200 rounded-xl p-6 hover:shadow-md transition-shadow text-left"
                data-testid={`service-offering-${o.title}`}
              >
                <div className="flex items-center gap-2 mb-2">
                  <Check className="w-4 h-4 text-green-600 shrink-0" />
                  <h3 className="font-heading font-semibold text-zinc-900 text-base">
                    {o.title}
                  </h3>
                </div>
                <p className="text-sm text-zinc-500 font-body leading-relaxed pl-6">
                  {o.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-left max-w-2xl mb-12 space-y-3">
            <p className="font-mono text-xs font-semibold tracking-[0.2em] uppercase text-green-600">
              Why it matters
            </p>
            <h2 className="text-2xl sm:text-3xl font-heading font-medium text-zinc-950 tracking-tight">
              Benefits for your business
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {service.benefits.map((b, i) => (
              <div
                key={b.title}
                className="border border-zinc-200 rounded-xl p-6 text-left hover:-translate-y-1 transition-transform duration-300"
                data-testid={`service-benefit-${i}`}
              >
                <span className="font-heading text-3xl font-semibold text-green-600/30">
                  0{i + 1}
                </span>
                <h3 className="font-heading font-semibold text-zinc-900 text-lg mt-3 mb-2">
                  {b.title}
                </h3>
                <p className="text-sm text-zinc-500 font-body leading-relaxed">
                  {b.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ClientWorkGrid items={service.clientWork} serviceTitle={service.title} />

      {/* Project gallery — stock images hidden when real client work is listed */}
      {(!service.clientWork?.length) && (
      <section className="py-16 md:py-24 bg-zinc-50 border-y border-zinc-200/60">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-left max-w-2xl mb-12 space-y-3">
            <p className="font-mono text-xs font-semibold tracking-[0.2em] uppercase text-green-600">
              Real Project Gallery
            </p>
            <h2 className="text-2xl sm:text-3xl font-heading font-medium text-zinc-950 tracking-tight">
              Selected {service.title} work
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
            {service.gallery.map((img, i) => (
              <div
                key={i}
                className="rounded-xl overflow-hidden border border-zinc-200 aspect-square group"
                data-testid={`service-gallery-image-${i}`}
              >
                <img
                  src={img}
                  alt={`${service.title} sample ${i + 1}`}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
            ))}
          </div>

          {relatedProjects.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedProjects.slice(0, 3).map((p) => (
                <button
                  key={p.id}
                  onClick={() => setActive(p)}
                  className="bg-white border border-zinc-200 rounded-xl overflow-hidden text-left group hover:shadow-lg transition-all"
                  data-testid={`service-case-${p.id}`}
                >
                  <div className="aspect-[16/10] overflow-hidden">
                    <img
                      src={p.image}
                      alt={p.title}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-5">
                    <p className="font-mono text-[10px] uppercase tracking-wider text-green-600 mb-1">
                      {p.tag}
                    </p>
                    <h4 className="font-heading font-medium text-zinc-900 group-hover:text-green-600 transition-colors">
                      {p.title}
                    </h4>
                  </div>
                </button>
              ))}
            </div>
          )}
        </div>
      </section>
      )}

      <CTASection
        heading={`Ready to start your ${service.title} project?`}
        text="Tell us about your goals and we'll map out a clear, results-focused plan in your free consultation."
      />

      <ProjectModal project={active} onClose={() => setActive(null)} />
    </>
  );
}

export default ServiceDetailPage;
