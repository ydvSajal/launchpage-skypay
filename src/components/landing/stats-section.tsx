"use client";

import { useEffect, useRef, useState } from "react";
import { Reveal } from "./reveal";

const TARGETS = { volume: 482910338, txs: 1240882, chains: 9, settle: 2.4 };

function easeOutCubic(t: number) {
  return 1 - Math.pow(1 - t, 3);
}

function useCountUp() {
  const ref = useRef<HTMLDivElement>(null);
  const [p, setP] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();
        if (reduce) {
          setP(1);
          return;
        }
        const start = performance.now();
        const dur = 1800;
        let raf = 0;
        const step = (now: number) => {
          const t = Math.min(1, (now - start) / dur);
          setP(easeOutCubic(t));
          if (t < 1) raf = requestAnimationFrame(step);
        };
        raf = requestAnimationFrame(step);
        return () => cancelAnimationFrame(raf);
      },
      { threshold: 0.3 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return { ref, p };
}

export function StatsSection() {
  const { ref, p } = useCountUp();

  return (
    <div
      ref={ref}
      className="relative z-10 mx-auto grid max-w-[1200px] grid-cols-1 items-stretch gap-8 px-5 py-8 pb-20 sm:px-10 md:grid-cols-[1.15fr_0.85fr]"
    >
      <Reveal className="stats-card-bg rounded-3xl border border-[#1c1917]/8 p-9 shadow-[0_24px_90px_rgba(120,53,15,0.1),0_8px_30px_rgba(15,23,42,0.05)]">
        <div className="flex items-center justify-between">
          <span className="text-[11px] font-bold uppercase tracking-[0.1em] text-[#a8a29e]">Pilot + testnet volume</span>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/12 px-3 py-1 text-[11px] font-bold text-[#047857]">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 motion-safe:animate-[om-pulse_2s_ease-in-out_infinite]" />
            Live
          </span>
        </div>
        <div className="mt-3.5 font-serif text-[76px] font-semibold leading-none tracking-[-0.03em] text-[#1c1917] tabular-nums">
          ${Math.round(TARGETS.volume * p).toLocaleString("en-US")}
        </div>
        <div className="mt-2.5 text-sm text-[#57534e]">settled through escrowed checkout to date</div>
        <div className="mt-7 grid grid-cols-1 gap-3 min-[420px]:grid-cols-3">
          <div className="rounded-2xl border border-[#1c1917]/6 bg-[#fffbf7]/90 px-4 py-3.5">
            <div className="text-[10px] font-bold uppercase tracking-[0.09em] text-[#a8a29e]">Payments</div>
            <div className="mt-1 text-lg font-bold text-[#1c1917] tabular-nums">
              {Math.round(TARGETS.txs * p).toLocaleString("en-US")}
            </div>
          </div>
          <div className="rounded-2xl border border-[#1c1917]/6 bg-[#fffbf7]/90 px-4 py-3.5">
            <div className="text-[10px] font-bold uppercase tracking-[0.09em] text-[#a8a29e]">Chains live</div>
            <div className="mt-1 text-lg font-bold text-[#1c1917] tabular-nums">{Math.round(TARGETS.chains * p)}</div>
          </div>
          <div className="rounded-2xl border border-[#1c1917]/6 bg-[#fffbf7]/90 px-4 py-3.5">
            <div className="text-[10px] font-bold uppercase tracking-[0.09em] text-[#a8a29e]">Median settle</div>
            <div className="mt-1 text-lg font-bold text-[#1c1917] tabular-nums">{(TARGETS.settle * p).toFixed(1)}s</div>
          </div>
        </div>
      </Reveal>

      <div className="flex flex-col gap-3.5">
        <Reveal
          delay={80}
          className="flex-1 rounded-2xl border border-[#1c1917]/6 bg-white p-5 shadow-[0_2px_16px_rgba(0,0,0,0.04)] transition-[box-shadow,translate] duration-200 hover:-translate-y-0.5 hover:shadow-[0_12px_40px_rgba(0,0,0,0.08)]"
        >
          <div className="flex items-center gap-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-[10px] bg-[#ff5e00]/12 text-[#ea580c]">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round">
                <path d="M12 2v20M17 6.5C17 4.6 14.8 3.5 12 3.5S7 4.6 7 6.5s2 2.8 5 3.5 5 1.6 5 3.5-2.2 3-5 3-5-1.1-5-3" />
              </svg>
            </span>
            <div className="text-[15.5px] font-bold text-[#1c1917]">1% introductory fee</div>
          </div>
          <p className="mt-2.5 text-[13.5px] leading-[1.65] text-[#57534e]">
            Flat per settled payment. No monthly minimum, no spread at settlement.
          </p>
        </Reveal>

        <Reveal
          delay={140}
          className="flex-1 rounded-2xl border border-[#1c1917]/6 bg-white p-5 shadow-[0_2px_16px_rgba(0,0,0,0.04)] transition-[box-shadow,translate] duration-200 hover:-translate-y-0.5 hover:shadow-[0_12px_40px_rgba(0,0,0,0.08)]"
        >
          <div className="flex items-center gap-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-[10px] bg-indigo-500/12 text-[#4f46e5]">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round">
                <circle cx="12" cy="12" r="9" />
                <path d="M3 12h18M12 3c3 3.5 3 14 0 18M12 3c-3 3.5-3 14 0 18" />
              </svg>
            </span>
            <div className="text-[15.5px] font-bold text-[#1c1917]">EVM and Solana, one API</div>
          </div>
          <p className="mt-2.5 text-[13.5px] leading-[1.65] text-[#57534e]">
            Nine chains and the stablecoins your customers already hold.
          </p>
        </Reveal>

        <Reveal
          delay={200}
          className="flex-1 rounded-2xl border border-[#1c1917]/6 bg-white p-5 shadow-[0_2px_16px_rgba(0,0,0,0.04)] transition-[box-shadow,translate] duration-200 hover:-translate-y-0.5 hover:shadow-[0_12px_40px_rgba(0,0,0,0.08)]"
        >
          <div className="flex items-center gap-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-[10px] bg-emerald-500/12 text-[#059669]">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round">
                <path d="M12 3l7 3v6c0 4.2-2.9 7.6-7 9-4.1-1.4-7-4.8-7-9V6l7-3z" />
                <path d="M9 12l2.2 2.2L15.5 10" />
              </svg>
            </span>
            <div className="text-[15.5px] font-bold text-[#1c1917]">Non-custodial escrow</div>
          </div>
          <p className="mt-2.5 text-[13.5px] leading-[1.65] text-[#57534e]">
            Only in-dispute amounts are held. Everything else lands in your wallet.
          </p>
        </Reveal>
      </div>
    </div>
  );
}
