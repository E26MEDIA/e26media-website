import Link from "next/link";
import Image from "next/image";
import { buildMetadata } from "@/lib/seo";
import { Container, SectionHeading } from "@/components/ui/section";
import { Card } from "@/components/ui/card";
import { PageHero } from "@/components/visual/page-hero";
import { CtaBand } from "@/components/visual/cta-band";
import { CopyButton } from "@/components/media/copy-button";
import {
  CITATION_NAP,
  LINKABLE_ASSETS,
  DIRECTORY_TARGETS,
  EMBED_BADGE_HTML,
  EMBED_TEXT_LINK,
  PRESS_BOILERPLATE,
  SUGGESTED_ANCHOR_TEXTS,
} from "@/data/link-building";
import { SITE } from "@/data/site";
import { withLogoCache } from "@/lib/client-logo";

export const metadata = buildMetadata({
  title: "Media Kit & Link Resources — E26 Media",
  description:
    "Press kit, logo assets, citation details, and embed codes for E26 Media — Mangalore software development and digital marketing company.",
  path: "/media",
});

export default function MediaPage() {
  const napBlock = `${CITATION_NAP.name}
${CITATION_NAP.address}
${CITATION_NAP.city}, ${CITATION_NAP.state} ${CITATION_NAP.postalCode}, ${CITATION_NAP.country}
${CITATION_NAP.phone}
${CITATION_NAP.email}
${CITATION_NAP.url}`;

  return (
    <>
      <PageHero
        badge="Media & Partners"
        title="Media kit and"
        highlight="link resources"
        description="Official assets, citation details, and embed codes for journalists, partners, clients, and directories."
      />

      <Container className="space-y-20 py-16 md:py-24">
        <section className="grid gap-8 lg:grid-cols-2">
          <div className="space-y-4">
            <SectionHeading title="Company boilerplate" />
            <p className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">{PRESS_BOILERPLATE}</p>
            <CopyButton text={PRESS_BOILERPLATE} label="Copy boilerplate" />
          </div>
          <Card className="flex flex-col items-center justify-center gap-4 p-8">
            <Image src={withLogoCache("/logo.png")} alt="E26 Media logo" width={200} height={60} unoptimized />
            <div className="flex flex-wrap justify-center gap-3">
              <a href="/logo.png" download className="text-sm font-medium text-green-600 hover:underline">
                Download logo (PNG)
              </a>
              <a href="/logo-nav.png" download className="text-sm font-medium text-green-600 hover:underline">
                Download nav logo
              </a>
            </div>
          </Card>
        </section>

        <section className="space-y-6">
          <SectionHeading
            title="Citation details (NAP)"
            description="Use identical name, address, and phone on every directory and profile listing."
          />
          <pre className="overflow-x-auto rounded-xl border border-zinc-200 bg-zinc-50 p-6 text-sm text-zinc-700 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-300">
            {napBlock}
          </pre>
          <CopyButton text={napBlock} label="Copy NAP block" />
        </section>

        <section className="space-y-6">
          <SectionHeading
            title="Client website badge"
            description="E26 Media clients: add this footer link — it helps our SEO and credits your developer."
          />
          <div className="rounded-xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-950">
            <div dangerouslySetInnerHTML={{ __html: EMBED_BADGE_HTML }} />
          </div>
          <pre className="overflow-x-auto rounded-xl border border-zinc-200 bg-zinc-50 p-4 text-xs dark:border-zinc-800 dark:bg-zinc-900">
            {EMBED_BADGE_HTML}
          </pre>
          <div className="flex flex-wrap gap-3">
            <CopyButton text={EMBED_BADGE_HTML} label="Copy HTML badge" />
            <CopyButton text={EMBED_TEXT_LINK} label="Copy text link" />
          </div>
        </section>

        <section className="space-y-6">
          <SectionHeading
            title="Suggested anchor text"
            description="When linking to e26media.com, vary anchor text naturally:"
          />
          <ul className="flex flex-wrap gap-2">
            {SUGGESTED_ANCHOR_TEXTS.map((text) => (
              <li key={text} className="rounded-full border border-zinc-200 px-3 py-1 text-sm dark:border-zinc-700">
                {text}
              </li>
            ))}
          </ul>
        </section>

        <section className="space-y-6">
          <SectionHeading title="Link-worthy pages on our site" description="Share or cite these in articles and resources." />
          <div className="grid gap-4 md:grid-cols-2">
            {LINKABLE_ASSETS.map((asset) => (
              <Link key={asset.href} href={asset.href}>
                <Card className="h-full transition hover:border-green-300">
                  <h3 className="font-semibold text-green-700 dark:text-green-400">{asset.title}</h3>
                  <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">{asset.pitch}</p>
                </Card>
              </Link>
            ))}
          </div>
        </section>

        <section className="space-y-6">
          <SectionHeading
            title="Directory submission checklist"
            description={`Submit ${SITE.name} to these profiles using the NAP block above. Priority: critical → high first.`}
          />
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-zinc-200 dark:border-zinc-800">
                  <th className="py-3 pr-4 font-semibold">Platform</th>
                  <th className="py-3 pr-4 font-semibold">Priority</th>
                  <th className="py-3 pr-4 font-semibold">Type</th>
                  <th className="py-3 font-semibold">Link</th>
                </tr>
              </thead>
              <tbody>
                {DIRECTORY_TARGETS.map((d) => (
                  <tr key={d.name} className="border-b border-zinc-100 dark:border-zinc-900">
                    <td className="py-3 pr-4">{d.name}</td>
                    <td className="py-3 pr-4 capitalize">{d.priority}</td>
                    <td className="py-3 pr-4 capitalize">{d.type}</td>
                    <td className="py-3">
                      <a href={d.url} target="_blank" rel="noopener noreferrer" className="text-green-600 hover:underline">
                        Open →
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="rounded-xl border border-green-200 bg-green-50 p-6 dark:border-green-900 dark:bg-green-950/30">
          <h2 className="font-semibold text-zinc-950 dark:text-white">Press & partnership enquiries</h2>
          <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
            For interviews, guest articles, or partnership links, email{" "}
            <a href={`mailto:${SITE.contact.email}`} className="font-medium text-green-700 hover:underline dark:text-green-400">
              {SITE.contact.email}
            </a>{" "}
            with subject line &ldquo;Media enquiry&rdquo;.
          </p>
        </section>
      </Container>

      <CtaBand heading="Ready to work with E26 Media?" />
    </>
  );
}
