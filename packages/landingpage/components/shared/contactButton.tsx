import Link from 'next/link';
import { SubRoutes } from '../../utils/routes';
import styles from './contactButton.module.scss';
import React from 'react';
import { usePathname } from 'next/navigation';
import { InoButton } from '@inovex.de/elements-react';
import { useTranslation } from '@hooks/useTranslation';

const ContactButton = () => {
  const pathName = usePathname()?.split('/')[1] ?? 'en';
  const { t } = useTranslation();

  return (
    <Link
      className={styles.contactButton}
      href={`/${pathName}#${SubRoutes.HOME_CONTACT}`}
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
