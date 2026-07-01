// src/components/dashboard/RecentOrdersTable.tsx
import { orders } from "../../data/orders";
import { formatCurrency } from "../../utils/formatCurrency";
import { formatDate } from "../../utils/formatDate";
import { OrderStatusBadge } from "../orders/OrderStatusBadge";
import { Card } from "../ui/Card";

export function RecentOrdersTable() {
  const recentOrders = orders.slice(0, 5);

  return (
    <Card className="lg:col-span-3">
      <div className="mb-6 flex flex-col justify-between gap-3 sm:flex-row sm:items-center">
        <div>
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
            Recent Orders
          </h3>
          <p className="text-sm text-slate-500 dark:text-slate-400">
            Latest business transactions
          </p>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full min-w-[720px] text-left">
          <thead>
            <tr className="border-b border-slate-200 text-sm text-slate-500 dark:border-slate-800 dark:text-slate-400">
              <th className="pb-3 font-medium">Order</th>
              <th className="pb-3 font-medium">Customer</th>
              <th className="pb-3 font-medium">Date</th>
              <th className="pb-3 font-medium">Status</th>
              <th className="pb-3 text-right font-medium">Total</th>
            </tr>
          </thead>

          <tbody>
            {recentOrders.map((order) => (
              <tr
                key={order.id}
                className="border-b border-slate-100 last:border-0 dark:border-slate-800"
              >
                <td className="py-4 text-sm font-semibold text-slate-900 dark:text-white">
                  {order.id}
                </td>

                <td className="py-4">
                  <p className="text-sm font-medium text-slate-900 dark:text-white">
                    {order.customerName}
                  </p>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    {order.customerEmail}
                  </p>
                </td>

                <td className="py-4 text-sm text-slate-600 dark:text-slate-400">
                  {formatDate(order.date)}
                </td>

                <td className="py-4">
                  <OrderStatusBadge status={order.status} />
                </td>

                <td className="py-4 text-right text-sm font-semibold text-slate-900 dark:text-white">
                  {formatCurrency(order.total)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Card>
  );
}