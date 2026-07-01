// src/types/customer.ts
export type CustomerType = "Regular" | "Premium" | "Business";

export type CustomerStatus = "Active" | "Inactive";

export type Customer = {
  id: string;
  name: string;
  email: string;
  type: CustomerType;
  status: CustomerStatus;
  totalSpent: number;
  lastOrderDate: string;
};