import { Clock3, RotateCcw } from "lucide-react";
import Image from "next/image";
import { BuyDialog } from "../Dialog/BuyDialog";

type OfferProps = {
  initials: string;
  name: string;
  country: string;
  thumbs: number;
  trades: number;
  rating: string;
  method: string;
  range: string;
  priceLabel: string;
  priceDecimal: string;
  subRate: string;
  delta: string;
};

export default function OfferCard(props: OfferProps) {
  const {
    initials,
    name,
    country,
    thumbs,
    trades,
    rating,
    method,
    range,
    priceLabel,
    priceDecimal,
    subRate,
    delta,
  } = props;

  return (
    <article className="rounded-xl border border-[#E5E7EB] bg-white">
      <div className="py-6 px-4">
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#0E3A57] text-white grid place-items-center text-sm font-semibold">
              {initials}
            </div>
            <div className="space-y-0.5">
              <div className="flex items-center gap-2">
                <h3 className="font-bold text-slate-900">{name}</h3>
                <span className="text-base leading-none">
                  <Image
                    src={country}
                    alt="My sample photo"
                    width={20}
                    height={20}
                  />
                </span>
              </div>
              <div className="flex items-center gap-3 text-xs text-slate-500">
                <span className="inline-flex items-center gap-1">
                  <p className="h-3.5 w-3.5 border-none text-emerald-600">👍</p>
                  {thumbs}
                </span>
                <span>{trades} trades</span>
                <span className="rounded-full bg-emerald-100 text-emerald-600 px-2 py-0.5 text-[11px]">
                  {rating}
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="sm:mt-8 mt-4 space-y-4">
          <div className="space-y-1">
            <div className="text-xs text-slate-500">Payment Method</div>
            <div className="text-[#0E3A57] font-bold">{method}</div>
            <div className="text-xs text-slate-500">{range}</div>
          </div>

          <div className="flex items-center justify-between gap-3 border-b border-t border-[#E5E7EB] py-5">
            <div className="text-left">
              <div className="text-2xl md:text-3xl font-semibold text-[#154D71]">
                {priceLabel}
                <span className="text-[18px] font-semibold text-[#6C7280]">
                  {priceDecimal}
                </span>
              </div>
              <div className="text-xs font-medium text-slate-500">
                {subRate}
              </div>
            </div>
            <div>
              <BuyDialog />
              <p className="text-[#33A1E0] text-sm text-right mt-0.5">
                {delta}
              </p>
            </div>
          </div>
        </div>

        <div className="mt-4 rounded-md border-2 border-[#1B6FA4] text-[#1B6FA4]">
          <button className="w-full h-12 flex items-center justify-center gap-2 cursor-pointer">
            <RotateCcw className="h-4 w-4" />
            <span className="font-bold">Resell This Offer</span>
          </button>
        </div>

        <div className="mt-3 flex items-center gap-2 text-xs text-slate-500">
          <span className="w-2 h-2 rounded-full bg-amber-400" aria-hidden />
          <Clock3 className="h-3.5 w-3.5" />
          <span>Seen 51 minutes ago</span>
          {/* <span className="ml-auto text-emerald-600">{delta}</span> */}
        </div>
      </div>
    </article>
  );
}
