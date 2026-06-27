import React from "react";
import { Users, Briefcase, ShieldCheck, Headphones } from "lucide-react";

export function WhyChooseUs() {
  const cards = [
    {
      id: "team",
      title: "Experienced Team",
      description: "Our core comprises elite software engineers, creative designers, and senior product managers with decades of collective industry experience.",
      icon: Users
    },
    {
      id: "tailored",
      title: "Tailored Business Solutions",
      description: "We don't do pre-packaged templates. Every line of code and user flow is architected specifically to hit your business's individual KPIs.",
      icon: Briefcase
    },
    {
      id: "scalable",
      title: "Scalable & Secure Technology",
      description: "Security is non-negotiable. We build on industry-leading frameworks, utilizing bulletproof cloud structures to keep system transactions safe.",
      icon: ShieldCheck
    },
    {
      id: "support",
      title: "Dedicated Support",
      description: "Consider us an extension of your own team. We provide round-the-clock technical monitoring and ongoing system optimizations long after launch.",
      icon: Headphones
    }
  ];

  return (
    <section 
      id="why-choose-us" 
      className="py-24 md:py-32 bg-white"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Header */}
        <div className="text-left space-y-4 max-w-2xl mb-16">
          <p className="font-mono text-xs font-semibold tracking-[0.2em] uppercase text-green-600">
            Why Partner With E26
          </p>
          <h2 
            className="text-3xl sm:text-4xl tracking-tight font-heading font-medium text-zinc-950"
            data-testid="why-choose-us-heading"
          >
            We Are Built For Rigorous Business Partnerships
          </h2>
          <p className="text-base text-zinc-600 font-body">
            We operate as a trusted tech partner, focusing strictly on high-performance deliverables, clean architecture, and transparent communication.
          </p>
        </div>

        {/* Features Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card) => {
            const IconComponent = card.icon;
            return (
              <div 
                key={card.id}
                className="bg-white border border-zinc-200 rounded-xl p-8 hover:shadow-md transition-shadow duration-300 flex flex-col justify-between text-left group"
                data-testid={`why-choose-us-card-${card.id}`}
              >
                <div>
                  {/* Icon Frame */}
                  <div className="w-10 h-10 rounded bg-zinc-50 border border-zinc-200/50 flex items-center justify-center text-zinc-600 group-hover:text-green-600 group-hover:bg-green-50 group-hover:border-green-200/50 transition-all duration-300 mb-6">
                    <IconComponent className="w-5 h-5" />
                  </div>
                  
                  {/* Title */}
                  <h3 
                    className="text-lg font-heading font-medium text-zinc-900 mb-2 group-hover:text-green-600 transition-colors duration-300"
                    data-testid={`why-choose-us-card-title-${card.id}`}
                  >
                    {card.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-sm text-zinc-500 font-body leading-relaxed">
                    {card.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
