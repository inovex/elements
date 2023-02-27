import React from 'react';
import Layout from 'components/getting-started/layout';
import { Framework } from 'utils/frameworks';
import {GetStaticPaths, GetStaticProps} from 'next';
import {getStaticLanguagePaths, getStaticLanguageProps} from 'utils/context/staticPaths';
import {LangContext} from 'types/langContext';
import {Locale_File} from 'translations/types';
import AngularGuideEN from 'mdx/getting-started/angular-guide.en.mdx';
import AngularGuideDE from 'mdx/getting-started/angular-guide.de.mdx';
import useTranslation from 'utils/hooks/useTranslation';
import {Supported_Locales} from 'translations/config';

const AngularGuidePage = () => {
  const { locale } = useTranslation();

  return <Layout
    framework={Framework.ANGULAR}
    sandboxUrl={
      'https://codesandbox.io/s/github/inovex/elements-example-angular'
    }
  >
    {locale === Supported_Locales.EN ? <AngularGuideEN /> : <AngularGuideDE />}
  </Layout>
};

export const getStaticProps: GetStaticProps = async (ctx) => getStaticLanguageProps(ctx as LangContext, Locale_File.GETTING_STARTED);
export const getStaticPaths: GetStaticPaths = async () => getStaticLanguagePaths();

export default AngularGuidePage;
