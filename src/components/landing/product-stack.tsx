"use client";

import { useState } from "react";
import { Reveal } from "./reveal";

type Row = { title: string; meta: string; status: string; tint: string; fg: string };
type Tab = {
  label: string;
  tag: string;
  title: string;
  desc: string;
  items: string[];
  window: string;
  rows: Row[];
  note: string;
};

const TABS: Tab[] = [
  {
    label: "Checkout",
    tag: "Hosted checkout",
    title: "A checkout page that does not feel like crypto",
    desc: "Drop-in hosted page under your brand. The customer picks a chain and a token, pays, and gets a receipt, you get one webhook.",
    items: [
      "Your logo, colours and domain on a hosted page",
      "Pay from any wallet, or scan a QR from mobile",
      "Funds settle to your address in a single transaction",
    ],
    window: "checkout.skypay.io · order #4821",
    rows: [
      { title: "Order #4821 · 240.00 USDC", meta: "Base · wallet 0x8f…a3d2", status: "Paid", tint: "rgba(16,185,129,.15)", fg: "#047857" },
      { title: "Order #4820 · 1,200.00 USDT", meta: "Solana · awaiting confirmation", status: "Pending", tint: "rgba(245,158,11,.16)", fg: "#b45309" },
      { title: "Order #4819 · 85.50 USDC", meta: "Arbitrum · settled in 2s", status: "Paid", tint: "rgba(16,185,129,.15)", fg: "#047857" },
      { title: "Order #4818 · 640.00 USDC", meta: "Base · dispute window open", status: "Escrow", tint: "rgba(255,94,0,.14)", fg: "#c2410c" },
    ],
    note: "Median confirmation to receipt: 2.4 seconds across pilot merchants.",
  },
  {
    label: "Payment links",
    tag: "Links & embeds",
    title: "One link, any amount, anywhere you talk to buyers",
    desc: "Generate a link from the dashboard or the API, then drop it in a DM, an invoice email, or a button on your site.",
    items: [
      "Fixed, variable or customer-entered amounts",
      "Expiry windows and single-use links",
      "Live status and payer address on every link",
    ],
    window: "dashboard · payment links",
    rows: [
      { title: "pay.skypay.io/r/design-retainer", meta: "Variable · 6 payments", status: "Active", tint: "rgba(16,185,129,.15)", fg: "#047857" },
      { title: "pay.skypay.io/r/nft-mint-allowlist", meta: "Fixed 0.08 ETH · single use", status: "Used", tint: "rgba(120,113,108,.16)", fg: "#57534e" },
      { title: "pay.skypay.io/r/api-credits-500", meta: "Fixed 500 USDC · no expiry", status: "Active", tint: "rgba(16,185,129,.15)", fg: "#047857" },
      { title: "pay.skypay.io/r/consult-hour", meta: "Expires in 3 days", status: "Scheduled", tint: "rgba(99,102,241,.15)", fg: "#4338ca" },
    ],
    note: "Links carry the same escrow terms as hosted checkout, nothing is bypassed.",
  },
  {
    label: "Subscriptions & invoices",
    tag: "Recurring billing",
    title: "Recurring revenue without asking twice",
    desc: "Token allowances charge on cycle. Invoices carry due dates, reminders and a pay link, and reconcile themselves.",
    items: [
      "Weekly, monthly or custom charge cycles",
      "Automatic retries and dunning on failed charges",
      "Invoice PDFs with the onchain reference attached",
    ],
    window: "dashboard · billing",
    rows: [
      { title: "Pro plan · 49 USDC / month", meta: "412 active subscribers", status: "Charging", tint: "rgba(99,102,241,.15)", fg: "#4338ca" },
      { title: "INV-2026-0184 · 3,400 USDC", meta: "Due in 4 days · reminder sent", status: "Open", tint: "rgba(59,130,246,.15)", fg: "#1d4ed8" },
      { title: "INV-2026-0179 · 900 USDC", meta: "Paid on Base · reconciled", status: "Paid", tint: "rgba(16,185,129,.15)", fg: "#047857" },
      { title: "Studio plan · 199 USDC / month", meta: "2 retries queued", status: "Retrying", tint: "rgba(245,158,11,.16)", fg: "#b45309" },
    ],
    note: "Allowance revoked? The customer is notified before the cycle fails.",
  },
  {
    label: "Disputes & refunds",
    tag: "Buyer protection",
    title: "Chargebacks that actually exist onchain",
    desc: "Each order gets an escrow window. If the buyer disputes, both sides upload evidence and resolution executes onchain, refund or release, one click.",
    items: [
      "Configurable escrow window per product or order",
      "Evidence thread for merchant and buyer",
      "Partial refunds and reversals without a support ticket",
    ],
    window: "dashboard · disputes",
    rows: [
      { title: "Case #118 · 640.00 USDC", meta: "Item not received · day 2 of 7", status: "Evidence", tint: "rgba(99,102,241,.15)", fg: "#4338ca" },
      { title: "Case #117 · 120.00 USDC", meta: "Resolved in merchant's favour", status: "Released", tint: "rgba(16,185,129,.15)", fg: "#047857" },
      { title: "Case #115 · 55.00 USDC", meta: "Partial refund executed", status: "Refunded", tint: "rgba(239,68,68,.14)", fg: "#b91c1c" },
      { title: "Case #113 · 2,000.00 USDT", meta: "Withdrawn by buyer", status: "Closed", tint: "rgba(120,113,108,.16)", fg: "#57534e" },
    ],
    note: "Dispute rate across pilot volume: 0.4%. Resolution median: 31 hours.",
  },
];

export function ProductStack() {
  const [active, setActive] = useState(0);
  const tab = TABS[active];

  return (
    <div id="product" className="bg-white px-5 py-22 sm:px-10">
      <div className="mx-auto max-w-[1200px]">
        <Reveal className="mb-11 text-center">
          <div className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#ea580c]">Complete payment stack</div>
          <h2 className="mt-3.5 text-balance font-serif text-[clamp(32px,3.8vw,52px)] font-bold leading-[1.12] tracking-[-0.025em] text-[#1c1917]">
            Everything you need to charge.
            <br />
            And to make it right.
          </h2>
          <p className="mx-auto mt-4 max-w-[540px] text-base leading-[1.7] text-[#57534e]">
            Four surfaces on one ledger. Switch between them to see what ships.
          </p>
        </Reveal>

        <Reveal delay={80}>
          <div className="flex flex-wrap justify-center gap-2">
            {TABS.map((t, i) => (
              <button
                key={t.label}
                onClick={() => setActive(i)}
                className={`cursor-pointer rounded-full border px-6 py-2.5 font-sans text-[13.5px] font-semibold transition-all duration-200 ease-[cubic-bezier(.16,1,.3,1)] ${
                  i === active ? "border-[#1c1917] bg-[#1c1917] text-white" : "border-black/10 bg-white/90 text-[#292524]"
                }`}
              >
                {t.label}
              </button>
            ))}
          </div>

          <div className="mt-8 rounded-3xl border border-[#1c1917]/5 bg-[#faf9f8]/85 p-2">
            <div className="grid grid-cols-1 overflow-hidden rounded-[20px] border border-[#1c1917]/5 bg-white shadow-[0_4px_20px_rgba(0,0,0,0.04)] md:grid-cols-[0.95fr_1.05fr]">
              <div className="border-b border-[#1c1917]/5 p-8 md:border-b-0 md:border-r">
                <div className="inline-flex items-center rounded-full bg-[#ff5e00]/10 px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-[0.09em] text-[#c2410c]">
                  {tab.tag}
                </div>
                <h3 className="mt-5 font-serif text-[38px] font-bold leading-[1.12] tracking-[-0.025em] text-[#1c1917]">
                  {tab.title}
                </h3>
                <p className="mt-3.5 text-[15px] leading-[1.75] text-[#57534e]">{tab.desc}</p>
                <div className="mt-6 flex flex-col gap-3">
                  {tab.items.map((it) => (
                    <div key={it} className="flex items-start gap-3">
                      <span className="mt-[7px] h-1.5 w-1.5 flex-none rounded-full bg-[#ea580c]" />
                      <span className="text-sm leading-[1.65] text-[#292524]">{it}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="panel-window-bg p-9">
                <div className="mb-4.5 flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#ffbd2e]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#28ca41]" />
                  <span className="ml-2 text-[11.5px] text-[#78716c]">{tab.window}</span>
                </div>
                <div className="flex flex-col gap-2.5">
                  {tab.rows.map((r) => (
                    <div
                      key={r.title}
                      className="flex items-center justify-between gap-3 rounded-2xl border border-[#1c1917]/5 bg-white/86 px-4.5 py-3.5"
                    >
                      <div>
                        <div className="text-[13.5px] font-semibold text-[#1c1917]">{r.title}</div>
                        <div className="mt-0.5 text-[11.5px] text-[#78716c]">{r.meta}</div>
                      </div>
                      <span
                        className="whitespace-nowrap rounded-full px-3 py-1 text-[11px] font-bold"
                        style={{ background: r.tint, color: r.fg }}
                      >
                        {r.status}
                      </span>
                    </div>
                  ))}
                </div>
                <div className="panel-note-bg mt-4 rounded-2xl border border-[#ff5e00]/16 px-4 py-3.5 text-[12.5px] leading-[1.6] text-[#7c2d12]">
                  {tab.note}
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </div>
  );
}
