"use client";

import { useEffect, useRef } from "react";
import SplitType from "split-type";
import gsap from "gsap";
import { useReducedMotion } from "@/hooks/use-reduced-motion";
import { cn } from "@/lib/utils";

export function SplitText({
  children,
  className,
  as: Tag = "h1",
  delay = 0,
}: {
  children: string;
  className?: string;
  as?: "h1" | "h2" | "h3" | "p" | "span";
  delay?: number;
}) {
  const ref = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();

  useEffect(() => {
    const el = ref.current;
    if (!el || reduced) return;

    const split = new SplitType(el, { types: "lines,words", lineClass: "split-line" });

    const words = el.querySelectorAll(".word");
    gsap.set(words, { yPercent: 110, opacity: 0 });
    gsap.to(words, {
      yPercent: 0,
      opacity: 1,
      duration: 1,
      stagger: 0.035,
      ease: "power3.out",
      delay,
    });

    return () => {
      split.revert();
    };
  }, [children, delay, reduced]);

  return (
    <Tag ref={ref as never} className={cn("split-reveal", className)}>
      {children}
    </Tag>
  );
}
