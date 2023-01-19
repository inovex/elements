import React from 'react';
import AngularGuide from 'components/getting-started/angular-guide.mdx';
import Layout from '../../components/getting-started/layout';
import { Framework } from '../../utils/frameworks';

const AngularGuidePage = () => (
  <Layout
    framework={Framework.ANGULAR}
    sandboxUrl={
      'https://codesandbox.io/s/github/inovex/elements-example-angular'
    }
  >
    <AngularGuide />
  </Layout>
);

export default AngularGuidePage;
