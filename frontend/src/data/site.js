// ============================================================
// GLOBAL SITE CONFIG — Edit company-wide info here.
// ============================================================
export const SITE = {
  name: "E26 Media",
  // Logo: text wordmark by default. To use an image logo later, set logo to a
  // URL/path (e.g. "/logo.svg") and the Navigation/Footer will render it.
  logo: "/logo.png",
  logoNav: "/logo-nav.png",
  tagline: "Innovative Digital Solutions",
  url: "https://www.e26media.com",
  description:
    "We engineer world-class enterprise software, build responsive digital experiences, and run high-performance, results-focused marketing campaigns.",
  contact: {
    phone: "+91 8495901407 | +91 7337753124",
    phoneRaw: "+918495901407",
    whatsapp: "918495901407", // digits only, country code first
    email: "hr@e26media.com",
    address:
      "5th Floor Shalimar Complex, Near Old Ganesh Medical, Kanakanady, Mangalore - 575002",
    hours: "Monday – Friday, 9:00 AM – 6:00 PM IST",
    mapEmbed:
      "https://www.google.com/maps?q=Shalimar+Complex+Kanakanady+Mangalore+575002&output=embed",
  },
  // ── Social links — replace each url with your profile link ──────────────
  // Format:
  //   { name: "Instagram", icon: "Instagram", url: "https://instagram.com/YOUR_HANDLE" },
  //   { name: "Facebook",  icon: "Facebook",  url: "https://facebook.com/YOUR_PAGE" },
  //   { name: "LinkedIn",  icon: "Linkedin",  url: "https://linkedin.com/company/YOUR_COMPANY" },
  //   { name: "Pinterest", icon: "Pinterest", url: "https://pinterest.com/YOUR_HANDLE" },
  //   { name: "Twitter",   icon: "Twitter",   url: "https://twitter.com/YOUR_HANDLE" },
  social: [
    { name: "Instagram", icon: "Instagram", url: "https://www.instagram.com/e26media?igsh=MXU2bHlwbzlleGpjMg==" },
    { name: "Facebook", icon: "Facebook", url: "https://www.facebook.com/share/1GhoNgokFj/?mibextid=wwXIfr" },
    { name: "LinkedIn", icon: "Linkedin", url: "https://www.linkedin.com/company/e26-media-production-private-limited/" },
    { name: "Pinterest", icon: "Pinterest", url: "https://pin.it/1sJCQbCio" },
  ],
};

// Main navigation links (used by Navigation + Footer)
export const NAV_LINKS = [
  { label: "Home", to: "/" },
  { label: "Services", to: "/services" },
  { label: "Portfolio", to: "/portfolio" },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" },
];

// ============================================================
// SEO — Per-page meta titles & descriptions. Easy to edit later.
// Used by the <Seo /> component on each page. Open Graph image
// can be swapped once a branded asset is uploaded.
// ============================================================
export const SEO = {
  default: {
    title: "E26 Media | Software, Web, Mobile App Development & Digital Marketing",
    description:
      "E26 Media is a software & digital solutions company building high-performance websites, custom software, mobile apps, and results-driven marketing for businesses.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
    keywords:
      "software development, web development, mobile app development, digital marketing, ERP, CRM, SEO, E26 Media",
  },
  home: {
    title: "E26 Media | Innovative Digital Solutions for Modern Business",
    description:
      "Transforming businesses through innovative digital solutions — high-performance websites, custom software, mobile apps, and data-driven digital marketing.",
    path: "/",
  },
  services: {
    title: "Services | Web, Software, Mobile & Digital Marketing — E26 Media",
    description:
      "Explore E26 Media's services: Web Design & Development, Software Development, Mobile App Development, and Digital Marketing — built to scale your business.",
    path: "/services",
  },
  portfolio: {
    title: "Portfolio | Real Client Work & Case Studies — E26 Media",
    description:
      "Browse E26 Media's portfolio of enterprise websites, custom software, mobile apps, and marketing campaigns. Filter by capability to see relevant work.",
    path: "/portfolio",
  },
  about: {
    title: "About Us | A Trusted Technology Partner — E26 Media",
    description:
      "E26 Media partners with ambitious businesses to design, build, and grow world-class digital products. Learn about our mission, values, and proven process.",
    path: "/about",
  },
  contact: {
    title: "Contact Us | Get a Free Consultation — E26 Media",
    description:
      "Get in touch with E26 Media for a free consultation. Tell us about your project and our solutions team will respond within 24 business hours.",
    path: "/contact",
  },
};
