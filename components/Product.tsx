import styled from 'styled-components';

import { H3 } from '@headings';
import { Price } from 'components/Price';
import { ProductThumbnail } from 'components/ProductThumbnail';

import { ProductType } from 'services/fetchProducts';

interface Props {
  product: ProductType
}

const Container = styled.div`
  max-width: 24.0625rem;
`;

const Title = styled(H3)`
  padding-top: 0.5em;
  text-transform: capitalize;
  font-family: Poppins, sans serif;
`;

export const Product: React.FC<Props> = ({product}) => {
  return (
    <Container>
      <ProductThumbnail src={product.imageUrl} alt={product.collection}/>
      <Title bold>{product.collection}</Title>
      <Price size='S' price={parseInt(product.price)} />
    </Container>
  );
}

