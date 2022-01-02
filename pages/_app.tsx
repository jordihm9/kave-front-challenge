import Head from 'next/head';
import type { AppProps } from 'next/app';

import { Main } from '@layout/Main';
import { Header } from '@layout/Header';

import 'styles/globals.css';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <title>Kave Home Challenge</title>
        <meta name="description" content="Kave Home" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Noto+Serif:wght@400;700&family=Poppins:wght@400;500;700&display=swap" rel="stylesheet"/>
        <link rel="apple-touch-icon" sizes="76x76" href="https://static.kavehome.com/static/nilo/img/icons/apple-icon-76x76.png"/>
        <link rel="icon" type="image/png" sizes="96x96" href="https://static.kavehome.com/static/nilo/img/icons/favicon-96x96.png"/>
      </Head>
      <Header/>
      <Main>
        <Component {...pageProps} />
      </Main>
    </>
  );
}

export default MyApp;

