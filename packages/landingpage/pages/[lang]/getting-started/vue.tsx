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
import VueGuideEN from 'mdx/getting-started/vue-guide.en.mdx';
import VueGuideDE from 'mdx/getting-started/vue-guide.de.mdx';
import { Supported_Locales } from 'translations/config';
import useTranslation from 'utils/hooks/useTranslation';

const VueGuidePage = () => {
  const { locale } = useTranslation();

  return (
    <Layout
      framework={Framework.VUE}
      sandboxUrl={'https://codesandbox.io/s/github/inovex/elements-vue-example'}
    >
      {locale === Supported_Locales.EN ? <VueGuideEN /> : <VueGuideDE />}
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async (ctx) =>
  getStaticLanguageProps(ctx as LangContext, Locale_File.GETTING_STARTED);
export const getStaticPaths: GetStaticPaths = async () =>
  getStaticLanguagePaths();

export default VueGuidePage;
