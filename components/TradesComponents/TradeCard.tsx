import { Clock, ArrowDown, ArrowUp, Info, XCircle } from "lucide-react";

export type Trade = {
  id: number;
  code: string;
  side: "buy" | "sell";
  counterparty: string;
  amountBtc: number;
  valueZar: number;
  method: string;
  status: "pending" | "sent" | "cancelled";
  time: string;
};

function formatBtc(n: number) {
  return n.toLocaleString(undefined, {
    minimumFractionDigits: 5,
    maximumFractionDigits: 8,
  });
}
function formatZar(n: number) {
  return n.toLocaleString(undefined, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
}

export default function TradeCard({ trade }: { trade: Trade }) {
  const sidePill =
    trade.side === "buy"
      ? {
          bg: "bg-[#EAF7EC]",
          text: "text-[#16A34A]",
          icon: <ArrowDown className="h-3.5 w-3.5" />,
          label: "Buy",
        }
      : {
          bg: "bg-[#E8F1FF]",
          text: "text-[#2563EB]",
          icon: <ArrowUp className="h-3.5 w-3.5" />,
          label: "Sell",
        };

  const statusPill =
    trade.status === "pending"
      ? {
          bg: "bg-[#FFF4E6]",
          text: "text-[#F59E0B]",
          icon: <Clock className="h-4 w-4" />,
          label: "Pending Payment",
          timeText: "text-[#EA580B]",
        }
      : trade.status === "sent"
      ? {
          bg: "bg-[#E8F3FF]",
          text: "text-[#3B82F6]",
          icon: <Info className="h-4 w-4" />,
          label: "Payment Sent",
          timeText: "text-[#EA580B]",
        }
      : {
          bg: "bg-[#FDECEE]",
          text: "text-[#EF4444]",
          icon: <XCircle className="h-4 w-4" />,
          label: "Cancelled Payment",
          timeText: "text-[#EF4444]",
        };

  return (
    <article className="relative rounded-2xl border border-slate-200 bg-white p-5 md:p-6 shadow-sm">
      {/* Status pill (top-right) */}
      <div className="absolute right-4 top-4">
        <div
          className={[
            "inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium",
            statusPill.bg,
            statusPill.text,
          ].join(" ")}
        >
          {statusPill.icon}
          <span className="whitespace-nowrap">{statusPill.label}</span>
        </div>
      </div>

      {/* Header row: code + side pill + counterparty */}
      <div className="flex flex-wrap items-center gap-2 pr-36">
        <span className="text-base sm:text-lg font-semibold tracking-tight text-[#101827]">
          {trade.code}
        </span>
        <span
          className={[
            "inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-xs font-medium",
            sidePill.bg,
            sidePill.text,
          ].join(" ")}
        >
          {sidePill.icon}
          {sidePill.label}
        </span>
      </div>
      <p className="mt-1 text-sm text-slate-500">
        {"with "}
        <span className="font-medium text-slate-700">{trade.counterparty}</span>
      </p>

      {/* Middle grid: Amount / Value */}
      <div className="mt-4 grid grid-cols-1 md:grid-cols-2 md:items-start">
        <div className="space-y-1">
          <div className="text-xs tracking-wide text-slate-400">Amount</div>
          <div className="text-[15px] sm:text-base font-semibold text-[#154D71]">
            {formatBtc(trade.amountBtc)} BTC
          </div>
          {/* <div className="mt-2 text-sm text-slate-500">{trade.method}</div> */}
        </div>

        <div className="mt-4 md:mt-0 md:text-right flex flex-col justify-start items-start">
          <div className="text-xs tracking-wide text-slate-400">Value</div>
          <div className="text-[18px] sm:text-xl font-semibold text-[#154D71]">
            {formatZar(trade.valueZar)} ZAR
          </div>
        </div>
      </div>

      {/* Footer line with time */}
      <div className="flex items-end justify-between mt-4 border-t border-slate-100 pt-3">
        {/*tads method */}
        <div className="mt-2 text-sm text-slate-500">{trade.method}</div>
        <div className="flex items-center justify-end gap-2">
          <Clock className={["h-4 w-4", statusPill.timeText].join(" ")} />
          <span
            className={[
              "text-sm font-medium tracking-tight",
              statusPill.timeText,
            ].join(" ")}
          >
            {trade.time}
          </span>
        </div>
      </div>
    </article>
  );
}
