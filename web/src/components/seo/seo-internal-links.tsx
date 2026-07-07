import Link from "next/link";
import type { InternalSeoLink } from "@/lib/internal-links";

type Props = {
  title?: string;
  links: InternalSeoLink[];
};

export function SeoInternalLinks({ title = "Explore related resources", links }: Props) {
  if (links.length === 0) return null;

  return (
    <section className="mx-auto max-w-3xl rounded-xl border border-zinc-200 bg-zinc-50 p-6 dark:border-zinc-800 dark:bg-zinc-900">
      <h2 className="font-heading text-lg font-semibold text-zinc-950 dark:text-white">{title}</h2>
      <ul className="mt-4 grid gap-3 sm:grid-cols-2">
        {links.map((link) => (
          <li key={link.href}>
            <Link href={link.href} className="group block rounded-lg border border-transparent p-2 hover:border-green-200 hover:bg-white dark:hover:border-green-900 dark:hover:bg-zinc-950">
              <span className="font-medium text-green-700 group-hover:underline dark:text-green-400">{link.label}</span>
              {link.description && (
                <span className="mt-0.5 block text-xs text-zinc-500">{link.description}</span>
              )}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
