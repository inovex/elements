import { permanentRedirect } from 'next/navigation';
import { getValidLang } from 'translations/utils';
import { WithLangParam } from 'translations/i18n';
import { MainRoutes, SubRoutes } from 'utils/routes';

export default function Page({ params }: WithLangParam) {
  permanentRedirect(
    `/${getValidLang(params.lang)}${MainRoutes.GETTING_STARTED}/${
      SubRoutes.GETTING_STARTED_REACT
    }`,
  );
}
