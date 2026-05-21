"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { motion } from "framer-motion";
import { brand, heroDetails } from "@/lib/site-data";
import { imageSrc } from "@/lib/images";
import { SplitText } from "@/components/motion/split-text";
import { MagneticButton } from "@/components/motion/magnetic-button";
import { RevealBlock } from "@/components/motion/reveal";
import { SectionLabel } from "@/components/ui/section-label";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

export function CinematicHero() {
  const bgRef = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();

  useEffect(() => {
    if (reduced || !bgRef.current) return;
    gsap.fromTo(
      bgRef.current,
      { scale: 1.06 },
      { scale: 1, duration: 2.8, ease: "power2.out" }
    );
  }, [reduced]);

  return (
    <section className="relative isolate min-h-[100svh] overflow-hidden">
      <div ref={bgRef} className="absolute inset-0 will-change-transform">
        <Image
          src={imageSrc("hero")}
          alt="Spotless commercial kitchen"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div
          className="absolute inset-0 bg-gradient-to-b from-navy/55 via-navy/35 to-navy/80"
          aria-hidden
        />
      </div>
      <div className="noise-texture absolute inset-0 z-[1]" aria-hidden />

      <div className="container-maison relative z-10 flex min-h-[100svh] flex-col justify-end px-6 pb-32 pt-28 md:px-10 md:pb-40 md:pt-36">
        <SectionLabel className="!text-porcelain/55">
          Bronx / NYC Restaurant Cleaning
        </SectionLabel>

        <SplitText
          as="h1"
          className="mt-8 max-w-[14ch] font-editorial text-[2.75rem] leading-[1.05] text-porcelain sm:max-w-4xl sm:text-6xl md:text-7xl lg:text-[5.25rem]"
          delay={0.35}
        >
          Guest-ready before the next service.
        </SplitText>

        <RevealBlock delay={0.55} className="mt-10 max-w-lg">
          <p className="text-[0.95rem] leading-[1.75] text-porcelain/78 md:text-base">
            Premium recurring cleaning for restaurants, bakeries, cafés, bars, and
            commercial kitchens — with food-service appropriate materials,
            after-hours availability, and photo-verified checklists.
          </p>
        </RevealBlock>

        <RevealBlock delay={0.7} className="mt-12 flex flex-col gap-4 sm:flex-row sm:items-center">
          <MagneticButton
            href="#contact"
            className="!border-porcelain !bg-porcelain !text-navy"
          >
            Request a Walkthrough
          </MagneticButton>
          <MagneticButton
            href="#standard"
            variant="secondary"
            className="!border-porcelain/40 !text-porcelain hover:!border-porcelain/70 hover:!bg-porcelain/10"
          >
            View the Standard
          </MagneticButton>
        </RevealBlock>

        <motion.aside
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="mt-14 w-full max-w-lg border border-porcelain/20 bg-navy/25 p-7 backdrop-blur-md md:mt-20"
        >
          <p className="label-maison !text-porcelain/45">The Maison Standard</p>
          <p className="mt-3 font-editorial text-xl leading-snug text-porcelain md:text-2xl">
            Precision cleaning. Quiet execution. Visible proof.
          </p>
          <ul className="mt-6 flex flex-wrap gap-x-8 gap-y-3">
            {heroDetails.map((d) => (
              <li
                key={d}
                className="text-[0.62rem] uppercase tracking-[0.2em] text-porcelain/60"
              >
                {d}
              </li>
            ))}
          </ul>
        </motion.aside>
      </div>

      <p className="absolute bottom-8 right-6 z-10 hidden text-[0.58rem] uppercase tracking-[0.24em] text-porcelain/35 md:block">
        {brand.tagline}
      </p>
    </section>
  );
}
