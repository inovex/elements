import Layout from 'components/getting-started/layout';
import ReactGuide from 'mdx/getting-started/react-guide.mdx';
import { GetStaticPaths, GetStaticProps } from 'next';
import { Locale_File } from 'translations/types';
import { LangContext } from 'types/langContext';
import {
  getStaticLanguagePaths,
  getStaticLanguageProps,
} from 'utils/context/staticPaths';
import { Framework } from 'utils/frameworks';

const ReactGuidePage = () => {
  return (
    <Layout
      framework={Framework.REACT}
      sandboxUrl={
        'https://codesandbox.io/embed/github/inovex/elements-example-react/tree/master/?fontsize=14&hidenavigation=1&theme=dark'
      }
    >
      <ReactGuide />
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async (ctx) =>
  getStaticLanguageProps(ctx as LangContext, Locale_File.GETTING_STARTED);
export const getStaticPaths: GetStaticPaths = async () =>
  getStaticLanguagePaths();

export default ReactGuidePage;
