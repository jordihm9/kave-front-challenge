import { useEffect, useState } from 'react';
import type { NextPage } from 'next';

import { usePagination } from 'hooks/usePagination';

import { Container } from '@layout/Container';
import { H1, H3 } from '@headings';
import { List } from 'components/product/List';
import { Pagination } from 'components/Pagination';

import { fetchProducts, ProductType } from 'services/fetchProducts';

const itemsPerPage = 12;

const Products: NextPage = () => {
  const [products, setProducts] = useState<ProductType[]>([]);
  const [paginatedProducts, setPaginatedProducts] = useState<ProductType[]>([]);

  const {
    page,
    setPage,
    totalPages
  } = usePagination(products.length, itemsPerPage);

  useEffect(() => {
    fetchProducts().then(setProducts);
  }, []);

  useEffect(() => paginate(), [products]); // eslint-disable-line
  useEffect(() => paginate(), [page]); // eslint-disable-line

  const handlePageChange = (p: number) => setPage(p);

  const paginate = () => {
    const start = page * itemsPerPage;
    const end = start + itemsPerPage;

    setPaginatedProducts(products.slice(start, end));
  }

  return (
    <Container>
      <H1 bold={false}>Productos</H1>
      <H3>Lorem ipsum dolor sit amet.</H3>
      { products.length >= 1 ? 
        <>
          <List products={paginatedProducts} />
          { products.length > itemsPerPage ?
            <Pagination
              current={page}
              onChange={handlePageChange}
              totalPages={totalPages}
              offset={7}
            />
            : null
          }
        </>
        : null
      }
    </Container>
  );
}

export default Products;

