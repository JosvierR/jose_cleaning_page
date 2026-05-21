"use client";

import { pricingPlans } from "@/lib/site-data";
import { RevealBlock } from "@/components/motion/reveal";
import { MagneticButton } from "@/components/motion/magnetic-button";
import { SectionLabel } from "@/components/ui/section-label";
import { EditorialHeading } from "@/components/ui/editorial-heading";
import { cn } from "@/lib/utils";

export function PricingEditorial() {
  return (
    <section id="pricing" className="section-pad bg-porcelain">
      <div className="container-maison">
        <SectionLabel>Pricing</SectionLabel>
        <EditorialHeading className="mt-8 max-w-3xl">
          Clear recurring plans.
        </EditorialHeading>
        <p className="mt-8 max-w-xl text-sm leading-[1.85] text-navy/60 md:text-base">
          Pricing is built around crew time, location size, frequency, soil level,
          and exact scope.
        </p>

        <div className="mt-20 grid gap-10 lg:mt-28 lg:grid-cols-3 lg:gap-8">
          {pricingPlans.map((plan, i) => (
            <RevealBlock
              key={plan.id}
              delay={i * 0.1}
              className={cn(
                "flex flex-col border border-mist bg-warm-white p-10 transition-shadow duration-500 md:p-12",
                "featured" in plan &&
                  plan.featured &&
                  "border-champagne/45 shadow-luxury-lg lg:-mt-4 lg:mb-4"
              )}
            >
              {"featured" in plan && plan.featured && (
                <span className="mb-6 inline-block w-fit bg-champagne/15 px-3 py-1 text-[0.58rem] uppercase tracking-[0.22em] text-navy/70">
                  Common
                </span>
              )}
              <h3 className="font-editorial text-2xl text-navy md:text-[1.75rem]">
                {plan.name}
              </h3>
              <div className="mt-10 flex items-baseline gap-3 border-b border-mist pb-10">
                <span className="font-editorial text-5xl text-navy">{plan.price}</span>
                <span className="text-[0.62rem] uppercase tracking-[0.2em] text-navy/45">
                  {plan.unit}
                </span>
              </div>
              <p className="mt-8 text-[0.62rem] uppercase tracking-[0.16em] text-navy/45">
                {plan.duration} · {plan.crew}
              </p>
              <p className="mt-4 text-sm leading-relaxed text-navy/62">{plan.bestFor}</p>
              <ul className="mt-10 flex-1 space-y-4">
                {plan.includes.map((item) => (
                  <li
                    key={item}
                    className="text-sm leading-relaxed text-navy/72 before:mr-3 before:text-champagne before:content-['—']"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </RevealBlock>
          ))}
        </div>

        <p className="mt-16 text-center text-sm text-navy/48">
          Final pricing is confirmed after walkthrough. Sales tax may apply in New York.
        </p>

        <div className="mt-12 flex justify-center">
          <MagneticButton href="#contact">Request a Walkthrough</MagneticButton>
        </div>
      </div>
    </section>
  );
}
