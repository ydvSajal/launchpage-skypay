"use client";

import { useState } from "react";
import { Reveal } from "./reveal";

const FAQS = [
  {
    q: "Does SkyPay ever hold my funds?",
    a: "No. Payments settle from the buyer to your address in the same transaction. The only balance an escrow contract holds is an order still inside its dispute window, and that window is a parameter you set.",
  },
  {
    q: "How can a chargeback work onchain?",
    a: "Every charge opens with an escrow term. Inside that term the buyer can file a dispute, which freezes only that order's amount. Both parties submit evidence, resolution executes onchain, and the outcome is a public reference you can show in support.",
  },
  {
    q: "Which chains and tokens are supported at launch?",
    a: "Base, Ethereum, Arbitrum, Optimism, Polygon, BNB Chain, Sui and Solana, with USDC and USDT everywhere plus native assets per chain. Adding a chain does not change your integration.",
  },
  {
    q: "What does it cost?",
    a: "1% introductory fee per settled payment, no monthly minimum and no spread added at settlement. Waitlist merchants keep that rate for twelve months after launch.",
  },
  {
    q: "Can I settle to a bank account?",
    a: "Yes, payouts route to verified business accounts in 100+ countries and 120+ currencies. Local virtual accounts for fiat receiving are a separate onramp you can enable later.",
  },
  {
    q: "How much work is the integration?",
    a: "One POST to create a charge and one webhook to confirm it. SDKs for TypeScript, Python and Go, plus a sandbox key that mirrors mainnet behaviour including disputes.",
  },
];

export function Faq() {
  const [open, setOpen] = useState(0);

  return (
    <div id="faq" className="bg-white px-5 pb-10 pt-22 sm:px-10">
      <div className="mx-auto grid max-w-[1200px] grid-cols-1 items-start gap-8 md:grid-cols-[0.85fr_1.15fr] md:gap-16">
        <Reveal>
          <div className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#ea580c]">Questions</div>
          <h2 className="mt-3.5 font-serif text-[clamp(30px,3.4vw,46px)] font-bold leading-[1.12] tracking-[-0.025em] text-[#1c1917]">
            The things merchants ask first
          </h2>
          <p className="mt-4 text-[15px] leading-[1.75] text-[#57534e]">
            Still unsure? The docs cover contract addresses, dispute windows and webhook payloads in full.
          </p>
          <a
            id="docs"
            href="#docs"
            className="mt-5.5 inline-flex rounded-full border border-[#1c1917]/12 px-6 py-3 text-sm font-medium text-[#1c1917] transition-colors hover:bg-black/5"
          >
            Read the docs
          </a>
        </Reveal>
        <Reveal delay={100} className="flex flex-col gap-2.5">
          {FAQS.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={f.q} className="overflow-hidden rounded-2xl border border-[#1c1917]/6 bg-[#faf9f8]/80">
                <button
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  className="flex w-full cursor-pointer items-center justify-between gap-4 px-6 py-5 text-left font-sans text-[15.5px] font-semibold text-[#1c1917]"
                >
                  {f.q}
                  <span
                    className={`flex-none text-lg text-[#a8a29e] transition-transform duration-200 ease-[cubic-bezier(.16,1,.3,1)] ${isOpen ? "rotate-45" : ""}`}
                  >
                    +
                  </span>
                </button>
                <div
                  className="overflow-hidden transition-[max-height] duration-400 ease-[cubic-bezier(.16,1,.3,1)]"
                  style={{ maxHeight: isOpen ? "260px" : "0px" }}
                >
                  <p className="px-6 pb-5.5 text-sm leading-[1.75] text-[#57534e]">{f.a}</p>
                </div>
              </div>
            );
          })}
        </Reveal>
      </div>
    </div>
  );
}
