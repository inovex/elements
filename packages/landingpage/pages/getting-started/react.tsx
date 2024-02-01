import Layout from 'components/getting-started/layout';
import ReactGuide from 'mdx/getting-started/react-guide.mdx';
import { Framework } from 'utils/frameworks';
import styles from './guide.module.scss';

const ReactGuidePage = () => {
  return (
    <div className={styles['mdx-content']}>
      <Layout
        framework={Framework.REACT}
        sandboxUrl={
          'https://codesandbox.io/embed/github/inovex/elements-example-react/tree/master/?fontsize=14&hidenavigation=1&theme=dark'
        }
      >
        <ReactGuide />
      </Layout>
    </div>
  );
};

export default ReactGuidePage;
