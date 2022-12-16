import Head from 'next/head';
import Image from 'next/image';
import { InoButton } from '@elements';
import styles from './header.module.scss';
import InstallChips from './install-chips';
import Link from 'next/link';
import { MainRoutes } from '../../../utils/routes';
import useBasePath from '../../../utils/hooks/use-base-path';
import useTranslation from 'hooks/useTranslation';

export default function Header() {
  const basePath = useBasePath();
  const { t, locale } = useTranslation();
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
          <h1 className={styles.header}>{t('header_title1')}</h1>
          <h2 className={styles.subHeader}>
            {t('header_title2')} <mark>{t('header_titleMark')}</mark>
          </h2>
        </div>
        <div className={styles.info}>
          <p>{t('header_subtitle1')}</p>
          <p>
            {t('header_subtitle2')}{' '}
            <span style={{ color: '#2C03FA', fontWeight: 'bold' }}>
              {t('header_inoElements')}.
            </span>
          </p>
        </div>
        <div className={styles.installation}>
          <Link href={MainRoutes.DOCS}>
            <InoButton>{t('header_button')}</InoButton>
          </Link>
          <div className={styles.animation}>
            <InstallChips></InstallChips>
          </div>
        </div>
      </div>
    </>
  );
}
