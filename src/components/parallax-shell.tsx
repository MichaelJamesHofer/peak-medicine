"use client";

import { ReactNode, useEffect, useRef, useState } from "react";

export function ParallaxShell({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    let frame = 0;
    const handleScroll = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(() => {
        frame = 0;
        if (!ref.current) return;
        const rect = ref.current.getBoundingClientRect();
        const progress = Math.min(Math.max(rect.top / window.innerHeight, -1), 1);
        setOffset(progress * -20);
      });
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div ref={ref} style={{ transform: `translate3d(0, ${offset}px, 0)` }} className="transition-transform duration-300 will-change-transform">
      {children}
    </div>
  );
}
