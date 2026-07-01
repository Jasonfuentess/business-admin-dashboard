// src/utils/pagination.ts
export function paginate<T>(
  items: T[],
  currentPage: number,
  itemsPerPage: number,
) {
  const startIndex = (currentPage - 1) * itemsPerPage;
  return items.slice(startIndex, startIndex + itemsPerPage);
}

export function getTotalPages(totalItems: number, itemsPerPage: number) {
  return Math.max(1, Math.ceil(totalItems / itemsPerPage));
}