import React, { ReactNode } from 'react';
import ClientLayout from './clientLayout';
import { i18n } from '../../i18n-config';
import { LangParam } from '../../types/langParam';
import { getTranslation } from '../../translations/getTranslations';
import { Metadata, Viewport } from 'next';

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

type RootLayoutParams = { children: ReactNode; params: LangParam };

export function generateViewport(): Viewport {
  return {
    themeColor: 'white',
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
    userScalable: false,
  };
}

export function generateMetadata(): Metadata {
  return {
    title: 'inovex-elements',
    robots: {
      index: false,
      follow: false,
    },
    other: {
      Landingpage: 'the interoperable UI library',
      httpEquiv: 'refresh',
      'msapplication-TileColor': '#ffffff',
    },
  };
}

export default async function RootLayout({
  children,
  params,
}: RootLayoutParams) {
  const lang = params.lang ?? 'en'
  const translations = await getTranslation(lang);
  return (
    <html>
      <head lang={lang}>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#2d02ff" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body>
        <ClientLayout lang={lang} translations={translations}>
          {children}
        </ClientLayout>
      </body>
    </html>
  );
}
