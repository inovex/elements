import React from 'react';
import Head from 'next/head';
import { GetStaticProps, NextPage } from 'next';

interface Props {
  host: string;
}

export const Index: NextPage<Props> = ({ host }) => {
  return (
    <Head>
      <meta name="robots" content="noindex, nofollow" />
      <meta httpEquiv="refresh" content={`0;URL=${host}/en`} />
    </Head>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      host: process.env.HOST,
    },
  };
};

export default Index;
