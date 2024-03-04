'use client';

import { Layout } from '../_components';
import JavascriptGuide from './javascript-guide.mdx';
import { Framework } from '@utils/frameworks';

export const JavaScriptGuidePage = () => {
  return (
    <Layout framework={Framework.JS} sandboxUrl={''}>
      <JavascriptGuide />
    </Layout>
  );
};
