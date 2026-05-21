import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { TrustBar } from "@/components/trust-bar";
import { ProblemSection } from "@/components/problem-section";
import { ServicesSection } from "@/components/services-section";
import { BeforeAfterSection } from "@/components/before-after-section";
import { ProcessSection } from "@/components/process-section";
import { PricingSection } from "@/components/pricing-section";
import { MaterialsSection } from "@/components/materials-section";
import { MetricsSection } from "@/components/metrics-section";
import { IndustriesSection } from "@/components/industries-section";
import { LocalSeoSection } from "@/components/local-seo-section";
import { OwnerConcernsSection } from "@/components/owner-concerns-section";
import { FaqSection } from "@/components/faq-section";
import { ContactForm } from "@/components/contact-form";
import { Footer } from "@/components/footer";
import { StickyMobileCta } from "@/components/sticky-cta";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TrustBar />
        <ProblemSection />
        <ServicesSection />
        <BeforeAfterSection />
        <ProcessSection />
        <PricingSection />
        <MaterialsSection />
        <MetricsSection />
        <IndustriesSection />
        <LocalSeoSection />
        <OwnerConcernsSection />
        <FaqSection />
        <ContactForm />
      </main>
      <Footer />
      <StickyMobileCta />
    </>
  );
}
