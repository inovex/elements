import React, { ReactNode } from 'react';
import Head from 'next/head';

interface Props {
  children: ReactNode;
  title: string;
}

const Page = ({ children, title = '' }: Props) => {
  return (
    <>
      <Head>
        <title>{title + ' • inovex-elements'}</title>
      </Head>
      {children}
    </>
  );
};

export default Page;
