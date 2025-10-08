"use client";

import { useState } from "react";
import { Search, ShieldCheck, Users, Activity } from "lucide-react";
import BuySellContentToggole from "@/components/MarketComponents/BuySellContentToggole";

function Segmented({
  value,
  onChange,
}: {
  value: "buy" | "sell";
  onChange: (v: "buy" | "sell") => void;
}) {
  return (
    <div className="grid grid-cols-2 gap-2 overflow-hidden">
      <button
        onClick={() => onChange("buy")}
        className={`py-3 text-sm font-bold rounded-lg cursor-pointer ${
          value === "buy"
            ? "bg-[#0E3A57] text-white"
            : "bg-[#F3F4F6] text-slate-600"
        }`}
      >
        Buy
      </button>

      <button
        onClick={() => onChange("sell")}
        className={`py-3 text-sm font-bold rounded-lg cursor-pointer ${
          value === "sell"
            ? "bg-[#0E3A57] text-white"
            : "bg-[#F3F4F6] text-slate-600"
        }`}
      >
        Sell
      </button>
    </div>
  );
}

export default function MarketPage() {
  const [mode, setMode] = useState<"buy" | "sell">("buy");
  const [currency, setCurrency] = useState<
    "BTC" | "ETH" | "USDT" | "USD" | "EUR" | "ZAR"
  >("BTC");
  const [currencyOpen, setCurrencyOpen] = useState(false);

  return (
    <div>
      <div className="pt-4 pb-6 md:pb-8 space-y-4 bg-white w-full max-w-screen-2xl mx-auto px-3 sm:px-6 ">
        <div className="flex items-center gap-3">
          <div className="flex-1">
            <Segmented value={mode} onChange={setMode} />
          </div>
          <div className="relative">
            <button
              type="button"
              aria-haspopup="menu"
              aria-expanded={currencyOpen}
              onClick={() => setCurrencyOpen((v) => !v)}
              className="h-12 px-3 rounded-lg border border-[#E5E7EB] flex items-center justify-center text-sm text-slate-900 cursor-pointer"
            >
              <span className="font-medium">
                {currency === "BTC"
                  ? "₿"
                  : currency === "ETH"
                  ? "Ξ"
                  : currency === "USDT"
                  ? "₮"
                  : currency === "USD"
                  ? "$"
                  : currency === "EUR"
                  ? "€"
                  : "R"}{" "}
                {currency}
              </span>
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                className="text-slate-500 ml-2"
              >
                <path fill="currentColor" d="M7 10l5 5 5-5z" />
              </svg>
            </button>
            {currencyOpen ? (
              <div
                role="menu"
                className="absolute right-0 top-full mt-2 w-44 bg-white border border-[#E5E7EB] rounded-lg shadow-lg p-1 z-50"
              >
                <div className="px-2 py-1 text-[11px] font-semibold text-slate-500">
                  Crypto
                </div>
                <button
                  role="menuitem"
                  onClick={() => {
                    setCurrency("BTC");
                    setCurrencyOpen(false);
                  }}
                  className="w-full text-left px-2 py-2 rounded hover:bg-[#F3F4F6] text-sm text-slate-800 cursor-pointer"
                >
                  ₿ BTC
                </button>
                <button
                  role="menuitem"
                  onClick={() => {
                    setCurrency("ETH");
                    setCurrencyOpen(false);
                  }}
                  className="w-full text-left px-2 py-2 rounded hover:bg-[#F3F4F6] text-sm text-slate-800 cursor-pointer"
                >
                  Ξ ETH
                </button>
                <button
                  role="menuitem"
                  onClick={() => {
                    setCurrency("USDT");
                    setCurrencyOpen(false);
                  }}
                  className="w-full text-left px-2 py-2 rounded hover:bg-[#F3F4F6] text-sm text-slate-800 cursor-pointer"
                >
                  ₮ USDT
                </button>

                <div className="px-2 py-1 text-[11px] font-semibold text-slate-500">
                  Fiat
                </div>
                <button
                  role="menuitem"
                  onClick={() => {
                    setCurrency("USD");
                    setCurrencyOpen(false);
                  }}
                  className="w-full text-left px-2 py-2 rounded hover:bg-[#F3F4F6] text-sm text-slate-800 cursor-pointer"
                >
                  $ USD
                </button>
                <button
                  role="menuitem"
                  onClick={() => {
                    setCurrency("EUR");
                    setCurrencyOpen(false);
                  }}
                  className="w-full text-left px-2 py-2 rounded hover:bg-[#F3F4F6] text-sm text-slate-800 cursor-pointer"
                >
                  € EUR
                </button>
                <button
                  role="menuitem"
                  onClick={() => {
                    setCurrency("ZAR");
                    setCurrencyOpen(false);
                  }}
                  className="w-full text-left px-2 py-2 rounded hover:bg-[#F3F4F6] text-sm text-slate-800 cursor-pointer"
                >
                  R ZAR
                </button>
              </div>
            ) : null}
          </div>
        </div>

        {/* input */}
        <div className="h-12 rounded-lg border border-[#E5E7EB] flex items-center px-4 text-slate-500 bg-[#F9FAFB]">
          <Search className="h-4 w-4 mr-2" />
          <input
            className="w-full bg-transparent outline-none placeholder:text-slate-500/70 text-sm text-slate-900"
            placeholder="Search amount or payment method..."
          />
        </div>
        {/* after input */}
        <div className="flex flex-nowrap items-center justify-around text-xs text-slate-500 px-1 rounded-lg border border-[#E5E7EB] h-12 bg-[#F9FAFB]">
          <div className="flex items-center gap-2 whitespace-nowrap">
            <ShieldCheck className="h-4 w-4" />
            <span className="text-slate-900/80">Secure Escrow</span>
          </div>
          <div className="flex items-center gap-2 whitespace-nowrap">
            <Users className="h-4 w-4" />
            <span>3,247 Active</span>
          </div>
          <div className="flex items-center gap-2 whitespace-nowrap">
            <Activity className="h-4 w-4" />
            <span>24/7 Trading</span>
          </div>
        </div>
      </div>

      {/*  */}
      <BuySellContentToggole mode={mode} />
      {/*  */}
    </div>
  );
}
