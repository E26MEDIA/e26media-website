import React from "react";
import { Search, Compass, Palette, Code, CheckSquare, CloudLightning, Activity } from "lucide-react";

export function Process() {
  const steps = [
    {
      num: "01",
      title: "Discovery",
      description: "We deep-dive into your business operations, analyzing existing systems, bottlenecks, and user roles to outline optimal solutions.",
      icon: Search
    },
    {
      num: "02",
      title: "Planning",
      description: "Our architects map out your database models, tech-stack, server environments, and compile a comprehensive project blueprint.",
      icon: Compass
    },
    {
      num: "03",
      title: "UI/UX Design",
      description: "We craft custom interactive wireframes and premium designs matching your company's identity, ensuring a frictionless user journey.",
      icon: Palette
    },
    {
      num: "04",
      title: "Development",
      description: "Our engineers build clean, responsive, and robust codebases adhering strictly to the highest clean-coding and security principles.",
      icon: Code
    },
    {
      num: "05",
      title: "Testing",
      description: "We execute end-to-end automated and manual test suites checking for performance, system load capacity, and device responsive rendering.",
      icon: CheckSquare
    },
    {
      num: "06",
      title: "Deployment",
      description: "We orchestrate seamless server transitions, deploying workloads across robust cloud engines with zero business operation downtime.",
      icon: CloudLightning
    },
    {
      num: "07",
      title: "Ongoing Support",
      description: "We continuously monitor and maintain system security, running regular code optimizations, and providing direct technical support.",
      icon: Activity
    }
  ];

  return (
    <section 
      id="process" 
      className="py-24 md:py-32 bg-zinc-50 border-y border-zinc-200/60 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Header */}
        <div className="text-left space-y-4 max-w-2xl mb-16">
          <p className="font-mono text-xs font-semibold tracking-[0.2em] uppercase text-green-600">
            Our Delivery Blueprint
          </p>
          <h2 
            className="text-3xl sm:text-4xl tracking-tight font-heading font-medium text-zinc-950"
            data-testid="process-heading"
          >
            A Systematic Phase-by-Phase Process to Safeguard Success
          </h2>
          <p className="text-base text-zinc-600 font-body">
            We follow a structured, transparent software engineering life-cycle designed to maximize efficiency and assure high-performance digital output.
          </p>
        </div>

        {/* Timeline Layout */}
        <div className="relative border-l border-zinc-200 ml-4 md:ml-6 pl-8 md:pl-10 space-y-12">
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <div 
                key={step.num}
                className="relative text-left group"
                data-testid={`process-step-${step.num}`}
              >
                {/* Timeline node circle */}
                <div className="absolute -left-[49px] md:-left-[57px] top-1.5 w-9 h-9 md:w-11 md:h-11 rounded-full bg-white border-2 border-zinc-200 flex items-center justify-center text-zinc-400 group-hover:border-green-600 group-hover:text-green-600 group-hover:shadow-sm transition-all duration-300">
                  <IconComponent className="w-4 h-4 md:w-5 md:h-5" />
                </div>

                {/* Content */}
                <div className="bg-white border border-zinc-200 rounded-lg p-6 md:p-8 max-w-3xl hover:border-zinc-300 hover:shadow-sm transition-all duration-300">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="font-mono text-sm font-bold text-green-600">{step.num}</span>
                    <h3 
                      className="text-lg md:text-xl font-heading font-medium text-zinc-950"
                      data-testid={`process-step-title-${step.num}`}
                    >
                      {step.title}
                    </h3>
                  </div>
                  <p className="text-sm md:text-base text-zinc-600 font-body leading-relaxed">
                    {step.description}
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
