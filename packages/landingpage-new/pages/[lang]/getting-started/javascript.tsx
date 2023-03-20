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
import JavascriptGuideEN from 'mdx/getting-started/javascript-guide.en.mdx';
import JavascriptGuideDE from 'mdx/getting-started/javascript-guide.de.mdx';
import { Supported_Locales } from 'translations/config';
import useTranslation from 'utils/hooks/useTranslation';

const JsGuidePage = () => {
  const { locale } = useTranslation();

  return (
    <Layout framework={Framework.JS} sandboxUrl={''}>
      {locale === Supported_Locales.EN ? (
        <JavascriptGuideEN />
      ) : (
        <JavascriptGuideDE />
      )}
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async (ctx) =>
  getStaticLanguageProps(ctx as LangContext, Locale_File.GETTING_STARTED);
export const getStaticPaths: GetStaticPaths = async () =>
  getStaticLanguagePaths();

export default JsGuidePage;
