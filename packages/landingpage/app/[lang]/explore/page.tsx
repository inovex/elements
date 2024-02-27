import { ParamsWithLang } from '../../../types/langParam';
import { ExplorePage } from './client';
import { getMetaTitle, translator } from '../../../utils/getMetaTitle';

export async function generateMetadata({ params }: ParamsWithLang) {
  const title = await translator('common.meta.explore', params.lang);
  return {
    title: getMetaTitle(title),
  };
}

export default async function Page() {
  return <ExplorePage></ExplorePage>;
}
