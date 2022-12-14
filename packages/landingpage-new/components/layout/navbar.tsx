import { useRouter } from 'next/router';
import styles from './navbar.module.scss';
import { MainRoutes, Routes, SubRoutes } from '../../utils/routes';
import LinkItem from './linkItem';
import { InoButton } from '@elements';
import Link from 'next/link';

export default function Navbar() {
  const router = useRouter();

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
      <Link href={MainRoutes.HOME + '#' + SubRoutes.HOME_CONTACT}>
        <InoButton>Contact us</InoButton>
      </Link>
    </nav>
  );
}
