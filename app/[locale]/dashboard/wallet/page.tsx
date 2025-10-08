import { Button } from "@/components/ui/button";
import AssetRow from "@/components/WalletComponents/AssetRow";
import RecentActivity from "@/components/WalletComponents/RecentActivity";
import {
  ArrowDownLeft,
  ArrowUpRight,
  Check,
  Copy,
  Eye,
  QrCode,
} from "lucide-react";
import type * as React from "react";

export default function WalletPage() {
  return (
    <main className="min-h-screen w-full max-w-screen-2xl mx-auto px-3 sm:px-6 pb-6 pt-4 md:pb-8 bg-[#F5F7FA] text-slate-800">
      <div className="">
        {/* Balance Card */}
        <section aria-label="Total Balance" className="mb-6">
          <div className="rounded-2xl bg-gradient-to-br from-[#0E4663] via-[#135A83] to-[#1C6EA4] p-4 sm:p-6 shadow-[0_10px_30px_-12px_rgba(16,66,99,0.5)]">
            <div className="flex items-start justify-between">
              <p className="text-white/80 text-sm">Total Balance</p>
              <button
                aria-label="Toggle balance visibility"
                className="h-8 w-8 flex items-center justify-center rounded-full hover:bg-white/10 transition"
              >
                <Eye className="h-5 w-5 text-white/90" />
              </button>
            </div>
            <div className="mt-3 sm:mt-4">
              <div className="flex items-baseline gap-3">
                <span className="text-[28px] sm:text-4xl md:text-5xl font-semibold text-white tabular-nums">
                  28,211.48
                </span>
                <span className="text-white/80 font-medium">ZAR</span>
              </div>
            </div>

            {/* Segmented Actions */}
            <div className="mt-5 sm:mt-6 grid grid-cols-2 gap-3">
              <button className="group w-full rounded-xl bg-white/10 hover:bg-white/15 text-white px-4 py-3 sm:py-4 transition shadow-inner border border-white/10">
                <div className="flex items-center justify-center gap-2">
                  <ArrowUpRight className="h-5 w-5 text-white/90" />
                  <span className="font-medium">Send</span>
                </div>
              </button>
              <button className="group w-full rounded-xl bg-white/10 hover:bg-white/15 text-white px-4 py-3 sm:py-4 transition shadow-inner border border-white/10">
                <div className="flex items-center justify-center gap-2">
                  <ArrowDownLeft className="h-5 w-5 text-white/90 inline-block shrink-0" />
                  <span className="font-medium">Receive</span>
                </div>
              </button>
            </div>
          </div>
        </section>

        {/* Assets */}
        <section aria-label="Assets" className="mb-4 sm:mb-6">
          <h2 className="text-slate-700 font-semibold mb-3">Assets</h2>
          <div className="space-y-3">
            <AssetRow
              badge="B"
              symbol="BTC"
              name="Bitcoin"
              amount="0.00142857"
              fiat="19,885.98 ZAR"
              change="+2.3%"
              changeColor="text-emerald-600"
              highlight
            />
            <AssetRow
              badge="₮"
              symbol="USDT"
              name="Tether"
              amount="450.00"
              fiat="8,325.50 ZAR"
              change="0.0%"
              changeColor="text-slate-400"
              highlight
            />
          </div>
        </section>

        {/* Utility Actions */}
        <section aria-label="Actions" className="mb-6 sm:mb-8">
          <div className="grid grid-cols-2 sm:gap-3 gap-2">
            <button className="flex items-center justify-center gap-3 rounded-xl border border-slate-200 bg-white px-4 py-3 hover:bg-slate-50 transition">
              <QrCode className="h-5 w-5 text-slate-600" />
              <span className="text-slate-700 font-medium">Scan QR</span>
            </button>
            <button className="flex items-center justify-center gap-3 rounded-xl border border-slate-200 bg-white px-4 py-3 hover:bg-slate-50 transition">
              <Copy className="h-5 w-5 text-slate-600" />
              <span className="text-slate-700 font-medium">Copy Address</span>
            </button>
          </div>
        </section>

        {/* Recent Activity */}
        <section aria-label="Recent Activity" className="">
          <div className="flex items-center justify-between">
            <h2 className="text-slate-700 font-semibold">Recent Activity</h2>
            <a
              href="#"
              className="text-sm font-medium text-sky-500 hover:text-sky-700"
            >
              View All
            </a>
          </div>

          <div className=" overflow-hidden">
            <RecentActivity
              status="completed"
              statusColor="bg-emerald-100 text-emerald-700"
              icon={
                <span className="h-8 w-8 rounded-full bg-emerald-100 flex items-center justify-center">
                  <ArrowDownLeft className="h-5 w-5 text-emerald-600" />
                </span>
              }
              title="+0.00085 BTC"
              titleClass="text-slate-800"
              subtitle="+11,830.45 ZAR"
              subtitleClass="text-emerald-600"
              description="Trade with LiveYoungTrades"
              timestamp="Today, 09:12 AM"
            />
            <RecentActivity
              status="completed"
              statusColor="bg-emerald-100 text-emerald-700"
              icon={
                <span className="h-8 w-8 rounded-full bg-[#DBEAFE] flex items-center justify-center">
                  <ArrowUpRight className="h-5 w-5 text-sky-600" />
                </span>
              }
              title="+0.00085 BTC"
              titleClass="text-slate-800"
              subtitle="+11,830.45 ZAR"
              subtitleClass="text-emerald-600"
              description="Trade with LiveYoungTrades"
              timestamp="Today, 09:12 AM"
            />
            <RecentActivity
              status="pending"
              statusColor="bg-[#FEF9C3] text-yellow-700"
              icon={
                <span className="h-8 w-8 rounded-full bg-emerald-100 flex items-center justify-center">
                  <ArrowDownLeft className="h-5 w-5 text-emerald-600" />
                </span>
              }
              title="+0.00085 BTC"
              titleClass="text-slate-800"
              subtitle="+11,830.45 ZAR"
              subtitleClass="text-emerald-600"
              description="Trade with LiveYoungTrades"
              timestamp="Today, 09:12 AM"
            />
            <RecentActivity
              status="completed"
              statusColor="bg-emerald-100 text-emerald-700"
              icon={
                <span className="h-8 w-8 rounded-full bg-[#DBEAFE] flex items-center justify-center">
                  <ArrowUpRight className="h-5 w-5 text-sky-600" />
                </span>
              }
              title="+0.00085 BTC"
              titleClass="text-slate-800"
              subtitle="+11,830.45 ZAR"
              subtitleClass="text-emerald-600"
              description="Trade with LiveYoungTrades"
              timestamp="Today, 09:12 AM"
            />
          </div>
        </section>
      </div>
    </main>
  );
}
