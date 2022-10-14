import { ReactNode } from 'react';
import styles from './layout.module.scss';
import Header from './layout/header';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div>
      <Header></Header>
      <main className={styles.main}>{children}</main>
    </div>
  );
}
