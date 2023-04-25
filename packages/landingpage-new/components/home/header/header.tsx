import Image from 'next/image';
import { InoButton } from '@elements';
import styles from './header.module.scss';
import InstallChips from './install-chips';
import Link from 'next/link';
import { MainRoutes } from 'utils/routes';
import useBasePath from 'utils/hooks/useBasePath';
import useTranslation from 'utils/hooks/useTranslation';
import classNames from 'classnames';

export default function Header() {
  const basePath = useBasePath();
  const { t, locale } = useTranslation();
  return (
    <>
      <div className={styles.container}>
        <div className={styles.image}>
          <Image
            width={663}
            height={354}
            src={`${basePath}/elements-collection-image.png`}
            alt="Elements Collage"
            style={{
              height: 'auto',
              objectFit: 'contain',
            }}
          />
        </div>
        <div className={styles.headerContainer}>
          <h1 className={classNames(styles.header, 'header-d2')}>
            <b>{t('header.elements_label')}</b>
          </h1>
          <h1 className={classNames(styles.header, 'header-d2')}>
            {t('header.title_1')}<mark>{t('header.title_mark')}</mark>
          </h1>
          <h1 className={classNames(styles.header, 'header-d2')}>
            {t('header.title_2')}
          </h1>
        </div>
        <div className={classNames(styles.info, 'body-l')}>
          <p>
            {t('header.subtitle_1')}{' '}
            <Link href={`${locale}${MainRoutes.LIBRARY}`}>
              {t('common.elements')}.
            </Link>
          </p>
        </div>
        <div className={styles.installation}>
          <Link href={`${locale}${MainRoutes.GETTING_STARTED}`}>
            <InoButton>
              <span>{t('header.getting_started')}</span>
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
