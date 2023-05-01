import Head from 'next/head';
import { ReactNode } from 'react';
import styles from './layout.module.scss';
import Footer from './layout/footer/footer';
import Header from './layout/header/header';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="inovex-elements-typo">
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
        />
      </Head>
      <Header></Header>
      <div className={styles.body}>
        <main className={styles.main}>{children}</main>
        <Footer></Footer>
      </div>
    </div>
  );
}
