import { permanentRedirect } from 'next/navigation';
import { MainRoutes, SubRoutes } from '@routes';
import { WithLangParam, getValidLang } from 'translations/i18n';

export default function Page({ params }: WithLangParam) {
  permanentRedirect(`/${getValidLang(params.lang)}${MainRoutes.LIBRARY}/${SubRoutes.LIBRARY_COMPONENTS}`);
}
