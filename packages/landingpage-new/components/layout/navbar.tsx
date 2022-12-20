import { useRouter } from 'next/router';
import styles from './navbar.module.scss';
import { MainRoutes, Routes, SubRoutes } from '../../utils/routes';
import LinkItem from './linkItem';
import { InoButton } from '@elements';
import Link from 'next/link';
import useTranslation from 'utils/hooks/useTranslation';

export default function Navbar() {
  const router = useRouter();
  const { t, locale } = useTranslation();

  return (
    <nav className={styles.navbar}>
      {Routes.map(({ name, url }) => (
        <LinkItem
          key={url}
          url={url}
          name={t(`common.navigation.${name.replace(' ', '_')}.mainroute`)}
          isActive={router.pathname.slice(7) === url } // remove /[lang] from pathname
        />
      ))}
      <Link href={`${MainRoutes.HOME}${locale}#${SubRoutes.HOME_CONTACT}`}>
        <InoButton><span>{t('common.navigation.contact')}</span></InoButton>
      </Link>
    </nav>
  );
}
