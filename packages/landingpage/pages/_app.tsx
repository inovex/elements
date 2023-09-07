import '../styles/globals.css';
import '@code-hike/mdx/dist/index.css';
import '../styles/custom-ch.css';
import type { AppProps } from 'next/app';
import Layout from '../components/layout';
import {
  applyPolyfills,
  defineCustomElements,
} from '@inovex.de/elements/dist/loader';
import { useEffect } from 'react';
import { LanguageProvider } from 'utils/context/LanguageContext';
import useDefaultLocale from '../translations/useDefaultLocale';
import { useMount } from 'react-use';
import UiContextProvider from '../utils/context/UiContext';
import { VersionProvider } from '../utils/context/VersionContext';

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    void applyPolyfills().then(() => {
      void defineCustomElements(window);
    });
  }, []);

  const redirectToDefaultLocale = useDefaultLocale();
  useMount(redirectToDefaultLocale);

  return (
    <UiContextProvider>
      <LanguageProvider localization={pageProps.localization}>
        <VersionProvider>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </VersionProvider>
      </LanguageProvider>
    </UiContextProvider>
  );
}

export default MyApp;
