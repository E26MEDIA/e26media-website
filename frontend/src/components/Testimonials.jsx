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
            Client Endorsements
          </p>
          <h2 
            className="text-3xl sm:text-4xl tracking-tight font-heading font-medium text-zinc-950"
            data-testid="testimonials-heading"
          >
            Trusted By Elite Enterprises and Scaling Startups
          </h2>
          <p className="text-base text-zinc-600 font-body">
            Read what corporate technology leaders and VP executives say about partnering with E26 Media to deliver business-critical digital solutions.
          </p>
        </div>

        {/* Testimonials Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {reviews.map((rev) => (
            <div 
              key={rev.id}
              className="bg-white border border-zinc-200 rounded-xl p-8 hover:shadow-md transition-shadow duration-300 text-left flex flex-col justify-between relative"
              data-testid={`testimonials-card-${rev.id}`}
            >
              <div className="space-y-6">
                {/* Stars and Quote */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1">
                    {[...Array(rev.stars)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 stroke-yellow-400" />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-green-100 shrink-0" />
                </div>
                
                {/* Content */}
                <p className="text-sm sm:text-base text-zinc-600 font-body leading-relaxed italic">
                  &ldquo;{rev.text}&rdquo;
                </p>
              </div>

              {/* Author */}
              <div className="flex items-center gap-3 pt-6 border-t border-zinc-100 mt-6">
                {/* Initial Avatar */}
                <div className="w-10 h-10 rounded-full bg-green-50 border border-green-200/50 flex items-center justify-center font-bold font-heading text-sm text-green-700 uppercase">
                  {rev.name.split(" ").map(n => n[0]).join("")}
                </div>
                <div>
                  <h4 className="font-heading font-semibold text-zinc-950 text-sm">
                    {rev.name}
                  </h4>
                  <p className="text-xs font-body text-zinc-500">
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
