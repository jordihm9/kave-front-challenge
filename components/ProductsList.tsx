import styled from 'styled-components';

import { Product } from 'components/Product';

import { ProductType } from 'services/fetchProducts';

interface Props {
  products: ProductType[]
}

const Grid = styled.div`
  margin-top: 3rem;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem 1rem;
`;

export const ProductsList: React.FC<Props> = ({products}) => {
  return (
    <Grid>
      {products.map(product => (
        <Product key={product.sku} product={product} />
      ))}
    </Grid>
  )
}

