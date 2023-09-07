import Layout from 'components/getting-started/layout';
import JavascriptGuide from 'mdx/getting-started/javascript-guide.mdx';
import { GetStaticPaths, GetStaticProps } from 'next';
import { Locale_File } from 'translations/types';
import { LangContext } from 'types/langContext';
import {
  getStaticLanguagePaths,
  getStaticLanguageProps,
} from 'utils/context/staticPaths';
import { Framework } from 'utils/frameworks';

const JsGuidePage = () => {
  return (
    <Layout framework={Framework.JS} sandboxUrl={''}>
      <JavascriptGuide />
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async (ctx) =>
  getStaticLanguageProps(ctx as LangContext, Locale_File.GETTING_STARTED);
export const getStaticPaths: GetStaticPaths = async () =>
  getStaticLanguagePaths();

export default JsGuidePage;
