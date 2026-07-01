// src/data/dashboard.ts
import type {
  OrdersByStatusData,
  RevenueData,
  Stat,
} from "../types/dashboard";

export const dashboardStats: Stat[] = [
  {
    title: "Total Revenue",
    value: "$48,250",
    description: "Revenue generated this month",
    trend: "+12.5%",
  },
  {
    title: "Customers",
    value: "1,284",
    description: "Active customer accounts",
    trend: "+8.2%",
  },
  {
    title: "Pending Orders",
    value: "34",
    description: "Orders waiting for confirmation",
    trend: "-3.1%",
  },
  {
    title: "Conversion Rate",
    value: "7.8%",
    description: "Visitors converted into customers",
    trend: "+2.4%",
  },
];

export const revenueData: RevenueData[] = [
  { month: "Jan", revenue: 18500 },
  { month: "Feb", revenue: 22100 },
  { month: "Mar", revenue: 24800 },
  { month: "Apr", revenue: 31200 },
  { month: "May", revenue: 38600 },
  { month: "Jun", revenue: 48250 },
];

export const ordersByStatusData: OrdersByStatusData[] = [
  { status: "Completed", value: 64 },
  { status: "Pending", value: 22 },
  { status: "Cancelled", value: 9 },
  { status: "Refunded", value: 5 },
];