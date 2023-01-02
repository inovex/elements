import React from 'react';
import JsGuide from 'components/learn/javascript-guide.mdx';
import Layout from '../../components/learn/layout';
import {Frameworks} from '../../components/learn/frameworks';

const JsGuidePage = () => (
  <Layout framework={Frameworks.JS} sandboxUrl={''}>
    <JsGuide/>
  </Layout>
);

export default JsGuidePage;
