import styled from 'styled-components';

import { COLORS } from '@theme';
import { mediaQuery } from 'styles/utils';

import { Img } from 'components/Img';
import { Heart } from '@icons/Heart';
import { ProductInfo } from 'components/ProductInfo';

import { ProductType } from 'services/fetchProducts';

interface Props {
  product: ProductType
}

const ImageContainer = styled.div`
  height: 38.375rem;
  width: 100%;
  position: relative;
  background-color: ${COLORS.SoftGrey};

  ${mediaQuery('MD')`
    height: 100%;
  `}

  & > svg {
    position: absolute;
    top: 1rem;
    right: 1rem;
    z-index: 1;
  }
`;

export const ProductDetail: React.FC<Props> = ({product}) => {
  return (
    <>
      <ImageContainer>
        <Heart />
        <Img
          src={product.imageUrl}
          alt={product.collection}
          layout='fill'
        />
      </ImageContainer>
      <ProductInfo product={product} />
    </>
  );
}

