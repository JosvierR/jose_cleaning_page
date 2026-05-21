"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

export function LenisProvider({ children }: { children: React.ReactNode }) {
  const reduced = useReducedMotion();

  useEffect(() => {
    if (reduced) return;

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    let raf = 0;
    function rafLoop(time: number) {
      lenis.raf(time);
      raf = requestAnimationFrame(rafLoop);
    }
    raf = requestAnimationFrame(rafLoop);

    return () => {
      cancelAnimationFrame(raf);
      lenis.destroy();
    };
  }, [reduced]);

  return <>{children}</>;
}
