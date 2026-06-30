import type { Metadata } from "next";
import { Outfit, Manrope, JetBrains_Mono } from "next/font/google";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { StickyActions } from "@/components/layout/sticky-actions";
import { Providers } from "@/components/providers";
import { ScrollProgress } from "@/components/visual/scroll-progress";
import { OrganizationJsonLd, LocalBusinessJsonLd } from "@/components/seo/json-ld";
import { buildMetadata } from "@/lib/seo";
import { SITE } from "@/data/site";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500"],
});

export const metadata: Metadata = buildMetadata({
  title: `${SITE.name} | Premium Software, Web, Mobile, AI & Digital Marketing`,
  description: SITE.description,
  path: "/",
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning className={`${outfit.variable} ${manrope.variable} ${jetbrains.variable} h-full`}>
      <body className="min-h-full flex flex-col bg-background text-foreground antialiased">
        <Providers>
          <ScrollProgress />
          <OrganizationJsonLd />
          <LocalBusinessJsonLd />
          <SiteHeader />
          <main className="flex-1">{children}</main>
          <SiteFooter />
          <StickyActions />
        </Providers>
      </body>
    </html>
  );
}
