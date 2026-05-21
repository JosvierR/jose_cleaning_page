"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { brand, navLinks } from "@/lib/site-data";
import { cn } from "@/lib/utils";
import { MagneticButton } from "@/components/motion/magnetic-button";
import { useMaisonScroll } from "@/components/providers/smooth-scroll-provider";

export function SiteHeader() {
  const { scroll } = useMaisonScroll();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setScrolled(scroll > 48);
  }, [scroll]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const solid = scrolled || menuOpen;

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-700 ease-out",
          solid
            ? "border-b border-mist/90 bg-porcelain/92 shadow-[0_8px_40px_rgba(7,17,31,0.04)] backdrop-blur-xl"
            : "bg-gradient-to-b from-navy/40 to-transparent"
        )}
      >
        <div className="container-maison flex h-[4.25rem] items-center justify-between px-6 md:h-20 md:px-10">
          <Link
            href="#"
            className={cn(
              "font-editorial text-lg tracking-tight transition-colors duration-500 md:text-xl",
              solid ? "text-navy" : "text-porcelain"
            )}
          >
            {brand.name}
          </Link>

          <nav className="hidden items-center gap-12 lg:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-[0.62rem] uppercase tracking-[0.22em] transition-colors duration-300",
                  solid
                    ? "text-navy/55 hover:text-navy"
                    : "text-porcelain/65 hover:text-porcelain"
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:block">
            <MagneticButton
              href="#contact"
              variant={solid ? "primary" : "secondary"}
              className={
                !solid
                  ? "!border-porcelain/45 !text-porcelain hover:!border-porcelain hover:!bg-porcelain/10"
                  : ""
              }
            >
              Request Walkthrough
            </MagneticButton>
          </div>

          <button
            type="button"
            className={cn(
              "text-[0.62rem] uppercase tracking-[0.22em] lg:hidden",
              solid ? "text-navy" : "text-porcelain"
            )}
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
          >
            Menu
          </button>
        </div>
      </header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-[60] flex flex-col bg-navy"
          >
            <div className="flex items-center justify-between px-6 py-7 md:px-10">
              <span className="font-editorial text-2xl text-porcelain">{brand.name}</span>
              <button
                type="button"
                onClick={() => setMenuOpen(false)}
                className="text-[0.62rem] uppercase tracking-[0.22em] text-porcelain/60"
              >
                Close
              </button>
            </div>
            <nav className="flex flex-1 flex-col justify-center gap-8 px-10 md:gap-10 md:px-16">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05, duration: 0.5 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="font-editorial text-4xl text-porcelain transition-opacity hover:opacity-70 md:text-6xl"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </nav>
            <div className="border-t border-porcelain/10 p-10 md:p-14">
              <Link
                href="#contact"
                onClick={() => setMenuOpen(false)}
                className="btn-primary-maison block w-full text-center !border-porcelain !bg-porcelain !text-navy"
              >
                Request Walkthrough
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
