import Link from "next/link";
import Image from "next/image";
import { withLogoCache } from "@/lib/client-logo";
import { NAV_LINKS, SITE } from "@/data/site";
import { SERVICE_CATEGORIES } from "@/data/services";

export function SiteFooter() {
  return (
    <footer className="border-t border-zinc-200 bg-zinc-950 text-zinc-400 dark:border-zinc-800">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 md:grid-cols-2 lg:grid-cols-5 md:px-12">
        <div className="space-y-5 lg:col-span-2">
          <Image src={withLogoCache("/logo.png")} alt="E26 Media" width={160} height={48} className="h-10 w-auto" unoptimized />
          <p className="max-w-md text-sm leading-relaxed text-zinc-500">{SITE.description}</p>
          <div className="flex flex-wrap gap-3 text-xs text-zinc-500">
            <a href={`mailto:${SITE.contact.email}`} className="hover:text-white">
              {SITE.contact.email}
            </a>
            <a href={`tel:${SITE.contact.phoneRaw}`} className="hover:text-white">
              {SITE.contact.phone}
            </a>
          </div>
          <div className="flex flex-wrap gap-3">
            {SITE.social.map((s) => (
              <a
                key={s.name}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-zinc-500 hover:text-green-400"
              >
                {s.name}
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="mb-4 text-xs font-bold uppercase tracking-wider text-zinc-500">Company</h4>
          <ul className="space-y-2 text-sm">
            {NAV_LINKS.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="hover:text-white">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="mb-4 text-xs font-bold uppercase tracking-wider text-zinc-500">Services</h4>
          <ul className="space-y-2 text-sm">
            {SERVICE_CATEGORIES.map((c) => (
              <li key={c.slug}>
                <Link href={`/services/${c.slug}`} className="hover:text-white">
                  {c.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="mb-4 text-xs font-bold uppercase tracking-wider text-zinc-500">Contact</h4>
          <ul className="space-y-2 text-sm">
            <li>{SITE.contact.address}</li>
            {SITE.contact.hours.map((h) => (
              <li key={h}>{h}</li>
            ))}
            <li>
              <Link href={SITE.contact.mapUrl} className="text-green-400 hover:underline" target="_blank" rel="noopener noreferrer">
                Google Maps
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-zinc-900 py-6 text-center text-xs text-zinc-600">
        © {new Date().getFullYear()} {SITE.legalName}. All rights reserved.
      </div>
    </footer>
  );
}
