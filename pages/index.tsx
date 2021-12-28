import { useEffect, useState } from 'react';
import type { NextPage } from 'next';

import { Home as HomePage } from 'components/Home';

import { fetchProducts, ProductType } from 'services/fetchProducts';

const Home: NextPage = () => {
  const [products, setProducts] = useState<ProductType[]>([]);

  useEffect(() => {
    fetchProducts().then(setProducts);
  }, []);

  return <HomePage products={products}/>;
}

export default Home;

