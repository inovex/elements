'use client';

import Layout from '../components/layout';
import ReactGuide from './react-guide.mdx';
import { Framework } from '../../../../utils/frameworks';

export const ReactGuidePage = () => {
  return (
    <Layout
      framework={Framework.REACT}
      sandboxUrl={
        'https://codesandbox.io/embed/github/inovex/elements-example-react/tree/master/?fontsize=14&hidenavigation=1&theme=dark'
      }
    >
      <ReactGuide />
    </Layout>
  );
};
