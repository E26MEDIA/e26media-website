"use client";

import Link from "next/link";
import Image from "next/image";
import { MessageCircle } from "lucide-react";
import { SITE } from "@/data/site";
import { withLogoCache } from "@/lib/client-logo";

export function StickyActions() {
  const whatsapp = `https://wa.me/${SITE.contact.whatsapp}?text=${encodeURIComponent(
    "Hi E26 Media, I'd like a free consultation."
  )}`;

  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col gap-3 md:bottom-6 md:right-6">
      <a
        href={`tel:${SITE.contact.phoneRaw}`}
        className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-full bg-zinc-950 shadow-lg ring-1 ring-white/10 transition hover:scale-105 dark:ring-white/20"
        aria-label="Call E26 Media"
      >
        <Image
          src={withLogoCache("/logo-icon.png")}
          alt=""
          width={48}
          height={48}
          className="h-full w-full object-cover"
          unoptimized
        />
      </a>
      <a
        href={whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        className="flex h-12 w-12 items-center justify-center rounded-full bg-green-600 text-white shadow-lg transition hover:scale-105"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="h-5 w-5" />
      </a>
      <Link
        href="/contact"
        className="hidden rounded-full bg-white px-4 py-3 text-xs font-semibold text-zinc-950 shadow-lg ring-1 ring-zinc-200 transition hover:scale-105 sm:inline-flex dark:bg-zinc-900 dark:text-white dark:ring-zinc-800"
      >
        Free Consultation
      </Link>
    </div>
  );
}
