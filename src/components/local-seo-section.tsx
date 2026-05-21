"use client";

import { MapPin, Clock, Building2 } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { LuxuryCard } from "@/components/ui/luxury-card";

export function LocalSeoSection() {
  return (
    <section className="section-padding">
      <div className="container-luxury">
        <SectionHeading
          eyebrow="Local service"
          title="Bronx-based restaurant cleaning for busy NYC operators."
          description="We schedule around your closing hours across the Bronx and greater NYC — from Jerome Ave and Tremont corridors to Broadway-access Manhattan routes when efficient."
        />

        <div className="grid gap-6 lg:grid-cols-3">
          <LuxuryCard>
            <MapPin className="mb-4 h-8 w-8 text-champagne" />
            <h3 className="font-heading text-xl text-ivory">Bronx & NYC routes</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-text">
              Bronx-based crews serving restaurants, bakeries, and cafés throughout
              the borough — with selective Manhattan and NYC coverage based on
              after-hours scheduling and route efficiency.
            </p>
          </LuxuryCard>
          <LuxuryCard delay={0.08}>
            <Clock className="mb-4 h-8 w-8 text-champagne" />
            <h3 className="font-heading text-xl text-ivory">After-hours cleaning</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-text">
              Recurring service built around closing shifts and low-traffic windows
              so your team opens to a guest-ready space — not a half-finished reset.
            </p>
          </LuxuryCard>
          <LuxuryCard delay={0.16}>
            <Building2 className="mb-4 h-8 w-8 text-champagne" />
            <h3 className="font-heading text-xl text-ivory">Food-service focus</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-text">
              From Tremont Ave takeout counters to full-service dining rooms near
              Jerome Ave — scopes are defined for commercial kitchens, not generic
              office cleaning.
            </p>
          </LuxuryCard>
        </div>
      </div>
    </section>
  );
}
