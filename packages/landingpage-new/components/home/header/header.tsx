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
            <b>{t('header.title_1')}</b>
          </h1>
          <h1 className={classNames(styles.header, 'header-d2')}>
            {t('header.title_2')} <mark>{t('header.title_mark')}</mark>
          </h1>
        </div>
          <div className={classNames(styles.info, 'body-l')}>
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
              <InoButton><span>{t('header.getting_started')}</span></InoButton>
            </Link>
            <div className={styles.animation}>
              <InstallChips></InstallChips>
            </div>
          </div>
        </div>
    </>
  );
}
