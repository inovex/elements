import Layout from 'components/getting-started/layout';
import VueGuide from 'mdx/getting-started/vue-guide.mdx';
import { Framework } from 'utils/frameworks';
import styles from './guide.module.scss';

const VueGuidePage = () => {
  return (
    <div className={styles['mdx-content']}>
      <Layout
        framework={Framework.VUE}
        sandboxUrl={
          'https://codesandbox.io/s/github/inovex/elements-example-vue'
        }
      >
        <VueGuide />
      </Layout>
    </div>
  );
};

export default VueGuidePage;
