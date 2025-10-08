"use client";

import { useMemo, useState } from "react";
import TradeCard, { type Trade } from "@/components/TradesComponents/TradeCard";
import TabButton from "@/components/TradesComponents/TabButton";

export default function TradesPage() {
  const trades: Trade[] = useMemo(
    () => [
      {
        id: 2847,
        code: "#TRD-2847",
        side: "buy",
        counterparty: "LiveYoungTrades",
        amountBtc: 0.00085,
        valueZar: 11830.45,
        method: "FNB E-WALLET",
        status: "pending",
        time: "29:45",
      },
      {
        id: 2846,
        code: "#TRD-2846",
        side: "sell",
        counterparty: "CryptoKing_SA",
        amountBtc: 0.00042,
        valueZar: 5845.2,
        method: "CAPITEC PAY",
        status: "sent",
        time: "18:32",
      },
      // Extra dummy cards for demo
      {
        id: 2845,
        code: "#TRD-2845",
        side: "buy",
        counterparty: "Mpho_Trades",
        amountBtc: 0.00031,
        valueZar: 4321.9,
        method: "ABSA CASH SEND",
        status: "pending",
        time: "12:10",
      },
      {
        id: 2844,
        code: "#TRD-2844",
        side: "sell",
        counterparty: "SA_BitHub",
        amountBtc: 0.0012,
        valueZar: 16990.75,
        method: "STANDARD BANK INSTANT",
        status: "sent",
        time: "07:55",
      },
      {
        id: 2843,
        code: "#TRD-2843",
        side: "buy",
        counterparty: "DurbanCoins",
        amountBtc: 0.00027,
        valueZar: 3690.0,
        method: "NEDBANK SEND-IMALI",
        status: "cancelled",
        time: "—",
      },
    ],
    []
  );

  type TabKey = "active" | "completed" | "cancelled";
  const [tab, setTab] = useState<TabKey>("active");

  const counts = useMemo(() => {
    const pending = trades.filter((t) => t.status === "pending").length;
    const sent = trades.filter((t) => t.status === "sent").length;
    const cancelled = trades.filter((t) => t.status === "cancelled").length;
    return { pending, sent, cancelled };
  }, [trades]);

  const filtered = useMemo(() => {
    if (tab === "active") return trades.filter((t) => t.status === "pending");
    if (tab === "completed") return trades.filter((t) => t.status === "sent");
    return trades.filter((t) => t.status === "cancelled");
  }, [tab, trades]);

  return (
    <main className="min-h-screen w-full max-w-screen-2xl mx-auto px-3 sm:px-6 pb-6 pt-4 md:pb-8 bg-[#F5F7FA] text-slate-800">
      {/* Title */}
      <h1 className="text-[20px] sm:text-[22px] font-semibold leading-tight text-[#154D71] mb-4 sm:mb-5">
        My Trades
      </h1>

      {/* Tabs */}
      <div className="border-b border-slate-200">
        <div className="flex items-center gap-6">
          <TabButton
            label={`Active (${counts.pending})`}
            active={tab === "active"}
            onClick={() => setTab("active")}
          />
          <TabButton
            label={`Completed (${counts.sent})`}
            active={tab === "completed"}
            onClick={() => setTab("completed")}
          />
          <TabButton
            label={`Cancelled (${counts.cancelled})`}
            active={tab === "cancelled"}
            onClick={() => setTab("cancelled")}
          />
        </div>
      </div>

      {/* Cards */}
      <div className="mt-4 sm:mt-6 space-y-4 sm:space-y-5">
        {filtered.map((trade) => (
          <TradeCard key={trade.id} trade={trade} />
        ))}
        {filtered.length === 0 && (
          <div className="rounded-xl border border-slate-200 bg-white p-6 text-center text-slate-500">
            No trades in this tab.
          </div>
        )}
      </div>
    </main>
  );
}
