import { InoButton } from '@inovex.de/elements-react';
import classNames from 'classnames';
import Image from 'next/image';
import Link from 'next/link';
import { MainRoutes } from '@routes';
import styles from './header.module.scss';
import InstallChips from './install-chips';
import { useTranslation } from '@hooks/useTranslation';

export default function Header() {
  const { t, lang } = useTranslation();
  return (
    <>
      <div className={styles.container}>
        <div className={styles.image}>
          <Image
            width={663}
            height={354}
            src={`/elements-collection-image.png`}
            alt="Elements Collage"
            style={{
              height: 'auto',
              objectFit: 'contain',
            }}
            priority
          />
        </div>
        <div className={styles.headerContainer}>
          <h1 className={classNames(styles.header, 'header-d2')}>
            <b>{t('home.header.elements_label')}</b>
          </h1>
          <h1 className={classNames(styles.subheader, 'header-d2')}>
            {t('home.header.title_1')}
            <mark>{t('home.header.title_mark')}</mark>
          </h1>
          <h1 className={classNames(styles.subheader, 'header-d2')}>
            {t('home.header.title_2')}
          </h1>
        </div>
        <div className={classNames(styles.info, 'body-l')}>
          <p>
            {t('home.header.subtitle_1')}{' '}
            <Link href={`${lang}${MainRoutes.LIBRARY}`}>
              {t('common.elements')}.
            </Link>
          </p>
        </div>
        <div className={styles.installation}>
          <Link
            className={styles.link}
            href={`${lang}${MainRoutes.GETTING_STARTED}`}
          >
            <InoButton>
              <span>{t('home.header.getting_started')}</span>
            </InoButton>
          </Link>
          <div className={styles.animation}>
            <InstallChips></InstallChips>
          </div>
        </div>
      </div>
    </>
  );
}
