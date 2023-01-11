import React from 'react';
import JsGuide from 'components/getting-started/javascript-guide.mdx';
import Layout from '../../components/getting-started/layout';
import { Framework } from '../../utils/frameworks';

const JsGuidePage = () => (
  <Layout framework={Framework.JS} sandboxUrl={''}>
    <JsGuide />
  </Layout>
);

export default JsGuidePage;
