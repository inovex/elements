import { permanentRedirect } from 'next/navigation';
import { i18n } from 'i18n-config';
import { ParamsWithLang } from 'types/langParam';
import { MainRoutes, SubRoutes } from 'utils/routes';

export default function Page({ params }: ParamsWithLang) {
  const locale = params.lang ?? i18n.defaultLocale;
  permanentRedirect(
    `/${locale}${MainRoutes.GETTING_STARTED}/${SubRoutes.GETTING_STARTED_REACT}`,
  );
}
