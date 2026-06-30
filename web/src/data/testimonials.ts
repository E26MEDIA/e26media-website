import type { Testimonial } from "@/types";

const favicon = (domain: string) =>
  `https://www.google.com/s2/favicons?domain=${domain}&sz=128`;

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "lamiya",
    name: "Mohammed Nouman",
    role: "Managing Director",
    company: "Lamiya Alkhaleej",
    service: "Web Development",
    logo: favicon("lamiyaalkhaleej.com"),
    text: "E26 Media built our website from the ground up. It looks professional on every device, loads quickly, and reflects our brand the way we wanted.",
  },
  {
    id: "abrar",
    name: "Ashfaq & Munaf",
    role: "Founder",
    company: "Abrar Caterers",
    service: "Web & Marketing",
    logo: "/client-logos/abrar-caterers.png",
    text: "Our new website and marketing setup brought in more catering inquiries within weeks. E26 handled design, SEO, and ongoing updates reliably.",
  },
  {
    id: "tawakkal",
    name: "Abdul Rahman",
    role: "Director",
    company: "Tawakkal Overseas",
    service: "Web Development",
    logo: "/client-logos/tawakkal-overseas.png",
    text: "They delivered a clean, trustworthy website for our overseas services. Solid work from start to finish.",
  },
  {
    id: "floriva",
    name: "Elyes",
    role: "Founder",
    company: "Floriva Gifts",
    service: "Ecommerce",
    logo: favicon("florivagifts.com"),
    text: "Our Australia ecommerce store went live smoothly with secure checkout and a polished shopping experience.",
  },
  {
    id: "almirath",
    name: "Sadik",
    role: "Marketing Lead",
    company: "Al Mirath",
    service: "Digital Marketing",
    logo: favicon("almirath.ae"),
    text: "E26 helped us strengthen our online presence in the UAE with focused SEO and paid campaigns.",
  },
  {
    id: "app",
    name: "Abdul Rahman",
    role: "Product Owner",
    company: "Tawakkal Muslim App",
    service: "Mobile App",
    logo: "https://play-lh.googleusercontent.com/_L6Sb1W6ZD9NGNN0at3zbMVdrtV-Hiq4gbfjDLnaoM_Oz_TbZqX0Fd06UZqTmFFQrhOPcDwH8dVRtWHv_vxK",
    text: "The Tawakkal Muslim app is live on Google Play and performing well. E26 handled development, testing, and launch support.",
  },
];
