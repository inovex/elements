import styles from './core-aspects.module.scss';
import versatile from '@assets/coreaspect-versatile.svg';
import consistent from '@assets/coreaspect-consistent.svg';
import futureproof from '@assets/coreaspect-futureproof.svg';
import Image from 'next/image';
import { useContext } from 'react';
import { I18nContext } from '../../../utils/context/i18nContext';

export default function CoreAspects() {
  const { t } = useContext(I18nContext);
  return (
    <div className={styles.coreAspectsContainer}>
      <div className={styles.coreAspect}>
        <Image src={versatile} alt="versatile image" width={200} height={200} />
        <p className="title-l">{t('home.core_aspects.first.title')}</p>
        <p className="body-l">{t('home.core_aspects.first.text')}</p>
      </div>
      <div className={styles.coreAspect}>
        <Image
          src={consistent}
          alt="consistent image"
          width={200}
          height={200}
        />
        <p className="title-l">{t('home.core_aspects.second.title')}</p>
        <p className="body-l">{t('home.core_aspects.second.text')}</p>
      </div>
      <div className={styles.coreAspect}>
        <Image
          src={futureproof}
          alt="futureproof image"
          width={200}
          height={200}
        />
        <p className="title-l">{t('home.core_aspects.third.title')}</p>
        <p className="body-l">{t('home.core_aspects.third.text')}</p>
      </div>
    </div>
  );
}
