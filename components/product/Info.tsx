import styled from 'styled-components';

import { COLORS } from '@theme';

import { H1 } from '@headings';
import { Price } from 'components/Price';

import { ProductType } from 'services/fetchProducts';

interface Props {
  product: ProductType
}

const InfoContainer = styled.div`
  padding: 2em 2.5em;
`;

const Title = styled(H1)`
  color: #000000;
  text-transform: capitalize;
  font-family: Poppins, 'sans-serif'; 
`;

const Subtitle = styled.p`
  color: ${COLORS.Grey};
  margin-bottom: 1.5rem;
`;

const Description = styled.p`
  max-width: 60ch;
`;

export const Info: React.FC<Props> = ({product}) => {
  return (
    <InfoContainer>
      <Title>{product.collection}</Title>
      <Subtitle>{product.categoryHierarchy}</Subtitle>
      <Price size='L' price={parseInt(product.price)} />
      <Description>{product.name}</Description>
    </InfoContainer>
  );
}

