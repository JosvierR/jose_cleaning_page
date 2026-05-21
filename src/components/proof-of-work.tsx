"use client";

import { proofReport } from "@/lib/site-data";
import { RevealBlock } from "@/components/motion/reveal";
import { SectionLabel } from "@/components/ui/section-label";
import { EditorialHeading } from "@/components/ui/editorial-heading";

export function ProofOfWork() {
  return (
    <section className="section-pad bg-porcelain-gradient">
      <div className="container-maison grid gap-16 lg:grid-cols-2 lg:items-center">
        <div>
          <SectionLabel>Documentation</SectionLabel>
          <EditorialHeading className="mt-6">
            Every visit can be documented.
          </EditorialHeading>
          <p className="mt-6 max-w-md text-sm leading-relaxed text-navy/65">
            A refined service report — location, scope, notes, and proof — so
            operators have visibility without being on-site at close.
          </p>
        </div>

        <RevealBlock>
          <div className="border border-mist bg-warm-white p-8 shadow-luxury md:p-12">
            <div className="flex items-start justify-between border-b border-mist pb-6">
              <div>
                <p className="label-maison">Service report</p>
                <p className="mt-2 font-editorial text-2xl text-navy">
                  {proofReport.location}
                </p>
              </div>
              <span className="text-[0.6rem] uppercase tracking-[0.2em] text-navy/40">
                Sample layout
              </span>
            </div>

            <dl className="mt-8 space-y-5 text-sm">
              <div className="grid grid-cols-[120px_1fr] gap-4">
                <dt className="text-navy/45 uppercase tracking-[0.14em] text-[0.65rem]">
                  Date
                </dt>
                <dd className="text-navy/80">{proofReport.date}</dd>
              </div>
              <div className="grid grid-cols-[120px_1fr] gap-4">
                <dt className="text-navy/45 uppercase tracking-[0.14em] text-[0.65rem]">
                  Crew
                </dt>
                <dd className="text-navy/80">{proofReport.crew}</dd>
              </div>
              <div className="grid grid-cols-[120px_1fr] gap-4">
                <dt className="text-navy/45 uppercase tracking-[0.14em] text-[0.65rem]">
                  Areas
                </dt>
                <dd>
                  <ul className="space-y-1 text-navy/80">
                    {proofReport.areas.map((a) => (
                      <li key={a}>{a}</li>
                    ))}
                  </ul>
                </dd>
              </div>
              <div className="grid grid-cols-[120px_1fr] gap-4">
                <dt className="text-navy/45 uppercase tracking-[0.14em] text-[0.65rem]">
                  Notes
                </dt>
                <dd className="text-navy/80">{proofReport.notes}</dd>
              </div>
              <div className="grid grid-cols-[120px_1fr] gap-4">
                <dt className="text-navy/45 uppercase tracking-[0.14em] text-[0.65rem]">
                  Restock
                </dt>
                <dd className="text-navy/80">{proofReport.restock}</dd>
              </div>
              <div className="grid grid-cols-[120px_1fr] gap-4">
                <dt className="text-navy/45 uppercase tracking-[0.14em] text-[0.65rem]">
                  Next
                </dt>
                <dd className="text-navy/80">{proofReport.next}</dd>
              </div>
            </dl>

            <div className="mt-8 grid grid-cols-3 gap-2">
              {[1, 2, 3].map((n) => (
                <div
                  key={n}
                  className="aspect-square border border-dashed border-mist bg-mist/30 flex items-center justify-center text-[0.6rem] uppercase tracking-[0.16em] text-navy/35"
                >
                  Photo {n}
                </div>
              ))}
            </div>
          </div>
        </RevealBlock>
      </div>
    </section>
  );
}
