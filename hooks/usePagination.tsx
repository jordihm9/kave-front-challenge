import { useState } from 'react';

export const usePagination = (totalCount: number, itemsPerPage: number) => {
  const [page, setPage] = useState(1);
  const totalPages = Math.ceil(totalCount / itemsPerPage);

  return {
    page,
    setPage,
    totalPages
  }
}

