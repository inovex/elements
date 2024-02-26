import { ParamsWithLang } from '../../../types/langParam';
import { ExplorePage } from './client';
import { getMetaTitle } from '../../../utils/getMetaTitle';

export async function generateMetadata({ params }: ParamsWithLang) {
  return {
    title: await getMetaTitle('common.meta.explore', params.lang),
  };
}

export default async function Page() {
  return <ExplorePage></ExplorePage>;
}
