import { NextPage } from 'next';
import { AppProps } from 'next/app';
import { ReactElement } from 'react';
import '../styles/globals.css';

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement /* o JSX.Element */) => JSX.Element; // | ReactNode
};

type AppPropsWithLayOut = AppProps & {
  Component: NextPageWithLayout;
};

function MyApp({ Component, pageProps }: AppPropsWithLayOut) {
  const getLayout = Component.getLayout || ((page) => page);

  return getLayout(<Component {...pageProps} />);
}

export default MyApp;
