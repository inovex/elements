import React from 'react';
import styles from './project-notice.module.scss';
import { useTranslation } from '@hooks/useTranslation';

export default function ProjectNotice() {
  const { t } = useTranslation();

  return (
    <div className={styles.notice}>
      <div className={styles.content}>
        <div className={styles.icon}>⚠️</div>
        <div className={styles.text}>
          <strong>{t('common.projectNotice.title')}</strong> {t('common.projectNotice.message')}
        </div>
      </div>
    </div>
  );
}
