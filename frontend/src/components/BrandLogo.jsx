import React from "react";
import { Link } from "react-router-dom";
import { SITE } from "../data/site";
import logoFull from "../assets/logo.png";
import logoLight from "../assets/logo-light.png";

const VARIANTS = {
  nav: {
    src: logoFull,
    className: "h-9 sm:h-10 md:h-11 w-auto max-w-[200px] sm:max-w-[240px]",
  },
  full: {
    src: logoFull,
    className: "h-11 sm:h-12 w-auto max-w-[260px]",
  },
  light: {
    src: logoLight,
    className: "h-11 sm:h-12 w-auto max-w-[260px]",
  },
};

export function BrandLogo({ className = "", variant = "nav", imageClassName }) {
  const config = VARIANTS[variant] || VARIANTS.nav;

  return (
    <Link
      to="/"
      className={`inline-flex items-center shrink-0 group ${className}`}
      data-testid="navigation-logo"
    >
      <img
        src={config.src}
        alt={`${SITE.name} logo`}
        className={imageClassName || `${config.className} object-contain object-left`}
        decoding="async"
      />
    </Link>
  );
}
