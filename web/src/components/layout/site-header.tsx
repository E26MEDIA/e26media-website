"use client";

import Link from "next/link";
import Image from "next/image";
import { withLogoCache } from "@/lib/client-logo";
import { useEffect, useState } from "react";
import { Menu, X, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { NAV_LINKS } from "@/data/site";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, [open]);

  return (
    <header className="glass sticky top-0 z-50 border-b border-zinc-200/70 dark:border-zinc-800">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 md:px-12">
        <Link href="/" className="flex items-center gap-2">
          <Image src={withLogoCache("/logo-nav.png")} alt="E26 Media" width={160} height={44} className="h-9 w-auto sm:h-10" unoptimized priority />
        </Link>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Main">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-zinc-600 transition hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-white"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <button
            type="button"
            aria-label="Toggle theme"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="rounded-lg p-2 text-zinc-500 hover:bg-zinc-100 dark:hover:bg-zinc-900"
          >
            <Sun className="h-4 w-4 dark:hidden" />
            <Moon className="hidden h-4 w-4 dark:block" />
          </button>
          <Link href="/contact" className={buttonVariants()}>
            Book Consultation
          </Link>
        </div>

        <button
          type="button"
          className="lg:hidden rounded-lg p-2"
          aria-label="Open menu"
          aria-expanded={open}
          onClick={() => setOpen(true)}
        >
          <Menu className="h-5 w-5" />
        </button>
      </div>

      {/* Mobile menu: solid panel + dark overlay so page content does not show through */}
      <div
        className={cn(
          "fixed inset-0 z-[60] lg:hidden",
          open ? "pointer-events-auto" : "pointer-events-none"
        )}
        aria-hidden={!open}
      >
        <button
          type="button"
          aria-label="Close menu overlay"
          className={cn(
            "absolute inset-0 bg-zinc-950/70 transition-opacity duration-200",
            open ? "opacity-100" : "opacity-0"
          )}
          onClick={() => setOpen(false)}
        />
        <div
          className={cn(
            "absolute right-0 top-0 z-[61] flex h-full w-[min(100%,20rem)] flex-col border-l border-zinc-200 bg-white p-6 shadow-2xl transition-transform duration-200 dark:border-zinc-800 dark:bg-zinc-950",
            open ? "translate-x-0" : "translate-x-full"
          )}
        >
          <div className="mb-8 flex items-center justify-between">
            <span className="font-semibold text-zinc-950 dark:text-white">Menu</span>
            <button type="button" aria-label="Close menu" onClick={() => setOpen(false)}>
              <X className="h-5 w-5" />
            </button>
          </div>
          <nav className="flex flex-col gap-4" aria-label="Mobile">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-base font-medium text-zinc-900 dark:text-zinc-100"
              >
                {link.label}
              </Link>
            ))}
            <Link href="/contact" onClick={() => setOpen(false)} className={cn(buttonVariants(), "mt-4")}>
              Book Consultation
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
