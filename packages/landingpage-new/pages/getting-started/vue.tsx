import React from 'react';
import VueGuide from 'components/getting-started/vue-guide.mdx';
import Layout from '../../components/getting-started/layout';
import { Frameworks } from '../../components/getting-started/frameworks';

const VueGuidePage = () => (
  <Layout
    framework={Frameworks.VUE}
    sandboxUrl={'https://codesandbox.io/s/github/inovex/elements-vue-example'}
  >
    <VueGuide />
  </Layout>
);

export default VueGuidePage;
