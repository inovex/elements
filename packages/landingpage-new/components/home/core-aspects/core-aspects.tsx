import { InoIcon } from '@elements';
import useTranslation from 'utils/hooks/useTranslation';
import styles from './core-aspects.module.scss';

export default function CoreAspects() {
  const { t } = useTranslation();
  return (
    <div className={styles.secondContainer}>
      <div>
        <InoIcon icon="code" clickable={false} />
        <p className={styles.title}>{t('core_aspects.first.title')}</p>
        <p className={styles.text}>{t('core_aspects.first.text')}</p>
      </div>
      <div>
        <InoIcon icon="time" clickable={false} />
        <p className={styles.title}>{t('core_aspects.second.title')}</p>
        <p className={styles.text}>{t('core_aspects.second.text')}</p>
      </div>
      <div>
        <InoIcon icon="partner" clickable={false} />
        <p className={styles.title}>{t('core_aspects.third.title')}</p>
        <p className={styles.text}>{t('core_aspects.third.text')}</p>
      </div>
    </div>
  );
}
