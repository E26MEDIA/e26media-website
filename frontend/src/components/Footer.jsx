import React from "react";
import { Link } from "react-router-dom";
import { Icon } from "./Icon";
import { SITE, NAV_LINKS } from "../data/site";
import { SERVICES } from "../data/services";
import { BrandLogo } from "./BrandLogo";

export function Footer() {
  return (
    <footer
      className="bg-zinc-950 text-zinc-400 py-24 border-t border-zinc-900"
      data-testid="footer-container"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8 text-left">
          {/* Company */}
          <div className="lg:col-span-2 space-y-6">
            <BrandLogo variant="light" className="w-fit" />
            <p className="text-base md:text-lg text-zinc-400 font-body leading-relaxed max-w-md">
              {SITE.description}
            </p>
            <div className="flex items-center gap-4 text-zinc-500">
              {SITE.social.map((s) => (
                <a
                  key={s.name}
                  href={s.url}
                  target={s.url.startsWith("http") ? "_blank" : undefined}
                  rel={s.url.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="hover:text-green-500 transition-colors"
                  aria-label={s.name}
                >
                  <Icon name={s.icon} className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-500 font-bold">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-sm font-body">
              {NAV_LINKS.map((l) => (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    className="hover:text-white transition-colors text-zinc-400"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-500 font-bold">
              Services
            </h4>
            <ul className="space-y-2.5 text-sm font-body">
              {SERVICES.map((s) => (
                <li key={s.slug}>
                  <Link
                    to={`/services/${s.slug}`}
                    className="hover:text-white transition-colors text-zinc-400"
                  >
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-500 font-bold">
              Contact
            </h4>
            <ul className="space-y-2.5 text-sm font-body">
              <li className="text-zinc-400 text-xs">Email: {SITE.contact.email}</li>
              <li className="text-zinc-400 text-xs">Phone: {SITE.contact.phone}</li>
              <li className="text-zinc-400 text-xs leading-relaxed">
                {SITE.contact.address}
              </li>
              <li className="text-zinc-400 text-xs leading-relaxed">
                {SITE.contact.hours.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-zinc-900 pt-8 mt-16 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-zinc-600">
          <p>© {new Date().getFullYear()} {SITE.name} Inc. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-zinc-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-zinc-400 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
