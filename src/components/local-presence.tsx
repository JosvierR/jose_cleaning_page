"use client";

import { RevealBlock } from "@/components/motion/reveal";
import { SectionLabel } from "@/components/ui/section-label";
import { EditorialHeading } from "@/components/ui/editorial-heading";
import { ParallaxImage } from "@/components/motion/parallax-image";
import { imageSrc } from "@/lib/images";

export function LocalPresence() {
  return (
    <section className="relative min-h-[60vh] overflow-hidden">
      <ParallaxImage
        src={imageSrc("dining")}
        alt="NYC restaurant interior"
        className="absolute inset-0 min-h-[60vh]"
        overlay="dark"
        sizes="100vw"
      />
      <div className="container-maison relative z-10 section-pad flex min-h-[60vh] flex-col justify-center">
        <SectionLabel light>Bronx / NYC</SectionLabel>
        <EditorialHeading light className="mt-6 max-w-3xl">
          Bronx-based. NYC-ready.
        </EditorialHeading>
        <RevealBlock className="mt-8 max-w-xl">
          <p className="text-sm leading-relaxed text-porcelain/75 md:text-base">
            Built for operators across the Bronx and nearby NYC routes — from
            bakeries and cafés on Jerome Avenue and Tremont to bistros, bars,
            delis, and commercial kitchens with Broadway and Manhattan access
            when scheduling allows.
          </p>
        </RevealBlock>
      </div>
    </section>
  );
}
