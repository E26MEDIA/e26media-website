import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { Container } from "@/components/ui/section";

export function CtaBand({
  heading = "Ready to transform your business?",
  text = "Let's build innovative digital solutions that help your business grow faster and stay ahead of the competition.",
}: {
  heading?: string;
  text?: string;
}) {
  return (
    <section className="relative overflow-hidden border-t border-zinc-200/60 bg-zinc-50 py-24 dark:border-zinc-800 dark:bg-zinc-900/40 md:py-32">
      <div className="absolute inset-0 grid-bg-soft pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-green-200/15 blur-[80px]" />
      <Container className="relative z-10 space-y-8 text-center">
        <h2 className="mx-auto max-w-3xl font-heading text-3xl font-semibold tracking-tighter text-zinc-950 dark:text-white sm:text-5xl">
          {heading}
        </h2>
        <p className="mx-auto max-w-2xl text-base leading-relaxed text-zinc-600 dark:text-zinc-400 sm:text-lg">
          {text}
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link href="/contact" className={buttonVariants({ size: "lg" })}>
            Get Free Consultation <ArrowRight className="h-4 w-4" />
          </Link>
          <Link href="/portfolio" className={buttonVariants({ variant: "outline", size: "lg" })}>
            View Our Work
          </Link>
        </div>
      </Container>
    </section>
  );
}
