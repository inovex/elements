import { Metadata, Viewport } from 'next';
import React, { ReactNode } from 'react';
import { defaultLng } from 'translations/i18n';

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

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang={defaultLng} className="hydrated">
      <head>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#2d02ff" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body>{children}</body>
    </html>
  );
}
