import { getMetaTitle } from '@utils/getMetaTitle';
import { VueGuidePage } from './client';
import { NameByFramework } from '@utils/frameworks';

export async function generateMetadata() {
  return {
    title: getMetaTitle(['Getting Started', NameByFramework.vue]),
  };
}

export default async function Page() {
  return <VueGuidePage></VueGuidePage>;
}
