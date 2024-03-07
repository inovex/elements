import { WithLangParam } from 'translations/i18n';
import { getMetaTitle } from '@utils/getMetaTitle';
import { translator } from 'translations/getTranslations';
import { Home } from './client';

export async function generateMetadata({ params }: WithLangParam) {
  const title = await translator('common.meta.home', params.lang);
  return {
    title: getMetaTitle(title),
  };
}

export default function Page() {
  return <Home></Home>;
}
