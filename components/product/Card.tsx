import styled from 'styled-components';

import Link from 'next/link';

import { H3 } from '@headings';
import { Price } from 'components/Price';
import { CardThumbnail } from 'components/product/CardThumbnail';

import { ProductType } from 'services/fetchProducts';

interface Props {
  product: ProductType
}

const StyledCard = styled.div`
  max-width: 24.0625rem;
`;

const Title = styled(H3)`
  padding-top: 0.5em;
  text-transform: capitalize;
  font-family: Poppins, sans serif;
`;

export const Card: React.FC<Props> = ({product}) => {
  return (
    <StyledCard>
      <CardThumbnail src={product.imageUrl} alt={product.collection}/>
      <Link href={`/products/${product.sku}`} passHref>
        <a><Title bold>{product.collection}</Title></a>
      </Link>
      <Price size='S' price={parseInt(product.price)} />
    </StyledCard>
  );
}

