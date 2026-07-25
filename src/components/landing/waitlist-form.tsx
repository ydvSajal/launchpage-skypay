"use client";

import { useState } from "react";

export function WaitlistForm({
  variant = "dark",
  extraLink,
}: {
  variant?: "dark" | "accent";
  extraLink?: React.ReactNode;
}) {
  const [email, setEmail] = useState("");
  const [joined, setJoined] = useState(false);

  function handleJoin() {
    if (!email.includes("@")) return;
    setJoined(true);
  }

  const buttonClass =
    variant === "dark"
      ? "bg-[#1c1917] shadow-[0_8px_24px_rgba(28,25,23,0.3)] transition-all duration-200 ease-[cubic-bezier(.16,1,.3,1)] hover:-translate-y-px hover:shadow-[0_10px_30px_rgba(0,0,0,0.24)]"
      : "bg-[#ea580c] shadow-[0_8px_24px_rgba(234,88,12,0.32)] transition-all duration-200 ease-[cubic-bezier(.16,1,.3,1)] hover:-translate-y-px hover:bg-[#c2410c]";

  const focusRing = variant === "dark" ? "focus:border-[#818cf8]" : "focus:border-[#fb923c]";

  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-wrap justify-center gap-2.5">
        <input
          aria-label="Email address"
          placeholder="you@company.com"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            setJoined(false);
          }}
          className={`w-[290px] rounded-full border border-black/10 bg-white/95 px-6 py-4 font-sans text-[14.5px] text-[#1c1917] outline-none ${focusRing}`}
        />
        <button
          onClick={handleJoin}
          className={`rounded-full px-8 py-4 font-sans text-[15px] font-semibold text-white cursor-pointer ${buttonClass}`}
        >
          {joined ? "You're on the list" : "Join waitlist"}
        </button>
        {extraLink}
      </div>
      <div className="mt-4 text-[12.5px] text-[#78716c]">
        {joined
          ? "Thanks, we'll email your sandbox key when onboarding opens."
          : "No spam. One email when your sandbox key is ready."}
      </div>
    </div>
  );
}
