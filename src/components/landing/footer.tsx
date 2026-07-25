import { FooterBloom } from "./footer-bloom";

const COLUMNS = [
  { heading: "Product", links: [["Checkout", "#product"], ["Payment links", "#product"], ["Subscriptions", "#product"], ["Disputes", "#product"]] },
  { heading: "Developers", links: [["Docs", "#docs"], ["API reference", "#docs"], ["Webhooks", "#docs"], ["Status", "#docs"]] },
  { heading: "Company", links: [["About", "#waitlist"], ["Security", "#waitlist"], ["Terms", "#waitlist"], ["Contact", "#waitlist"]] },
] as const;

export function Footer() {
  return (
    <div className="relative overflow-hidden bg-[#fffaf6] px-5 pb-8 pt-17 sm:px-10">
      <FooterBloom />
      <div className="relative z-10 mx-auto max-w-[1200px]">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-[2fr_1fr_1fr_1fr]">
          <div>
            <div className="font-serif text-2xl font-semibold text-[#1c1917]">SkyPay</div>
            <p className="mt-3 max-w-[300px] text-sm leading-[1.7] text-[#57534e]">
              Crypto checkout with real buyer protection. Non-custodial by default.
            </p>
          </div>
          {COLUMNS.map((col) => (
            <div key={col.heading}>
              <div className="text-[11px] font-bold uppercase tracking-[0.12em] text-[#a8a29e]">{col.heading}</div>
              <div className="mt-4 flex flex-col gap-2.5">
                {col.links.map(([label, href]) => (
                  <a key={label} href={href} className="text-sm text-[#57534e]">
                    {label}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="mt-11 flex flex-wrap items-center justify-between gap-2.5 border-t border-[#1c1917]/7 pt-6">
          <span className="text-[13px] text-[#a8a29e]">&copy; 2026 SkyPay Labs. All rights reserved.</span>
          <span className="text-[11px] uppercase tracking-[0.2em] text-[#a8a29e]">Non-custodial &middot; Escrowed disputes</span>
        </div>
      </div>
    </div>
  );
}
