"use client";

import { useRouter, usePathname } from "next/navigation";
import {
  Store as MarketIcon,
  Wallet,
  BarChart3 as TradesIcon,
  Handshake,
  TrendingUp as ResellerIcon,
} from "lucide-react";

const items = [
  { key: "market", label: "Market", Icon: MarketIcon },
  { key: "wallet", label: "Wallet", Icon: Wallet },
  { key: "trades", label: "Trades", Icon: TradesIcon },
  { key: "affiliates", label: "Affiliates", Icon: Handshake },
  { key: "reseller", label: "Reseller", Icon: ResellerIcon },
] as const;

export default function Footer() {
  const router = useRouter();
  const pathname = usePathname();

  const pathParts = pathname.split("/").filter(Boolean);
  const lastSegment = pathParts[pathParts.length - 1];
  const activeTab =
    !lastSegment || lastSegment === "dashboard" ? "market" : lastSegment;

  const handleClick = (key: string) => {
    const basePath = pathname.split("/").slice(0, 3).join("/"); // e.g. /en/dashboard
    if (key === "market") router.push(`${basePath}`);
    else router.push(`${basePath}/${key}`);
  };

  return (
    <footer className="sticky bottom-0 border-t border-[#E5E7EB] bg-white pt-1.5 h-[80px]">
      <nav className="w-full max-w-screen-2xl mx-auto px-3 sm:px-4">
        <ul className="grid grid-cols-5">
          {items.map(({ key, label, Icon }) => {
            const active = activeTab === key;
            return (
              <li key={key}>
                <button
                  onClick={() => handleClick(key)}
                  className={`w-full flex flex-col items-center justify-center gap-1 pt-3 pb-0 text-[15px] cursor-pointer ${
                    active ? "text-[#33A1E0] font-medium" : "text-slate-500"
                  }`}
                  aria-current={active ? "page" : undefined}
                >
                  <Icon
                    className={`h-5 w-5 ${active ? "text-[#33A1E0] " : ""}`}
                  />
                  <span>{label}</span>
                </button>
              </li>
            );
          })}
        </ul>
      </nav>
    </footer>
  );
}
