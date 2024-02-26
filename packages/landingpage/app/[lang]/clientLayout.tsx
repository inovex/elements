'use client';

import '../../styles/globals.css';
import '@code-hike/mdx/dist/index.css';
import '../../styles/custom-ch.css';
import { ReactNode, useEffect } from 'react';
import UiContextProvider from '../../utils/context/UiContext';
import { VersionProvider } from '../../utils/context/VersionContext';
import I18nContextProvider from '../../utils/context/i18nContext';
import Layout from '../../components/layout';
import {
  applyPolyfills,
  defineCustomElements,
} from '@inovex.de/elements/dist/loader';

export default function ClientLayout({
  children,
  translations,
}: {
  children: ReactNode;
  translations: any;
}) {
  useEffect(() => {
    void applyPolyfills().then(() => {
      void defineCustomElements(window);
    });
  }, []);

  return (
    <UiContextProvider>
      <VersionProvider>
        <I18nContextProvider translations={translations}>
          <Layout>{children}</Layout>
        </I18nContextProvider>
      </VersionProvider>
    </UiContextProvider>
  );
}
