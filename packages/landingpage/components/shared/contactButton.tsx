import Link from 'next/link';
import { SubRoutes } from '../../utils/routes';
import styles from './contactButton.module.scss';
import React, { useContext } from 'react';
import { I18NContext } from '../../utils/context/i18nContext';
import { usePathname } from 'next/navigation';
import { InoButton } from '@inovex.de/elements-react';

const ContactButton = () => {
  const pathName = usePathname()?.split('/')[1] ?? 'en';
  const { t } = useContext(I18NContext);

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
