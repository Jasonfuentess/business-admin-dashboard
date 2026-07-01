// src/components/orders/OrderStatusBadge.tsx
import { Badge } from "../ui/Badge";

import type { OrderStatus } from "../../types/order";

type OrderStatusBadgeProps = {
  status: OrderStatus;
};

export function OrderStatusBadge({ status }: OrderStatusBadgeProps) {
  if (status === "Completed") {
    return <Badge variant="success">{status}</Badge>;
  }

  if (status === "Pending") {
    return <Badge variant="warning">{status}</Badge>;
  }

  if (status === "Cancelled") {
    return <Badge variant="danger">{status}</Badge>;
  }

  return <Badge variant="neutral">{status}</Badge>;
}