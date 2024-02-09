import useTranslation from '../../utils/hooks/useTranslation';
import Link from 'next/link';
import { SubRoutes } from '../../utils/routes';
import { InoButton } from '@elements';
import styles from './contactButton.module.scss';
import React from 'react';

const ContactButton = () => {
  const { t, locale } = useTranslation();
  return (
    <Link
      className={styles.contactButton}
      href={`/${locale}#${SubRoutes.HOME_CONTACT}`}
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
