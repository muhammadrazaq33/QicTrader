"use client";

import { Clock, Flag, Star } from "lucide-react";

// Types exported so parent can build dummy data
export type Offer = {
  id: string;
  seller: string;
  countryCode: string;
  ratingPercent: number;
  tradesCount: number;
  paymentMethod: string;
  rangeMin: number;
  rangeMax: number;
  currency: string;
  price: number;
  priceNote: string;
  seenMinutesAgo: number;
  initials?: string;
};

export function SellContent({ offer }: { offer: Offer }) {
  const {
    seller,
    countryCode,
    ratingPercent,
    tradesCount,
    paymentMethod,
    rangeMin,
    rangeMax,
    currency,
    price,
    priceNote,
    seenMinutesAgo,
    initials,
  } = offer;

  return (
    <article className="border p-5 flex flex-col gap-4 border-[#E6EAF0] rounded-2xl shadow-sm">
      {/* Header */}
      <div className="relative">
        <div className="flex items-center gap-3 sm:gap-4">
          {/* Avatar */}
          <div className="h-12 w-12 rounded-full bg-[#F1F5F9] border border-[#E6EAF0] flex items-center justify-center text-slate-600 text-sm font-medium">
            {initials || seller.slice(0, 2).toUpperCase()}
          </div>

          {/* Seller + meta */}
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 flex-wrap">
              <p className="font-medium text-slate-900 text-sm sm:text-base">
                {seller}
              </p>
              <span className="inline-flex items-center gap-1 text-slate-500 text-xs sm:text-sm">
                <Flag
                  className="h-3.5 w-3.5 text-slate-400"
                  aria-hidden="true"
                />
                <span>{countryCode}</span>
              </span>
            </div>

            <div className="mt-1 flex items-center gap-2 text-xs sm:text-[13px] text-slate-500">
              <span className="inline-flex items-center gap-1">
                <Star
                  className="h-3.5 w-3.5 stroke-[#F6C33D] fill-[#F6C33D]"
                  aria-hidden="true"
                />
                <span className="text-slate-700">{ratingPercent}%</span>
              </span>
              <span className="text-slate-400">•</span>
              <span>{tradesCount} trades</span>
            </div>
          </div>

          {/* Seen */}
          <div className="absolute right-2 sm:right-6 top-[83px] sm:top-3">
            <span className="inline-flex items-center gap-2 text-[11px] sm:text-xs text-slate-500">
              <Clock className="h-4 w-4 text-slate-400" aria-hidden="true" />
              <span>
                Seen{" "}
                <span className="text-slate-600 font-medium">
                  {seenMinutesAgo} minutes
                </span>{" "}
                ago
              </span>
            </span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col sm:gap-6 gap-4">
        <div className="grid grid-cols-1 gap-4 sm:gap-5">
          {/* Payment method */}
          <div>
            <p className="text-slate-400 text-xs font-medium">Payment Method</p>
            <p className="mt-1 text-sm sm:text-base text-slate-800">
              {paymentMethod}
            </p>
          </div>

          {/* Range */}
          <div className="flex flex-col">
            <p className="text-slate-400 text-xs font-medium">Range</p>
            <p className="mt-1 text-sm sm:text-base text-slate-800">{`${rangeMin} – ${rangeMax} ${currency}`}</p>
          </div>

          {/* Price */}
          <div className="flex flex-col">
            <p>Price</p>
            <p className="text-xl sm:text-2xl md:text-[22px] lg:text-3xl font-semibold tracking-tight text-slate-900">
              {`${price} ${currency}`}
            </p>
            <p className="mt-1 text-xs sm:text-sm text-slate-400">
              {priceNote}
            </p>
          </div>
        </div>

        {/* Actions */}
        <div className="mt-3 grid grid-cols-2 gap-3 sm:gap-4">
          {/* Primary: Blue gradient button */}
          <button
            type="button"
            className="w-full rounded-xl sm:px-5 px-1 sm:py-3.5 py-3 text-center text-white font-medium
                       bg-[#0d749a] hover:opacity-70
                       transition-colors"
            aria-label="Sell BTC"
          >
            Sell BTC
          </button>

          {/* Secondary: Bordered button */}
          <button
            type="button"
            className="w-full rounded-xl sm:px-5 px-1 sm:py-3.5 py-3 text-center font-medium
                       bg-white border border-[#E6EAF0] text-slate-700
                       hover:bg-[#F9FBFD]
                       focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#E6EAF0]
                       transition-colors"
            aria-label="Resell this offer"
          >
            Resell This Offer
          </button>
        </div>
      </div>
    </article>
  );
}
