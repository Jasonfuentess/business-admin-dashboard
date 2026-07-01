// src/types/dashboard.ts
export type Stat = {
  title: string;
  value: string;
  description: string;
  trend: string;
};

export type RevenueData = {
  month: string;
  revenue: number;
};

export type OrdersByStatusData = {
  status: string;
  value: number;
};