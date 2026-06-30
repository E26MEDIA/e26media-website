import { cn } from "@/lib/utils";

export function Badge({ className, children }: { className?: string; children: React.ReactNode }) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border border-green-200/60 bg-green-50 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-green-700 dark:border-green-900 dark:bg-green-950/40 dark:text-green-400",
        className
      )}
    >
      {children}
    </span>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}) {
  return (
    <div className={cn("max-w-2xl space-y-3", align === "center" && "mx-auto text-center")}>
      {eyebrow && (
        <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-green-600">{eyebrow}</p>
      )}
      <h2 className="font-heading text-3xl font-medium tracking-tight text-zinc-950 dark:text-white sm:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="text-base leading-relaxed text-zinc-600 dark:text-zinc-400">{description}</p>
      )}
    </div>
  );
}

export function Container({ className, children }: { className?: string; children: React.ReactNode }) {
  return <div className={cn("mx-auto w-full max-w-7xl px-6 md:px-12", className)}>{children}</div>;
}
