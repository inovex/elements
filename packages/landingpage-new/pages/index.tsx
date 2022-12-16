import React from 'react';
import { getInitialLocale } from 'translations/getInitialeLocale';
import Head from 'next/head';
const Index = () => {
  React.useEffect(() => {
    window.location.replace(`/${getInitialLocale()}`);
  });

  return (
    <Head>
      <meta name="robots" content="noindex, nofollow" />
    </Head>
  );
};

export default Index;
