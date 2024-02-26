import { ReactNode, useContext } from 'react';
import styles from './layout.module.scss';
import Footer from './layout/footer/footer';
import Header from './layout/header/header';
import { UiContext, UiContextType } from '../utils/context/UiContext';

export default function Layout({ children }: { children: ReactNode }) {
  const { isFooterHidden } = useContext(UiContext) as UiContextType;

  return (
    <div className="inovex-elements-typo inovex-elements-theme">
      <div className="blur-bg"></div>
      <Header />
      <div className={styles.body}>
        <main className={styles.main}>{children}</main>
        {!isFooterHidden && <Footer />}
      </div>
    </div>
  );
}
