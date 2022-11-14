import { useRouter } from 'next/router';
import styles from './navbar.module.scss';
import { Routes } from '../../utils/routes';
import LinkItem from './linkItem';

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
    </nav>
  );
}
