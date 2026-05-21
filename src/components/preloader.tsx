"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { brand } from "@/lib/site-data";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

export function Preloader({ onComplete }: { onComplete: () => void }) {
  const reduced = useReducedMotion();
  const [visible, setVisible] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (reduced) {
      setVisible(false);
      onComplete();
      return;
    }

    const already =
      typeof window !== "undefined" &&
      sessionStorage.getItem("maison-preloaded") === "1";

    if (already) {
      setVisible(false);
      onComplete();
      return;
    }

    let frame = 0;
    const start = performance.now();
    const duration = 2000;

    const tick = (now: number) => {
      const p = Math.min(1, (now - start) / duration);
      setProgress(p * 100);
      if (p < 1) {
        frame = requestAnimationFrame(tick);
      } else {
        sessionStorage.setItem("maison-preloaded", "1");
        setTimeout(() => {
          setVisible(false);
          onComplete();
        }, 500);
      }
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [onComplete, reduced]);

  if (!visible) return null;

  return (
    <AnimatePresence>
      <motion.div
        exit={{ opacity: 0 }}
        transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        className="fixed inset-0 z-[200] flex flex-col items-center justify-center bg-porcelain"
      >
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="font-editorial text-2xl tracking-tight text-navy md:text-[2rem]"
        >
          {brand.name}
        </motion.p>
        <div className="relative mt-14 h-px w-56 overflow-hidden bg-mist md:w-72">
          <motion.div
            className="absolute inset-y-0 left-0 bg-navy"
            style={{ width: `${progress}%` }}
            transition={{ ease: "linear" }}
          />
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
