
import { Categories, ButtonCategories } from 'components/Categories';
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
        <ButtonCategories/>
        <Categories/>
        { products.length && <ProductsList products={products.splice(0,9)} />}
      </Container>
    </main>
  );
}


