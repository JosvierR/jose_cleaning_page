"use client";

import { maisonStandard } from "@/lib/site-data";
import { RevealBlock } from "@/components/motion/reveal";
import { SectionLabel } from "@/components/ui/section-label";
import { EditorialHeading } from "@/components/ui/editorial-heading";

export function SignatureSystem() {
  return (
    <section id="standard" className="section-pad bg-warm-white">
      <div className="container-maison">
        <SectionLabel>The Maison Standard</SectionLabel>
        <EditorialHeading className="mt-8 max-w-3xl">
          The Maison Standard
        </EditorialHeading>
        <p className="mt-8 max-w-xl text-sm leading-[1.85] text-navy/60 md:text-base">
          A cleaner standard for restaurant operators — scope, service, materials,
          and proof in one recurring system.
        </p>

        <div className="mt-20 grid gap-px bg-mist md:mt-28 md:grid-cols-2 lg:grid-cols-4">
          {maisonStandard.map((item, i) => (
            <RevealBlock
              key={item.id}
              delay={i * 0.07}
              className="group min-h-[280px] bg-porcelain p-10 transition-colors duration-500 hover:bg-ice/25 md:p-12"
            >
              <span className="font-editorial text-5xl text-champagne/70">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-8 font-editorial text-2xl text-navy">{item.title}</h3>
              <p className="mt-5 text-sm leading-[1.85] text-navy/62">{item.copy}</p>
              <div className="mt-10 h-px w-10 bg-champagne/50 transition-all duration-500 group-hover:w-20" />
            </RevealBlock>
          ))}
        </div>
      </div>
    </section>
  );
}
