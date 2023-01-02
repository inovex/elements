import React from 'react';
import JsGuide from 'components/getting-started/javascript-guide.mdx';
import Layout from '../../components/getting-started/layout';
import {Frameworks} from '../../components/getting-started/frameworks';

const JsGuidePage = () => (
  <Layout framework={Frameworks.JS} sandboxUrl={''}>
    <JsGuide/>
  </Layout>
);

export default JsGuidePage;
