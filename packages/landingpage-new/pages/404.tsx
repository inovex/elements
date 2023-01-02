import Link from 'next/link';
import styles from './404.module.scss';
import { InoButton } from '@elements';

export default function Custom404() {
  return (
    <div className={styles.container}>
      <h1 className="header-d1">404</h1>
      <p className="body-l">
        This is probably not the page you are looking for.
      </p>
      <Link href={'/'}>
        <InoButton>Take me back</InoButton>
      </Link>
    </div>
  );
}
