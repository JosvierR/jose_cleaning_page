"use client";

import { useRef, useState, useCallback } from "react";
import Image from "next/image";
import { beforeAfterGallery } from "@/lib/site-data";
import { imageSrc, images } from "@/lib/images";
import { RevealBlock } from "@/components/motion/reveal";
import { SectionLabel } from "@/components/ui/section-label";
import { EditorialHeading } from "@/components/ui/editorial-heading";
import { cn } from "@/lib/utils";

function CompareSlider() {
  const [pos, setPos] = useState(50);
  const trackRef = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  const setFromClientX = useCallback((clientX: number) => {
    const track = trackRef.current;
    if (!track) return;
    const rect = track.getBoundingClientRect();
    const pct = ((clientX - rect.left) / rect.width) * 100;
    setPos(Math.min(92, Math.max(8, pct)));
  }, []);

  const onPointerDown = (e: React.PointerEvent) => {
    dragging.current = true;
    (e.target as HTMLElement).setPointerCapture(e.pointerId);
    setFromClientX(e.clientX);
  };

  const onPointerMove = (e: React.PointerEvent) => {
    if (!dragging.current) return;
    setFromClientX(e.clientX);
  };

  const onPointerUp = () => {
    dragging.current = false;
  };

  return (
    <div
      ref={trackRef}
      className="relative aspect-[16/9] w-full max-w-5xl overflow-hidden bg-mist shadow-luxury-lg"
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
      onPointerLeave={onPointerUp}
    >
      <Image
        src={imageSrc("beforeKitchen")}
        alt="Before cleaning"
        fill
        className="object-cover"
        sizes="(max-width: 1200px) 100vw, 1200px"
        priority
      />
      <div
        className="absolute inset-0 overflow-hidden"
        style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
      >
        <Image
          src={imageSrc("afterKitchen")}
          alt="After cleaning"
          fill
          className="object-cover"
          sizes="(max-width: 1200px) 100vw, 1200px"
        />
      </div>

      {/* Divider line */}
      <div
        className="pointer-events-none absolute top-0 bottom-0 z-10 w-[2px] bg-porcelain/90 shadow-[0_0_24px_rgba(247,245,239,0.5)]"
        style={{ left: `${pos}%`, transform: "translateX(-50%)" }}
      />

      {/* Large drag handle */}
      <div
        className="absolute top-1/2 z-20 flex cursor-ew-resize items-center justify-center"
        style={{ left: `${pos}%`, transform: "translate(-50%, -50%)" }}
        onPointerDown={onPointerDown}
        role="slider"
        aria-valuenow={pos}
        aria-valuemin={8}
        aria-valuemax={92}
        aria-label="Drag to compare before and after"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === "ArrowLeft") setPos((p) => Math.max(8, p - 4));
          if (e.key === "ArrowRight") setPos((p) => Math.min(92, p + 4));
        }}
      >
        <div className="flex h-16 w-16 items-center justify-center rounded-full border-2 border-champagne bg-porcelain/95 shadow-luxury-lg backdrop-blur-sm md:h-20 md:w-20">
          <div className="flex gap-1">
            <span className="h-1 w-1 rounded-full bg-navy/40" />
            <span className="h-1 w-1 rounded-full bg-navy/40" />
          </div>
        </div>
        <span className="pointer-events-none absolute -bottom-10 left-1/2 -translate-x-1/2 whitespace-nowrap text-[0.58rem] uppercase tracking-[0.22em] text-porcelain/80">
          Drag
        </span>
      </div>

      <span className="pointer-events-none absolute left-8 top-8 z-10 text-[0.62rem] uppercase tracking-[0.26em] text-porcelain drop-shadow-md">
        Before
      </span>
      <span className="pointer-events-none absolute right-8 top-8 z-10 text-[0.62rem] uppercase tracking-[0.26em] text-porcelain drop-shadow-md">
        After
      </span>

    </div>
  );
}

const stairCardOffset = [
  "md:translate-x-[-6%]",
  "md:translate-x-[2%]",
  "md:translate-x-[10%]",
  "md:translate-x-[18%]",
] as const;

export function BeforeAfterGallery() {
  return (
    <section id="proof" className="section-pad bg-porcelain-gradient">
      <div className="container-maison">
        <div className="mx-auto max-w-3xl text-center">
          <SectionLabel>Proof</SectionLabel>
          <EditorialHeading className="mx-auto mt-8">
            Visible proof. Not assumptions.
          </EditorialHeading>
          <p className="mt-6 text-sm text-navy/50">
            Replace placeholders with real job photos after the first service week.
          </p>
        </div>

        {/* Large compare — centered */}
        <RevealBlock className="mx-auto mt-16 flex justify-center">
          <CompareSlider />
        </RevealBlock>

        {/* Staircase gallery — centered under hero compare */}
        <div className="mx-auto mt-16 flex max-w-5xl flex-col items-center gap-8 md:mt-20 md:gap-10">
          {beforeAfterGallery.map((item, i) => (
            <RevealBlock
              key={item.title}
              delay={i * 0.08}
              className={cn("w-full max-w-[280px] sm:max-w-[320px]", stairCardOffset[i])}
            >
              <div className="group relative aspect-[3/4] overflow-hidden bg-mist shadow-luxury">
                <Image
                  src={imageSrc(item.imageKey)}
                  alt={images[item.imageKey].alt}
                  fill
                  className="object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.04]"
                  sizes="320px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/70 via-navy/10 to-transparent" />
                <p className="absolute bottom-6 left-0 right-0 text-center font-editorial text-xl text-porcelain md:text-2xl">
                  {item.title}
                </p>
              </div>
            </RevealBlock>
          ))}
        </div>
      </div>
    </section>
  );
}
