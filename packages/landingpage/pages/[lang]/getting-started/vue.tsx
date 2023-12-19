import Layout from 'components/getting-started/layout';
import VueGuide from 'mdx/getting-started/vue-guide.mdx';
import { GetStaticPaths, GetStaticProps } from 'next';
import { Locale_File } from 'translations/types';
import { LangContext } from 'types/langContext';
import {
  getStaticLanguagePaths,
  getStaticLanguageProps,
} from 'utils/context/staticPaths';
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

export const getStaticProps: GetStaticProps = async (ctx) =>
  getStaticLanguageProps(ctx as LangContext, Locale_File.GETTING_STARTED);
export const getStaticPaths: GetStaticPaths = async () =>
  getStaticLanguagePaths();

export default VueGuidePage;
