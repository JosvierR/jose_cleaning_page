"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { materials, materialsNotes } from "@/lib/site-data";
import { SectionHeading } from "@/components/ui/section-heading";
import { useMotionVariants } from "@/hooks/use-motion-variants";

export function MaterialsSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const { fadeUp, staggerContainer, transition } = useMotionVariants();

  return (
    <section className="section-padding bg-[#080808]/50">
      <div className="container-luxury">
        <SectionHeading
          eyebrow="Supplies"
          title="Food-safe materials, restocked monthly."
          description="Your recurring plan can include a monthly material system so crews arrive equipped — degreasers, sanitizers, liners, and consumables organized for your location."
        />

        <div className="grid gap-8 lg:grid-cols-2">
          <motion.div
            ref={ref}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={staggerContainer}
            className="glass-card grid grid-cols-1 gap-2 p-6 sm:grid-cols-2 sm:p-8"
          >
            {materials.map((item, i) => (
              <motion.div
                key={item}
                variants={fadeUp}
                transition={{ ...transition, delay: i * 0.03 }}
                className="flex items-center gap-3 rounded-lg border border-white/5 px-3 py-2.5"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-champagne" />
                <span className="text-sm text-ivory/90">{item}</span>
              </motion.div>
            ))}
          </motion.div>

          <div className="flex flex-col justify-center space-y-4">
            {materialsNotes.map((note) => (
              <p
                key={note}
                className="rounded-xl border border-white/10 bg-black/30 px-5 py-4 text-sm leading-relaxed text-muted-text"
              >
                {note}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
