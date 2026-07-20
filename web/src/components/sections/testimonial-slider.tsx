"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import type { Testimonial } from "@/types";
import { cn } from "@/lib/utils";

const AUTO_MS = 4500;

export function TestimonialSlider({ testimonials }: { testimonials: Testimonial[] }) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const total = testimonials.length;

  const goNext = useCallback(() => {
    setIndex((current) => (current + 1) % total);
  }, [total]);

  useEffect(() => {
    if (total <= 1 || paused) return;
    const id = window.setInterval(goNext, AUTO_MS);
    return () => window.clearInterval(id);
  }, [total, paused, goNext, index]);

  if (!total) return null;

  function go(delta: number) {
    setIndex((current) => (current + delta + total) % total);
  }

  return (
    <div
      className="mx-auto w-full max-w-3xl"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
    >
      <div className="relative overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-900/40">
        <div
          className="flex transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {testimonials.map((t) => (
            <div key={t.id} className="w-full shrink-0 p-8 md:p-10">
              <div className="mb-6 flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <blockquote className="text-base leading-relaxed text-zinc-700 dark:text-zinc-300 md:text-lg">
                &ldquo;{t.text}&rdquo;
              </blockquote>
              {t.service && (
                <span className="mt-6 inline-block rounded-full bg-green-50 px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-wider text-green-700 dark:bg-green-950/40 dark:text-green-400">
                  {t.service}
                </span>
              )}
              <div className="mt-6 flex items-center gap-3 border-t border-zinc-200 pt-5 dark:border-zinc-800">
                {t.logo && (
                  <Image
                    src={t.logo}
                    alt={`${t.company} logo`}
                    width={44}
                    height={44}
                    className="rounded-full"
                  />
                )}
                <div>
                  <p className="text-sm font-semibold text-zinc-950 dark:text-white">{t.name}</p>
                  <p className="text-xs text-zinc-500">
                    {t.role}, {t.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-6 flex items-center justify-center gap-4">
        <button
          type="button"
          onClick={() => go(-1)}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-zinc-200 bg-white text-zinc-700 transition hover:border-green-600 hover:text-green-600 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-300"
          aria-label="Previous testimonial"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <div className="flex gap-2" role="tablist" aria-label="Testimonials">
          {testimonials.map((t, i) => (
            <button
              key={t.id}
              type="button"
              role="tab"
              aria-selected={i === index}
              onClick={() => setIndex(i)}
              className={cn(
                "h-2 rounded-full transition-all",
                i === index ? "w-6 bg-green-600" : "w-2 bg-zinc-300 dark:bg-zinc-700"
              )}
              aria-label={`Show testimonial ${i + 1}`}
            />
          ))}
        </div>
        <button
          type="button"
          onClick={() => go(1)}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-zinc-200 bg-white text-zinc-700 transition hover:border-green-600 hover:text-green-600 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-300"
          aria-label="Next testimonial"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
}
