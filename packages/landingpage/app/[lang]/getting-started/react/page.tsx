import { getMetaTitle } from '@utils/getMetaTitle';
import { ReactGuidePage } from './client';
import { NameByFramework } from '@utils/frameworks';

export async function generateMetadata() {
  return {
    title: getMetaTitle(['Getting Started', NameByFramework.react]),
  };
}

export default async function Page() {
  return <ReactGuidePage></ReactGuidePage>;
}
