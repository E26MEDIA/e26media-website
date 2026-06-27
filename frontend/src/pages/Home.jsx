import React from "react";
import { Seo } from "../components/Seo";
import { SEO } from "../data/site";
import { Hero } from "../components/Hero";
import { ServicesPreview } from "../components/ServicesPreview";
import { FeaturedPortfolio } from "../components/FeaturedPortfolio";
import { ClientLogos } from "../components/ClientLogos";
import { Technologies } from "../components/Technologies";
import { Testimonials } from "../components/Testimonials";
import { AboutPreview } from "../components/AboutPreview";
import { CTASection } from "../components/CTASection";

export function Home() {
  return (
    <>
      <Seo {...SEO.home} />
      <Hero />
      <ClientLogos />
      <ServicesPreview />
      <FeaturedPortfolio />
      <Technologies />
      <AboutPreview />
      <Testimonials />
      <CTASection />
    </>
  );
}

export default Home;
