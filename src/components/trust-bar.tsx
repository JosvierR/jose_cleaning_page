"use client";

import { motion } from "framer-motion";
import { trustChips } from "@/lib/site-data";

export function TrustBar() {
  return (
    <section className="border-y border-white/10 bg-[#080808]/80 py-6">
      <div className="container-luxury px-4 sm:px-6 lg:px-8">
        <motion.ul
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap items-center justify-center gap-3 sm:gap-4"
        >
          {trustChips.map((chip) => (
            <li
              key={chip}
              className="rounded-full border border-white/10 bg-black/30 px-4 py-2 text-xs font-medium tracking-wide text-muted-text transition hover:border-champagne/30 hover:text-ivory sm:text-sm"
            >
              {chip}
            </li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
