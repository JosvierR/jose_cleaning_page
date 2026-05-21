"use client";

import {
  fadeUp,
  staggerContainer,
  scaleIn,
  reducedMotionVariants,
} from "@/lib/animations";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

export function useMotionVariants() {
  const reduced = useReducedMotion();

  if (reduced) {
    return {
      fadeUp: reducedMotionVariants,
      staggerContainer: {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0 } },
      },
      scaleIn: reducedMotionVariants,
      transition: { duration: 0 },
    };
  }

  return {
    fadeUp,
    staggerContainer,
    scaleIn,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  };
}
