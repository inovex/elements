import inovexLogo from '@assets/inovex-logo.svg';
import classNames from 'classnames';
import Image from 'next/image';
import useTranslation from 'utils/hooks/useTranslation';
import styles from './attributions.module.scss';

export default function Attributions() {
  const { t } = useTranslation();

  return (
    <div className={styles.container}>
      <div className={styles.company}>
        <Image
          src={inovexLogo}
          alt="inovex Logo"
          width={30}
          height={30}
          style={{
            maxWidth: '100%',
            height: 'auto',
          }}
        />
        <a
          className={classNames(styles.attribution, 'body-m')}
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.inovex.de/"
        >
          <small>inovex GmbH</small>
        </a>
        <span className={classNames(styles.attribution, 'body-m')}>&bull;</span>
        <a
          className={classNames(styles.attribution, 'body-m')}
          rel="noopener noreferrer"
          href={t('common.attributions.legalNotice.url')}
        >
          <small>{t('common.attributions.legalNotice.label')}</small>
        </a>
        <span className={classNames(styles.attribution, 'body-m')}>&bull;</span>
        <a
          className={classNames(styles.attribution, 'body-m')}
          rel="noopener noreferrer"
          href={t('common.attributions.exclusionOfLiability.url')}
        >
          <small>{t('common.attributions.exclusionOfLiability.label')}</small>
        </a>
        <span className={classNames(styles.attribution, 'body-m')}>&bull;</span>
        <a
          className={classNames(styles.attribution, 'body-m')}
          rel="noopener noreferrer"
          href={t('common.attributions.dataProtection.url')}
        >
          <small>{t('common.attributions.dataProtection.label')}</small>
        </a>
      </div>
      <a
        className={classNames(styles.attribution, 'body-m')}
        href="https://storyset.com/online"
      >
        <small>Online illustrations by Storyset</small>
      </a>
    </div>
  );
}
