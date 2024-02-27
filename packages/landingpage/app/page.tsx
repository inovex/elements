import { permanentRedirect } from 'next/navigation';
import { i18n } from 'i18n-config';

export default function Page() {
  const locale = i18n.defaultLocale;
  permanentRedirect(`/${locale}`);
}
