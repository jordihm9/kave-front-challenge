import styled from 'styled-components';

import { Card } from 'components/product/Card';

import { mediaQuery } from 'styles/utils';

import { ProductType } from 'services/fetchProducts';

interface Props {
  products: ProductType[]
}

const Grid = styled.div`
  margin: 3rem auto 0 auto;
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 2rem 1rem;

  ${mediaQuery('MD')`grid-template-columns: repeat(2, 1fr);`}
  ${mediaQuery('XL')`grid-template-columns: repeat(3, 1fr);`}
`;

export const List: React.FC<Props> = ({products}) => {
  return (
    <Grid>
      {products.map(product => (
        <Card key={product.sku} product={product} />
      ))}
    </Grid>
  )
}

