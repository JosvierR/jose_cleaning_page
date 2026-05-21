"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { processSteps } from "@/lib/site-data";
import { SectionHeading } from "@/components/ui/section-heading";
import { useMotionVariants } from "@/hooks/use-motion-variants";

export function ProcessSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const { fadeUp, staggerContainer, transition } = useMotionVariants();

  return (
    <section id="process" className="section-padding bg-[#080808]/50">
      <div className="container-luxury">
        <SectionHeading
          eyebrow="How it works"
          title="A simple system built for operators."
          description="From walkthrough to photo proof — a recurring cleaning system designed around your hours, scope, and standards."
        />

        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={staggerContainer}
          className="relative"
        >
          <div
            className="absolute left-6 top-0 hidden h-full w-px bg-gradient-to-b from-champagne/60 via-champagne/20 to-transparent lg:left-1/2 lg:block lg:-translate-x-1/2"
            aria-hidden
          />

          <div className="hidden lg:grid lg:grid-cols-5 lg:gap-4">
            {processSteps.map((step, i) => (
              <motion.div
                key={step.step}
                variants={fadeUp}
                transition={{ ...transition, delay: i * 0.1 }}
                className="relative flex flex-col items-center text-center"
              >
                <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full border border-champagne/50 bg-[#111] font-heading text-lg text-champagne">
                  {step.step}
                </div>
                <h3 className="mt-4 font-heading text-lg text-ivory">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-text">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>

          <div className="space-y-8 lg:hidden">
            {processSteps.map((step, i) => (
              <motion.div
                key={step.step}
                variants={fadeUp}
                transition={{ ...transition, delay: i * 0.08 }}
                className="relative flex gap-6 pl-2"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-champagne/50 bg-[#111] font-heading text-lg text-champagne">
                  {step.step}
                </div>
                <div>
                  <h3 className="font-heading text-xl text-ivory">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-text">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
