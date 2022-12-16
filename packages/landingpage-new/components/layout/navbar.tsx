import { useRouter } from 'next/router';
import styles from './navbar.module.scss';
import { MainRoutes, Routes, SubRoutes } from '../../utils/routes';
import LinkItem from './linkItem';
import { InoButton } from '@elements';
import Link from 'next/link';
import useTranslation from 'utils/hooks/useTranslation';

export default function Navbar() {
  const router = useRouter();
  const { locale } = useTranslation();

  return (
    <nav className={styles.navbar}>
      {Routes.map(({ name, url }) => (
        <LinkItem
          key={url}
          url={url}
          name={name}
          isActive={router.pathname === url}
        />
      ))}
      <Link href={`${MainRoutes.HOME}/${locale}#${SubRoutes.HOME_CONTACT}`}>
        <InoButton>Contact us</InoButton>
      </Link>
    </nav>
  );
}
