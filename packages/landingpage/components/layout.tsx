import Head from 'next/head';
import { ReactNode, useContext } from 'react';
import styles from './layout.module.scss';
import Footer from './layout/footer/footer';
import Header from './layout/header/header';
import { UiContext, UiContextType } from '../utils/context/UiContext';
import { useTheme } from '../utils/context/ThemeContext';

export default function Layout({ children }: { children: ReactNode }) {
  const { isFooterHidden } = useContext(UiContext) as UiContextType;
  const { theme } = useTheme();

  return (
    <div className={`inovex-elements-typo ${theme}`}>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
        />
      </Head>
      <Header />
      <div className={styles.body}>
        <main className={styles.main}>{children}</main>
        {!isFooterHidden && <Footer />}
      </div>
    </div>
  );
}
