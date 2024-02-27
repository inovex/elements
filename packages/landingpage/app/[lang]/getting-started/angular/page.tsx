import { ParamsWithLang } from '../../../../types/langParam';
import { getMetaTitle } from '../../../../utils/getMetaTitle';
import { AngularGuidePage } from './angular';
import { NameByFramework } from '../../../../utils/frameworks';

export async function generateMetadata({ params }: ParamsWithLang) {
  return {
    title: getMetaTitle(['Getting Started', NameByFramework.angular]),
  };
}

export default async function Page() {
  return <AngularGuidePage></AngularGuidePage>;
}
