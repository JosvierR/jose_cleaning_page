"use client";

import { faqItems } from "@/lib/site-data";
import { SectionHeading } from "@/components/ui/section-heading";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function FaqSection() {
  return (
    <section id="faq" className="section-padding">
      <div className="container-luxury max-w-3xl">
        <SectionHeading
          eyebrow="FAQ"
          title="Common questions from operators."
        />

        <Accordion className="w-full space-y-2">
          {faqItems.map((item, i) => (
            <AccordionItem
              key={item.question}
              value={`item-${i}`}
              className="glass-card overflow-hidden border-white/10 px-4 data-[state=open]:border-champagne/30"
            >
              <AccordionTrigger className="py-5 text-left font-heading text-lg text-ivory hover:text-champagne hover:no-underline">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="pb-5 text-sm leading-relaxed text-muted-text">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
