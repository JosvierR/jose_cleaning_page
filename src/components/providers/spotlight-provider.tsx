"use client";

import { useEffect, useState } from "react";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

export function SpotlightProvider() {
  const reduced = useReducedMotion();
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (reduced) return;

    const isDesktop = window.matchMedia("(min-width: 1024px)").matches;
    if (!isDesktop) return;

    const handleMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setVisible(true);
    };

    const handleLeave = () => setVisible(false);

    window.addEventListener("mousemove", handleMove);
    document.documentElement.addEventListener("mouseleave", handleLeave);

    return () => {
      window.removeEventListener("mousemove", handleMove);
      document.documentElement.removeEventListener("mouseleave", handleLeave);
    };
  }, [reduced]);

  if (reduced || !visible) return null;

  return (
    <div
      className="pointer-events-none fixed inset-0 z-[1] hidden lg:block"
      aria-hidden
    >
      <div
        className="absolute h-[480px] w-[480px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-30 blur-[100px] transition-opacity duration-300"
        style={{
          left: position.x,
          top: position.y,
          background:
            "radial-gradient(circle, rgba(198,161,91,0.25) 0%, transparent 70%)",
        }}
      />
    </div>
  );
}
