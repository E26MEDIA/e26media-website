import React from "react";
import { ArrowUpRight } from "lucide-react";

// Reusable portfolio project card. onView opens the details modal.
export function ProjectCard({ project, onView }) {
  return (
    <div
      className="bg-white border border-zinc-200 rounded-xl overflow-hidden group hover:shadow-lg transition-all duration-300 text-left flex flex-col"
      data-testid={`portfolio-project-card-${project.id}`}
    >
      <div className="relative overflow-hidden aspect-[4/3] bg-zinc-100 border-b border-zinc-200">
        <img
          src={project.image}
          alt={project.title}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          data-testid={`portfolio-project-image-${project.id}`}
        />
        <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-2.5 py-1 rounded border border-zinc-200/50">
          <span className="font-mono text-[10px] font-bold text-zinc-800 uppercase tracking-wider">
            {project.tag}
          </span>
        </div>
        <div className="absolute top-4 right-4 bg-green-600/90 backdrop-blur-md px-2.5 py-1 rounded">
          <span className="font-mono text-[10px] font-bold text-white uppercase tracking-wider">
            {project.category}
          </span>
        </div>
      </div>

      <div className="p-6 md:p-8 space-y-3 flex-1 flex flex-col justify-between">
        <div className="space-y-2">
          <h3
            className="text-lg md:text-xl font-heading font-medium text-zinc-950 group-hover:text-green-600 transition-colors duration-300"
            data-testid={`portfolio-project-title-${project.id}`}
          >
            {project.title}
          </h3>
          <p className="text-sm text-zinc-500 font-body leading-relaxed">
            {project.description}
          </p>
        </div>
        <div className="pt-4 border-t border-zinc-100 mt-2 flex items-center justify-between">
          <span className="font-mono text-xs text-zinc-400 truncate max-w-[55%]">
            {project.stack?.slice(0, 3).join(" · ")}
          </span>
          <button
            onClick={() => onView(project)}
            className="inline-flex items-center gap-1 text-xs font-body font-semibold text-zinc-800 hover:text-green-600 transition-colors"
            data-testid={`portfolio-project-button-${project.id}`}
          >
            View Details
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
}
