"use client";

import React, { useState } from "react";

export default function SignInView() {
  const [email, setEmail] = useState("camille@nexkal.app");
  const [password, setPassword] = useState("password123");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showForgotNotice, setShowForgotNotice] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
    }, 1200);
  };

  return (
    <div className="min-h-screen w-full flex flex-col lg:flex-row bg-[#F8F9FA] text-zinc-900 selection:bg-[#EB4B44]/20 selection:text-[#EB4B44] font-sans antialiased">
      {/* Left Column: Coral Hero / Brand Banner */}
      <section className="relative w-full lg:w-[44%] xl:w-[42%] min-h-[420px] lg:min-h-screen bg-gradient-to-b from-[#F57067] via-[#EE5851] to-[#EA4B44] flex flex-col justify-between p-8 sm:p-12 lg:p-16 xl:p-20 overflow-hidden text-white select-none">
        {/* Subtle decorative curved circular layers to match design aesthetics */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-16 -right-20 w-[420px] h-[420px] rounded-full bg-white/[0.09] blur-[0.5px]"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute top-1/4 -right-12 w-[340px] h-[340px] rounded-full bg-white/[0.05]"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-28 -left-20 w-[540px] h-[540px] rounded-full bg-white/[0.08]"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-36 right-0 w-[420px] h-[420px] rounded-full bg-white/[0.06]"
        />

        {/* Top: Logo */}
        <div className="relative z-10 flex items-center gap-3">
          <div className="w-9 h-9 rounded-[10px] bg-white/20 backdrop-blur-md flex items-center justify-center shadow-[inset_0_1px_1px_rgba(255,255,255,0.3)]">
            <span className="text-white font-bold text-xl leading-none">n</span>
          </div>
          <span className="text-white font-bold text-2xl tracking-tight">
            nexkal
          </span>
        </div>

        {/* Bottom: Hero Copy */}
        <div className="relative z-10 mt-16 lg:mt-0 max-w-lg">
          <p className="text-[11px] font-semibold tracking-[0.24em] text-white/75 uppercase mb-3.5">
            SUPER ADMIN
          </p>
          <h1 className="text-3xl sm:text-4xl lg:text-[44px] xl:text-[48px] font-bold text-white tracking-tight leading-[1.12] mb-5">
            Run the app.
            <br />
            Not the user&apos;s diary.
          </h1>
          <p className="text-white/80 text-[14.5px] sm:text-[15px] leading-relaxed max-w-[420px]">
            Subscriptions, AI cost, food data and support — without ever seeing
            what someone ate.
          </p>
        </div>
      </section>

      {/* Right Column: Sign In Form */}
      <main className="flex-1 flex items-center justify-center p-6 sm:p-10 lg:p-16 bg-[#F8F9FA]">
        <div className="w-full max-w-[390px] mx-auto">
          {/* Header */}
          <div className="mb-7">
            <h2 className="text-[30px] sm:text-[32px] font-bold text-zinc-900 tracking-tight leading-tight">
              Sign in to <span className="text-[#E84E46]">admin</span>
            </h2>
            <p className="text-zinc-500 text-[13.5px] mt-2 font-normal">
              Restricted to the Nexkal team. Every action is logged.
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Work Email Field */}
            <div className="space-y-1.5">
              <label
                htmlFor="work-email"
                className="block text-[13px] font-medium text-zinc-600"
              >
                Work email
              </label>
              <input
                id="work-email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="camille@nexkal.app"
                required
                className="w-full px-4 py-3 rounded-xl border border-zinc-200 bg-white text-zinc-900 text-[14px] placeholder-zinc-400 shadow-sm focus:outline-none focus:border-[#FFA39E] focus:ring-4 focus:ring-[#EE5249]/15 transition-all"
              />
            </div>

            {/* Password Field */}
            <div className="space-y-1.5">
              <label
                htmlFor="password"
                className="block text-[13px] font-medium text-zinc-600"
              >
                Password
              </label>
              <div className="relative">
                <input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="w-full pl-4 pr-20 py-3 rounded-xl border border-[#FFA39E] bg-white text-zinc-900 text-[14px] tracking-[0.25em] shadow-[0_0_0_3.5px_rgba(238,82,73,0.14)] focus:outline-none focus:border-[#EB4B44] focus:ring-4 focus:ring-[#EE5249]/20 transition-all"
                />
                <button
                  type="button"
                  onClick={() => setShowForgotNotice(true)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-[13px] font-medium text-zinc-400 hover:text-[#EB4B44] transition-colors cursor-pointer select-none"
                >
                  Forgot?
                </button>
              </div>

              {showForgotNotice && (
                <div className="mt-2 p-3 bg-amber-50 border border-amber-200 text-amber-800 rounded-lg text-xs flex items-center justify-between">
                  <span>Please contact the security admin to reset your credentials.</span>
                  <button
                    type="button"
                    onClick={() => setShowForgotNotice(false)}
                    className="text-amber-900 font-bold ml-2 text-sm"
                  >
                    ×
                  </button>
                </div>
              )}
            </div>

            {/* Continue Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full mt-2 py-3.5 px-4 rounded-2xl bg-gradient-to-r from-[#FF665E] to-[#EB4A44] hover:from-[#FF554C] hover:to-[#E13B35] text-white font-medium text-[15px] shadow-[0_8px_20px_rgba(235,74,68,0.32)] hover:shadow-[0_10px_24px_rgba(235,74,68,0.42)] active:scale-[0.99] transition-all cursor-pointer flex items-center justify-center disabled:opacity-80"
            >
              {isSubmitting ? (
                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              ) : (
                "Continue"
              )}
            </button>
          </form>

          {/* Security Notice */}
          <div className="mt-8 flex items-center justify-center gap-2 text-zinc-400 text-[12px] font-normal">
            <svg
              className="w-3.5 h-3.5 stroke-zinc-400 fill-none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polygon points="12 2 21.5 7.5 21.5 16.5 12 22 2.5 16.5 2.5 7.5 12 2" />
            </svg>
            <span>Two-step verification is required for every admin</span>
          </div>
        </div>
      </main>
    </div>
  );
}
