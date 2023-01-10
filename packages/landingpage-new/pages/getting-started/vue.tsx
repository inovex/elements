import React from 'react';
import VueGuide from 'components/getting-started/vue-guide.mdx';
import Layout from '../../components/getting-started/layout';
import { Framework } from '../../utils/frameworks';

const VueGuidePage = () => (
  <Layout
    framework={Framework.VUE}
    sandboxUrl={'https://codesandbox.io/s/github/inovex/elements-vue-example'}
  >
    <VueGuide />
  </Layout>
);

export default VueGuidePage;
