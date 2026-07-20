"use client";

import { MessageCircle, Phone } from "lucide-react";
import { SITE } from "@/data/site";

export function StickyActions() {
  const whatsapp = `https://wa.me/${SITE.contact.whatsapp}?text=${encodeURIComponent(
    "Hi E26 Media, I'd like a free consultation."
  )}`;

  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col gap-3 md:bottom-6 md:right-6">
      <a
        href={`tel:${SITE.contact.phoneRaw}`}
        className="flex h-12 w-12 items-center justify-center rounded-full bg-zinc-950 text-white shadow-lg transition hover:scale-105 dark:bg-white dark:text-zinc-950"
        aria-label="Call E26 Media"
      >
        <Phone className="h-5 w-5" />
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
    </div>
  );
}
