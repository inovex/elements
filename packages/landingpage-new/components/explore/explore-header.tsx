import Image from 'next/image';
import useBasePath from 'utils/hooks/useBasePath';
import useTranslation from 'utils/hooks/useTranslation';
import styles from './explore-header.module.scss';
import classNames from 'classnames';

export default function ExploreHeader() {
  const basePath = useBasePath();
  const { t } = useTranslation();
  return (
    <div className={styles.container}>
      <div className={styles.claimContainer}>
        <h1 className="header-d3">
          <b>{t('header.title')}</b>
        </h1>
        <p className={classNames('title-l', styles.subtitle)}> {t('header.subtitle')}</p>
      </div>
      <Image
        width={461}
        height={326}
        src={`${basePath}/explore.svg`}
        alt="explore-image"
      ></Image>
    </div>
  );
}
