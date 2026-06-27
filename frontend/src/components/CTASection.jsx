import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

// Reusable final call-to-action band.
export function CTASection({
  heading = "Ready to Transform Your Business?",
  text = "Let's build innovative digital solutions that help your business grow faster and stay ahead of the competition.",
}) {
  return (
    <section
      className="py-24 md:py-32 bg-zinc-50 border-t border-zinc-200/60 relative overflow-hidden"
      data-testid="cta-section"
    >
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-70 pointer-events-none" />
      <div className="max-w-4xl mx-auto px-6 md:px-12 relative z-10 text-center space-y-8">
        <h2
          className="text-3xl sm:text-5xl tracking-tighter font-heading font-semibold text-zinc-950 max-w-3xl mx-auto leading-tight"
          data-testid="cta-heading"
        >
          {heading}
        </h2>
        <p className="text-base sm:text-lg text-zinc-600 font-body max-w-2xl mx-auto leading-relaxed">
          {text}
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link
            to="/contact"
            className="bg-green-600 hover:bg-green-700 text-white rounded-md px-6 py-3 text-sm font-body font-semibold transition-all shadow-sm flex items-center gap-2 transform hover:-translate-y-0.5"
            data-testid="cta-primary-button"
          >
            Get Free Consultation
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            to="/contact"
            className="bg-white border border-zinc-200 hover:bg-zinc-50 hover:border-zinc-300 text-zinc-900 rounded-md px-6 py-3 text-sm font-body font-semibold transition-all flex items-center gap-2 transform hover:-translate-y-0.5"
            data-testid="cta-secondary-button"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}
