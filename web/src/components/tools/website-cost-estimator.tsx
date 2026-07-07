"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const TYPES = [
  { id: "landing", label: "Landing page", min: 25000, max: 75000 },
  { id: "business", label: "Business website (5–15 pages)", min: 60000, max: 250000 },
  { id: "corporate", label: "Corporate website", min: 250000, max: 1000000 },
  { id: "ecommerce", label: "Ecommerce store", min: 150000, max: 800000 },
] as const;

const ADDONS = [
  { id: "cms", label: "CMS / blog", multiplier: 1.15 },
  { id: "multilingual", label: "Multilingual", multiplier: 1.25 },
  { id: "integrations", label: "API integrations", multiplier: 1.2 },
  { id: "seo", label: "Advanced SEO package", multiplier: 1.1 },
] as const;

function formatInr(n: number) {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(n);
}

export function WebsiteCostEstimator() {
  const [typeId, setTypeId] = useState<(typeof TYPES)[number]["id"]>("business");
  const [addons, setAddons] = useState<string[]>(["seo"]);

  const estimate = useMemo(() => {
    const base = TYPES.find((t) => t.id === typeId)!;
    let min: number = base.min;
    let max: number = base.max;
    for (const addon of ADDONS) {
      if (addons.includes(addon.id)) {
        min = Math.round(min * addon.multiplier);
        max = Math.round(max * addon.multiplier);
      }
    }
    return { min, max, label: base.label };
  }, [typeId, addons]);

  function toggleAddon(id: string) {
    setAddons((prev) => (prev.includes(id) ? prev.filter((a) => a !== id) : [...prev, id]));
  }

  return (
    <div className="grid gap-8 lg:grid-cols-2">
      <div className="space-y-6">
        <div>
          <p className="mb-3 text-sm font-semibold text-zinc-700 dark:text-zinc-300">Website type</p>
          <div className="grid gap-2">
            {TYPES.map((t) => (
              <button
                key={t.id}
                type="button"
                onClick={() => setTypeId(t.id)}
                className={`rounded-xl border px-4 py-3 text-left text-sm transition ${
                  typeId === t.id
                    ? "border-green-600 bg-green-50 text-green-900 dark:border-green-500 dark:bg-green-950/40 dark:text-green-100"
                    : "border-zinc-200 hover:border-zinc-300 dark:border-zinc-800"
                }`}
              >
                {t.label}
              </button>
            ))}
          </div>
        </div>
        <div>
          <p className="mb-3 text-sm font-semibold text-zinc-700 dark:text-zinc-300">Add-ons</p>
          <div className="flex flex-wrap gap-2">
            {ADDONS.map((a) => (
              <button
                key={a.id}
                type="button"
                onClick={() => toggleAddon(a.id)}
                className={`rounded-full border px-3 py-1.5 text-xs font-medium transition ${
                  addons.includes(a.id)
                    ? "border-green-600 bg-green-600 text-white"
                    : "border-zinc-200 text-zinc-600 dark:border-zinc-700 dark:text-zinc-400"
                }`}
              >
                {a.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      <Card className="flex flex-col justify-between bg-zinc-950 text-white dark:bg-zinc-900">
        <div>
          <p className="font-mono text-xs uppercase tracking-wider text-green-400">Estimated range</p>
          <p className="mt-4 font-heading text-3xl font-semibold sm:text-4xl">
            {formatInr(estimate.min)} – {formatInr(estimate.max)}
          </p>
          <p className="mt-4 text-sm leading-relaxed text-zinc-400">
            For a <strong className="text-zinc-200">{estimate.label}</strong> in Karnataka. Excludes GST.
            Exact quotes follow a free discovery call with E26 Media.
          </p>
        </div>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link href="/contact" className={buttonVariants({ size: "lg" })}>
            Get fixed quote
          </Link>
          <Link
            href="/knowledge/guides/website-development-cost-karnataka-2025"
            className={buttonVariants({ variant: "outline", size: "lg", className: "border-zinc-700 text-white hover:bg-zinc-800" })}
          >
            Read full pricing guide
          </Link>
        </div>
      </Card>
    </div>
  );
}
