import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { buildMetadata } from "@/lib/seo";
import { Container } from "@/components/ui/section";
import { SERVICE_CATEGORIES } from "@/data/services";
import { PageHero } from "@/components/visual/page-hero";
import { CtaBand } from "@/components/visual/cta-band";
import { ServiceIcon } from "@/components/visual/service-icon";

export const metadata = buildMetadata({
  title: "Services | Web, Software, Mobile, AI, Cloud & Marketing — E26 Media",
  description:
    "Explore E26 Media services: website development, custom software, mobile apps, AI solutions, cloud, digital marketing, branding, UI/UX, and IT consulting.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      <PageHero
        badge="Services"
        title="Technology solutions built for business growth"
        highlight="business growth"
        description="Nine practice areas. Dozens of specialized offerings. One accountable partner from discovery to launch and beyond."
      />

      <section className="bg-zinc-50 py-24 dark:bg-zinc-900/40 md:py-32">
        <Container>
          <div className="grid gap-8 md:grid-cols-2">
            {SERVICE_CATEGORIES.map((cat) => (
              <div
                key={cat.slug}
                className="group rounded-xl border border-zinc-200 bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-zinc-800 dark:bg-zinc-950"
              >
                <div className="mb-6 flex items-start justify-between">
                  <div className="icon-box">
                    <ServiceIcon name={cat.icon} className="h-6 w-6" />
                  </div>
                  <Link
                    href={`/services/${cat.slug}`}
                    className="inline-flex items-center gap-1 text-sm font-semibold text-green-600 hover:underline"
                  >
                    Overview <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
                <Link href={`/services/${cat.slug}`}>
                  <h2 className="font-heading text-2xl font-medium tracking-tight text-zinc-950 transition-colors group-hover:text-green-600 dark:text-white">
                    {cat.title}
                  </h2>
                </Link>
                <p className="mt-3 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">{cat.description}</p>
                <ul className="mt-6 grid gap-2 sm:grid-cols-2">
                  {cat.items.map((item) => (
                    <li key={item.slug}>
                      <Link
                        href={`/services/${cat.slug}/${item.slug}`}
                        className="group/link inline-flex items-center gap-1 text-sm text-zinc-600 transition-colors hover:text-green-600 dark:text-zinc-400"
                      >
                        {item.title}
                        <ArrowUpRight className="h-3 w-3 opacity-0 transition-opacity group-hover/link:opacity-100" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <CtaBand text="Not sure which service fits your goals? Book a free consultation and we'll map the right solution." />
    </>
  );
}
