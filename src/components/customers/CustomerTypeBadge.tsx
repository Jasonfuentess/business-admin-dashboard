// src/components/customers/CustomerTypeBadge.tsx
import type { CustomerType } from "../../types/customer";
import { Badge } from "../ui/Badge";

type CustomerTypeBadgeProps = {
  type: CustomerType;
};

export function CustomerTypeBadge({ type }: CustomerTypeBadgeProps) {
  if (type === "Premium") {
    return <Badge variant="info">{type}</Badge>;
  }

  if (type === "Business") {
    return <Badge variant="warning">{type}</Badge>;
  }

  return <Badge variant="neutral">{type}</Badge>;
}