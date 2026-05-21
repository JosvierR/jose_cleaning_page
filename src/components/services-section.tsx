"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Check } from "lucide-react";
import { services, serviceExclusion } from "@/lib/site-data";
import { SectionHeading } from "@/components/ui/section-heading";
import { LuxuryCard } from "@/components/ui/luxury-card";
import { useMotionVariants } from "@/hooks/use-motion-variants";

export function ServicesSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.05 });
  const { staggerContainer, fadeUp, transition } = useMotionVariants();

  return (
    <section id="services" className="section-padding bg-[#080808]/50">
      <div className="container-luxury">
        <SectionHeading
          eyebrow="Scope"
          title="Complete recurring cleaning for food-service spaces."
          description="Kitchen, dining, restroom, bar, and deep-clean add-ons — defined by area so operators know exactly what is included."
        />

        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={staggerContainer}
          className="grid gap-6 lg:grid-cols-2"
        >
          {services.map((service) => (
            <motion.div key={service.id} variants={fadeUp} transition={transition}>
              <LuxuryCard delay={0} className="h-full">
                <h3 className="font-heading text-2xl text-ivory">{service.title}</h3>
                <p className="mt-2 text-sm text-muted-text">{service.description}</p>
                <ul className="mt-6 space-y-2">
                  {service.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-ivory/90">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-champagne" />
                      {item}
                    </li>
                  ))}
                </ul>
              </LuxuryCard>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-8 rounded-2xl border border-warning/30 bg-warning/5 p-6">
          <p className="text-sm leading-relaxed text-muted-text">
            <span className="font-medium text-warning">Important: </span>
            {serviceExclusion}
          </p>
        </div>
      </div>
    </section>
  );
}
