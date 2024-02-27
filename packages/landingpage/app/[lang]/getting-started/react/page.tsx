import { ParamsWithLang } from '../../../../types/langParam';
import { getMetaTitle } from '../../../../utils/getMetaTitle';
import { ReactGuidePage } from './react';
import { NameByFramework } from '../../../../utils/frameworks';

export async function generateMetadata({ params }: ParamsWithLang) {
  return {
    title: getMetaTitle(['Getting Started', NameByFramework.react]),
  };
}
export default async function Page() {
  return <ReactGuidePage></ReactGuidePage>;
}
