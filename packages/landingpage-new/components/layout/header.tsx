import Image from 'next/image';
import styles from './header.module.scss';
import Navbar from './navbar';
import { useEffect, useState } from 'react';

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
            src="/elements.svg"
            alt="inovex-elements Logo"
            width={48}
            height={55}
            priority
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
          src="/github-logo.png"
          alt="Github Logo"
          width={30}
          height={30}
          priority
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
          priority
        />
      </a>
    </header>
  );
}
