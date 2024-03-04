import { WithLangParam } from 'translations/i18n';
import { getMetaTitle } from '@utils/getMetaTitle';
import { AngularGuidePage } from './client';
import { NameByFramework } from '@utils/frameworks';

export async function generateMetadata({ params }: WithLangParam) {
  return {
    title: getMetaTitle(['Getting Started', NameByFramework.angular]),
  };
}

export default async function Page() {
  return <AngularGuidePage></AngularGuidePage>;
}
