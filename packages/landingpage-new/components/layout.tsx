import { ReactNode } from 'react';
import styles from './layout.module.scss';
import Footer from './layout/footer';
import Head from 'next/head';
import Header from './layout/header';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="inovex-elements-typo">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" />
      </Head>
      <Header></Header>
      <main className={styles.main}>{children}</main>
      <Footer></Footer>
    </div>
  );
}
