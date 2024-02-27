'use client';

import Layout from '../components/layout';
import VueGuide from '../../../../mdx/getting-started/vue-guide.mdx';
import { Framework } from '../../../../utils/frameworks';

export const VueGuidePage = () => {
  return (
    <Layout
      framework={Framework.VUE}
      sandboxUrl={'https://codesandbox.io/s/github/inovex/elements-example-vue'}
    >
      <VueGuide />
    </Layout>
  );
};
