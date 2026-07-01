// src/pages/OrdersPage.tsx
import { Search } from "lucide-react";
import { useMemo, useState } from "react";

import { OrdersTable } from "../components/orders/OrdersTable";
import { Button } from "../components/ui/Button";
import { Card } from "../components/ui/Card";
import { Input } from "../components/ui/Input";
import { Select } from "../components/ui/Select";
import { orders } from "../data/orders";
import type { OrderStatus } from "../types/order";
import { formatCurrency } from "../utils/formatCurrency";
import { getTotalPages, paginate } from "../utils/pagination";

type StatusFilter = "All" | OrderStatus;

const ITEMS_PER_PAGE = 5;

export function OrdersPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState<StatusFilter>("All");
  const [currentPage, setCurrentPage] = useState(1);

  const filteredOrders = useMemo(() => {
    return orders.filter((order) => {
      const normalizedSearch = searchTerm.toLowerCase().trim();

      const matchesSearch =
        order.id.toLowerCase().includes(normalizedSearch) ||
        order.customerName.toLowerCase().includes(normalizedSearch) ||
        order.customerEmail.toLowerCase().includes(normalizedSearch);

      const matchesStatus =
        statusFilter === "All" || order.status === statusFilter;

      return matchesSearch && matchesStatus;
    });
  }, [searchTerm, statusFilter]);

  const totalPages = getTotalPages(filteredOrders.length, ITEMS_PER_PAGE);
  const paginatedOrders = paginate(
    filteredOrders,
    currentPage,
    ITEMS_PER_PAGE,
  );

  const totalRevenue = filteredOrders.reduce(
    (total, order) => total + order.total,
    0,
  );

  function handleSearchChange(value: string) {
    setSearchTerm(value);
    setCurrentPage(1);
  }

  function handleStatusChange(value: StatusFilter) {
    setStatusFilter(value);
    setCurrentPage(1);
  }

  function goToPreviousPage() {
    setCurrentPage((page) => Math.max(1, page - 1));
  }

  function goToNextPage() {
    setCurrentPage((page) => Math.min(totalPages, page + 1));
  }

  return (
    <section className="space-y-6">
      <div className="flex flex-col justify-between gap-4 lg:flex-row lg:items-center">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 dark:text-white">
            Orders
          </h1>

          <p className="mt-2 text-slate-600 dark:text-slate-400">
            Manage customer orders, statuses, and sales activity.
          </p>
        </div>

        <Button>Export Report</Button>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
            Total Orders
          </p>
          <h3 className="mt-3 text-2xl font-bold text-slate-900 dark:text-white">
            {filteredOrders.length}
          </h3>
        </Card>

        <Card>
          <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
            Filtered Revenue
          </p>
          <h3 className="mt-3 text-2xl font-bold text-slate-900 dark:text-white">
            {formatCurrency(totalRevenue)}
          </h3>
        </Card>

        <Card>
          <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
            Pending Orders
          </p>
          <h3 className="mt-3 text-2xl font-bold text-slate-900 dark:text-white">
            {filteredOrders.filter((order) => order.status === "Pending").length}
          </h3>
        </Card>
      </div>

      <Card>
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div className="relative w-full lg:max-w-md">
            <Search
              size={18}
              className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
            />

            <Input
              value={searchTerm}
              onChange={(event) => handleSearchChange(event.target.value)}
              placeholder="Search by order, customer or email..."
              className="w-full pl-11"
            />
          </div>

          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <Select
              value={statusFilter}
              onChange={(event) =>
                handleStatusChange(event.target.value as StatusFilter)
              }
              className="w-full sm:w-48"
            >
              <option value="All">All statuses</option>
              <option value="Completed">Completed</option>
              <option value="Pending">Pending</option>
              <option value="Cancelled">Cancelled</option>
              <option value="Refunded">Refunded</option>
            </Select>

            <Button
              type="button"
              variant="secondary"
              onClick={() => {
                setSearchTerm("");
                setStatusFilter("All");
                setCurrentPage(1);
              }}
            >
              Clear filters
            </Button>
          </div>
        </div>
      </Card>

      <OrdersTable orders={paginatedOrders} />

      <div className="flex flex-col justify-between gap-4 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900 sm:flex-row sm:items-center">
        <p className="text-sm text-slate-500 dark:text-slate-400">
          Showing page{" "}
          <span className="font-semibold text-slate-900 dark:text-white">
            {currentPage}
          </span>{" "}
          of{" "}
          <span className="font-semibold text-slate-900 dark:text-white">
            {totalPages}
          </span>
        </p>

        <div className="flex items-center gap-3">
          <Button
            type="button"
            variant="secondary"
            onClick={goToPreviousPage}
            disabled={currentPage === 1}
          >
            Previous
          </Button>

          <Button
            type="button"
            variant="secondary"
            onClick={goToNextPage}
            disabled={currentPage === totalPages}
          >
            Next
          </Button>
        </div>
      </div>
    </section>
  );
}