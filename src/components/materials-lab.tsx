"use client";

import { materials, materialsCopy } from "@/lib/site-data";
import { RevealBlock } from "@/components/motion/reveal";
import { SectionLabel } from "@/components/ui/section-label";
import { EditorialHeading } from "@/components/ui/editorial-heading";

export function MaterialsLab() {
  return (
    <section id="materials" className="section-pad bg-warm-white border-y border-mist">
      <div className="container-maison">
        <SectionLabel>Materials</SectionLabel>
        <EditorialHeading className="mt-6 max-w-4xl">
          Materials selected for food-service environments.
        </EditorialHeading>
        <p className="mt-8 max-w-2xl text-sm leading-relaxed text-navy/65 md:text-base">
          {materialsCopy}
        </p>

        <div className="mt-16 grid grid-cols-2 gap-px bg-mist md:grid-cols-4 lg:grid-cols-6">
          {materials.map((item, i) => (
            <RevealBlock
              key={item}
              delay={i * 0.03}
              y={12}
              className="flex min-h-[100px] items-end bg-porcelain p-5 transition-colors duration-500 hover:bg-ice/40"
            >
              <span className="text-xs leading-snug text-navy/75">{item}</span>
            </RevealBlock>
          ))}
        </div>
      </div>
    </section>
  );
}
