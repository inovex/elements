import Layout from 'components/getting-started/layout';
import AngularGuide from 'mdx/getting-started/angular-guide.mdx';
import { GetStaticPaths, GetStaticProps } from 'next';
import { Locale_File } from 'translations/types';
import { LangContext } from 'types/langContext';
import {
  getStaticLanguagePaths,
  getStaticLanguageProps,
} from 'utils/context/staticPaths';
import { Framework } from 'utils/frameworks';

const AngularGuidePage = () => {
  return (
    <Layout
      framework={Framework.ANGULAR}
      sandboxUrl={
        'https://codesandbox.io/s/github/inovex/elements-example-angular'
      }
    >
      <AngularGuide />
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async (ctx) =>
  getStaticLanguageProps(ctx as LangContext, Locale_File.GETTING_STARTED);
export const getStaticPaths: GetStaticPaths = async () =>
  getStaticLanguagePaths();

export default AngularGuidePage;
