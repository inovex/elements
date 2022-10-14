import { ReactNode } from 'react';
import { useRouter } from 'next/router';
import { InoTab, InoTabBar } from '@elements';
import Image from 'next/image';
import styles from './layout.module.scss';

export default function Layout({ children }: { children: ReactNode }) {
  const router = useRouter();

  return (
    <div className={styles.appContainer}>
      <header className={styles.header}>
        <div className={styles.logoContainer}>
          <Image
            src="/elements.svg"
            alt="inovex-elements Logo"
            width={48}
            height={55}
          />
          <p>elements</p>
        </div>
        <InoTabBar
          activeTab={
            router.pathname === '/' ? 0 : router.pathname === '/explore' ? 1 : 2
          }
        >
          <InoTab label={'Home'} onInteracted={() => router.push('/')}></InoTab>
          <InoTab
            label={'Explore'}
            onInteracted={() => router.push('explore')}
          ></InoTab>
          <InoTab
            label={'Storybook'}
            onInteracted={() => router.push('storybook')}
          ></InoTab>
        </InoTabBar>
      </header>
      <main>{children}</main>
    </div>
  );
}
