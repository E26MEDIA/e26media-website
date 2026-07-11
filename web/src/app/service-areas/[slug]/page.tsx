import Link from "next/link";
import { notFound } from "next/navigation";
import { buildMetadata } from "@/lib/seo";
import { Container, SectionHeading } from "@/components/ui/section";
import { Card } from "@/components/ui/card";
import { buttonVariants } from "@/components/ui/button";
import { ContactForm } from "@/components/forms/contact-form";
import { getGoogleSheetsUrl } from "@/lib/sheets-url";
import { FaqJsonLd, BreadcrumbJsonLd } from "@/components/seo/json-ld";
import { SeoInternalLinks } from "@/components/seo/seo-internal-links";
import { getLocationSeoLinks } from "@/lib/internal-links";
import { LOCATIONS, getLocation } from "@/data/locations";
import { SITE } from "@/data/site";
import { TESTIMONIALS } from "@/data/testimonials";
import { CheckCircle2, MapPin, Phone } from "lucide-react";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return LOCATIONS.map((l) => ({ slug: l.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const location = getLocation(slug);
  if (!location) return {};
  return buildMetadata({
    title: location.metaTitle,
    description: location.metaDescription,
    path: `/service-areas/${slug}`,
  });
}

export default async function LocationPage({ params }: Props) {
  const { slug } = await params;
  const location = getLocation(slug);
  if (!location) notFound();
  const sheetsUrl = getGoogleSheetsUrl();

  const localTestimonials = TESTIMONIALS.slice(0, 3);

  return (
    <>
      <FaqJsonLd faqs={location.faqs} />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "Service Areas", path: "/service-areas" },
          { name: location.title, path: `/service-areas/${slug}` },
        ]}
      />

      <section className="border-b border-zinc-200 dark:border-zinc-800">
        <Container className="py-16 md:py-24">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-green-600">
            {location.city} · Karnataka
          </p>
          <h1 className="mt-4 max-w-4xl text-4xl font-semibold tracking-tight text-zinc-950 dark:text-white md:text-5xl">
            {location.title}
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
            {location.intro}
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/contact" className={buttonVariants({ size: "lg" })}>
              Book Free Consultation
            </Link>
            <a href={`tel:${SITE.contact.phoneRaw}`} className={buttonVariants({ variant: "outline", size: "lg" })}>
              <Phone className="h-4 w-4" /> Call Now
            </a>
          </div>
        </Container>
      </section>

      <Container className="space-y-16 py-16 md:py-20">
        {location.sections.map((section) => (
          <article key={section.heading} className="max-w-3xl">
            <h2 className="text-2xl font-semibold text-zinc-950 dark:text-white">{section.heading}</h2>
            <div className="mt-4 space-y-4 text-base leading-relaxed text-zinc-600 dark:text-zinc-400 whitespace-pre-line">
              {section.body}
            </div>
          </article>
        ))}

        <div className="grid gap-6 lg:grid-cols-2">
          <Card>
            <h2 className="text-lg font-semibold">Why choose E26 Media</h2>
            <ul className="mt-4 space-y-3">
              {location.whyChoose.map((item) => (
                <li key={item} className="flex gap-2 text-sm text-zinc-600 dark:text-zinc-400">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-green-600" />
                  {item}
                </li>
              ))}
            </ul>
          </Card>
          <Card>
            <h2 className="text-lg font-semibold">Related links</h2>
            <ul className="mt-4 space-y-2">
              {location.relatedServices.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm font-semibold text-green-600 hover:underline">
                    {link.label} →
                  </Link>
                </li>
              ))}
            </ul>
          </Card>
        </div>

        <div className="space-y-8">
          <SectionHeading eyebrow="Testimonials" title={`Trusted by businesses in ${location.city} and beyond`} />
          <div className="grid gap-6 md:grid-cols-3">
            {localTestimonials.map((t) => (
              <Card key={t.id}>
                <p className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">&ldquo;{t.text}&rdquo;</p>
                <p className="mt-4 text-sm font-semibold">{t.name}</p>
                <p className="text-xs text-zinc-500">{t.company}</p>
              </Card>
            ))}
          </div>
        </div>

        <div className="space-y-8">
          <SectionHeading eyebrow="FAQ" title={`${location.serviceSlug.replace(/-/g, " ")} in ${location.city}`} />
          <div className="grid gap-4 md:grid-cols-2">
            {location.faqs.map((f) => (
              <Card key={f.question}>
                <h3 className="font-semibold">{f.question}</h3>
                <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">{f.answer}</p>
              </Card>
            ))}
          </div>
        </div>

        <SeoInternalLinks
          title="More resources"
          links={getLocationSeoLinks(location.serviceSlug, location.city)}
        />

        <div className="space-y-6">
          <SectionHeading eyebrow="Visit us" title="E26 Media Head Office" />
          <Card className="overflow-hidden p-0">
            <div className="grid lg:grid-cols-2">
              <div className="p-6 space-y-4">
                <p className="flex items-start gap-2 text-sm text-zinc-600 dark:text-zinc-400">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-green-600" />
                  {SITE.contact.address}
                </p>
                <p className="text-sm text-zinc-600 dark:text-zinc-400">{SITE.contact.phone}</p>
                <p className="text-sm text-zinc-600 dark:text-zinc-400">{SITE.contact.email}</p>
                <Link
                  href={SITE.contact.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-sm font-semibold text-green-600 hover:underline"
                >
                  Open in Google Maps →
                </Link>
              </div>
              <iframe
                title="E26 Media office location"
                src={SITE.contact.mapEmbed}
                className="min-h-[280px] w-full border-0 lg:min-h-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Card>
        </div>

        <div className="grid gap-12 lg:grid-cols-2 lg:items-start border-t border-zinc-200 pt-16 dark:border-zinc-800">
          <SectionHeading
            eyebrow="Get started"
            title={`Start your ${location.city} project today`}
            description="Tell us about your goals. We respond within 24 business hours."
          />
          <Card>
            <ContactForm sheetsUrl={sheetsUrl} />
          </Card>
        </div>
      </Container>
    </>
  );
}
