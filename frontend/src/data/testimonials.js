// ============================================================
// TESTIMONIALS — Client reviews. Reused on Home and About.
// ============================================================

const favicon = (domain) =>
  `https://www.google.com/s2/favicons?domain=${domain}&sz=128`;

export const TESTIMONIALS = [
  {
    id: "rev-lamiya",
    name: "Mohammed Nouman",
    role: "Managing Director",
    company: "Lamiya Alkhaleej",
    logo: favicon("lamiyaalkhaleej.com"),
    service: "Web Development",
    stars: 5,
    text:
      "E26 Media built our website from the ground up. It looks professional on every device, loads quickly, and reflects our brand the way we wanted. They understood our requirements and delivered on time.",
  },
  {
    id: "rev-abrar",
    name: "Ashfaq & Munaf",
    role: "Founder",
    company: "Abrar Caterers",
    logo: favicon("abrarcaterers.com"),
    service: "Web & Marketing",
    stars: 5,
    text:
      "Our new website and marketing setup brought in more catering inquiries within weeks. E26 handled design, SEO, and ongoing updates — a reliable partner for our growing business.",
  },
  {
    id: "rev-tawakkal-web",
    name: "Abdul Rahman",
    role: "Director",
    company: "Tawakkal Overseas",
    logo: "/client-logos/tawakkal-overseas.png",
    service: "Web Development",
    stars: 5,
    text:
      "They delivered a clean, trustworthy website for our overseas services. The layout is easy to navigate and our customers can find what they need without confusion. Solid work from start to finish.",
  },
  {
    id: "rev-floriva",
    name: "Elyes",
    role: "Founder",
    company: "Floriva Gifts",
    logo: favicon("florivagifts.com"),
    service: "Ecommerce",
    stars: 5,
    text:
      "Our Australia ecommerce store went live smoothly with secure checkout and a polished shopping experience. E26 understood our gift business and built a platform we can scale as we grow.",
  },
  {
    id: "rev-almirath",
    name: "Sadik",
    role: "Marketing Lead",
    company: "Al Mirath",
    logo: favicon("almirath.ae"),
    service: "Digital Marketing",
    stars: 5,
    text:
      "E26 helped us strengthen our online presence in the UAE with focused SEO and paid campaigns. We saw more qualified leads and clearer reporting on what was actually working.",
  },
  {
    id: "rev-tawakkal-app",
    name: "Abdul Rahman",
    role: "Product Owner",
    company: "Tawakkal Muslim App",
    logo:
      "https://play-lh.googleusercontent.com/_L6Sb1W6ZD9NGNN0at3zbMVdrtV-Hiq4gbfjDLnaoM_Oz_TbZqX0Fd06UZqTmFFQrhOPcDwH8dVRtWHv_vxK",
    service: "Mobile App",
    stars: 5,
    text:
      "The Tawakkal Muslim app is live on Google Play and performing well for our users. E26 handled development, testing, and launch support — responsive whenever we needed changes.",
  },
];
