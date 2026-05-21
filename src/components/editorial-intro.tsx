"use client";

import { editorialStatements } from "@/lib/site-data";
import { SplitText } from "@/components/motion/split-text";
import { RevealBlock } from "@/components/motion/reveal";
import { SectionLabel } from "@/components/ui/section-label";
import { EditorialHeading } from "@/components/ui/editorial-heading";
import { LuxuryDivider } from "@/components/ui/luxury-divider";
import { cn } from "@/lib/utils";

/** Centered staircase: each line steps down-right */
const stairAlign = [
  "self-start md:ml-[8%]",
  "self-center",
  "self-end md:mr-[8%]",
] as const;

export function EditorialIntro() {
  return (
    <section className="section-pad relative overflow-hidden bg-porcelain-gradient">
      <div className="noise-texture absolute inset-0" aria-hidden />
      <div className="container-maison relative">
        <div className="mx-auto max-w-4xl text-center">
          <SectionLabel>Maison Clean NYC</SectionLabel>
          <EditorialHeading className="mx-auto mt-8 max-w-3xl">
            Restaurant cleaning is not janitorial work.
          </EditorialHeading>

          <RevealBlock className="mx-auto mt-12 max-w-2xl">
            <p className="text-base leading-[1.85] text-navy/68 md:text-lg">
              Grease, flour, moisture, foot traffic, odors, and closing-shift pressure
              create a different standard. Maison Clean NYC is built for food-service
              spaces that need consistency without disruption.
            </p>
          </RevealBlock>
        </div>

        <LuxuryDivider className="mx-auto my-16 md:my-24" />

        <div className="mx-auto flex w-full max-w-5xl flex-col items-center">
          {editorialStatements.map((line, i) => (
            <div
              key={line}
              className={cn(
                "w-full max-w-3xl border-t border-mist/80 py-10 md:py-14",
                stairAlign[i]
              )}
            >
              <SplitText
                as="p"
                delay={i * 0.12}
                className="font-editorial text-center text-[2.25rem] leading-[1.08] text-navy sm:text-5xl lg:text-[3.5rem]"
              >
                {line}
              </SplitText>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
