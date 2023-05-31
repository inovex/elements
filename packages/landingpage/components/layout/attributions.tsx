import classNames from 'classnames';
import styles from './attributions.module.scss';
import Image from 'next/image';
import inovexLogo from '@assets/inovex-logo.svg';

export default function Attributions() {
  return (
    <div className={styles.container}>
      <a
        className={classNames(styles.attribution, 'body-m')}
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.inovex.de/"
      >
        <small>provided by</small>
        <Image
          src={inovexLogo}
          alt="Github Logo"
          width={30}
          height={30}
          style={{
            maxWidth: '100%',
            height: 'auto',
          }}
        />
        <small>inovex GmbH</small>
      </a>
      <a
        className={classNames(styles.attribution, 'body-m')}
        href="https://storyset.com/online"
      >
        <small>Online illustrations by Storyset</small>
      </a>
    </div>
  );
}
