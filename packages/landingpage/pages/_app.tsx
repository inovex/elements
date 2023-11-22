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
  /*
    Theme Toggle Implementation:
    ----------------------------
    - A theme state should be introduced to manage the current theme (light or dark).
    - The theme state will be used to toggle a class on a high-level element, like `body`.
    - This class change will dynamically update the styles of Stencil components used in the application via CSS variables.
    - The actual theme toggle function (to switch between light and dark) can be implemented and triggered from a UI element like a button.
    - This setup allows runtime theme switching without causing a full page re-render, as it relies on CSS variable updates.

    NOTE: this probably interfers with "@import '@inovex.de/elements/dist/inovex-elements/inovex-elements.css';" in the landingpage global.css,
          as we use the same css variables ("--inovex-elements-n-9"). Need to test if this is a problem.
  */
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
