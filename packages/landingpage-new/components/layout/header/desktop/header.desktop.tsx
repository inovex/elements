import styles from './header.desktop.module.scss';
import Navbar from './navbar';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import ElementsLogo from '@assets/elements.svg';
import useBasePath from 'utils/hooks/useBasePath';
import LocaleSwitcher from './localeSwitcher';

export default function HeaderDesktop() {
  const [yOffset, setYOffset] = useState(0);
  const basePath = useBasePath();

  useEffect(() => {
    const onScroll = () => {
      const offset = window.pageYOffset;

      if (offset !== 0 && Math.abs(yOffset - offset) < 5) return; // prevent jumping

      setYOffset(offset);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, [yOffset]);

  return (
    <header
      className={styles.header}
      style={{ '--factor': yOffset } as React.CSSProperties}
    >
      <div className={styles.logo}>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href={basePath}
        >
          <Image
            src={ElementsLogo}
            alt="inovex-elements Logo"
            width={68}
            height={68}
          />
        </a>
      </div>
      <div className={styles.language}>
        <LocaleSwitcher />
      </div>
      <div className={styles.navbar}>
        <Navbar />
      </div>
      <a
        className={styles.github}
        target="_blank"
        rel="noopener noreferrer"
        href="https://github.com/inovex/elements"
      >
        <Image
          className={styles.githubImage}
          src={`${basePath}/github-logo.png`}
          alt="Github Logo"
          width={30}
          height={30}
          style={{
            maxWidth: '100%',
            height: 'auto',
          }}
        />
      </a>
    </header>
  );
}
