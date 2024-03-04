import Image from 'next/image';
import styles from './explore-header.module.scss';
import classNames from 'classnames';
import { useTranslation } from '@hooks/useTranslation';

export default function ExploreHeader() {
  const { t } = useTranslation();
  return (
    <div className={styles.container}>
      <div className={styles.claimContainer}>
        <h1 className="header-d3">
          <b>{t('explore.header.title')}</b>
        </h1>
        <p className={classNames('title-l', styles.subtitle)}>
          {t('explore.header.subtitle')}
        </p>
      </div>
      <div className={styles.image}>
        <Image src={`/explore.svg`} alt="explore-image" fill priority={false} />
      </div>
    </div>
  );
}
