import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Layout from '../components/layout';
import {
  applyPolyfills,
  defineCustomElements,
} from '@inovex.de/elements/dist/loader';
import { useEffect } from 'react';
import { LanguageProvider } from 'utils/context/LanguageContext';

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    void applyPolyfills().then(() => {
      void defineCustomElements(window);
    });
  }, []);

  return (
    <LanguageProvider localization={pageProps.localization}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </LanguageProvider>
  );
}

export default MyApp;
