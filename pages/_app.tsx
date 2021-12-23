import Head from 'next/head';
import type { AppProps } from 'next/app';

import 'styles/globals.css';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <title>Kave Home Challenge</title>
        <meta name="description" content="Kave Home" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;700&display=swap" rel="stylesheet" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;

