import Layout from 'components/getting-started/layout';
import AngularGuide from 'mdx/getting-started/angular-guide.mdx';
import { Framework } from 'utils/frameworks';
import styles from './guide.module.scss';

const AngularGuidePage = () => {
  return (
    <div className={styles['mdx-content']}>
      <Layout
        framework={Framework.ANGULAR}
        sandboxUrl={
          'https://codesandbox.io/s/github/inovex/elements-example-angular'
        }
      >
        <AngularGuide />
      </Layout>
    </div>
  );
};

export default AngularGuidePage;
