import React from 'react';
import AngularGuide from 'components/learn/angular-guide.mdx';
import Layout from '../../components/learn/layout';
import {Frameworks} from '../../components/learn/frameworks';

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
