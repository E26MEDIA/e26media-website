import React from "react";

// Reusable inner-page hero with the signature grid + ambient glow.
export function PageHero({ badge, title, highlight, subtitle, children }) {
  return (
    <section className="relative pt-36 pb-16 md:pt-44 md:pb-24 bg-white overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_0%,#000_60%,transparent_100%)] opacity-60" />
      <div className="absolute top-0 left-1/4 -translate-x-1/2 w-[400px] h-[400px] bg-green-200/20 rounded-full blur-[90px] pointer-events-none" />
      <div className="max-w-4xl mx-auto px-6 md:px-12 relative z-10 text-center space-y-6">
        {badge && (
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-green-50 border border-green-200/50 rounded-full text-green-700 font-mono text-xs tracking-wider uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
            {badge}
          </div>
        )}
        <h1
          className="text-4xl sm:text-5xl lg:text-6xl tracking-tighter font-heading font-medium text-zinc-950 leading-[1.05]"
          data-testid="page-hero-title"
        >
          {title}{" "}
          {highlight && (
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 via-emerald-600 to-green-500">
              {highlight}
            </span>
          )}
        </h1>
        {subtitle && (
          <p className="text-base sm:text-lg text-zinc-600 font-body max-w-2xl mx-auto leading-relaxed">
            {subtitle}
          </p>
        )}
        {children}
      </div>
    </section>
  );
}
