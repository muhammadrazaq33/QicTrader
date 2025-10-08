"use client";

import type React from "react";

import {
  BadgePercent,
  DollarSign,
  Users,
  TrendingUp,
  BarChart3,
} from "lucide-react";
import ShareLink from "@/components/AffiliateComponents/ShareLink";
import StatsCard from "@/components/AffiliateComponents/StatsCard";

type Stat = {
  icon: React.ElementType;
  value: string;
  label: string;
};

export default function AffiliatePage() {
  // Mock data to mirror the screenshot
  const referralCode = "QICYT247";
  const shareUrl = `https://qictrader.com/?ref=${referralCode}`;

  const statsTop: Stat[] = [
    { icon: DollarSign, value: "4,287.50 ZAR", label: "Total Earnings" },
    { icon: Users, value: "23", label: "Active Referrals" },
  ];
  const statsBottom: Stat[] = [
    { icon: TrendingUp, value: "847.20 ZAR", label: "This Month" },
    { icon: BarChart3, value: "68%", label: "Conversion Rate" },
  ];

  return (
    <main className="w-full max-w-screen-2xl mx-auto px-3 sm:px-6 pb-6 pt-4 md:pb-8 bg-[#F5F7FA] text-slate-800">
      {/* Page Header */}
      <header className="mb-4 sm:mb-5">
        <h1 className="text-[20px] sm:text-[22px] font-semibold leading-tight text-[#154D71]">
          Affiliate Program
        </h1>
        <p className="text-sm sm:text-[15px] text-[#394048]">
          Earn commissions by referring traders
        </p>
      </header>

      {/* Commission Banner */}
      <section
        aria-label="Commission Rate"
        className="rounded-2xl p-5 sm:p-6 md:p-7 text-white shadow-[0_6px_18px_rgba(15,25,35,0.10)] mb-5 sm:mb-6"
        style={{
          background:
            "linear-gradient(90deg, #1F5E86 0%, #287AA6 45%, #2FA6DD 100%)",
        }}
      >
        <div className="flex items-center gap-2 sm:gap-3">
          <div className="inline-flex items-center justify-center rounded-full bg-white/15 p-2">
            <BadgePercent className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
          </div>
          <div className="leading-[1.1]">
            <div className="text-sm sm:text-[15px] font-medium opacity-95">
              Commission Rate
            </div>
            <div className="text-2xl sm:text-4xl font-semibold tracking-tight">
              15%
            </div>
          </div>
        </div>

        <p className="mt-3.5 text-sm sm:text-[15px] text-white/90">
          Earn 15% commission on every trade your referrals complete. No limits,
          lifetime earnings.
        </p>

        {/* Referral Code Bar */}
        <div className="mt-4 sm:mt-5 rounded-xl bg-white/10 border border-white/15 backdrop-blur-[1px] px-4 sm:px-5 py-3 sm:py-3.5 group hover:bg-white/15 transition shadow-inner">
          <div className="text-[13px] sm:text-sm text-white/80">
            Your Referral Code
          </div>
          <div className="mt-1 font-semibold tracking-wider text-[15px] sm:text-[16px]">
            {referralCode}
          </div>
        </div>
      </section>

      {/* Stats Grid */}
      <section
        aria-label="Affiliate Stats"
        className="grid grid-cols-2 gap-2 sm:gap-4"
      >
        {statsTop.map((s, i) => (
          <StatsCard key={i} {...s} />
        ))}
        {statsBottom.map((s, i) => (
          <StatsCard key={`b-${i}`} {...s} />
        ))}
      </section>

      {/* Share Link */}
      <section aria-label="Share Your Link" className="mt-5 sm:mt-6">
        <h2 className="sm:text-[18px] text-[16px] font-semibold text-[#154D71] mb-2">
          Share Your Link
        </h2>
        <ShareLink url={shareUrl} />
      </section>
    </main>
  );
}
