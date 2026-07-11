import { buildMetadata } from "@/lib/seo";
import { SITE } from "@/data/site";
import { Container } from "@/components/ui/section";
import { ContactForm } from "@/components/forms/contact-form";
import { getGoogleSheetsUrl } from "@/lib/sheets-url";
import { FaqJsonLd } from "@/components/seo/json-ld";
import { PageHero } from "@/components/visual/page-hero";
import { LongFormArticle } from "@/components/content/long-form-article";
import { HUB_PAGE_CONTENT } from "@/data/long-form/hub-pages";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import Link from "next/link";

const CONTENT = HUB_PAGE_CONTENT.contact;

export const metadata = buildMetadata({
  title: "Contact E26 Media | Free Consultation",
  description:
    "Contact E26 Media in Mangalore for website development, software, mobile apps, AI, cloud, and digital marketing. Book a free consultation.",
  path: "/contact",
});

export default function ContactPage() {
  const sheetsUrl = getGoogleSheetsUrl();
  const whatsapp = `https://wa.me/${SITE.contact.whatsapp}?text=${encodeURIComponent(
    "Hi E26 Media, I'd like a free consultation."
  )}`;

  return (
    <>
      {CONTENT.faqs && <FaqJsonLd faqs={CONTENT.faqs} />}
      <PageHero
        badge="Contact"
        title="Let's build something incredible together"
        highlight="incredible"
        description="Reach our Mangalore head office or send a project enquiry. We respond within 24 business hours."
      />

      <Container className="py-24 md:py-32">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="space-y-8 lg:col-span-5">
            {[
              { icon: Phone, label: "Phone", value: SITE.contact.phone, href: `tel:${SITE.contact.phoneRaw}` },
              { icon: Mail, label: "Email", value: SITE.contact.email, href: `mailto:${SITE.contact.email}` },
              { icon: MapPin, label: "Office", value: SITE.contact.address },
              { icon: Clock, label: "Hours", value: SITE.contact.hours.join(" · ") },
            ].map((item) => (
              <div key={item.label} className="flex gap-4 rounded-xl border border-zinc-200 bg-zinc-50 p-5 dark:border-zinc-800 dark:bg-zinc-900">
                <item.icon className="mt-0.5 h-5 w-5 text-green-600" />
                <div>
                  <p className="font-mono text-xs uppercase tracking-wider text-zinc-400">{item.label}</p>
                  {item.href ? (
                    <a href={item.href} className="font-medium hover:text-green-600">{item.value}</a>
                  ) : (
                    <p className="font-medium">{item.value}</p>
                  )}
                </div>
              </div>
            ))}

            <div className="flex flex-wrap gap-3">
              <a href={whatsapp} target="_blank" rel="noopener noreferrer" className="rounded-md bg-green-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-green-700">
                WhatsApp
              </a>
              <Link href={SITE.contact.mapUrl} target="_blank" rel="noopener noreferrer" className="rounded-md border border-zinc-200 px-6 py-3 text-sm font-semibold transition hover:-translate-y-0.5 hover:bg-zinc-50 dark:border-zinc-700">
                Google Maps
              </Link>
            </div>

            <div className="overflow-hidden rounded-xl border border-zinc-200 shadow-lg dark:border-zinc-800">
              <iframe
                title={SITE.contact.placeName}
                src={SITE.contact.mapEmbed}
                width="100%"
                height="300"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </div>

          <div className="rounded-xl border border-zinc-200 bg-white p-8 shadow-lg dark:border-zinc-800 dark:bg-zinc-950 lg:col-span-7">
            <h2 className="mb-2 font-heading text-2xl font-semibold">Request a free consultation</h2>
            <p className="mb-8 text-sm text-zinc-600 dark:text-zinc-400">Share your project details and we&apos;ll get back within 24 business hours.</p>
            <ContactForm sheetsUrl={sheetsUrl} />
          </div>
        </div>

        <div className="mt-20 border-t border-zinc-200 pt-16 dark:border-zinc-800">
          <LongFormArticle content={CONTENT} />
        </div>
      </Container>
    </>
  );
}
