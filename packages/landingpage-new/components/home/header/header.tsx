import Head from 'next/head';
import Image from 'next/image';
import { InoButton } from '@elements';
import styles from './header.module.scss';
import InstallChips from './install-chips';
import Link from 'next/link';
import { MainRoutes } from '../../../utils/routes';

export default function Header() {
  return <>
    <Head>
      <title>Home</title>
      <meta name="Landingpage" content="the interoperable UI library" />
    </Head>
    <div className={styles.container}>
      <div className={styles.image}>
        <Image
          width={686}
          height={787}
          src="/elements-collage.png"
          alt="Elements Collage"
          style={{
            maxWidth: '100%',
            height: 'auto',
            objectFit: 'contain'
          }} />
      </div>
      <div className={styles.headerContainer}>
        <h1 className={styles.header}>the interoperable UI library</h1>
        <h2 className={styles.subHeader}>
          for any <mark>framework</mark>
        </h2>
      </div>
      <div className={styles.info}>
        <p>
          It’s hard to build and maintain UI components. Don’t start from
          scratch every time you create a new project. Build them once, run
          them everywhere!
        </p>
        <p>
          Use our open source UI component library{' '}
          <span style={{ color: '#2C03FA', fontWeight: 'bold' }}>
            inovex elements.
          </span>
        </p>
      </div>
      <div className={styles.installation}>
        <Link href={MainRoutes.DOCS}>
          <InoButton>Show documentation</InoButton>
        </Link>
        <div className={styles.animation}>
          <InstallChips></InstallChips>
        </div>
      </div>
    </div>
  </>;
}
