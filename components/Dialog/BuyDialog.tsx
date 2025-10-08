import React from "react";
import {
  X,
  PlayCircle,
  ShieldCheck,
  Clock,
  Flame,
  ThumbsUp,
  Activity,
  Clipboard,
  Check,
} from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";

export const BuyDialog = () => {
  return (
    <Dialog>
      <DialogTrigger>
        <button className="h-10 px-4 rounded-md bg-[#33A1E0] text-white text-sm font-medium cursor-pointer">
          Buy ฿
        </button>
      </DialogTrigger>
      <DialogContent
        className="
          max-w-[640px] p-0 rounded-2xl bg-white
          shadow-xl table-scrollbar max-h-[95vh] overflow-y-auto
        "
      >
        {/* Header */}

        {/* Body */}
        <div className="space-y-5 p-4 mt-4">
          {/* Seller info card */}
          <section className="rounded-xl border border-gray-200 bg-gray-50 p-4">
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-500 text-white">
                  <PlayCircle className="h-5 w-5" />
                </div>
                <div className="space-y-1">
                  <div className="flex flex-wrap items-center gap-1.5">
                    <span className="text-[15px] font-semibold text-gray-800">
                      PhaTiT002
                    </span>
                    <ShieldCheck className="h-4 w-4 text-amber-500" />
                    <Flame className="h-4 w-4 text-orange-500" />
                    <ThumbsUp className="h-4 w-4 text-amber-500" />
                    <span className="text-xs text-gray-500">+3 more</span>
                  </div>
                </div>
              </div>

              <button
                className="rounded-md p-1 text-gray-400 hover:bg-gray-100 hover:text-gray-600"
                aria-label="Dismiss vendor card"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
            {/*  */}
            <div className="flex flex-wrap items-center gap-2 mt-2">
              <span className="inline-flex items-center gap-1 rounded-full border border-gray-200 bg-white px-2.5 py-1 text-xs text-gray-700">
                <Check className="h-3 w-3 rounded-full text-emerald-500 border border-emerald-500" />
                99.43%
              </span>
              <span className="inline-flex items-center gap-1 rounded-full border border-gray-200 bg-white px-2.5 py-1 text-xs text-gray-700">
                <Clock className="h-3.5 w-3.5 text-gray-500" />
                34m
              </span>
              <span className="inline-flex items-center gap-1 rounded-full border border-gray-200 bg-white px-2.5 py-1 text-xs text-gray-700">
                <Activity className="h-3.5 w-3.5 text-gray-500" />
                1,107 Trades
              </span>
              <span className="inline-flex items-center gap-1 rounded-full border border-gray-200 bg-white px-2.5 py-1 text-xs text-gray-700">
                <span className="h-2 w-2 rounded-full bg-emerald-500" />
                Active now
              </span>
            </div>

            <div className="flex flex-wrap gap-2 pt-1 mt-2">
              <span className="rounded-full bg-gray-200 px-2.5 py-1 text-xs text-gray-700">
                no verification needed
              </span>
              <span className="rounded-full bg-gray-200 px-2.5 py-1 text-xs text-gray-700">
                no third parties
              </span>
            </div>
          </section>

          {/* Amount section */}
          <section>
            <div className="mb-2 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
              <label className="text-sm font-medium text-gray-500">
                Amount to receive
              </label>

              <div className="flex items-center gap-2 text-sm">
                <span className="text-gray-600">
                  Rate:{" "}
                  <span className="font-semibold text-gray-700">
                    <span className="h-2 w-2 rounded-full bg-emerald-500" />
                    2,111,318.9 ZAR
                  </span>
                </span>
                <span className="rounded-full bg-red-500 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-white">
                  24h
                </span>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <div className="relative flex-1">
                <input
                  type="text"
                  inputMode="decimal"
                  placeholder="0"
                  className="
                    h-11 w-full rounded-lg border border-gray-300 bg-white
                    px-3 pr-10 text-gray-800 placeholder-gray-400
                    focus:outline-none focus:ring-2 focus:ring-blue-500
                  "
                />
                <button
                  className="absolute right-2 top-1/2 -translate-y-1/2 rounded p-1 text-gray-400 hover:bg-gray-100 hover:text-gray-600"
                  aria-label="Paste"
                  title="Paste"
                >
                  <Clipboard className="h-4 w-4" />
                </button>
              </div>

              <button
                className="h-11 rounded-lg border border-gray-300 bg-gray-100 px-4 text-sm font-medium text-gray-700 hover:bg-gray-200 cursor-pointer"
                type="button"
              >
                MAX
              </button>
              <button
                className="h-11 rounded-lg border border-gray-300 bg-gray-100 px-4 text-sm font-medium text-gray-700 hover:bg-gray-200 cursor-pointer"
                type="button"
              >
                ZAR
              </button>
            </div>

            <p className="mt-1 text-sm text-gray-500">
              Range: 200 - 20,000 ZAR
            </p>
          </section>

          {/* Summary card */}
          <section className="rounded-xl border border-gray-200 bg-gray-50 p-4">
            <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <p className="text-sm font-medium tracking-wide text-gray-500">
                  Receive FNB E-WALLET
                </p>
                <p className="mt-1 text-xl font-semibold text-gray-800">
                  0 ZAR
                </p>
                <p className="mt-1 text-xs text-gray-500">1% fee included</p>
              </div>

              <div className="text-right">
                <p className="text-sm font-medium uppercase tracking-wide text-gray-500">
                  Pay (0.00009567 BTC)
                </p>
                <p className="mt-1 text-xl font-semibold text-gray-800">
                  205.87 ZAR
                </p>
              </div>
            </div>
          </section>

          {/* Terms / details */}
          <section className="rounded-xl border border-gray-200 bg-gray-50">
            <div className="grid gap-2 p-4 text-sm">
              <p className="text-gray-500 font-medium">Offer terms</p>
              <p className="text-gray-500 font-medium">Paste details</p>
              <button
                className="w-fit text-blue-600 hover:underline cursor-pointer"
                type="button"
              >
                Show more
              </button>
            </div>
          </section>

          {/* CTA */}
          <button
            type="button"
            className="h-12 w-full rounded-lg bg-[#33A1E0] font-semibold text-white hover:bg-[#1E90D6] focus:outline-none focus:ring-2 focus:ring-[#66BDEF] cursor-pointer"
          >
            Proceed
          </button>

          {/* Footer note */}
          <p className="text-center text-sm text-gray-500">
            Your funds are protected by{" "}
            <span className="font-medium underline decoration-gray-300">
              escrow
            </span>{" "}
            for a secure trade
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
};
