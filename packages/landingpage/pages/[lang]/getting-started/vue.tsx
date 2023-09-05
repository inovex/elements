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

const VueGuidePage = () => {
  return (
    <Layout
      framework={Framework.VUE}
      sandboxUrl={'https://codesandbox.io/s/github/inovex/elements-vue-example'}
    >
      <VueGuide />
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async (ctx) =>
  getStaticLanguageProps(ctx as LangContext, Locale_File.GETTING_STARTED);
export const getStaticPaths: GetStaticPaths = async () =>
  getStaticLanguagePaths();

export default VueGuidePage;
