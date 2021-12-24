import type { NextPage } from 'next';

import { Header } from '@layout/Header';
import { Home as HomePage } from 'components/Home';

const Home: NextPage = () => {
  return (
    <>
      <Header/>
      <HomePage/>
    </>
  );
}

export default Home;

