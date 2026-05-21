"use client";

import { ownerConcerns } from "@/lib/site-data";
import { SectionHeading } from "@/components/ui/section-heading";
import { LuxuryCard } from "@/components/ui/luxury-card";

export function OwnerConcernsSection() {
  return (
    <section className="section-padding bg-[#080808]/50">
      <div className="container-luxury">
        <SectionHeading
          eyebrow="Operator priorities"
          title="What owners usually care about."
          description="Real questions from busy operators — not fabricated reviews. This is what our recurring system is designed to answer."
        />

        <div className="grid gap-6 sm:grid-cols-2">
          {ownerConcerns.map((item, i) => (
            <LuxuryCard key={item.question} delay={i * 0.08}>
              <p className="font-heading text-xl leading-snug text-ivory">
                &ldquo;{item.question}&rdquo;
              </p>
              <p className="mt-4 text-sm leading-relaxed text-muted-text">
                {item.answer}
              </p>
            </LuxuryCard>
          ))}
        </div>
      </div>
    </section>
  );
}
