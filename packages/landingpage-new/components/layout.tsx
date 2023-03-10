import { ReactNode } from 'react';
import styles from './layout.module.scss';
import Header from './layout/header';
import Footer from './layout/footer';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className='inovex-elements-typo'>
      <Header></Header>
      <div className={styles.main}>
        <main>{children}</main>
        <Footer></Footer>
      </div>
    </div>
  );
}
