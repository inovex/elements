import { ParamsWithLang } from 'types/langParam';
import { getMetaTitle, translator } from 'utils/getMetaTitle';
import { StoryBookPage } from './client';
import { Suspense } from 'react';

export async function generateMetadata({ params }: ParamsWithLang) {
  const title = await translator('common.meta.library', params.lang);
  return {
    title: getMetaTitle(title),
  };
}

export default async function Page() {
  return (
    <Suspense>
      <StoryBookPage></StoryBookPage>
    </Suspense>
  );
}
