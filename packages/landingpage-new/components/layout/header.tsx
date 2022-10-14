import {useRouter} from 'next/router';
import {InoTab, InoTabBar} from '@elements';
import Image from 'next/image';
import styles from './header.module.scss';

export default function Header() {
  const router = useRouter();

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Image
          src="/elements.svg"
          alt="inovex-elements Logo"
          width={48}
          height={55}
        />
        <p className={styles.name}>elements</p>
      </div>
      <InoTabBar
        className={styles.navbar}
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
      <a
        className={styles.github}
        target="_blank"
        rel="noopener noreferrer"
        href="https://github.com/inovex/elements"
      >
        <Image
          src="/github-logo.png"
          alt="Github Logo"
          width={30}
          height={30}
        />
      </a>
      <a
        className={styles.inovex}
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.inovex.de/"
      >
        <Image
          src="/inovex-logo.svg"
          alt="Github Logo"
          width={30}
          height={30}
        />
      </a>
    </header>
  );
}
