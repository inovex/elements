import { ParamsWithLang } from '../../../../types/langParam';
import { getMetaTitle } from '../../../../utils/getMetaTitle';
import { VueGuidePage } from './vue';
import { NameByFramework } from '../../../../utils/frameworks';

export async function generateMetadata({ params }: ParamsWithLang) {
  return {
    title: getMetaTitle(['Getting Started', NameByFramework.vue]),
  };
}

export default async function Page() {
  return <VueGuidePage></VueGuidePage>;
}
