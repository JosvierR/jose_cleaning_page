"use client";

import { Check } from "lucide-react";
import { pricingPlans } from "@/lib/site-data";
import { SectionHeading } from "@/components/ui/section-heading";
import { LuxuryCard } from "@/components/ui/luxury-card";
import { cn } from "@/lib/utils";

export function PricingSection() {
  return (
    <section id="pricing" className="section-padding">
      <div className="container-luxury">
        <SectionHeading
          eyebrow="Investment"
          title="Clear recurring pricing for Bronx restaurants."
          description="Starting rates for recurring plans. Final pricing is confirmed after your walkthrough based on size, soil level, and scope."
        />

        <div className="grid gap-6 lg:grid-cols-3">
          {pricingPlans.map((plan, i) => (
            <LuxuryCard
              key={plan.id}
              delay={i * 0.1}
              className={cn(
                "relative flex flex-col",
                plan.highlighted &&
                  "border-champagne/40 ring-1 ring-champagne/20"
              )}
            >
              {plan.highlighted && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-champagne px-3 py-0.5 text-xs font-semibold text-[#050505]">
                  Most Popular
                </span>
              )}
              <h3 className="font-heading text-2xl text-ivory">{plan.name}</h3>
              <div className="mt-4 flex items-baseline gap-1">
                <span className="text-sm text-muted-text">Starting at</span>
              </div>
              <div className="mt-1 flex items-baseline gap-2">
                <span className="font-heading text-4xl text-gradient-gold">
                  {plan.price}
                </span>
                <span className="text-sm text-muted-text">{plan.priceNote}</span>
              </div>
              <p className="mt-4 text-sm text-muted-text">{plan.description}</p>
              <ul className="mt-6 flex-1 space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-sm">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-champagne" />
                    <span className="text-ivory/90">{feature}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className={cn(
                  "mt-8 w-full text-center",
                  plan.highlighted ? "btn-primary-luxury" : "btn-secondary-luxury"
                )}
              >
                Request a Walkthrough
              </a>
            </LuxuryCard>
          ))}
        </div>

        <p className="mt-8 text-center text-sm text-muted-text">
          Final price depends on size, soil level, access, frequency, and exact
          scope. Sales tax may apply in New York.
        </p>
      </div>
    </section>
  );
}
