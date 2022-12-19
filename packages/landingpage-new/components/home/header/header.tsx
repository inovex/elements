import Head from 'next/head';
import Image from 'next/image';
import { InoButton } from '@elements';
import styles from './header.module.scss';
import InstallChips from './install-chips';
import Link from 'next/link';
import { MainRoutes } from 'utils/routes';
import useBasePath from 'utils/hooks/use-base-path';
import useTranslation from 'utils/hooks/useTranslation';

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
          <h1 className={styles.header}>{t('header.title_1')}</h1>
          <h2 className={styles.subHeader}>
            {t('header.title_2')} <mark>{t('header.title_mark')}</mark>
          </h2>
        </div>
        <div className={styles.info}>
          <p>{t('header.subtitle_1')}</p>
          <p>
            {t('header.subtitle_2')}{' '}
            <Link href={`${locale}${MainRoutes.LIBRARY}`}>
              {t('common.elements')}.
            </Link>
          </p>
        </div>
        <div className={styles.installation}>
          <Link href={`${locale}${MainRoutes.GETTING_STARTED}`}>
            <InoButton>{t('header.getting_started')}</InoButton>
          </Link>
          <div className={styles.animation}>
            <InstallChips></InstallChips>
          </div>
        </div>
      </div>
    </>
  );
}
