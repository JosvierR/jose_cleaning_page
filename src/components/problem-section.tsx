"use client";

import { Flame, Sparkles, Droplets, Clock } from "lucide-react";
import { problems } from "@/lib/site-data";
import { SectionHeading } from "@/components/ui/section-heading";
import { LuxuryCard } from "@/components/ui/luxury-card";

const icons = {
  flame: Flame,
  sparkles: Sparkles,
  droplets: Droplets,
  clock: Clock,
} as const;

export function ProblemSection() {
  return (
    <section id="problem" className="section-padding">
      <div className="container-luxury">
        <SectionHeading
          eyebrow="The reality"
          title="Restaurant cleaning is not normal janitorial work."
          description="Grease accumulates faster. Guest areas shape reputation. Bathrooms drive reviews. Kitchens demand food-safe procedures. Owners need consistency — not excuses."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {problems.map((problem, i) => {
            const Icon = icons[problem.icon];
            return (
              <LuxuryCard key={problem.title} delay={i * 0.08}>
                <Icon className="mb-4 h-8 w-8 text-champagne" />
                <h3 className="font-heading text-xl text-ivory">{problem.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-text">
                  {problem.description}
                </p>
              </LuxuryCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}
