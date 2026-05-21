"use client";

import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { SectionHeading } from "@/components/ui/section-heading";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

export function MetricsSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });
  const reduced = useReducedMotion();

  const displayMetrics = [
    { end: 3, suffix: "", label: "Person crew per visit" },
    { end: 2, suffix: "×", label: "Weekly recurring plans" },
    { end: 30, suffix: "+", label: "Monthly service hours available" },
    { end: 100, suffix: "%", label: "Checklist-based visits" },
    { end: 0, suffix: "", label: "Bronx / NYC coverage focus", text: "Bronx / NYC" },
  ];

  return (
    <section className="section-padding">
      <div className="container-luxury">
        <SectionHeading
          eyebrow="Capacity"
          title="Built for serious food-service operators."
          description="Transparent capacity signals — no inflated claims, no fake certifications."
        />

        <div
          ref={ref}
          className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5 lg:gap-6"
        >
          {displayMetrics.map((metric) => (
            <div
              key={metric.label}
              className="glass-card flex flex-col items-center justify-center p-6 text-center"
            >
              <p className="font-heading text-3xl text-gradient-gold sm:text-4xl">
                {"text" in metric && metric.text ? (
                  metric.text
                ) : inView && !reduced ? (
                  <CountUp end={metric.end} duration={2} suffix={metric.suffix} />
                ) : (
                  `${metric.end}${metric.suffix}`
                )}
              </p>
              <p className="mt-2 text-xs leading-snug text-muted-text sm:text-sm">
                {metric.label}
              </p>
            </div>
          ))}
        </div>

        <p className="mt-8 text-center text-xs text-muted-text">
          Photo-verified checklists available on recurring plans
        </p>
      </div>
    </section>
  );
}
