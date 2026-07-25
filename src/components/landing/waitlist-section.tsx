import { Reveal } from "./reveal";
import { WaitlistForm } from "./waitlist-form";

export function WaitlistSection() {
  return (
    <div id="waitlist" className="relative overflow-hidden bg-white px-5 py-20 pt-19 text-center sm:px-10">
      <div className="waitlist-glow pointer-events-none absolute left-1/2 -bottom-[260px] h-[560px] w-[1100px] -translate-x-1/2 rounded-full blur-[80px]" />
      <Reveal className="relative z-10 mx-auto max-w-[720px]">
        <span className="text-lg tracking-[7px] text-[#d6d3d1]">&#10022; &#10022; &#10022;</span>
        <h2 className="mt-5.5 font-serif text-[clamp(32px,4.2vw,58px)] font-bold leading-[1.1] tracking-[-0.025em] text-[#1c1917]">
          Take payments this quarter
        </h2>
        <p className="mx-auto mt-4 max-w-[520px] text-[16.5px] leading-[1.7] text-[#57534e]">
          Waitlist merchants get onboarding support, a sandbox key, and the introductory fee locked for a year.
        </p>
        <div className="mt-8">
          <WaitlistForm variant="accent" />
        </div>
      </Reveal>
    </div>
  );
}
