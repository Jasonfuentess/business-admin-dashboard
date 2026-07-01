// src/components/dashboard/StatCard.tsx
import { ArrowUpRight } from "lucide-react";

import { Card } from "../ui/Card";

type StatCardProps = {
  title: string;
  value: string;
  description: string;
  trend: string;
};

export function StatCard({ title, value, description, trend }: StatCardProps) {
  const isPositive = trend.startsWith("+");

  return (
    <Card>
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
            {title}
          </p>

          <h3 className="mt-3 text-2xl font-bold text-slate-900 dark:text-white">
            {value}
          </h3>

          <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
            {description}
          </p>
        </div>

        <div
          className={`flex items-center gap-1 rounded-full px-2.5 py-1 text-xs font-semibold ${
            isPositive
              ? "bg-emerald-100 text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-400"
              : "bg-red-100 text-red-700 dark:bg-red-500/10 dark:text-red-400"
          }`}
        >
          <ArrowUpRight size={14} />
          {trend}
        </div>
      </div>
    </Card>
  );
}