import Link from 'next/link';
import { SubRoutes } from '@routes';
import styles from './contactButton.module.scss';
import React from 'react';
import { InoButton } from '@inovex.de/elements-react';
import { useTranslation } from '@hooks/useTranslation';

const ContactButton = () => {
  const { t, lang } = useTranslation();

  return (
    <Link
      className={styles.contactButton}
      href={`/${lang}#${SubRoutes.HOME_CONTACT}`}
    >
      <InoButton className={styles.button}>
        <span className={styles.label}>
          {t('common.navigation.contact.name')}
        </span>
      </InoButton>
    </Link>
  );
};

export default ContactButton;
