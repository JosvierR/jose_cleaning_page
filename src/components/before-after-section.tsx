"use client";

import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { beforeAfterItems } from "@/lib/site-data";
import { SectionHeading } from "@/components/ui/section-heading";
import { cn } from "@/lib/utils";

function ComparisonSlide({
  title,
  beforeLabel,
  afterLabel,
  note,
}: {
  title: string;
  beforeLabel: string;
  afterLabel: string;
  note: string;
}) {
  const [position, setPosition] = useState(50);

  return (
    <div className="glass-card overflow-hidden p-4 sm:p-6">
      <h3 className="font-heading mb-4 text-xl text-ivory">{title}</h3>
      <div className="relative aspect-[16/10] overflow-hidden rounded-xl border border-white/10">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a]">
          <div className="flex h-full items-center justify-center">
            <span className="text-sm uppercase tracking-widest text-muted-text/60">
              {beforeLabel} — Placeholder
            </span>
          </div>
        </div>
        <div
          className="absolute inset-0 overflow-hidden border-l-2 border-champagne bg-gradient-to-br from-[#171717] to-[#111]"
          style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
        >
          <div className="flex h-full items-center justify-center">
            <span className="text-sm uppercase tracking-widest text-champagne/80">
              {afterLabel} — Placeholder
            </span>
          </div>
        </div>
        <input
          type="range"
          min={10}
          max={90}
          value={position}
          onChange={(e) => setPosition(Number(e.target.value))}
          className="absolute bottom-4 left-1/2 z-10 w-[80%] -translate-x-1/2 accent-champagne"
          aria-label={`Compare before and after for ${title}`}
        />
        <div
          className="pointer-events-none absolute top-0 bottom-0 z-[5] w-0.5 bg-champagne shadow-[0_0_12px_rgba(198,161,91,0.6)]"
          style={{ left: `${position}%` }}
        />
      </div>
      <p className="mt-3 text-xs text-muted-text italic">{note}</p>
    </div>
  );
}

export function BeforeAfterSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" });
  const [selected, setSelected] = useState(0);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelected(emblaApi.selectedScrollSnap());
    emblaApi.on("select", onSelect);
    onSelect();
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  return (
    <section id="proof" className="section-padding">
      <div className="container-luxury">
        <SectionHeading
          eyebrow="Proof"
          title="Before & after documentation."
          description="Every visit can include photo documentation so owners know exactly what was completed. Replace placeholders with real project photos after your first service week."
        />

        <div className="relative">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex gap-6">
              {beforeAfterItems.map((item) => (
                <div
                  key={item.id}
                  className="min-w-0 flex-[0_0_100%] sm:flex-[0_0_calc(50%-12px)] lg:flex-[0_0_calc(50%-12px)]"
                >
                  <ComparisonSlide
                    title={item.title}
                    beforeLabel={item.beforeLabel}
                    afterLabel={item.afterLabel}
                    note={item.note}
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="mt-6 flex items-center justify-between">
            <div className="flex gap-2">
              {beforeAfterItems.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => emblaApi?.scrollTo(i)}
                  className={cn(
                    "h-1.5 rounded-full transition-all",
                    selected === i ? "w-8 bg-champagne" : "w-3 bg-white/20"
                  )}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>
            <div className="flex gap-2">
              <button
                type="button"
                onClick={scrollPrev}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-ivory hover:border-champagne/40"
                aria-label="Previous"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                type="button"
                onClick={scrollNext}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-ivory hover:border-champagne/40"
                aria-label="Next"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
