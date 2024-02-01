import Layout from 'components/getting-started/layout';
import JavascriptGuide from 'mdx/getting-started/javascript-guide.mdx';
import { Framework } from 'utils/frameworks';

import styles from './guide.module.scss';

const JsGuidePage = () => {
  return (
    <div className={styles['mdx-content']}>
      <Layout framework={Framework.JS} sandboxUrl={''}>
        <JavascriptGuide />
      </Layout>
    </div>
  );
};

export default JsGuidePage;
