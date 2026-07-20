import type { NavLink, SocialLink } from "@/types";

export const SITE = {
  name: "E26 Media",
  legalName: "E26 Media Private Limited",
  tagline: "Premium Technology Partner",
  url: "https://www.e26media.com",
  description:
    "E26 Media is a website, software, and mobile app development company in Mangalore and Bangalore — delivering custom websites, business software, apps, AI, and digital marketing across Karnataka.",
  contact: {
    phone: "+91 8495901407 | +91 7337753124",
    phoneRaw: "+918495901407",
    whatsapp: "918495901407",
    email: "hr@e26media.com",
    address:
      "5th Floor Shalimar Complex, Near Old Ganesh Medical, Kanakanady, Mangalore - 575002",
    hours: ["Mon – Sat: 9:30 AM – 6:30 PM", "Sunday Closed"],
    placeName: "E26 Media Private Limited Head Office",
    mapUrl: "https://maps.app.goo.gl/AoVDKN8UVHAnUNf57",
    mapProfileUrl: "https://share.google/xEYX2mCtBS25HZ5UF",
    mapEmbed:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3890.624!2d74.8553947!3d12.8680171!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba35b82d745ea9b%3A0xce0e0eaaeab437f2!2sE26%20Media%20Private%20Limited%20Head%20Office!5e0!3m2!1sen!2sin!4v1735689600000!5m2!1sen!2sin",
  },
  social: [
    { name: "Instagram", href: "https://www.instagram.com/e26media" },
    { name: "Facebook", href: "https://www.facebook.com/share/1GhoNgokFj/" },
    { name: "LinkedIn", href: "https://www.linkedin.com/company/e26-media-production-private-limited/" },
    { name: "X", href: "https://x.com/e26media" },
    { name: "GitHub", href: "https://github.com/e26media" },
  ] satisfies SocialLink[],
  googleFormUrl: process.env.NEXT_PUBLIC_GOOGLE_SHEETS_URL ?? "",
} as const;

export const NAV_LINKS: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Industries", href: "/industries" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "About", href: "/about" },
  { label: "Knowledge Center", href: "/knowledge" },
  { label: "Contact", href: "/contact" },
];

export const STATS = [
  { value: "100%", label: "Client-Centric Approach" },
  { value: "24/7", label: "Technical Support" },
  { value: "3+", label: "Years of Innovation" },
];

export const TRUST_STATS = [
  { value: "12+", label: "Industries Served" },
  { value: "8+", label: "Countries Served" },
  { value: "50+", label: "Technologies" },
  { value: "98%", label: "Client Satisfaction" },
];
