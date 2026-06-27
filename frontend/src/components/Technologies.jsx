import React from "react";

export function Technologies() {
  const techs = [
    "React",
    "Next.js",
    "Node.js",
    "Laravel",
    "Flutter",
    "PHP",
    "Firebase",
    "MongoDB",
    "MySQL",
    "AWS",
    "Docker",
    "WordPress"
  ];

  // Duplicate list to make it infinitely scrollable
  const doubledTechs = [...techs, ...techs, ...techs];

  return (
    <section 
      id="technologies" 
      className="py-16 bg-white border-b border-zinc-200/60 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-8 text-left">
        <p className="font-mono text-xs font-semibold tracking-[0.2em] uppercase text-zinc-400">
          Our Primary Stack
        </p>
      </div>

      {/* Infinite scrolling marquee wrapper */}
      <div className="relative w-full overflow-hidden py-4 bg-zinc-50 border-y border-zinc-100 flex items-center">
        {/* Shadow overlays on sides */}
        <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        <div className="animate-marquee whitespace-nowrap flex items-center gap-12 md:gap-16">
          {doubledTechs.map((tech, idx) => (
            <div 
              key={idx}
              className="inline-flex items-center gap-2 cursor-default"
              data-testid={`technologies-item-${tech}-${idx}`}
            >
              {/* Little green technical dot */}
              <span className="w-1.5 h-1.5 rounded-full bg-green-500/80" />
              <span className="font-heading font-semibold text-lg md:text-xl text-zinc-500 hover:text-zinc-950 transition-colors duration-200 tracking-tight">
                {tech}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
