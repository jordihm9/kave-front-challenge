import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import styled from 'styled-components';

import type { NextPage } from 'next';

import { mediaQuery } from 'styles/utils';

import { ProductDetail } from 'components/ProductDetail';

import { fetchProducts, ProductType } from 'services/fetchProducts';

const DetailsContainer = styled.div`
  display: grid;

  ${mediaQuery('MD')`
    height: 100%;
    grid-template-columns: 4fr 3fr;
  `}
`;

const Detail: NextPage = () => {
  const [product, setProduct] = useState<ProductType | null>(null);
  const router = useRouter();
  const { sku } = router.query;
  
  useEffect(() => {
    fetchProducts().then(search);
  }, []);

  const search = (products: ProductType[]): void => {
    setProduct(products.filter(p => p.sku === sku)[0]);
  }

  return (
    <>
      { product &&
        <DetailsContainer>
          <ProductDetail product={product} />
        </DetailsContainer>
      }
    </>
  );
}

export default Detail;

