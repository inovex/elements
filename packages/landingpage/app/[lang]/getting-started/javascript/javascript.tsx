'use client';

import Layout from '../components/layout';
import JavascriptGuide from '../../../../mdx/getting-started/javascript-guide.mdx';
import { Framework } from '../../../../utils/frameworks';

export const JavaScriptGuidePage = () => {
  return (
    <Layout framework={Framework.JS} sandboxUrl={''}>
      <JavascriptGuide />
    </Layout>
  );
};
