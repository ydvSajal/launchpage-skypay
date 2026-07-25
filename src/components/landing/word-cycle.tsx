"use client";

import { useEffect, useState } from "react";

const WORDS = ["checkout.", "payment links.", "subscriptions.", "invoices.", "disputes."];

export function WordCycle() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = setInterval(() => {
      setIndex((v) => (v + 1) % WORDS.length);
    }, 2300);
    return () => clearInterval(id);
  }, []);

  return (
    <>
      <span className="inline-block min-w-[9ch] font-serif italic text-[#c2410c]">{WORDS[index]}</span>
      <span className="ml-1.5 inline-block h-[0.64em] w-[3px] translate-y-[2px] bg-[#c2410c] motion-safe:animate-[om-pulse_1.1s_steps(1,end)_infinite]" />
    </>
  );
}
