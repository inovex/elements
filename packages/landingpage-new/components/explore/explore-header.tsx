import Image from 'next/image';
import useBasePath from 'utils/hooks/useBasePath';
import useTranslation from 'utils/hooks/useTranslation';
import styles from './explore-header.module.scss';

export default function ExploreHeader() {
  const basePath = useBasePath();
  const { t } = useTranslation();
  return (
    <div className={styles.container}>
      <div>
        <h1 className="header-d3">
          <b>{t('header.title')}</b>
        </h1>
        <p className="title-l"> {t('header.subtitle')}</p>
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
