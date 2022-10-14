import Image from 'next/image';
import styles from './header.module.scss';
import Navbar from './navbar';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Image
          src="/elements.svg"
          alt="inovex-elements Logo"
          width={48}
          height={55}
          priority
        />
        <p className={styles.name}>elements</p>
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
