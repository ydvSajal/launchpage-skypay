"use client";

import { useRef } from "react";
import { Reveal } from "./reveal";
import { WordCycle } from "./word-cycle";
import { WaitlistForm } from "./waitlist-form";

const CHAINS = ["Base", "Ethereum", "Solana", "Arbitrum", "Optimism", "Polygon", "BNB Chain", "Sui", "USDC", "USDT"];
const MARQUEE_ITEMS = [...CHAINS, ...CHAINS];

export function Hero() {
  const hostRef = useRef<HTMLDivElement>(null);
  const blobRef = useRef<HTMLDivElement>(null);

  function onGlowMove(e: React.MouseEvent<HTMLDivElement>) {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const host = hostRef.current;
    const blob = blobRef.current;
    if (!host || !blob) return;
    const r = host.getBoundingClientRect();
    const x = e.clientX - r.left - r.width / 2;
    const y = e.clientY - r.top - r.height * 0.35;
    const dx = x / (r.width / 2);
    blob.style.marginLeft = `${(x * 0.36).toFixed(1)}px`;
    blob.style.marginTop = `${(y * 0.26).toFixed(1)}px`;
    blob.style.filter = `blur(${(52 - Math.abs(dx) * 10).toFixed(0)}px)`;
    blob.style.width = `${(1180 + Math.abs(dx) * 120).toFixed(0)}px`;
  }

  return (
    <div className="relative overflow-hidden bg-white">
      <div className="hero-halo pointer-events-none absolute left-1/2 -top-[380px] h-[1150px] w-[1700px] -translate-x-1/2 rounded-full blur-[60px]" />

      <div ref={hostRef} onMouseMove={onGlowMove} className="relative">
        <div
          ref={blobRef}
          className="hero-orb pointer-events-none absolute left-1/2 -top-[300px] h-[820px] w-[1180px] -translate-x-1/2 rounded-full blur-[52px] transition-[margin,filter,width] duration-200 ease-[cubic-bezier(.16,1,.3,1)]"
        />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[46%] bg-gradient-to-b from-white/0 via-white/72 to-white [background-position:0_46%]" />

        <div className="relative z-10 px-5 pt-[22px] sm:px-10">
          <nav className="mx-auto flex h-[60px] max-w-[1000px] items-center justify-between rounded-full border border-white/70 bg-[#fff4e8]/50 py-0 pl-5 pr-2 shadow-[0_10px_34px_rgba(120,53,15,0.14),inset_0_1px_0_rgba(255,255,255,0.85)] backdrop-blur-xl sm:pl-6">
            <span className="font-serif text-[23px] font-semibold tracking-[0.01em] text-[#1f2937]">SkyPay</span>
            <div className="hidden gap-6 min-[700px]:flex">
              <a href="#product" className="whitespace-nowrap text-[12.5px] font-semibold uppercase tracking-[0.05em] text-[#3f3a35]">
                Product
              </a>
              <a href="#how" className="whitespace-nowrap text-[12.5px] font-semibold uppercase tracking-[0.05em] text-[#3f3a35]">
                How it works
              </a>
              <a href="#faq" className="whitespace-nowrap text-[12.5px] font-semibold uppercase tracking-[0.05em] text-[#3f3a35]">
                FAQ
              </a>
              <a href="#docs" className="whitespace-nowrap text-[12.5px] font-semibold uppercase tracking-[0.05em] text-[#3f3a35]">
                Docs
              </a>
            </div>
            <div className="flex gap-2">
              <a
                href="#waitlist"
                className="rounded-full bg-[#1c1917] px-5 py-2.5 text-[13px] font-semibold text-white shadow-[0_8px_24px_rgba(28,25,23,0.28)]"
              >
                Join waitlist
              </a>
              <a href="#docs" className="rounded-full bg-white/92 px-5 py-2.5 text-[13px] font-semibold text-[#1c1917]">
                Docs
              </a>
            </div>
          </nav>
        </div>

        <div className="relative z-10 mx-auto flex max-w-[1040px] flex-col items-center px-5 pb-11 pt-[104px] text-center sm:px-10">
          <span className="text-xl tracking-[9px] text-white/85">&#10022; &#10022; &#10022;</span>
          <a
            href="#product"
            className="mt-6 border-b border-black/40 pb-[3px] text-sm font-semibold text-[#1c1917]"
          >
            Crypto payments infrastructure &amp; gateway
          </a>
          <Reveal className="mt-7">
            <h1 className="text-balance font-serif text-[clamp(38px,10vw,96px)] font-medium leading-[1.02] tracking-[-0.025em] text-[#211f1d] sm:text-[clamp(52px,6.4vw,96px)]">
              The payment gateway for
              <br />
              <WordCycle />
            </h1>
          </Reveal>
          <Reveal className="mt-6 max-w-[640px] text-pretty text-lg leading-[1.65] text-[#44403c]">
            Accept crypto with hosted checkout, links, subscriptions and invoices. Escrowed disputes, refunds and
            compliance checks run underneath, funds never leave your custody.
          </Reveal>
          <div className="mt-9">
            <Reveal delay={120}>
              <WaitlistForm
                variant="dark"
                extraLink={
                  <a
                    href="#docs"
                    className="inline-flex items-center rounded-full bg-white/94 px-[30px] py-[15px] text-[15px] font-medium text-[#1c1917] transition-transform duration-200 ease-[cubic-bezier(.16,1,.3,1)] hover:-translate-y-px"
                  >
                    Read the docs
                  </a>
                }
              />
            </Reveal>
          </div>
        </div>

        <div className="relative z-10 py-6 pb-9">
          <div className="text-center text-[11px] font-bold uppercase tracking-[0.2em] text-[#78716c]">
            One integration, every chain that matters
          </div>
          <div
            className="relative mt-5 overflow-hidden"
            style={{
              maskImage: "linear-gradient(90deg, transparent, #000 12%, #000 88%, transparent)",
              WebkitMaskImage: "linear-gradient(90deg, transparent, #000 12%, #000 88%, transparent)",
            }}
          >
            <div className="marquee-track flex w-max gap-3">
              {MARQUEE_ITEMS.map((chain, i) => (
                <span
                  key={`${chain}-${i}`}
                  className="whitespace-nowrap rounded-full border border-black/5 bg-white/90 px-5 py-2.5 text-[13px] font-medium text-[#292524]"
                >
                  {chain}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
