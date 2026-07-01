// src/pages/DashboardPage.tsx
import { OrdersChart } from "../components/dashboard/OrdersChart";
import { RecentOrdersTable } from "../components/dashboard/RecentOrdersTable";
import { RevenueChart } from "../components/dashboard/RevenueChart";
import { StatCard } from "../components/dashboard/StatCard";
import { dashboardStats } from "../data/dashboard";

export function DashboardPage() {
  return (
    <section className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-slate-900 dark:text-white">
          Dashboard
        </h1>

        <p className="mt-2 text-slate-600 dark:text-slate-400">
          Business overview, revenue, customers, and recent activity.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {dashboardStats.map((stat) => (
          <StatCard
            key={stat.title}
            title={stat.title}
            value={stat.value}
            description={stat.description}
            trend={stat.trend}
          />
        ))}
      </div>

      <div className="grid gap-4 lg:grid-cols-3">
        <RevenueChart />
        <OrdersChart />
      </div>

      <div className="grid gap-4 lg:grid-cols-3">
        <RecentOrdersTable />
      </div>
    </section>
  );
}