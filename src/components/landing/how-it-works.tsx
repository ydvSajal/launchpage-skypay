import { Reveal } from "./reveal";

const STEPS = [
  {
    step: "01",
    title: "Create a charge",
    desc: "One API call, or a link from the dashboard. Hosted checkout, embed, or QR.",
    color: "text-[#ea580c] bg-[#ff5e00]/12",
    icon: (
      <svg width="27" height="27" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round">
        <path d="M10 13a5 5 0 007 0l3-3a5 5 0 00-7-7l-1 1" />
        <path d="M14 11a5 5 0 00-7 0l-3 3a5 5 0 007 7l1-1" />
      </svg>
    ),
  },
  {
    step: "02",
    title: "Customer pays onchain",
    desc: "Any wallet, any supported chain. Risk and compliance checks run in the background.",
    color: "text-[#4f46e5] bg-indigo-500/12",
    icon: (
      <svg width="27" height="27" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round">
        <path d="M4 8h16v10a2 2 0 01-2 2H6a2 2 0 01-2-2z" />
        <path d="M4 8l3-4h10l3 4" />
        <path d="M12 12v5" />
        <path d="M9.5 14.5L12 17l2.5-2.5" />
      </svg>
    ),
  },
  {
    step: "03",
    title: "Settle and reconcile",
    desc: "Keep it onchain or pay out to a verified business account. Every deposit in one ledger.",
    color: "text-[#059669] bg-emerald-500/12",
    icon: (
      <svg width="27" height="27" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round">
        <path d="M3 10l9-6 9 6" />
        <path d="M5 10v9h14v-9" />
        <path d="M9 19v-5h6v5" />
      </svg>
    ),
  },
];

export function HowItWorks() {
  return (
    <div id="how" className="relative overflow-hidden bg-gradient-to-b from-[#fffaf5] to-white px-5 py-22 sm:px-10">
      <div className="how-glow pointer-events-none absolute left-1/2 -top-[220px] h-[460px] w-[1000px] -translate-x-1/2 rounded-full blur-[80px]" />
      <div className="relative z-10 mx-auto max-w-[1200px]">
        <Reveal className="mb-11 text-center">
          <div className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#4f46e5]">How it works</div>
          <h2 className="mt-3.5 font-serif text-[clamp(32px,3.8vw,52px)] font-bold tracking-[-0.025em] text-[#1c1917]">
            Three steps from integration to bank
          </h2>
        </Reveal>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {STEPS.map((s, i) => (
            <Reveal
              key={s.step}
              delay={i * 90}
              className="rounded-2xl border border-[#1c1917]/6 bg-white/85 p-8 text-center transition-[box-shadow,translate] duration-200 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(0,0,0,0.08)]"
            >
              <div className={`mx-auto flex h-[60px] w-[60px] items-center justify-center rounded-2xl ${s.color}`}>{s.icon}</div>
              <div className="mt-5 text-[11px] font-bold tracking-[0.12em] text-[#a8a29e]">{s.step}</div>
              <h3 className="mt-2 text-xl font-bold text-[#1c1917]">{s.title}</h3>
              <p className="mt-2.5 text-sm leading-[1.7] text-[#57534e]">{s.desc}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
}
