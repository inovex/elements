import Image from 'next/image';
import styles from './explore-header.module.scss';
import classNames from 'classnames';
import { useContext } from 'react';
import { I18NContext } from '../../../../utils/context/i18nContext';

export default function ExploreHeader() {
  const { t } = useContext(I18NContext);
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
