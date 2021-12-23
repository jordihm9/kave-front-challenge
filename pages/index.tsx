import type { NextPage } from 'next';
import Head from 'next/head';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Kave Home Challenge</title>
        <meta name="description" content="Kave Home" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1>Hello Kave Home!</h1>
      </main>
    </>
  );
}

export default Home;

