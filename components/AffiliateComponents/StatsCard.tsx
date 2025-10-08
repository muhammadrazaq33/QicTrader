"use client";

import type React from "react";

type Stat = {
  icon: React.ElementType;
  value: string;
  label: string;
};

export default function StatsCard({ icon: Icon, value, label }: Stat) {
  return (
    <div className="rounded-xl bg-white border border-[#E7EEF4] shadow-sm">
      <div className="p-4 sm:p-5">
        <div className="flex items-start gap-3">
          <div className="inline-flex items-center justify-center rounded-md bg-[#F1F6FA] text-[#2B6E97] p-2">
            <Icon className="h-5 w-5" />
          </div>
        </div>

        <div className="mt-4">
          <div className="text-[20px] sm:text-[22px] font-semibold text-[#154D71]">
            {value}
          </div>
          <div className="text-xs sm:text-[13px] text-slate-500 mt-1">
            {label}
          </div>
        </div>
      </div>
    </div>
  );
}
