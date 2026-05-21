"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { cn } from "@/lib/utils";

export function MagneticButton({
  href,
  children,
  variant = "primary",
  className,
  onClick,
}: {
  href?: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
  onClick?: () => void;
}) {
  const ref = useRef<HTMLAnchorElement & HTMLButtonElement>(null);

  const base =
    variant === "primary" ? "btn-primary-maison" : "btn-secondary-maison";

  const inner = (
    <motion.span
      className={cn(base, className)}
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.span>
  );

  if (href) {
    return (
      <Link href={href} ref={ref as never} className="inline-block">
        {inner}
      </Link>
    );
  }

  return (
    <button type="button" onClick={onClick} className="inline-block">
      {inner}
    </button>
  );
}
