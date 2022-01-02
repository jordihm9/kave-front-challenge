import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import styled from 'styled-components';

import type { NextPage } from 'next';

import { mediaQuery } from 'styles/utils';

import { Detail as ProductDetail } from 'components/product/Detail';

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
    const result = products.filter(p => p.sku === sku);

    if (result.length === 1) {
      setProduct(result[0]);
    } else {
      // TODO: product wasn't found
    }
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

