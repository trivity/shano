import React from "react";
import SEO from "@/components/SEO";
import { HomeHero } from "@/components/sections/home/HomeHero";
import { TrustBar } from "@/components/sections/home/TrustBar";
import { SkipSizesTeaser } from "@/components/sections/home/SkipSizesTeaser";
import { PhotoStrip } from "@/components/sections/home/PhotoStrip";
import { ServicesSection } from "@/components/sections/home/ServicesSection";
import { HomeBottomCTA } from "@/components/sections/home/HomeBottomCTA";

export default function HomePage() {
  return (
    <div data-testid="home-page">
      <SEO
        description="Shano's Skips - Locally owned skip bin hire in Port Augusta, SA. 2m³ to 6m³ bins with walk-in doors. Reliable, affordable, eco-friendly waste management. Open 7 days."
        path="/"
      />
      <HomeHero />
      <TrustBar />
      <SkipSizesTeaser />
      <PhotoStrip />
      <ServicesSection />
      <HomeBottomCTA />
    </div>
  );
}
