import '../styles/globals.css';
import '@code-hike/mdx/dist/index.css';
import '../styles/custom-ch.css'
import type { AppProps } from 'next/app';
import Layout from '../components/layout';
import {
  applyPolyfills,
  defineCustomElements,
} from '@inovex.de/elements/dist/loader';
import { useEffect } from 'react';
import { LanguageProvider } from 'utils/context/LanguageContext';
import { StorybookPathsProvider } from 'utils/context/StorybookPathsContext';

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    void applyPolyfills().then(() => {
      void defineCustomElements(window);
    });
  }, []);

  return (
    <LanguageProvider localization={pageProps.localization}>
      <StorybookPathsProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </StorybookPathsProvider>
    </LanguageProvider>
  );
}

export default MyApp;
