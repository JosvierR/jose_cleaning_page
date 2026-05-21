"use client";

import { faqItems } from "@/lib/site-data";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { SectionLabel } from "@/components/ui/section-label";
import { EditorialHeading } from "@/components/ui/editorial-heading";

export function FaqLuxury() {
  return (
    <section id="faq" className="section-pad bg-warm-white">
      <div className="container-maison max-w-3xl">
        <SectionLabel>FAQ</SectionLabel>
        <EditorialHeading className="mt-6">Questions.</EditorialHeading>

        <Accordion className="mt-16 w-full">
          {faqItems.map((item, i) => (
            <AccordionItem
              key={item.q}
              value={`faq-${i}`}
              className="border-t border-mist border-b-0 px-0"
            >
              <AccordionTrigger className="py-8 font-editorial text-xl text-navy hover:no-underline md:text-2xl">
                {item.q}
              </AccordionTrigger>
              <AccordionContent className="pb-8 text-sm leading-relaxed text-navy/65">
                {item.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
