import { getMetaTitle } from '../../../../utils/getMetaTitle';
import { JavaScriptGuidePage } from './client';
import { NameByFramework } from '../../../../utils/frameworks';

export async function generateMetadata() {
  return {
    title: getMetaTitle(['Getting Started', NameByFramework.javascript]),
  };
}

export default async function Page() {
  return <JavaScriptGuidePage></JavaScriptGuidePage>;
}
