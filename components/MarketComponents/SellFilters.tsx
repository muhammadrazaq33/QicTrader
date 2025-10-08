export default function SellFilters() {
  const pills = ["FNB", "Capitec", "Nedbank", "Skrill", "PayPal"];
  return (
    <div className="flex gap-2 flex-wrap mt-2">
      {pills.map((p, i) => (
        <button
          key={p}
          className={` px-5 py-2  cursor-pointer rounded-lg bg-[#F3F4F6] ${
            i === 0 ? "text-slate-900" : "text-slate-700"
          }`}
        >
          {p}
        </button>
      ))}
    </div>
  );
}
