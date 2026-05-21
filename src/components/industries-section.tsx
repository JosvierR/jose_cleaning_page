"use client";

import {
  Croissant,
  Coffee,
  UtensilsCrossed,
  ShoppingBag,
  Wine,
  Sandwich,
  ChefHat,
  Building2,
  Ghost,
} from "lucide-react";
import { industries } from "@/lib/site-data";
import { SectionHeading } from "@/components/ui/section-heading";
import { LuxuryCard } from "@/components/ui/luxury-card";

const iconMap = {
  croissant: Croissant,
  coffee: Coffee,
  utensils: UtensilsCrossed,
  "shopping-bag": ShoppingBag,
  wine: Wine,
  sandwich: Sandwich,
  ghost: Ghost,
  building: Building2,
  "chef-hat": ChefHat,
} as const;

export function IndustriesSection() {
  return (
    <section className="section-padding bg-[#080808]/50">
      <div className="container-luxury">
        <SectionHeading
          eyebrow="Who we serve"
          title="Recurring cleaning for every food-service format."
        />

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-3">
          {industries.map((industry, i) => {
            const Icon = iconMap[industry.icon];
            return (
              <LuxuryCard
                key={industry.name}
                delay={i * 0.05}
                className="flex flex-col items-center text-center"
              >
                <Icon className="mb-3 h-8 w-8 text-champagne" />
                <p className="font-heading text-lg text-ivory">{industry.name}</p>
              </LuxuryCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}
