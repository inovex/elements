import ElementsLogo from '@assets/elements.svg';
import Image from 'next/image';
import Link from 'next/link';
import useTranslation from '../../../../utils/hooks/useTranslation';
import VersionSelect from 'components/shared/versionSelect';
import { useRouter } from 'next/router';
import styles from './header.desktop.module.scss';
import LocaleSwitcher from './localeSwitcher';
import Navbar from './navbar';

export default function HeaderDesktop() {
  const { locale } = useTranslation();
  const router = useRouter();
  const isLibraryPage = router.pathname.endsWith('/library/components');

  return (
    <header className={styles.header}>
      <div id="desktopHeaderInner" className={styles.headerInner}>
        <div className={styles.logo}>
          <Link
            href={{
              pathname: '/[lang]',
              query: { lang: locale },
            }}
            replace
          >
            <Image
              src={ElementsLogo}
              alt="inovex-elements Logo"
              width={60}
              height={60}
            />
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
            width={30}
            height={30}
            style={{
              maxWidth: '100%',
              height: 'auto',
            }}
          />
        </a>
      </div>
    </header>
  );
}
