import Link from 'next/link';
import styles from './404.module.scss';
import { InoButton } from '@elements';
import React from 'react';

export default function Custom404() {
  return (
    <div className={styles.container}>
      <h1 className={styles.code}>404</h1>
      <p className={styles.hint}>
        This is probably not the page you are looking for.
      </p>
      <Link href={'/'}>
        <InoButton className={styles.link}>Take me back</InoButton>
      </Link>
    </div>
  );
}
