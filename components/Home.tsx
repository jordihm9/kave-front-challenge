import Link from 'next/link';

import { Button } from 'components/Button';
import { CategoriesNav, ButtonCategoriesNav } from 'components/CategoriesNav';
import { Container } from '@layout/Container';
import { H2 } from '@headings';
import { Landing } from 'components/Landing';
import { ProductsList } from 'components/ProductsList';

import { ProductType } from 'services/fetchProducts';

interface Props {
  products: ProductType[]
}

export const Home: React.FC<Props> = ({products}) => {
  return (
    <main>
      <Landing/>
      <Container>
        <H2>Inspírate</H2>
        <ButtonCategoriesNav/>
        <CategoriesNav/>
        { products.length && <ProductsList products={products.splice(0,9)} />}
        <Container>
          <Link href='/products'>
            <Button>VER TODOS LOS PRODUCTOS</Button>
          </Link>
        </Container>
      </Container>
    </main>
  );
}


