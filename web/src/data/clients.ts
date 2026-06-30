import type { Client } from "@/types";

const favicon = (domain: string) =>
  `https://www.google.com/s2/favicons?domain=${domain}&sz=128`;

export const CLIENTS: Client[] = [
  { name: "Lamiya Alkhaleej", url: "https://www.lamiyaalkhaleej.com/", logo: favicon("lamiyaalkhaleej.com") },
  { name: "Abrar Caterers", url: "https://www.abrarcaterers.com/", logo: "/client-logos/abrar-caterers.png" },
  { name: "Tawakkal Overseas", url: "https://www.tawakkalmuslim.com/", logo: "/client-logos/tawakkal-overseas.png" },
  { name: "Floriva Gifts", url: "https://florivagifts.com/", logo: favicon("florivagifts.com") },
  { name: "Al Mirath", url: "https://www.almirath.ae/", logo: favicon("almirath.ae") },
  { name: "BrightLeaf", url: "https://brightleaf.com/", logo: favicon("brightleaf.com") },
  {
    name: "Tawakkal Muslim App",
    url: "https://play.google.com/store/apps/details?id=com.tawakkalmuslim",
    logo: "https://play-lh.googleusercontent.com/_L6Sb1W6ZD9NGNN0at3zbMVdrtV-Hiq4gbfjDLnaoM_Oz_TbZqX0Fd06UZqTmFFQrhOPcDwH8dVRtWHv_vxK",
  },
  { name: "CleanPro", url: "https://cleanpro-seven.vercel.app", logo: "/client-logos/cleanpro.png" },
  { name: "Alfiya", logo: "/client-logos/alfiya.png" },
  { name: "Layan Products", logo: "/client-logos/layan-products.png" },
  { name: "MMART Supermarket", logo: "/client-logos/retail-client.png" },
  { name: "E26 Media", url: "https://www.e26media.com", logo: "/logo.png" },
];

export function getClientLogo(name: string): string {
  const client = CLIENTS.find((c) => c.name === name);
  if (client) return client.logo;
  return "/logo.png";
}
