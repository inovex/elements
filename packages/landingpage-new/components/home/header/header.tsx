import Head from 'next/head';
import Image from 'next/image';
import { InoButton } from '@elements';
import styles from './header.module.scss';
import InstallChips from './install-chips';
import Link from 'next/link';
import { MainRoutes } from '../../../utils/routes';
import useBasePath from '../../../utils/hooks/use-base-path';
import classNames from 'classnames';

export default function Header() {
  const basePath = useBasePath();

  return (
    <>
      <Head>
        <title>Home</title>
        <meta name="Landingpage" content="the interoperable UI library" />
      </Head>
      <div className={styles.container}>
        <div className={styles.image}>
          <Image
            width={686}
            height={787}
            src={`${basePath}/elements-collage.png`}
            alt="Elements Collage"
            style={{
              maxWidth: '100%',
              height: 'auto',
              objectFit: 'contain',
            }}
          />
        </div>
        <div className={styles.headerContainer}>
          <h1 className={classNames(styles.header, 'header-d2')}>
            <b>the interoperable UI library</b>
          </h1>
          <h1 className={classNames(styles.header, 'header-d2')}>
            for any <mark>framework</mark>
          </h1>
        </div>
        <div className={classNames(styles.info, 'body-l')}>
          <p>
            It’s hard to build and maintain UI components. Don’t start from
            scratch every time you create a new project. Build them once, run
            them everywhere!
          </p>
          <p>
            Use our open source UI component library{' '}
            <Link href={MainRoutes.LIBRARY}>inovex elements.</Link>
          </p>
        </div>
        <div className={styles.installation}>
          <Link href={MainRoutes.GETTING_STARTED}>
            <InoButton>Getting started</InoButton>
          </Link>
          <div className={styles.animation}>
            <InstallChips></InstallChips>
          </div>
        </div>
      </div>
    </>
  );
}
