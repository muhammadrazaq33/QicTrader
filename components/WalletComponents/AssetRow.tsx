export default function AssetRow({
  badge,
  symbol,
  name,
  amount,
  fiat,
  change,
  changeColor,
  highlight,
}: {
  badge: string;
  symbol: string;
  name: string;
  amount: string;
  fiat: string;
  change: string;
  changeColor: string;
  highlight?: boolean;
}) {
  return (
    <div
      className={[
        "rounded-2xl bg-white border shadow-sm p-3 sm:p-4",
        highlight ? "border-sky-300 ring-1 ring-sky-200" : "border-slate-200",
      ].join(" ")}
    >
      <div className="flex items-center gap-3">
        <div className="shrink-0">
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#0E4663] text-white font-semibold shadow-inner">
            {badge}
            <span className="sr-only">Coin</span>
          </span>
        </div>
        <div className="min-w-0 flex-1">
          <div className="flex items-center justify-between">
            <div>
              <div className="font-semibold text-slate-800">{symbol}</div>
              <div className="text-sm text-slate-500">{name}</div>
            </div>
            <div className="text-right">
              <div className="font-semibold tabular-nums text-slate-800">
                {amount}
              </div>
              <div className="text-xs text-slate-500">{fiat}</div>
              <div className={`text-xs ${changeColor}`}>{change}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
