import { useEffect, useState } from 'react';
import type { NextPage } from 'next';

import { Header } from '@layout/Header';
import { Home as HomePage } from 'components/Home';

import { fetchProducts, ProductType } from 'services/fetchProducts';

const Home: NextPage = () => {
  const [products, setProducts] = useState<ProductType[] | null>(null);

  useEffect(() => {
    fetchProducts().then(setProducts);
  }, []);

  return (
    <>
      <Header/>
      <HomePage products={products ? products : []}/>
    </>
  );
}

export default Home;

