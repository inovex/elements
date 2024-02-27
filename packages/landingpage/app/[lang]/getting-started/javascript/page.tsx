import { ParamsWithLang } from '../../../../types/langParam';
import { getMetaTitle } from '../../../../utils/getMetaTitle';
import { JavaScriptGuidePage } from './javascript';
import { NameByFramework } from '../../../../utils/frameworks';

export async function generateMetadata({ params }: ParamsWithLang) {
  return {
    title: getMetaTitle(['Getting Started', NameByFramework.javascript]),
  };
}
export default async function Page() {
  return <JavaScriptGuidePage></JavaScriptGuidePage>;
}
