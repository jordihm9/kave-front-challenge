import styled from 'styled-components';
import type { NextPage } from 'next';

import { mediaQuery } from 'styles/utils';

import { ProductDetail } from 'components/ProductDetail';

import { ProductType } from 'services/fetchProducts';

const product: ProductType = {
  sku: 'S801_53_GR39',
  name: 'Sofá rinconero Galene 4 plazas beige 267 x 267 cm',
  collection: 'galene',
  categoryHierarchy: 'Sofás rinconeros y chaise longues',
  measurements: {
    height: '94',
    width: '267',
    lenght: '267'
  },
  price: '2529.00',
  priceDiscount: 0,
  imageUrl: 'https://media.kavehome.com/media/catalog/product/S/8/S801_53_GR39-1V01-20211028160441.jpg',
  store: 'es',
  materials: 'Fibras recicladas, Tablero de partículas, Hierro, Madera de pino (Pinus pinaster), MDF (tablero de fibra de densidad media), Espuma Tapizado',
  usage: 'Doméstico',
  assemblyTime: 15,
  assemblyDescription: 'Autoensamblaje',
  ecoPart: ''
}

const DetailsContainer = styled.div`
  display: grid;

  ${mediaQuery('MD')`
    height: 100%;
    grid-template-columns: 4fr 3fr;
  `}
`;

const Detail: NextPage = () => {
  return (
    <DetailsContainer>
      <ProductDetail product={product} />
    </DetailsContainer>
  );
}

export default Detail;

