"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import type { Testimonial } from "@/types";
import { cn } from "@/lib/utils";

export function TestimonialSlider({ testimonials }: { testimonials: Testimonial[] }) {
  const [index, setIndex] = useState(0);
  const total = testimonials.length;

  useEffect(() => {
    if (total <= 1) return;
    const id = window.setInterval(() => {
      setIndex((current) => (current + 1) % total);
    }, 6000);
    return () => window.clearInterval(id);
  }, [total]);

  if (!total) return null;

  const active = testimonials[index]!;

  function go(delta: number) {
    setIndex((current) => (current + delta + total) % total);
  }

  return (
    <div className="mx-auto w-full max-w-3xl">
      <div className="relative overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-50 p-8 md:p-10 dark:border-zinc-800 dark:bg-zinc-900/40">
        <div className="mb-6 flex gap-0.5">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
          ))}
        </div>
        <blockquote
          key={active.id}
          className="text-base leading-relaxed text-zinc-700 transition-opacity duration-300 dark:text-zinc-300 md:text-lg"
        >
          &ldquo;{active.text}&rdquo;
        </blockquote>
        {active.service && (
          <span className="mt-6 inline-block rounded-full bg-green-50 px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-wider text-green-700 dark:bg-green-950/40 dark:text-green-400">
            {active.service}
          </span>
        )}
        <div className="mt-6 flex items-center gap-3 border-t border-zinc-200 pt-5 dark:border-zinc-800">
          {active.logo && (
            <Image
              src={active.logo}
              alt={`${active.company} logo`}
              width={44}
              height={44}
              className="rounded-full"
            />
          )}
          <div>
            <p className="text-sm font-semibold text-zinc-950 dark:text-white">{active.name}</p>
            <p className="text-xs text-zinc-500">
              {active.role}, {active.company}
            </p>
          </div>
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
                "h-2 w-2 rounded-full transition",
                i === index ? "bg-green-600" : "bg-zinc-300 dark:bg-zinc-700"
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
