// src/pages/CustomersPage.tsx
import { Search } from "lucide-react";
import { useMemo, useState } from "react";

import { CustomersTable } from "../components/customers/CustomersTable";
import { Button } from "../components/ui/Button";
import { Card } from "../components/ui/Card";
import { Input } from "../components/ui/Input";
import { Select } from "../components/ui/Select";
import { customers } from "../data/customers";
import type { CustomerStatus, CustomerType } from "../types/customer";
import { formatCurrency } from "../utils/formatCurrency";
import { getTotalPages, paginate } from "../utils/pagination";

type CustomerTypeFilter = "All" | CustomerType;
type CustomerStatusFilter = "All" | CustomerStatus;

const ITEMS_PER_PAGE = 5;

export function CustomersPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [typeFilter, setTypeFilter] = useState<CustomerTypeFilter>("All");
  const [statusFilter, setStatusFilter] =
    useState<CustomerStatusFilter>("All");
  const [currentPage, setCurrentPage] = useState(1);

  const filteredCustomers = useMemo(() => {
    return customers.filter((customer) => {
      const normalizedSearch = searchTerm.toLowerCase().trim();

      const matchesSearch =
        customer.name.toLowerCase().includes(normalizedSearch) ||
        customer.email.toLowerCase().includes(normalizedSearch) ||
        customer.id.toLowerCase().includes(normalizedSearch);

      const matchesType =
        typeFilter === "All" || customer.type === typeFilter;

      const matchesStatus =
        statusFilter === "All" || customer.status === statusFilter;

      return matchesSearch && matchesType && matchesStatus;
    });
  }, [searchTerm, typeFilter, statusFilter]);

  const totalPages = getTotalPages(filteredCustomers.length, ITEMS_PER_PAGE);

  const paginatedCustomers = paginate(
    filteredCustomers,
    currentPage,
    ITEMS_PER_PAGE,
  );

  const activeCustomers = filteredCustomers.filter(
    (customer) => customer.status === "Active",
  ).length;

  const premiumCustomers = filteredCustomers.filter(
    (customer) => customer.type === "Premium",
  ).length;

  const totalSpent = filteredCustomers.reduce(
    (total, customer) => total + customer.totalSpent,
    0,
  );

  function handleSearchChange(value: string) {
    setSearchTerm(value);
    setCurrentPage(1);
  }

  function handleTypeChange(value: CustomerTypeFilter) {
    setTypeFilter(value);
    setCurrentPage(1);
  }

  function handleStatusChange(value: CustomerStatusFilter) {
    setStatusFilter(value);
    setCurrentPage(1);
  }

  function clearFilters() {
    setSearchTerm("");
    setTypeFilter("All");
    setStatusFilter("All");
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
            Customers
          </h1>

          <p className="mt-2 text-slate-600 dark:text-slate-400">
            View customer information, activity, and account status.
          </p>
        </div>

        <Button>Add Customer</Button>
      </div>

      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
            Total Customers
          </p>
          <h3 className="mt-3 text-2xl font-bold text-slate-900 dark:text-white">
            {filteredCustomers.length}
          </h3>
        </Card>

        <Card>
          <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
            Active Customers
          </p>
          <h3 className="mt-3 text-2xl font-bold text-slate-900 dark:text-white">
            {activeCustomers}
          </h3>
        </Card>

        <Card>
          <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
            Premium Customers
          </p>
          <h3 className="mt-3 text-2xl font-bold text-slate-900 dark:text-white">
            {premiumCustomers}
          </h3>
        </Card>

        <Card>
          <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
            Total Spent
          </p>
          <h3 className="mt-3 text-2xl font-bold text-slate-900 dark:text-white">
            {formatCurrency(totalSpent)}
          </h3>
        </Card>
      </div>

      <Card>
        <div className="flex flex-col gap-4 xl:flex-row xl:items-center xl:justify-between">
          <div className="relative w-full xl:max-w-md">
            <Search
              size={18}
              className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
            />

            <Input
              value={searchTerm}
              onChange={(event) => handleSearchChange(event.target.value)}
              placeholder="Search by customer, email or ID..."
              className="w-full pl-11"
            />
          </div>

          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <Select
              value={typeFilter}
              onChange={(event) =>
                handleTypeChange(event.target.value as CustomerTypeFilter)
              }
              className="w-full sm:w-44"
            >
              <option value="All">All types</option>
              <option value="Regular">Regular</option>
              <option value="Premium">Premium</option>
              <option value="Business">Business</option>
            </Select>

            <Select
              value={statusFilter}
              onChange={(event) =>
                handleStatusChange(event.target.value as CustomerStatusFilter)
              }
              className="w-full sm:w-44"
            >
              <option value="All">All statuses</option>
              <option value="Active">Active</option>
              <option value="Inactive">Inactive</option>
            </Select>

            <Button type="button" variant="secondary" onClick={clearFilters}>
              Clear filters
            </Button>
          </div>
        </div>
      </Card>

      <CustomersTable customers={paginatedCustomers} />

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