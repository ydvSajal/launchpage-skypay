"use client";

import { useEffect, useRef, useState } from "react";

export function FooterBloom() {
  const ref = useRef<HTMLDivElement>(null);
  const [play, setPlay] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setPlay(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`footer-bloom-bg pointer-events-none absolute left-1/2 -bottom-[140px] h-[500px] w-[1200px] origin-bottom -translate-x-1/2 blur-[24px] ${
        play ? "motion-safe:animate-[om-bloom_1.6s_cubic-bezier(.16,1,.3,1)_forwards] motion-reduce:opacity-100 motion-reduce:blur-[60px] motion-reduce:[transform:translateX(-50%)_scaleY(1)]" : "scale-y-[.45] opacity-30"
      }`}
    />
  );
}
