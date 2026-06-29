// ============================================================
// CLIENT LOGOS — Home page marquee. Use `logo` for image path or URL.
// Add custom files under frontend/public/client-logos/
// ============================================================

const favicon = (domain) =>
  `https://www.google.com/s2/favicons?domain=${domain}&sz=128`;

export const CLIENTS = [
  {
    name: "Lamiya Alkhaleej",
    url: "https://www.lamiyaalkhaleej.com/",
    logo: favicon("lamiyaalkhaleej.com"),
  },
  {
    name: "Abrar Caterers",
    url: "https://www.abrarcaterers.com/",
    logo: favicon("abrarcaterers.com"),
  },
  {
    name: "Tawakkal Overseas",
    url: "https://www.tawakkalmuslim.com/",
    logo: favicon("tawakkalmuslim.com"),
  },
  {
    name: "Floriva Gifts",
    url: "https://florivagifts.com/",
    logo: favicon("florivagifts.com"),
  },
  {
    name: "Al Mirath",
    url: "https://www.almirath.ae/",
    logo: favicon("almirath.ae"),
  },
  {
    name: "BrightLeaf",
    url: "https://brightleaf.com/",
    logo: favicon("brightleaf.com"),
  },
  {
    name: "Tawakkal Muslim App",
    url: "https://play.google.com/store/apps/details?id=com.tawakkalmuslim&hl=en_IN",
    logo:
      "https://play-lh.googleusercontent.com/_L6Sb1W6ZD9NGNN0at3zbMVdrtV-Hiq4gbfjDLnaoM_Oz_TbZqX0Fd06UZqTmFFQrhOPcDwH8dVRtWHv_vxK",
  },
];
