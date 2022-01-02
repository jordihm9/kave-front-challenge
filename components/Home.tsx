import Link from 'next/link';

import { Button } from 'components/Button';
import { CategoriesNav, ButtonCategoriesNav } from 'components/CategoriesNav';
import { Container } from '@layout/Container';
import { H1 } from '@headings';
import { Landing } from 'components/Landing';
import { List as ProductsList } from 'components/product/List';

import { ProductType } from 'services/fetchProducts';

interface Props {
  products: ProductType[]
}

export const Home: React.FC<Props> = ({products}) => {
  return (
    <main>
      <Landing/>
      <Container>
        <H1 bold={false}>Inspírate</H1>
        <ButtonCategoriesNav/>
        <CategoriesNav/>
        <ProductsList products={products.splice(0,9)} />
        <Container>
          <Link href='/products' passHref>
            <a>
              <Button>VER TODOS LOS PRODUCTOS</Button>
            </a>
          </Link>
        </Container>
      </Container>
    </main>
  );
}


