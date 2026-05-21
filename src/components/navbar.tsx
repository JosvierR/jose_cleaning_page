"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu } from "lucide-react";
import { brand, navLinks } from "@/lib/site-data";
import { cn } from "@/lib/utils";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        scrolled
          ? "border-b border-white/10 bg-[#050505]/90 backdrop-blur-xl"
          : "bg-transparent"
      )}
    >
      <nav className="container-luxury flex h-16 items-center justify-between px-4 sm:px-6 lg:h-20 lg:px-8">
        <Link href="#" className="group flex flex-col">
          <span className="font-heading text-lg font-medium tracking-tight text-ivory transition group-hover:text-champagne sm:text-xl">
            {brand.name}
          </span>
          <span className="text-[10px] uppercase tracking-[0.15em] text-muted-text">
            {brand.tagline}
          </span>
        </Link>

        <ul className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-sm text-muted-text transition hover:text-ivory"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden lg:block">
          <a href="#contact" className="btn-primary-luxury text-sm">
            Schedule Walkthrough
          </a>
        </div>

        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 text-ivory lg:hidden"
            aria-label="Open menu"
          >
            <Menu className="h-5 w-5" />
          </SheetTrigger>
          <SheetContent
            side="right"
            className="border-white/10 bg-[#080808] text-ivory w-[min(100vw,320px)]"
          >
            <SheetHeader>
              <SheetTitle className="font-heading text-left text-ivory">
                Menu
              </SheetTitle>
            </SheetHeader>
            <ul className="mt-8 flex flex-col gap-4">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="text-lg text-muted-text transition hover:text-champagne"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="btn-primary-luxury mt-8 w-full text-center"
            >
              Schedule Walkthrough
            </a>
          </SheetContent>
        </Sheet>
      </nav>
    </header>
  );
}
