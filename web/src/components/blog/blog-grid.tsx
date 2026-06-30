"use client";

import { useState } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import type { BlogPost } from "@/types";

const ALL = "All";

export function BlogGrid({ posts }: { posts: BlogPost[] }) {
  const categories = [ALL, ...new Set(posts.map((p) => p.category))];
  const [active, setActive] = useState(ALL);

  const filtered = active === ALL ? posts : posts.filter((p) => p.category === active);

  return (
    <>
      <section className="border-b border-zinc-200/60 bg-white py-6 dark:border-zinc-800 dark:bg-zinc-950">
        <div className="mx-auto max-w-7xl px-6 md:px-12">
          <div className="flex flex-wrap gap-2" role="tablist" aria-label="Filter blog articles">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                role="tab"
                aria-selected={active === cat}
                onClick={() => setActive(cat)}
                className={cn(
                  "rounded-full border px-4 py-1.5 font-mono text-xs uppercase tracking-wider transition-all",
                  active === cat
                    ? "border-green-600 bg-green-600 text-white shadow-sm"
                    : "border-zinc-200 text-zinc-600 hover:border-green-300 hover:text-green-700 dark:border-zinc-700 dark:text-zinc-400"
                )}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-zinc-50 py-16 dark:bg-zinc-900/40 md:py-20">
        <div className="mx-auto max-w-7xl px-6 md:px-12">
          {filtered.length === 0 ? (
            <p className="py-12 text-center text-sm text-zinc-500">
              No articles in this category yet.{" "}
              <button type="button" onClick={() => setActive(ALL)} className="font-semibold text-green-600 hover:underline">
                View all articles
              </button>
            </p>
          ) : (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {filtered.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group flex flex-col rounded-xl border border-zinc-200 bg-white p-6 transition-all hover:-translate-y-0.5 hover:border-green-200 hover:shadow-lg dark:border-zinc-800 dark:bg-zinc-950"
                >
                  <p className="font-mono text-[10px] font-semibold uppercase tracking-wider text-green-600">{post.category}</p>
                  <h2 className="mt-2 font-heading text-lg font-semibold leading-snug group-hover:text-green-600">{post.title}</h2>
                  <p className="mt-2 line-clamp-3 flex-1 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">{post.excerpt}</p>
                  <p className="mt-4 font-mono text-[11px] text-zinc-500">
                    {new Date(post.date).toLocaleDateString("en-IN", { dateStyle: "medium" })} · {post.readingTime}
                  </p>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
