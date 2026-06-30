import { Server, Layers, Smartphone } from "lucide-react";

export function HeroMockup() {
  return (
    <div className="relative mx-auto flex aspect-square w-full max-w-lg items-center justify-center">
      <div className="absolute h-full w-full animate-[spin_60s_linear_infinite] rounded-full border border-zinc-200 [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_80%,transparent_100%)] dark:border-zinc-800" />
      <div className="absolute h-[80%] w-[80%] animate-[spin_40s_linear_infinite] rounded-full border border-dashed border-zinc-200 dark:border-zinc-800" />

      {/* Laptop mockup */}
      <div className="animate-float absolute z-10 w-[90%] -rotate-[4deg] overflow-hidden rounded-xl border border-zinc-800/80 bg-zinc-950 shadow-2xl">
        <div className="flex items-center gap-1.5 border-b border-zinc-800 bg-zinc-900 px-4 py-2">
          <span className="h-2 w-2 rounded-full bg-red-500/80" />
          <span className="h-2 w-2 rounded-full bg-yellow-500/80" />
          <span className="h-2 w-2 rounded-full bg-green-500/80" />
          <span className="ml-4 font-mono text-[10px] text-zinc-500">e26-enterprise.io</span>
        </div>
        <div className="space-y-4 bg-zinc-900 p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="flex h-4 w-4 items-center justify-center rounded-full bg-green-500/20">
                <span className="h-2 w-2 rounded-full bg-green-500" />
              </div>
              <span className="font-mono text-xs font-bold text-zinc-200">E26 Solutions</span>
            </div>
            <span className="font-mono text-[10px] text-zinc-500">Active Node</span>
          </div>
          <div className="grid grid-cols-3 gap-2">
            {[
              { label: "Leads", value: "1,482", sub: "+12.4%" },
              { label: "Response", value: "180ms", sub: "Perfect" },
              { label: "ROI", value: "320%", sub: "Excellent" },
            ].map((m) => (
              <div key={m.label} className="rounded border border-zinc-800/60 bg-zinc-950 p-2">
                <p className="font-mono text-[9px] uppercase text-zinc-500">{m.label}</p>
                <p className="mt-0.5 font-heading text-sm font-semibold text-white">{m.value}</p>
                <span className="font-mono text-[8px] text-green-500">{m.sub}</span>
              </div>
            ))}
          </div>
          <div className="relative flex h-20 items-end rounded border border-zinc-800/60 bg-zinc-950 p-2">
            <svg className="h-12 w-full" viewBox="0 0 100 40" aria-hidden>
              <path d="M0,35 Q15,20 30,25 T60,10 T85,15 T100,5" fill="none" stroke="#16A34A" strokeWidth="1.5" strokeLinecap="round" />
              <path d="M0,35 Q15,20 30,25 T60,10 T85,15 T100,5 L100,40 L0,40 Z" fill="#16A34A" opacity="0.1" />
            </svg>
          </div>
        </div>
      </div>

      {/* Mobile overlay */}
      <div className="absolute bottom-5 right-[-10px] z-20 w-[30%] rotate-[6deg] overflow-hidden rounded-2xl border-4 border-zinc-800 bg-zinc-900 shadow-2xl">
        <div className="space-y-3 bg-zinc-950 p-2.5">
          <div className="flex items-center justify-between border-b border-zinc-800/80 pb-1.5">
            <span className="font-mono text-[8px] text-zinc-400">Mobile app</span>
            <Smartphone className="h-2.5 w-2.5 text-zinc-500" />
          </div>
          <div className="flex h-8 items-center justify-center rounded border border-zinc-800 bg-zinc-900">
            <div className="text-center">
              <p className="font-mono text-[7px] text-zinc-500">Conversion</p>
              <p className="font-heading text-[10px] font-bold text-green-500">+140%</p>
            </div>
          </div>
          <div className="h-1.5 overflow-hidden rounded-full bg-zinc-900">
            <div className="h-full w-[75%] bg-green-500" />
          </div>
        </div>
      </div>

      {/* Floating cards */}
      <div className="absolute left-[-20px] top-5 z-20 flex animate-bounce items-center gap-2 rounded-lg border border-zinc-200/80 bg-white p-3 shadow-md [animation-duration:4s] dark:border-zinc-700 dark:bg-zinc-900">
        <div className="flex h-8 w-8 items-center justify-center rounded bg-green-50 text-green-600">
          <Server className="h-4 w-4" />
        </div>
        <div>
          <p className="font-mono text-[10px] uppercase text-zinc-400">Cloud Deploy</p>
          <p className="font-heading text-xs font-semibold text-zinc-950 dark:text-white">AWS / Docker</p>
        </div>
      </div>
      <div className="absolute bottom-10 left-[-30px] z-20 flex animate-bounce items-center gap-2 rounded-lg border border-zinc-200/80 bg-white p-3 shadow-md [animation-duration:5s] dark:border-zinc-700 dark:bg-zinc-900">
        <div className="flex h-8 w-8 items-center justify-center rounded bg-emerald-50 text-emerald-600">
          <Layers className="h-4 w-4" />
        </div>
        <div>
          <p className="font-mono text-[10px] uppercase text-zinc-400">Digital Marketing</p>
          <p className="font-heading text-xs font-semibold text-zinc-950 dark:text-white">SEO & ROI Focus</p>
        </div>
      </div>
    </div>
  );
}
