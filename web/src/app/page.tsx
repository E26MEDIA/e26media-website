import type { Metadata } from "next";
import { HomePage } from "@/components/pages/home-page";
import { buildMetadata } from "@/lib/seo";
import { HOME_SEO } from "@/data/home-seo";

export const metadata: Metadata = buildMetadata({
  title: HOME_SEO.metaTitle,
  description: HOME_SEO.metaDescription,
  path: "/",
});

export default function Page() {
  return <HomePage />;
}
