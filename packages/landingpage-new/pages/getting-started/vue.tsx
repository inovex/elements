import React from 'react';
import VueGuide from 'components/learn/vue-guide.mdx';
import Layout from '../../components/learn/layout';
import { Frameworks } from '../../components/learn/frameworks';

const VueGuidePage = () => (
  <Layout
    framework={Frameworks.VUE}
    sandboxUrl={'https://codesandbox.io/s/github/inovex/elements-vue-example'}
  >
    <VueGuide />
  </Layout>
);

export default VueGuidePage;
