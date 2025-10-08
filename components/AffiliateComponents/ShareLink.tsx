"use client";

import { useState } from "react";
import { Copy, Share2 } from "lucide-react";

export default function ShareLink({ url }: { url: string }) {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      const t = setTimeout(() => setCopied(false), 1400);
      return () => clearTimeout(t);
    } catch {
      setCopied(false);
    }
  }

  return (
    <div className="rounded-xl bg-white border border-[#E7EEF4] shadow-sm">
      <div className="p-3 sm:p-4">
        <div className="rounded-lg border border-[#E7EEF4] bg-[#FBFDFF] px-3.5 py-2.5 text-[13px] sm:text-sm text-slate-700 overflow-x-auto">
          {url}
        </div>

        <div className="mt-3 grid grid-cols-2 gap-3">
          <button
            onClick={handleCopy}
            className=" inline-flex items-center justify-center gap-2 rounded-lg bg-[#134A6D] hover:bg-[#0F3F5E] text-white px-4 py-3 text-sm font-medium transition-colors cursor-pointer"
            aria-live="polite"
          >
            <Copy className="h-4 w-4" />
            {copied ? "Copied!" : "Copy Link"}
          </button>

          <button
            className="inline-flex items-center justify-center gap-2 rounded-lg border border-[#134A6D] text-[#134A6D] hover:bg-[#134A6D]/5 px-4 py-3 text-sm font-medium transition-colors cursor-pointer"
            onClick={() => {
              if (navigator.share) {
                navigator
                  .share({
                    title: "Affiliate Link",
                    text: "Join with my link:",
                    url,
                  })
                  .catch(() => {});
              } else {
                // Fallback: copy if Web Share is unavailable
                navigator.clipboard.writeText(url).catch(() => {});
                // We don't surface a toast here to keep the component simple and file-local
              }
            }}
          >
            <Share2 className="h-4 w-4" />
            Share
          </button>
        </div>
      </div>
    </div>
  );
}
