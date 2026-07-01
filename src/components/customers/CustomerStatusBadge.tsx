// src/components/customers/CustomerStatusBadge.tsx
import type { CustomerStatus } from "../../types/customer";
import { Badge } from "../ui/Badge";

type CustomerStatusBadgeProps = {
  status: CustomerStatus;
};

export function CustomerStatusBadge({ status }: CustomerStatusBadgeProps) {
  if (status === "Active") {
    return <Badge variant="success">{status}</Badge>;
  }

  return <Badge variant="neutral">{status}</Badge>;
}