import React, { useState } from "react";
import { Link } from "react-router-dom";
import { X, ArrowRight, CheckCircle2, ExternalLink } from "lucide-react";

function ModalPreview({ project }) {
  const [failed, setFailed] = useState(false);
  const isApp = project.previewType === "app";

  if (failed) {
    return (
      <div className="flex aspect-[16/9] items-center justify-center bg-gradient-to-br from-zinc-100 to-zinc-200 p-8">
        <p className="font-heading text-lg font-semibold text-zinc-600">{project.title}</p>
      </div>
    );
  }

  return (
    <div
      className={`overflow-hidden rounded-t-2xl bg-zinc-100 ${
        isApp ? "flex aspect-[16/9] items-center justify-center bg-gradient-to-b from-zinc-50 to-zinc-100" : "aspect-[16/9]"
      }`}
    >
      <img
        src={project.image}
        alt={project.title}
        onError={() => setFailed(true)}
        className={
          isApp
            ? "max-h-[70%] max-w-[70%] object-contain drop-shadow-lg"
            : "h-full w-full object-cover object-top"
        }
      />
    </div>
  );
}

// Project details modal opened from a ProjectCard.
export function ProjectModal({ project, onClose }) {
  if (!project) return null;

  const isApp = project.previewType === "app";

  return (
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center p-4 sm:p-6"
      data-testid="project-modal"
    >
      <div
        className="absolute inset-0 bg-zinc-950/60 backdrop-blur-sm animate-fadeIn"
        onClick={onClose}
      />
      <div className="relative bg-white rounded-2xl shadow-2xl border border-zinc-200 w-full max-w-3xl max-h-[90vh] overflow-y-auto animate-fadeIn">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-white/90 border border-zinc-200 flex items-center justify-center text-zinc-600 hover:text-zinc-950 hover:bg-zinc-100 transition-colors shadow-sm"
          data-testid="project-modal-close"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        <ModalPreview project={project} />

        <div className="p-8 md:p-10 space-y-6 text-left">
          <div className="flex flex-wrap items-center gap-2">
            <span className="font-mono text-[10px] font-bold text-green-700 uppercase tracking-wider bg-green-50 border border-green-200/50 px-2.5 py-1 rounded">
              {project.category}
            </span>
            <span className="font-mono text-[10px] font-bold text-zinc-600 uppercase tracking-wider bg-zinc-50 border border-zinc-200 px-2.5 py-1 rounded">
              {project.tag}
            </span>
          </div>

          <div className="space-y-2">
            <h3
              className="text-2xl sm:text-3xl font-heading font-semibold text-zinc-950 tracking-tight"
              data-testid="project-modal-title"
            >
              {project.title}
            </h3>
            {project.host && (
              <p className="font-mono text-sm text-zinc-400">{project.host}</p>
            )}
          </div>

          <p className="text-base text-zinc-600 font-body leading-relaxed">
            {project.longDescription}
          </p>

          {project.results?.length > 0 && (
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {project.results.map((r, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2 bg-zinc-50 border border-zinc-200 rounded-lg px-3 py-2.5"
                >
                  <CheckCircle2 className="w-4 h-4 text-green-600 shrink-0" />
                  <span className="text-xs font-body font-medium text-zinc-800">
                    {r}
                  </span>
                </div>
              ))}
            </div>
          )}

          <div className="flex flex-wrap gap-2 pt-2">
            {project.stack?.map((s, i) => (
              <span
                key={i}
                className="font-mono text-xs text-zinc-500 border border-zinc-200 rounded px-2.5 py-1"
              >
                {s}
              </span>
            ))}
          </div>

          <div className="pt-4 border-t border-zinc-100 flex flex-wrap items-center gap-3">
            {project.url && (
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-zinc-200 hover:border-green-300 text-zinc-800 hover:text-green-600 rounded-md px-6 py-3 text-sm font-body font-semibold transition-all"
              >
                {isApp ? "Open on Play Store" : "Visit live website"}
                <ExternalLink className="w-4 h-4" />
              </a>
            )}
            <Link
              to="/contact"
              onClick={onClose}
              className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white rounded-md px-6 py-3 text-sm font-body font-semibold transition-all shadow-sm transform hover:-translate-y-0.5"
              data-testid="project-modal-cta"
            >
              Start a similar project
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
