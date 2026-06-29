import React from "react";
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";
import { PageHero } from "../components/PageHero";
import { ContactForm } from "../components/ContactForm";
import { SITE } from "../data/site";
import { Seo } from "../components/Seo";
import { SEO } from "../data/site";

export function ContactPage() {
  const { contact } = SITE;
  const whatsappUrl = `https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(
    "Hi E26 Media, I'd like a free consultation about a project."
  )}`;

  const infoItems = [
    { icon: Phone, label: "Phone", value: contact.phone, href: `tel:${contact.phoneRaw}` },
    { icon: Mail, label: "Email", value: contact.email, href: `mailto:${contact.email}` },
    { icon: MapPin, label: "Office Address", value: contact.address },
    { icon: Clock, label: "Working Hours", value: contact.hours },
  ];

  return (
    <>
      <Seo {...SEO.contact} />
      <PageHero
        badge="Contact Us"
        title="Let's build something"
        highlight="incredible together"
        subtitle="Tell us about your project and our solutions team will get back to you within 24 business hours with a free, tailored consultation."
      />

      <section className="pb-16 md:pb-24 bg-white" data-testid="contact-page">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            {/* Left: info */}
            <div className="lg:col-span-5 space-y-8 text-left">
              <div className="space-y-5">
                {infoItems.map((item) => {
                  const I = item.icon;
                  const content = (
                    <div className="flex items-start gap-4">
                      <div className="w-11 h-11 rounded-lg bg-green-50 border border-green-200/50 flex items-center justify-center text-green-600 shrink-0 mt-0.5">
                        <I className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-400">
                          {item.label}
                        </h4>
                        <div className="font-heading font-medium text-zinc-900 text-base mt-0.5 space-y-0.5">
                          {Array.isArray(item.value)
                            ? item.value.map((line) => <p key={line}>{line}</p>)
                            : item.value}
                        </div>
                      </div>
                    </div>
                  );
                  return item.href ? (
                    <a
                      key={item.label}
                      href={item.href}
                      className="block hover:opacity-80 transition-opacity"
                      data-testid={`contact-info-${item.label.split(" ")[0].toLowerCase()}`}
                    >
                      {content}
                    </a>
                  ) : (
                    <div key={item.label} data-testid={`contact-info-${item.label.split(" ")[0].toLowerCase()}`}>
                      {content}
                    </div>
                  );
                })}
              </div>

              {/* WhatsApp */}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white rounded-md px-5 py-3 text-sm font-body font-semibold transition-all shadow-sm transform hover:-translate-y-0.5"
                data-testid="contact-whatsapp-button"
              >
                <MessageCircle className="w-4 h-4" />
                Chat on WhatsApp
              </a>

              {/* Map */}
              <div className="rounded-xl overflow-hidden border border-zinc-200 shadow-sm" data-testid="contact-map">
                <iframe
                  title="E26 Media Office Location"
                  src={contact.mapEmbed}
                  width="100%"
                  height="240"
                  style={{ border: 0 }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>

            {/* Right: form */}
            <div className="lg:col-span-7">
              <div className="bg-zinc-50 border border-zinc-200 rounded-2xl p-8 md:p-10">
                <h2 className="text-xl font-heading font-medium text-zinc-950 mb-6">
                  Request a free consultation
                </h2>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ContactPage;
