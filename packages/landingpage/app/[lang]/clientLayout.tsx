'use client';

import '../../styles/globals.css';
import '@code-hike/mdx/dist/index.css';
import '../../styles/custom-ch.css';
import { ReactNode, useEffect, useState } from 'react';
import UiContextProvider from '../../utils/context/UiContext';
import { VersionProvider } from '../../utils/context/VersionContext';
import I18nContextProvider from '../../utils/context/i18nContext';
import Layout from '../../components/layout';
import type { Locale } from '../../i18n-config';
import {
  applyPolyfills,
  defineCustomElements,
} from '@inovex.de/elements/dist/loader';

export default function ClientLayout({
  children,
  lang,
  translations,
}: {
  children: ReactNode;
  lang: Locale;
  translations: any;
}) {
  /**
   * Fix elements hydration error issue
   * https://nextjs.org/docs/messages/react-hydration-error#solution-1-using-useeffect-to-run-on-the-client-only
   */
  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    (async () => {
      await applyPolyfills();
      defineCustomElements(window);
      setIsClient(true);
    })();
  }, []);

  return (
    <UiContextProvider>
      <VersionProvider>
        <I18nContextProvider lang={lang} translations={translations}>
          { isClient && <Layout>{children}</Layout>}
        </I18nContextProvider>
      </VersionProvider>
    </UiContextProvider>
  );
}
