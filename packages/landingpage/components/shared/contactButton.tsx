import useTranslation from '../../utils/hooks/useTranslation';
import Link from 'next/link';
import { SubRoutes } from '../../utils/routes';
import { InoButton } from '@elements';

export function ContactButton() {
  const { t, locale } = useTranslation();
  return (
    <Link
      style={{ display: 'flex' }}
      href={`/${locale}#${SubRoutes.HOME_CONTACT}`}
    >
      <InoButton style={{ margin: 'auto' }}>
        <span>{t('common.navigation.contact.name')}</span>
      </InoButton>
    </Link>
  );
}
