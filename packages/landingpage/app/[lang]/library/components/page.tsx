import { WithLangParam } from 'translations/i18n';
import { getMetaTitle } from 'utils/getMetaTitle';
import { translator } from 'translations/getTranslations';
import { StoryBookPage } from './client';
import { Suspense } from 'react';

export async function generateMetadata({ params }: WithLangParam) {
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
