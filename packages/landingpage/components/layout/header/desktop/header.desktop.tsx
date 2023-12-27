import ElementsLogo from '@assets/elements.svg';
import Image from 'next/image';
import Link from 'next/link';
import useTranslation from '../../../../utils/hooks/useTranslation';
import { useRouter } from 'next/router';
import styles from './header.desktop.module.scss';
import LocaleSwitcher from './localeSwitcher';
import Navbar from './navbar';
import dynamic from 'next/dynamic';

const VersionSelectWithoutSSR = dynamic(
  () => import('components/shared/versionSelect'),
  { ssr: false },
);

export default function HeaderDesktop() {
  const { locale } = useTranslation();
  const router = useRouter();
  const isLibraryPage = router.pathname.endsWith('/library/components');

  return (
    <header className={styles.header}>
      <div className={styles.headerInner}>
        <div className={styles.logo}>
          <Link
            className={styles.logoLink}
            href={{
              pathname: '/[lang]',
              query: { lang: locale },
            }}
            replace
          >
            <Image src={ElementsLogo} alt="inovex-elements Logo" fill />
          </Link>
        </div>
        {isLibraryPage && (
          <div className={styles.versionContainer}>
            <VersionSelectWithoutSSR />
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
