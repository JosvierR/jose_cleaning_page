"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useReducedMotion } from "@/hooks/use-reduced-motion";
import { cn } from "@/lib/utils";

gsap.registerPlugin(ScrollTrigger);

export function ParallaxImage({
  src,
  alt,
  className,
  priority,
  overlay = "dark",
  sizes = "100vw",
}: {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
  overlay?: "dark" | "light" | "none";
  sizes?: string;
}) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();

  useEffect(() => {
    if (reduced || !wrapRef.current || !imgRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        imgRef.current,
        { scale: 1.12 },
        {
          scale: 1,
          ease: "none",
          scrollTrigger: {
            trigger: wrapRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        }
      );
    }, wrapRef);

    return () => ctx.revert();
  }, [reduced]);

  const overlayClass =
    overlay === "dark"
      ? "bg-gradient-to-b from-navy/50 via-navy/30 to-navy/70"
      : overlay === "light"
        ? "bg-gradient-to-b from-porcelain/20 via-transparent to-porcelain/40"
        : "";

  return (
    <div ref={wrapRef} className={cn("relative overflow-hidden", className)}>
      <div ref={imgRef} className="absolute inset-0">
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes={sizes}
          className="object-cover"
        />
      </div>
      {overlay !== "none" && (
        <div className={cn("absolute inset-0", overlayClass)} aria-hidden />
      )}
    </div>
  );
}
