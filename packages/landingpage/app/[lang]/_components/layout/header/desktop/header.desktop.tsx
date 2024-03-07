import ElementsLogo from '@assets/elements.svg';
import Image from 'next/image';
import Link from 'next/link';
import styles from './header.desktop.module.scss';
import LocaleSwitcher from './localeSwitcher';
import Navbar from './navbar';
import VersionSelect from '../versionSelect';
import { usePathname } from 'next/navigation';
import { useTranslation } from '@hooks/useTranslation';

export default function HeaderDesktop() {
  const pathName = usePathname();
  const { lang } = useTranslation();
  const isLibraryPage = pathName?.endsWith('/library/components');

  return (
    <header className={styles.header}>
      <div className={styles.headerInner}>
        <div className={styles.logo}>
          <Link className={styles.logoLink} href={{ pathname: `/${lang}` }}>
            <Image src={ElementsLogo} alt="inovex-elements Logo" fill />
          </Link>
        </div>
        {isLibraryPage && (
          <div className={styles.versionContainer}>
            <VersionSelect />
          </div>
        )}
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
            src={`/github-logo.svg`}
            alt="Github Logo"
            fill
          />
        </a>
      </div>
    </header>
  );
}
