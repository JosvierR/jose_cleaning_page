"use client";

import { Phone } from "lucide-react";
import { brand } from "@/lib/site-data";

export function StickyMobileCta() {
  return (
    <>
      <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-white/10 bg-[#050505]/95 p-3 backdrop-blur-lg lg:hidden">
        <a href="#contact" className="btn-primary-luxury w-full text-center">
          Request Walkthrough
        </a>
        <p className="mt-2 text-center text-xs text-muted-text">
          Response within 24 hours
        </p>
      </div>

      <a
        href={`tel:${brand.phone.replace(/\D/g, "")}`}
        className="fixed bottom-24 right-4 z-40 flex h-12 w-12 items-center justify-center rounded-full border border-champagne/40 bg-[#111]/90 text-champagne shadow-lg backdrop-blur-md transition hover:border-champagne hover:bg-champagne/10 lg:bottom-8"
        aria-label="Call for walkthrough"
      >
        <Phone className="h-5 w-5" />
      </a>
    </>
  );
}
