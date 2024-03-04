'use client';

import Layout from '../components/layout';
import AngularGuide from './angular-guide.mdx';
import { Framework } from '@utils/frameworks';

export const AngularGuidePage = () => {
  return (
    <Layout
      framework={Framework.ANGULAR}
      sandboxUrl={
        'https://codesandbox.io/s/github/inovex/elements-example-angular'
      }
    >
      <AngularGuide />
    </Layout>
  );
};
