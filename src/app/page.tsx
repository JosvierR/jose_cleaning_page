"use client";

import { useState, useCallback } from "react";
import { Preloader } from "@/components/preloader";
import { SiteHeader } from "@/components/site-header";
import { CinematicHero } from "@/components/cinematic-hero";
import { EditorialIntro } from "@/components/editorial-intro";
import { SignatureSystem } from "@/components/signature-system";
import { ServicesCinematic } from "@/components/services-cinematic";
import { BeforeAfterGallery } from "@/components/before-after-gallery";
import { ProcessScrollStory } from "@/components/process-scroll-story";
import { PricingEditorial } from "@/components/pricing-editorial";
import { MaterialsLab } from "@/components/materials-lab";
import { ProofOfWork } from "@/components/proof-of-work";
import { LocalPresence } from "@/components/local-presence";
import { FaqLuxury } from "@/components/faq-luxury";
import { QuoteForm } from "@/components/quote-form";
import { SiteFooter } from "@/components/site-footer";
import { MobileStickyCta } from "@/components/mobile-sticky-cta";

export default function Home() {
  const [ready, setReady] = useState(false);
  const handleReady = useCallback(() => setReady(true), []);

  return (
    <>
      <Preloader onComplete={handleReady} />
      <div
        className="transition-opacity duration-[800ms] ease-out"
        style={{
          opacity: ready ? 1 : 0,
          pointerEvents: ready ? "auto" : "none",
        }}
      >
        <SiteHeader />
        <main className="relative">
          <CinematicHero />
          <EditorialIntro />
          <SignatureSystem />
          <ServicesCinematic />
          <BeforeAfterGallery />
          <ProcessScrollStory />
          <PricingEditorial />
          <MaterialsLab />
          <ProofOfWork />
          <LocalPresence />
          <FaqLuxury />
          <QuoteForm />
        </main>
        <SiteFooter />
        <MobileStickyCta />
      </div>
    </>
  );
}
