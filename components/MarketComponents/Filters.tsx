export default function Filters() {
  const pills = [
    "All Methods",
    "FNB",
    "Capitec",
    "Nedbank",
    "Skrill",
    "PayPal",
  ];
  return (
    <div className="flex gap-2 flex-wrap mt-2">
      {pills.map((p, i) => (
        <button
          key={p}
          className={`h-8 px-3.5 cursor-pointer rounded-full bg-[#F3F4F6] ${
            i === 0 ? "text-slate-900" : "text-slate-600"
          }`}
        >
          {p}
        </button>
      ))}
    </div>
  );
}
