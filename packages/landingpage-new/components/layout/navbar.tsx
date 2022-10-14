import { useRouter } from 'next/router';
import classNames from 'classnames';
import styles from './navbar.module.scss';

enum Routes {
  HOME = '/',
  EXPLORE = '/explore',
  DOCS = '/docs',
  ABOUT = '/about',
  CONTACT = '/contact',
}

export default function Navbar() {
  const router = useRouter();

  return (
    <nav className={styles.navbar}>
      {Object.entries(Routes).map(([name, url]) => (
        <a key={url} href={url}>
          <p
            className={classNames(
              styles.link,
              router.pathname === url && styles.linkActive
            )}
          >
            {name.toLowerCase()}
          </p>
        </a>
      ))}
    </nav>
  );
}
