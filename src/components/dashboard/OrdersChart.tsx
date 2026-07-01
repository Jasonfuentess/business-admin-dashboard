// src/components/dashboard/OrdersChart.tsx
import {
  Cell,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

import { ordersByStatusData } from "../../data/dashboard";
import { Card } from "../ui/Card";

const chartColors: Record<string, string> = {
  Completed: "#22c55e",
  Pending: "#f59e0b",
  Cancelled: "#ef4444",
  Refunded: "#64748b",
};

export function OrdersChart() {
  return (
    <Card>
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
          Orders by Status
        </h3>
        <p className="text-sm text-slate-500 dark:text-slate-400">
          Current order distribution
        </p>
      </div>

      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={ordersByStatusData}
              dataKey="value"
              nameKey="status"
              innerRadius={55}
              outerRadius={85}
              paddingAngle={4}
            >
              {ordersByStatusData.map((item) => (
                <Cell key={item.status} fill={chartColors[item.status]} />
              ))}
            </Pie>

            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>

      <div className="mt-4 grid grid-cols-2 gap-3">
        {ordersByStatusData.map((item) => (
          <div key={item.status} className="flex items-center gap-2">
            <span
              className="h-3 w-3 rounded-full"
              style={{ backgroundColor: chartColors[item.status] }}
            />
            <span className="text-sm text-slate-600 dark:text-slate-400">
              {item.status}
            </span>
          </div>
        ))}
      </div>
    </Card>
  );
}