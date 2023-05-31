import React from 'react';
import Layout from 'components/getting-started/layout';
import { Framework } from 'utils/frameworks';
import { GetStaticPaths, GetStaticProps } from 'next';
import {
  getStaticLanguagePaths,
  getStaticLanguageProps,
} from 'utils/context/staticPaths';
import { LangContext } from 'types/langContext';
import { Locale_File } from 'translations/types';
import ReactGuideEN from 'mdx/getting-started/react-guide.en.mdx';
import ReactGuideDE from 'mdx/getting-started/react-guide.de.mdx';
import { Supported_Locales } from 'translations/config';
import useTranslation from 'utils/hooks/useTranslation';

const ReactGuidePage = () => {
  const { locale } = useTranslation();
  return (
    <Layout
      framework={Framework.REACT}
      sandboxUrl={
        'https://codesandbox.io/embed/github/inovex/elements-example-react/tree/master/?fontsize=14&hidenavigation=1&theme=dark'
      }
    >
      {locale === Supported_Locales.EN ? <ReactGuideEN /> : <ReactGuideDE />}
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async (ctx) =>
  getStaticLanguageProps(ctx as LangContext, Locale_File.GETTING_STARTED);
export const getStaticPaths: GetStaticPaths = async () =>
  getStaticLanguagePaths();

export default ReactGuidePage;
