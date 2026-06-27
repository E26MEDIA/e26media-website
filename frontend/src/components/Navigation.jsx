import React, { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X, ArrowRight, ChevronDown } from "lucide-react";
import { NAV_LINKS } from "../data/site";
import { SERVICES } from "../data/services";
import { Icon } from "./Icon";
import { BrandLogo } from "./BrandLogo";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setServicesOpen(false);
  }, [location.pathname]);

  const linkBase =
    "text-sm font-body font-medium transition-colors";
  const linkClass = ({ isActive }) =>
    `${linkBase} ${isActive ? "text-green-600" : "text-zinc-600 hover:text-zinc-950"}`;

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "backdrop-blur-xl bg-white/80 border-b border-zinc-200/50 py-4 shadow-sm"
          : "bg-white/60 backdrop-blur-sm py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        <BrandLogo variant="nav" />

        {/* Desktop Links */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) =>
            link.label === "Services" ? (
              <div
                key={link.to}
                className="relative"
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                <NavLink
                  to={link.to}
                  className={({ isActive }) =>
                    `${linkClass({ isActive })} flex items-center gap-1`
                  }
                  data-testid="navigation-services-link"
                >
                  Services
                  <ChevronDown className="w-3.5 h-3.5" />
                </NavLink>
                {servicesOpen && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 pt-3 w-72">
                    <div className="bg-white border border-zinc-200 rounded-xl shadow-xl p-2 animate-fadeIn">
                      {SERVICES.map((s) => (
                        <Link
                          key={s.slug}
                          to={`/services/${s.slug}`}
                          className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-zinc-50 transition-colors group"
                          data-testid={`navigation-services-dropdown-${s.slug}`}
                        >
                          <span className="w-8 h-8 rounded-md bg-green-50 border border-green-200/50 flex items-center justify-center text-green-600 group-hover:bg-green-600 group-hover:text-white transition-colors">
                            <Icon name={s.icon} className="w-4 h-4" />
                          </span>
                          <span className="text-sm font-body font-medium text-zinc-800 group-hover:text-green-600 transition-colors">
                            {s.title}
                          </span>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === "/"}
                className={linkClass}
                data-testid={`navigation-${link.label.toLowerCase()}-link`}
              >
                {link.label}
              </NavLink>
            )
          )}
        </nav>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-4">
          <Link
            to="/contact"
            className="bg-zinc-950 hover:bg-zinc-800 text-white rounded-md px-5 py-2 text-sm font-body font-medium transition-all shadow-sm flex items-center gap-1.5"
            data-testid="navigation-cta-button"
          >
            Get Free Consultation
            <ArrowRight className="w-4 h-4 text-green-400" />
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-zinc-800 focus:outline-none p-1.5 hover:bg-zinc-100 rounded-md transition-colors"
          data-testid="navigation-mobile-toggle"
          aria-label="Toggle Menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-zinc-200/50 fixed top-[68px] left-0 w-full z-40 py-6 px-6 flex flex-col gap-1 shadow-lg animate-fadeIn max-h-[calc(100vh-68px)] overflow-y-auto">
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === "/"}
              className={({ isActive }) =>
                `text-left text-base font-body font-medium py-2.5 ${
                  isActive ? "text-green-600" : "text-zinc-700 hover:text-zinc-950"
                }`
              }
              data-testid={`navigation-mobile-${link.label.toLowerCase()}-link`}
            >
              {link.label}
            </NavLink>
          ))}
          <div className="pl-3 border-l border-zinc-200 ml-1 my-1 space-y-1">
            {SERVICES.map((s) => (
              <Link
                key={s.slug}
                to={`/services/${s.slug}`}
                className="block text-sm font-body text-zinc-500 hover:text-green-600 py-1.5"
                data-testid={`navigation-mobile-service-${s.slug}`}
              >
                {s.title}
              </Link>
            ))}
          </div>
          <Link
            to="/contact"
            className="bg-green-600 hover:bg-green-700 text-white rounded-md py-3 text-center text-sm font-body font-semibold transition-all shadow-sm flex items-center justify-center gap-2 mt-3 w-full"
            data-testid="navigation-mobile-cta-button"
          >
            Get Free Consultation
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      )}
    </header>
  );
}
