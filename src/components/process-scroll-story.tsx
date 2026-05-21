"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import { processSteps } from "@/lib/site-data";
import { imageSrc, images } from "@/lib/images";
import { SectionLabel } from "@/components/ui/section-label";
import { EditorialHeading } from "@/components/ui/editorial-heading";
import { RevealBlock } from "@/components/motion/reveal";
import { cn } from "@/lib/utils";

function ProcessStepBlock({
  step,
  index,
  onActive,
}: {
  step: (typeof processSteps)[number];
  index: number;
  onActive: (i: number) => void;
}) {
  const { ref, inView } = useInView({ threshold: 0.45, rootMargin: "-15% 0px" });

  useEffect(() => {
    if (inView) onActive(index);
  }, [inView, index, onActive]);

  return (
    <article
      ref={ref}
      className="min-h-[55vh] border-t border-mist py-14 first:border-t-0 md:min-h-[50vh] md:py-20"
    >
      <span className="label-maison">{step.step}</span>
      <h3 className="mt-4 font-editorial text-3xl text-navy md:text-4xl">{step.title}</h3>
      <p className="mt-5 max-w-md text-sm leading-[1.8] text-navy/65 md:text-base">
        {step.copy}
      </p>

      <div className="relative mt-10 aspect-[16/10] overflow-hidden bg-mist lg:hidden">
        <Image
          src={imageSrc(step.imageKey)}
          alt={images[step.imageKey].alt}
          fill
          className="object-cover"
          sizes="100vw"
        />
      </div>
    </article>
  );
}

export function ProcessScrollStory() {
  const [active, setActive] = useState(0);
  const current = processSteps[active];

  return (
    <section id="process" className="relative bg-warm-white">
      <div className="container-maison lg:grid lg:grid-cols-2 lg:gap-0">
        <div className="relative hidden lg:block">
          <div className="sticky top-0 h-svh overflow-hidden">
            {processSteps.map((s, i) => (
              <div
                key={s.step}
                className={cn(
                  "absolute inset-0 transition-opacity duration-[900ms] ease-out",
                  i === active ? "opacity-100" : "opacity-0"
                )}
              >
                <Image
                  src={imageSrc(s.imageKey)}
                  alt={images[s.imageKey].alt}
                  fill
                  className="object-cover"
                  sizes="50vw"
                  priority={i === 0}
                />
                <div className="absolute inset-0 bg-navy/20" aria-hidden />
              </div>
            ))}
            <div className="absolute bottom-12 left-12 z-10 flex items-end gap-4">
              <div className="flex h-28 w-px flex-col justify-end bg-mist/60">
                <div
                  className="w-full bg-champagne transition-all duration-700 ease-out"
                  style={{
                    height: `${((active + 1) / processSteps.length) * 100}%`,
                  }}
                />
              </div>
              <p className="label-maison !text-navy/40">
                {current.step} — {String(active + 1).padStart(2, "0")} /{" "}
                {String(processSteps.length).padStart(2, "0")}
              </p>
            </div>
          </div>
        </div>

        <div className="section-pad lg:min-h-svh lg:pl-16 xl:pl-24">
          <RevealBlock>
            <SectionLabel>Process</SectionLabel>
            <EditorialHeading className="mt-6 max-w-xl">
              Designed around the operator.
            </EditorialHeading>
          </RevealBlock>

          <div className="mt-12 lg:mt-20">
            {processSteps.map((step, i) => (
              <ProcessStepBlock
                key={step.step}
                step={step}
                index={i}
                onActive={setActive}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
