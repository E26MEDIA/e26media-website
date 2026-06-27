import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { ABOUT } from "../data/about";

// Short "About" preview band for the Home page.
export function AboutPreview() {
  return (
    <section
      className="py-24 md:py-32 bg-zinc-50 border-y border-zinc-200/60"
      data-testid="about-preview-section"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-6 space-y-6 text-left">
            <p className="font-mono text-xs font-semibold tracking-[0.2em] uppercase text-green-600">
              Who We Are
            </p>
            <h2 className="text-3xl sm:text-4xl tracking-tight font-heading font-medium text-zinc-950 leading-tight">
              A software & digital solutions company built for ambitious businesses
            </h2>
            <p className="text-base text-zinc-600 font-body leading-relaxed">
              {ABOUT.intro}
            </p>
            <ul className="space-y-3">
              {ABOUT.values.map((v) => (
                <li key={v.title} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                  <span className="text-sm text-zinc-700 font-body">
                    <span className="font-semibold text-zinc-900">{v.title}</span>{" "}
                    — {v.desc}
                  </span>
                </li>
              ))}
            </ul>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 bg-zinc-950 hover:bg-zinc-800 text-white rounded-md px-6 py-3 text-sm font-body font-semibold transition-all shadow-sm transform hover:-translate-y-0.5"
              data-testid="about-preview-button"
            >
              More about E26 Media
              <ArrowRight className="w-4 h-4 text-green-400" />
            </Link>
          </div>

          <div className="lg:col-span-6">
            <div className="grid grid-cols-2 gap-4">
              {ABOUT.stats.map((s) => (
                <div
                  key={s.label}
                  className="bg-white border border-zinc-200 rounded-xl p-8 text-left hover:shadow-md transition-shadow"
                  data-testid={`about-preview-stat-${s.label}`}
                >
                  <p className="text-4xl font-heading font-semibold text-zinc-950 tracking-tight">
                    {s.value}
                  </p>
                  <p className="text-xs font-mono text-zinc-500 uppercase tracking-wider mt-2">
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
