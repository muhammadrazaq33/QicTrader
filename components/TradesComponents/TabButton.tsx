"use client";

export default function TabButton({
  label,
  active,
  onClick,
}: {
  label: string;
  active?: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={[
        "relative -mb-px pb-3 text-sm sm:text-base transition-colors cursor-pointer",
        active
          ? "text-[#1F3A56] font-medium"
          : "text-slate-500 hover:text-slate-700",
      ].join(" ")}
      aria-current={active ? "page" : undefined}
    >
      {label}
      <span
        className={[
          "pointer-events-none absolute inset-x-0 -bottom-[1px] h-0.5 rounded-full",
          active ? "bg-[#1D6AA0]" : "bg-transparent",
        ].join(" ")}
      />
    </button>
  );
}
