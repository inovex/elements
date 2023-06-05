import Head from 'next/head';
import { ReactNode, useContext } from 'react';
import styles from './layout.module.scss';
import Footer from './layout/footer/footer';
import Header from './layout/header/header';
import { UiContext, UiContextType } from '../utils/context/UiContext';

export default function Layout({ children }: { children: ReactNode }) {
  const { hideFooter } = useContext(UiContext) as UiContextType;

  return (
    <div className="inovex-elements-typo inovex-elements-theme">
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
        />
      </Head>
      <Header></Header>
      <div className={styles.body}>
        <main className={styles.main}>{children}</main>
        {!hideFooter && <Footer></Footer>}
      </div>
    </div>
  );
}
