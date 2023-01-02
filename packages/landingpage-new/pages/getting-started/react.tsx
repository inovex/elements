import React from 'react';
import ReactGuide from 'components/learn/react-guide.mdx';
import Layout from '../../components/learn/layout';
import { Frameworks } from '../../components/learn/frameworks';

const ReactGuidePage = () => (
  <Layout
    framework={Frameworks.REACT}
    sandboxUrl={
      'https://codesandbox.io/embed/github/inovex/elements-example-react/tree/master/?fontsize=14&hidenavigation=1&theme=dark'
    }
  >
    <ReactGuide />
  </Layout>
);

export default ReactGuidePage;
