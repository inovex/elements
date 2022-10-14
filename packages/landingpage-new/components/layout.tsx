import { ReactNode } from 'react';
import styles from './layout.module.scss';
import Header from './layout/header';
import Footer from "./layout/footer";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div>
      <Header></Header>
      <main className={styles.main}>{children}</main>
      <Footer></Footer>
    </div>
  );
}
