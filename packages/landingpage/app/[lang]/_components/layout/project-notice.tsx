import React from 'react';
import styles from './project-notice.module.scss';

export default function ProjectNotice() {
  return (
    <div className={styles.notice}>
      <div className={styles.content}>
        <div className={styles.icon}>⚠️</div>
        <div className={styles.text}>
          <strong>Project Notice:</strong> This project is currently paused and not actively developed. We appreciate
          your interest and will provide updates when development resumes.
        </div>
      </div>
    </div>
  );
}
