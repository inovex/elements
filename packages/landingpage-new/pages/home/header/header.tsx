import Head from 'next/head';
import Image from 'next/image';
import { InoButton } from '@elements';
import styles from './header.module.scss';
import InstallChips from './install-chips';

export default function Header() {
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.image}>
          <Image
            width={686}
            height={787}
            src="/elements-collage.png"
            alt="Elements Collage"
            objectFit="contain"
            
          />
        </div>
        <div className={styles.header}>
          <Head>
            <title>Home</title>
            <meta name="Landingpage" content="the interoperable UI library" />
          </Head>
          <p className={styles.heading}>
            <b>the interoperable UI library</b>
            <br />
            for any <mark>framework</mark>
          </p>
        </div>
        <div className={styles.info}>
          <p>
            It’s hard to build and maintain UI components. Don’t start from
            scratch every time you create a new project. Build them once, run
            them everywhere!
            <br />
            <br />
            Use our open source UI component library{' '}
            <span style={{ color: '#2C03FA', fontWeight: 'bold' }}>
              inovex elements.
            </span>
          </p>
        </div>
        <div className={styles.installation}>
          <InoButton>Show documentation</InoButton>
          <div className={styles.animation}>
            <InstallChips></InstallChips>
          </div>
        </div>
      </div>
    </div>
  );
}