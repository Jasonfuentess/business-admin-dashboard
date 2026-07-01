// src/components/customers/CustomersTable.tsx
import type { Customer } from "../../types/customer";
import { formatCurrency } from "../../utils/formatCurrency";
import { formatDate } from "../../utils/formatDate";
import { CustomerStatusBadge } from "./CustomerStatusBadge";
import { CustomerTypeBadge } from "./CustomerTypeBadge";

type CustomersTableProps = {
  customers: Customer[];
};

export function CustomersTable({ customers }: CustomersTableProps) {
  if (customers.length === 0) {
    return (
      <div className="rounded-2xl border border-dashed border-slate-300 bg-white p-10 text-center dark:border-slate-700 dark:bg-slate-900">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
          No customers found
        </h3>

        <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
          Try changing the search term, customer type or status.
        </p>
      </div>
    );
  }

  return (
    <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-900">
      <table className="w-full min-w-[900px] text-left">
        <thead>
          <tr className="border-b border-slate-200 bg-slate-50 text-sm text-slate-500 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-400">
            <th className="px-5 py-4 font-medium">Customer</th>
            <th className="px-5 py-4 font-medium">Type</th>
            <th className="px-5 py-4 font-medium">Status</th>
            <th className="px-5 py-4 font-medium">Last Order</th>
            <th className="px-5 py-4 text-right font-medium">Total Spent</th>
          </tr>
        </thead>

        <tbody>
          {customers.map((customer) => (
            <tr
              key={customer.id}
              className="border-b border-slate-100 last:border-0 hover:bg-slate-50 dark:border-slate-800 dark:hover:bg-slate-800/50"
            >
              <td className="px-5 py-4">
                <p className="text-sm font-semibold text-slate-900 dark:text-white">
                  {customer.name}
                </p>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  {customer.email}
                </p>
              </td>

              <td className="px-5 py-4">
                <CustomerTypeBadge type={customer.type} />
              </td>

              <td className="px-5 py-4">
                <CustomerStatusBadge status={customer.status} />
              </td>

              <td className="px-5 py-4 text-sm text-slate-600 dark:text-slate-400">
                {formatDate(customer.lastOrderDate)}
              </td>

              <td className="px-5 py-4 text-right text-sm font-semibold text-slate-900 dark:text-white">
                {formatCurrency(customer.totalSpent)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}