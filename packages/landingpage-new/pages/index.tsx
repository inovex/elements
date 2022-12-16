import React from 'react';
import Head from 'next/head';
import { getInitialLocale } from 'translations/getInitialeLocale';
import UseBasePath from 'utils/hooks/use-base-path';

const Index: React.FC = () => {
  const basePath = UseBasePath();
  React.useEffect(() => {
    window.location.replace(
      window.location.origin + `/${basePath}/${getInitialLocale()}`
    );
  });

  return (
    <Head>
      <meta name="robots" content="noindex, nofollow" />
    </Head>
  );
};

export default Index;
