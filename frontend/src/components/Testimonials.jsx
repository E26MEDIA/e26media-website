import React from "react";
import { Star, Quote } from "lucide-react";
import { TESTIMONIALS } from "../data/testimonials";

export function Testimonials() {
  const reviews = TESTIMONIALS;

  return (
    <section 
      id="testimonials" 
      className="py-24 md:py-32 bg-zinc-50 border-b border-zinc-200/60"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Header */}
        <div className="text-left space-y-4 max-w-2xl mb-16">
          <p className="font-mono text-xs font-semibold tracking-[0.2em] uppercase text-green-600">
            Client Reviews
          </p>
          <h2 
            className="text-3xl sm:text-4xl tracking-tight font-heading font-medium text-zinc-950"
            data-testid="testimonials-heading"
          >
            What our clients say about working with E26 Media
          </h2>
          <p className="text-base text-zinc-600 font-body">
            Feedback from businesses we&apos;ve built websites, apps, ecommerce stores, and marketing campaigns for across the Gulf, India, and beyond.
          </p>
        </div>

        {/* Testimonials Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((rev) => (
            <div 
              key={rev.id}
              className="bg-white border border-zinc-200 rounded-xl p-8 hover:shadow-md transition-shadow duration-300 text-left flex flex-col justify-between relative"
              data-testid={`testimonials-card-${rev.id}`}
            >
              <div className="space-y-6">
                <div className="flex items-center justify-between gap-4">
                  <div className="flex items-center gap-1">
                    {[...Array(rev.stars)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 stroke-yellow-400" />
                    ))}
                  </div>
                  {rev.service && (
                    <span className="font-mono text-[10px] font-semibold uppercase tracking-wider text-green-700 bg-green-50 border border-green-200/60 px-2 py-0.5 rounded">
                      {rev.service}
                    </span>
                  )}
                </div>

                <Quote className="w-6 h-6 text-green-100 shrink-0" />
                
                <p className="text-sm sm:text-base text-zinc-600 font-body leading-relaxed">
                  &ldquo;{rev.text}&rdquo;
                </p>
              </div>

              <div className="flex items-center gap-3 pt-6 border-t border-zinc-100 mt-6">
                <div className="w-10 h-10 rounded-full bg-white border border-zinc-200 flex items-center justify-center overflow-hidden shrink-0 p-1.5">
                  {rev.logo ? (
                    <img
                      src={rev.logo}
                      alt=""
                      className="w-full h-full object-contain"
                      loading="lazy"
                    />
                  ) : (
                    <span className="font-bold font-heading text-sm text-green-700 uppercase">
                      {rev.name.split(" ").map((n) => n[0]).join("")}
                    </span>
                  )}
                </div>
                <div className="min-w-0">
                  <h4 className="font-heading font-semibold text-zinc-950 text-sm truncate">
                    {rev.name}
                  </h4>
                  <p className="text-xs font-body text-zinc-500 truncate">
                    {rev.role}, <span className="font-semibold text-zinc-700">{rev.company}</span>
                  </p>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
