"use client";

import { useState } from "react";
import { Copy, Pencil, Trash2 } from "lucide-react";

type Offer = {
  vendorName: string;
  method: string;
  vendorPct: string;
  spreadPct: string;
  clientPct: string;
  clicks: number;
  trades: number;
  earned: string;
  link: string;
};

export function ResellerOfferCards({
  vendorName,
  method,
  vendorPct,
  spreadPct,
  clientPct,
  clicks,
  trades,
  earned,
  link,
}: Offer) {
  const [copied, setCopied] = useState(false);

  async function onCopy() {
    try {
      await navigator.clipboard.writeText(link);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch (e) {
      // swallow
    }
  }

  return (
    <div className="relative rounded-2xl bg-white shadow-sm ring-1 ring-black/5">
      <div className="p-4 sm:p-5">
        {/* Top-right actions */}
        <div className="absolute right-3 top-3 flex items-center gap-2">
          <button
            type="button"
            className="rounded-md p-1.5 text-slate-500 hover:bg-slate-100 hover:text-slate-700 cursor-pointer"
            aria-label="Edit offer"
          >
            <Pencil className="h-4 w-4" />
          </button>
          <button
            type="button"
            className="rounded-md p-1.5 text-slate-500 hover:bg-red-50 hover:text-red-600 cursor-pointer"
            aria-label="Delete offer"
          >
            <Trash2 className="h-4 w-4" />
          </button>
        </div>

        {/* Header */}
        <div className="mb-3">
          <h3 className="text-[15px] font-semibold text-slate-900">
            {vendorName}
          </h3>
          <p className="text-xs font-medium uppercase tracking-wide text-slate-500">
            {method}
          </p>
        </div>

        {/* Metrics row 1 */}
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
          <div className="rounded-lg border border-slate-200 bg-white px-3 py-2">
            <p className="text-xs font-medium text-slate-500">Vendor</p>
            <p className="text-base font-semibold text-slate-900">
              {vendorPct}
            </p>
          </div>
          <div className="rounded-lg border border-slate-200 bg-white px-3 py-2">
            <p className="text-xs font-medium text-slate-500">Your Spread</p>
            <p className="text-base font-semibold text-[#1F7AD7]">
              {spreadPct}
            </p>
          </div>
          <div className="rounded-lg border border-slate-200 bg-white px-3 py-2">
            <p className="text-xs font-medium text-slate-500">Client Sees</p>
            <p className="text-base font-semibold text-[#1F7AD7]">
              {clientPct}
            </p>
          </div>
        </div>

        <div className="my-3 border-t border-slate-200" />

        {/* Metrics row 2 */}
        <div className="grid grid-cols-3 gap-3">
          <div>
            <p className="text-xs font-medium text-slate-500">Clicks</p>
            <p className="text-[15px] font-semibold text-slate-900">{clicks}</p>
          </div>
          <div>
            <p className="text-xs font-medium text-slate-500">Trades</p>
            <p className="text-[15px] font-semibold text-slate-900">{trades}</p>
          </div>
          <div>
            <p className="text-xs font-medium text-slate-500">Earned</p>
            <p className="text-[15px] font-semibold text-green-600">{earned}</p>
          </div>
        </div>

        {/* Share link */}
        <div className="mt-3 flex items-center">
          <div className="relative w-full">
            <input
              readOnly
              value={link}
              aria-label="Offer share link"
              className="w-full truncate rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 pr-10 text-sm text-slate-700 focus:outline-none"
            />
            <button
              onClick={onCopy}
              type="button"
              className="absolute right-1.5 top-1.5 inline-flex h-7 w-7 items-center justify-center rounded-md bg-white text-slate-600 ring-1 ring-slate-200 hover:bg-slate-50 cursor-pointer"
              aria-label="Copy link"
              title="Copy link"
            >
              <Copy className="h-4 w-4" />
            </button>
          </div>
        </div>

        <p
          className={`mt-2 text-xs font-medium ${
            copied ? "text-green-600" : "text-transparent"
          }`}
          aria-live="polite"
        >
          {copied ? "Copied!" : "placeholder"}
        </p>
      </div>
    </div>
  );
}

export type { Offer };
