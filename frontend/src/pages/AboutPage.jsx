import React from "react";
import { Target, Eye } from "lucide-react";
import { PageHero } from "../components/PageHero";
import { CTASection } from "../components/CTASection";
import { Testimonials } from "../components/Testimonials";
import { Icon } from "../components/Icon";
import { ABOUT } from "../data/about";
import { Seo } from "../components/Seo";
import { SEO } from "../data/site";

export function AboutPage() {
  return (
    <>
      <Seo {...SEO.about} />
      <PageHero
        badge="About E26 Media"
        title="A trusted technology partner for"
        highlight="growing businesses"
        subtitle={ABOUT.intro}
      />

      {/* Stats */}
      <section className="py-12 md:py-16 bg-white" data-testid="about-stats">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-2 lg:grid-cols-4 gap-4">
          {ABOUT.stats.map((s) => (
            <div
              key={s.label}
              className="bg-zinc-50 border border-zinc-200 rounded-xl p-8 text-center"
              data-testid={`about-stat-${s.label}`}
            >
              <p className="text-4xl font-heading font-semibold text-green-600 tracking-tight">
                {s.value}
              </p>
              <p className="text-xs font-mono text-zinc-500 uppercase tracking-wider mt-2">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 md:py-24 bg-zinc-50 border-y border-zinc-200/60">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white border border-zinc-200 rounded-2xl p-10 text-left" data-testid="about-mission">
            <div className="w-12 h-12 rounded-lg bg-green-50 border border-green-200/50 flex items-center justify-center text-green-600 mb-6">
              <Target className="w-6 h-6" />
            </div>
            <h2 className="text-2xl font-heading font-medium text-zinc-950 mb-3">Our Mission</h2>
            <p className="text-base text-zinc-600 font-body leading-relaxed">{ABOUT.mission}</p>
          </div>
          <div className="bg-white border border-zinc-200 rounded-2xl p-10 text-left" data-testid="about-vision">
            <div className="w-12 h-12 rounded-lg bg-green-50 border border-green-200/50 flex items-center justify-center text-green-600 mb-6">
              <Eye className="w-6 h-6" />
            </div>
            <h2 className="text-2xl font-heading font-medium text-zinc-950 mb-3">Our Vision</h2>
            <p className="text-base text-zinc-600 font-body leading-relaxed">{ABOUT.vision}</p>
          </div>
        </div>
      </section>

      {/* Why choose us */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-left max-w-2xl mb-12 space-y-3">
            <p className="font-mono text-xs font-semibold tracking-[0.2em] uppercase text-green-600">
              Why Choose Us
            </p>
            <h2 className="text-2xl sm:text-3xl font-heading font-medium text-zinc-950 tracking-tight">
              What makes us a long-term partner
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {ABOUT.values.map((v) => (
              <div
                key={v.title}
                className="bg-zinc-50 border border-zinc-200 rounded-xl p-6 text-left hover:shadow-md hover:-translate-y-1 transition-all duration-300"
                data-testid={`about-value-${v.title}`}
              >
                <div className="w-11 h-11 rounded-lg bg-white border border-green-200/50 flex items-center justify-center text-green-600 mb-4">
                  <Icon name={v.icon} className="w-5 h-5" />
                </div>
                <h3 className="font-heading font-semibold text-zinc-900 text-lg mb-2">{v.title}</h3>
                <p className="text-sm text-zinc-500 font-body leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Journey timeline */}
      <section className="py-16 md:py-24 bg-zinc-50 border-y border-zinc-200/60">
        <div className="max-w-5xl mx-auto px-6 md:px-12">
          <div className="text-left max-w-2xl mb-12 space-y-3">
            <p className="font-mono text-xs font-semibold tracking-[0.2em] uppercase text-green-600">
              How We Work
            </p>
            <h2 className="text-2xl sm:text-3xl font-heading font-medium text-zinc-950 tracking-tight">
              Our proven delivery process
            </h2>
          </div>
          <div className="relative pl-8 border-l-2 border-zinc-200 space-y-8">
            {ABOUT.journey.map((step, i) => (
              <div key={step.phase} className="relative" data-testid={`about-journey-${i}`}>
                <span className="absolute -left-[41px] top-0.5 w-5 h-5 rounded-full bg-green-600 border-4 border-zinc-50" />
                <p className="font-mono text-xs text-green-600 uppercase tracking-wider mb-1">
                  Step {i + 1}
                </p>
                <h3 className="font-heading font-semibold text-zinc-900 text-lg">{step.phase}</h3>
                <p className="text-sm text-zinc-500 font-body mt-1">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Testimonials />
      <CTASection />
    </>
  );
}

export default AboutPage;
