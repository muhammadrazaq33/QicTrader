export default function RecentActivity({
  icon,
  title,
  titleClass,
  subtitle,
  subtitleClass,
  description,
  timestamp,
  status,
  statusColor,
}: {
  icon: React.ReactNode;
  title: string;
  titleClass?: string;
  subtitle: string;
  subtitleClass?: string;
  description: string;
  timestamp: string;
  status: "completed" | "pending" | "failed";
  statusColor: string;
}) {
  return (
    <div className="bg-white px-4 py-4 sm:px-5 sm:py-5 rounded-2xl border border-slate-200 shadow-sm mt-3">
      <div className="flex items-start gap-3">
        <div className="mt-0.5">{icon}</div>
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-3">
            <div>
              <div className={`font-semibold ${titleClass || ""}`}>{title}</div>
              <div className={`text-sm ${subtitleClass || ""}`}>{subtitle}</div>
            </div>
            <span
              className={`inline-flex items-center rounded-full px-2 py-1 text-xs font-medium ${statusColor}`}
              aria-label={`Status: ${status}`}
            >
              {status}
            </span>
          </div>
          <div className="mt-1 text-sm text-slate-500">{description}</div>
          <div className="text-xs text-slate-400 mt-0.5">{timestamp}</div>
        </div>
      </div>
    </div>
  );
}
