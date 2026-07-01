// src/types/order.ts
export type OrderStatus = "Completed" | "Pending" | "Cancelled" | "Refunded";

export type Order = {
  id: string;
  customerName: string;
  customerEmail: string;
  date: string;
  status: OrderStatus;
  total: number;
  paymentMethod: "Credit Card" | "PayPal" | "Bank Transfer";
};