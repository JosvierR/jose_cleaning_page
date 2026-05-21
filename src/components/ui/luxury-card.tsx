"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { cn } from "@/lib/utils";
import { useMotionVariants } from "@/hooks/use-motion-variants";

interface LuxuryCardProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  hover?: boolean;
}

export function LuxuryCard({
  children,
  className,
  delay = 0,
  hover = true,
}: LuxuryCardProps) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const { fadeUp, transition } = useMotionVariants();

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={fadeUp}
      transition={{ ...transition, delay }}
      whileHover={hover ? { y: -4, transition: { duration: 0.2 } } : undefined}
      className={cn(
        "glass-card p-6 transition-colors duration-300 hover:border-champagne/40 hover:shadow-[0_8px_40px_rgba(198,161,91,0.08)] sm:p-8",
        className
      )}
    >
      {children}
    </motion.div>
  );
}
