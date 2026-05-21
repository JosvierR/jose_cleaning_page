"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import gsap from "gsap";
import {
  Users,
  Calendar,
  Shield,
  Camera,
  MapPin,
  Package,
  CheckCircle2,
  Sparkles,
} from "lucide-react";
import { brand, heroHighlights, heroChecklist } from "@/lib/site-data";
import { useMotionVariants } from "@/hooks/use-motion-variants";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

const iconMap = {
  users: Users,
  calendar: Calendar,
  shield: Shield,
  camera: Camera,
  map: MapPin,
  package: Package,
} as const;

export function Hero() {
  const glowRef = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const { fadeUp, staggerContainer, transition } = useMotionVariants();

  useEffect(() => {
    if (reduced || !glowRef.current) return;
    const ctx = gsap.context(() => {
      gsap.to(glowRef.current, {
        y: 30,
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    });
    return () => ctx.revert();
  }, [reduced]);

  return (
    <section className="relative min-h-screen overflow-hidden bg-luxury-gradient pt-24 lg:pt-28">
      <div className="noise-overlay absolute inset-0 z-[2]" aria-hidden />
      <div
        ref={glowRef}
        className="pointer-events-none absolute left-1/2 top-1/4 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-champagne/10 blur-[120px]"
        aria-hidden
      />

      <div className="container-luxury relative z-10 grid min-h-[calc(100vh-6rem)] gap-12 px-4 pb-24 sm:px-6 lg:grid-cols-2 lg:items-center lg:gap-16 lg:px-8 lg:pb-16">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="flex flex-col justify-center"
        >
          <motion.span
            variants={fadeUp}
            transition={transition}
            className="mb-4 inline-flex w-fit items-center gap-2 rounded-full border border-champagne/30 bg-champagne/5 px-4 py-1.5 text-xs uppercase tracking-[0.15em] text-champagne"
          >
            <Sparkles className="h-3.5 w-3.5" />
            {brand.tagline}
          </motion.span>

          <motion.h1
            variants={fadeUp}
            transition={transition}
            className="font-heading text-4xl font-medium leading-[1.1] text-ivory sm:text-5xl lg:text-6xl"
          >
            Your Restaurant,{" "}
            <span className="text-gradient-gold">Guest-Ready</span> Before the
            Next Service.
          </motion.h1>

          <motion.p
            variants={fadeUp}
            transition={transition}
            className="mt-6 max-w-xl text-base leading-relaxed text-muted-text sm:text-lg"
          >
            Recurring commercial cleaning for bakeries, cafés, restaurants,
            bars, and food-service spaces — with trained crews, monthly
            materials, after-hours availability, and photo-verified checklists
            after every visit.
          </motion.p>

          <motion.p
            variants={fadeUp}
            transition={transition}
            className="mt-4 text-sm text-muted-text/90"
          >
            Built for busy kitchens, dining rooms, bathrooms, bars, and
            high-traffic food businesses.
          </motion.p>

          <motion.div
            variants={fadeUp}
            transition={transition}
            className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center"
          >
            <a href="#contact" className="btn-primary-luxury">
              Request a Walkthrough
            </a>
            <Link href="#services" className="btn-secondary-luxury">
              View the Standard
            </Link>
          </motion.div>

          <motion.p
            variants={fadeUp}
            transition={transition}
            className="mt-4 text-xs text-muted-text"
          >
            After-hours available • Bronx / NYC routes
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ ...transition, delay: 0.3 }}
          className="relative"
        >
          <div className="glass-card relative overflow-hidden border-champagne/20 p-6 sm:p-8">
            <div className="mb-6 flex items-center justify-between border-b border-white/10 pb-4">
              <div>
                <p className="text-xs uppercase tracking-widest text-champagne">
                  Service Plaque
                </p>
                <p className="font-heading mt-1 text-lg text-ivory">
                  Guest-Ready Visit Standard
                </p>
              </div>
              <span className="rounded-full bg-success/10 px-3 py-1 text-xs font-medium text-success">
                Scheduled
              </span>
            </div>

            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
              {heroHighlights.map((item) => {
                const Icon = iconMap[item.icon];
                return (
                  <div
                    key={item.label}
                    className="rounded-xl border border-white/10 bg-black/30 p-3"
                  >
                    <Icon className="mb-2 h-4 w-4 text-champagne" />
                    <p className="text-xs font-medium text-ivory">{item.label}</p>
                  </div>
                );
              })}
            </div>

            <div className="mt-6 space-y-2">
              <p className="text-xs uppercase tracking-widest text-muted-text">
                Visit checklist
              </p>
              {heroChecklist.map((item, i) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.8 + i * 0.1, ...transition }}
                  className="flex items-center gap-2 rounded-lg border border-white/5 bg-white/[0.02] px-3 py-2"
                >
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-success" />
                  <span className="text-sm text-ivory/90">{item}</span>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, ...transition }}
            className="absolute -bottom-4 -left-2 max-w-[220px] rounded-2xl border border-champagne/30 bg-[#111]/95 p-4 shadow-xl backdrop-blur-md sm:-left-6 lg:-left-10"
          >
            <p className="text-xs uppercase tracking-widest text-champagne">
              Quiet precision
            </p>
            <p className="mt-1 font-heading text-sm leading-snug text-ivory">
              Precision cleaning. Quiet execution. Visible proof.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
