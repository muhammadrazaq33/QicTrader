"use client";

import type React from "react";

import {
  TrendingUp,
  Lightbulb,
  Plus,
  Store,
  Wallet,
  BarChart3,
  Handshake,
} from "lucide-react";
import { ResellerOfferCards } from "../../../../components/ResellerComponents/ResellerOfferCards";

export default function ResellerPage() {
  const offers = [
    {
      vendorName: "LiveYoungTrades",
      method: "FNB E-WALLET",
      vendorPct: "+8.9%",
      spreadPct: "+3.5%",
      clientPct: "+12.4%",
      clicks: 47,
      trades: 8,
      earned: "1,247.80 ZAR",
      link: "qictrader.com/offer/xyz123",
    },
    {
      vendorName: "CryptoKing_SA",
      method: "CAPITEC PAY",
      vendorPct: "+7.2%",
      spreadPct: "+2%",
      clientPct: "+9.2%",
      clicks: 0,
      trades: 0,
      earned: "0.00 ZAR",
      link: "qictrader.com/offer/ab456",
    },
  ];

  return (
    <div className="min-h-screen w-full max-w-screen-2xl mx-auto px-3 sm:px-6 pb-6 pt-4 md:pb-8 bg-[#F5F7FA] text-slate-800">
      {/* Header */}
      <header className="mb-4 sm:mb-5">
        <h1 className="text-[20px] sm:text-[22px] font-semibold leading-tight text-[#154D71]">
          Reseller Hub
        </h1>
        <p className="text-sm sm:text-[15px] text-[#394048]">
          Resell vendor offers without holding inventory
        </p>
      </header>

      {/* Earnings summary */}
      <section className="relative mb-4 sm:mb-6">
        <div className="rounded-2xl bg-gradient-to-br from-[#0E4663] via-[#135A83] to-[#1C6EA4] p-4 sm:p-6 text-white shadow-md ring-1 ring-black/10">
          <button
            type="button"
            className="absolute right-3 top-3 inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/20 text-white hover:bg-white/25"
            aria-label="View performance"
            title="View performance"
          >
            <TrendingUp className="h-5 w-5" />
          </button>

          <p className="text-xs font-medium tracking-wide text-white/80">
            Total Reseller Earnings
          </p>
          <p className="mt-1 text-3xl font-semibold sm:text-4xl">
            2,093.30 ZAR
          </p>

          <div className="mt-8 grid grid-cols-3 gap-3">
            <div className="rounded-lg bg-white/10 px-3 py-2 group hover:bg-white/15 transition shadow-inner">
              <p className="text-[11px] font-medium text-white/80">
                Active Offers
              </p>
              <p className="text-base font-semibold">2</p>
            </div>
            <div className="rounded-lg bg-white/10 px-3 py-2 group hover:bg-white/15 transition shadow-inner">
              <p className="text-[11px] font-medium text-white/80">
                Total Trades
              </p>
              <p className="text-base font-semibold">13</p>
            </div>
            <div className="rounded-lg bg-white/10 px-3 py-2 group hover:bg-white/15 transition shadow-inner">
              <p className="text-[11px] font-medium text-white/80">
                Avg. Markup
              </p>
              <p className="text-base font-semibold">2.8%</p>
            </div>
          </div>
        </div>
      </section>

      {/* Info banner */}
      <section className="mb-4 sm:mb-6">
        <div className="flex items-start gap-3 rounded-xl border border-[#CFE2FF] bg-[#F0F6FF] px-3 py-3 sm:px-4">
          <div className="mt-0.5 inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#C0DBFE] text-[#1C6FD3]">
            <Lightbulb className="h-5 w-5" />
          </div>
          <p className="text-xs text-[#394048] sm:text-sm">
            <span className="font-semibold text-[#154D71]">How it works: </span>
            Pick any vendor offer, add your markup, share your link. When
            clients buy through you, the vendor fulfills the trade and you earn
            the spread—zero capital needed.
          </p>
        </div>
      </section>

      {/* Active offers header */}
      <section className="mb-3 flex items-center justify-between">
        <h2 className="text-[15px] font-semibold text-slate-900">
          My Active Offers
        </h2>
        <button
          type="button"
          className="inline-flex items-center gap-2 rounded-lg bg-[#33A1E0] px-3 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-[#4BB8F5] cursor-pointer"
        >
          <Plus className="h-4 w-4" />
          Create
        </button>
      </section>

      {/* Offers list */}
      <section className="space-y-4">
        {offers.map((o) => (
          <ResellerOfferCards key={o.link} {...o} />
        ))}
      </section>
    </div>
  );
}
