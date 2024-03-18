import { WithLangParam } from 'translations/i18n';
import { ExplorePage } from './client';
import { getMetaTitle } from '@utils/getMetaTitle';
import { translator } from 'translations/getTranslations';

export async function generateMetadata({ params }: WithLangParam) {
  const title = await translator('common.meta.explore', params.lang);
  return {
    title: getMetaTitle(title),
  };
}

export default function Page() {
  return <ExplorePage></ExplorePage>;
}
