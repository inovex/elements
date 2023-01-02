import React, { ReactNode } from 'react';
import Head from 'next/head';

interface Props {
  children: ReactNode;
  title: string | string[];
}

const SEPARATOR = '•';

const Page = ({ children, title = '' }: Props) => {
  return (
    <>
      <Head>
        <title>{`${
          Array.isArray(title) ? title.join(` ${SEPARATOR} `) : title
        } ${SEPARATOR} inovex-elements`}</title>
      </Head>
      {children}
    </>
  );
};

export default Page;
