import React, { useState } from "react";
import { ArrowUpRight, ExternalLink } from "lucide-react";

function ProjectPreview({ project }) {
  const [failed, setFailed] = useState(false);
  const isApp = project.previewType === "app";

  if (failed) {
    return (
      <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-zinc-100 to-zinc-200 p-6 text-center">
        <p className="font-heading text-sm font-semibold text-zinc-600">{project.title}</p>
      </div>
    );
  }

  return (
    <img
      src={project.image}
      alt={`${project.title} preview`}
      loading="lazy"
      onError={() => setFailed(true)}
      className={
        isApp
          ? "max-h-[78%] max-w-[78%] object-contain drop-shadow-md"
          : "h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
      }
      data-testid={`portfolio-project-image-${project.id}`}
    />
  );
}

// Reusable portfolio project card. onView opens the details modal.
export function ProjectCard({ project, onView }) {
  const isApp = project.previewType === "app";

  return (
    <article
      className="group flex h-full flex-col overflow-hidden rounded-xl border border-zinc-200 bg-white text-left transition-all duration-300 hover:border-green-200/80 hover:shadow-lg"
      data-testid={`portfolio-project-card-${project.id}`}
    >
      <div
        className={`relative overflow-hidden border-b border-zinc-200 bg-zinc-100 ${
          isApp
            ? "flex aspect-[4/3] items-center justify-center bg-gradient-to-b from-zinc-50 to-zinc-100"
            : "aspect-[16/10]"
        }`}
      >
        <ProjectPreview project={project} />

        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-zinc-950/25 to-transparent" />

        <div className="absolute left-3 top-3 flex max-w-[calc(100%-1.5rem)] flex-wrap gap-2">
          <span className="rounded border border-white/60 bg-white/95 px-2 py-1 font-mono text-[10px] font-bold uppercase tracking-wider text-green-700 backdrop-blur-sm">
            {project.tag}
          </span>
          <span className="rounded border border-white/60 bg-zinc-950/80 px-2 py-1 font-mono text-[10px] font-bold uppercase tracking-wider text-white backdrop-blur-sm">
            {project.category}
          </span>
        </div>
      </div>

      <div className="flex flex-1 flex-col p-5 md:p-6">
        <div className="space-y-2">
          <h3
            className="font-heading text-lg font-semibold text-zinc-950 transition-colors duration-300 group-hover:text-green-600 md:text-xl"
            data-testid={`portfolio-project-title-${project.id}`}
          >
            {project.title}
          </h3>

          {project.host && (
            <p className="truncate font-mono text-xs text-zinc-400">{project.host}</p>
          )}

          <p className="line-clamp-2 text-sm leading-relaxed text-zinc-500 font-body">
            {project.description}
          </p>
        </div>

        <div className="mt-5 flex items-center justify-between gap-3 border-t border-zinc-100 pt-4">
          {project.url ? (
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-body font-semibold text-zinc-600 transition-colors hover:text-green-600"
            >
              {isApp ? "View on Play Store" : "Visit website"}
              <ExternalLink className="h-3.5 w-3.5" />
            </a>
          ) : (
            <span className="font-mono text-xs text-zinc-400">
              {project.stack?.slice(0, 2).join(" · ")}
            </span>
          )}

          <button
            type="button"
            onClick={() => onView(project)}
            className="inline-flex items-center gap-1 text-xs font-body font-semibold text-zinc-800 transition-colors hover:text-green-600"
            data-testid={`portfolio-project-button-${project.id}`}
          >
            View details
            <ArrowUpRight className="h-3.5 w-3.5" />
          </button>
        </div>
      </div>
    </article>
  );
}
