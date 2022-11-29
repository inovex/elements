import styles from './header.module.scss';
import Navbar from './navbar';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import ElementsLogo from '@assets/elements.svg';
import GithubLogo from '@assets/github-logo.png';
import inovexLogo from '@assets/inovex-logo.svg';


export default function Header() {
  const [yOffset, setYOffset] = useState(0);

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
          href="https://elements.inovex.de"
        >
          <Image
            src={ElementsLogo}
            alt="inovex-elements Logo"
            width={48}
            height={55}
          />
          <p className={styles.name}>elements</p>
        </a>
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
          src={GithubLogo}
          alt="Github Logo"
          width={30}
          height={30}
          style={{
            maxWidth: '100%',
            height: 'auto',
          }}
        />
      </a>
      <a
        className={styles.inovex}
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.inovex.de/"
      >
        <Image
          src={inovexLogo}
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
