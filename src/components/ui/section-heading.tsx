"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { cn } from "@/lib/utils";
import { useMotionVariants } from "@/hooks/use-motion-variants";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  className,
}: SectionHeadingProps) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });
  const { fadeUp, transition } = useMotionVariants();

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={{
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
      }}
      className={cn(
        "mb-12 max-w-3xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      {eyebrow && (
        <motion.p
          variants={fadeUp}
          transition={transition}
          className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-champagne"
        >
          {eyebrow}
        </motion.p>
      )}
      <motion.h2
        variants={fadeUp}
        transition={transition}
        className="text-3xl font-medium leading-tight text-ivory sm:text-4xl lg:text-5xl"
      >
        {title}
      </motion.h2>
      <motion.div
        variants={fadeUp}
        transition={transition}
        className={cn("gold-divider mt-6", align === "center" && "mx-auto max-w-xs")}
      />
      {description && (
        <motion.p
          variants={fadeUp}
          transition={transition}
          className="mt-6 text-base leading-relaxed text-muted-text sm:text-lg"
        >
          {description}
        </motion.p>
      )}
    </motion.div>
  );
}
