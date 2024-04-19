import { permanentRedirect } from 'next/navigation';
import { WithLangParam, getValidLang } from 'translations/i18n';
import { MainRoutes, SubRoutes } from '@routes';

export default function Page({ params }: WithLangParam) {
  permanentRedirect(`/${getValidLang(params.lang)}${MainRoutes.GETTING_STARTED}/${SubRoutes.GETTING_STARTED_REACT}`);
}
