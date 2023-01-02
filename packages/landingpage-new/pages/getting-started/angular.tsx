import React from 'react';
import AngularGuide from 'components/getting-started/angular-guide.mdx';
import Layout from '../../components/getting-started/layout';
import {Frameworks} from '../../components/getting-started/frameworks';

const AngularGuidePage = () => (
  <Layout
    framework={Frameworks.ANGULAR}
    sandboxUrl={
      'https://codesandbox.io/s/github/inovex/elements-example-angular'
    }
  >
    <AngularGuide />
  </Layout>
);

export default AngularGuidePage;
