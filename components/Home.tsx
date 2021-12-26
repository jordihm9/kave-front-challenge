import { Categories, ButtonCategories } from 'components/Categories';
import { Container } from '@layout/Container';
import { H2 } from '@headings';
import { Landing } from 'components/Landing';

export const Home: React.FC = () => {
  return (
    <main>
      <Landing/>
      <Container>
        <H2>Inspírate</H2>
        <ButtonCategories/>
        <Categories/>
      </Container>
    </main>
  );
}


