import { useRouter } from 'next/router';
import { useMount } from 'react-use';
import { Framework } from 'utils/frameworks';
import ReactGuidePage from './react';
import {MainRoutes} from 'utils/routes';
import useTranslation from 'utils/hooks/useTranslation';
import {GetStaticPaths, GetStaticProps} from 'next';
import {getStaticLanguagePaths, getStaticLanguageProps} from '../../../utils/context/staticPaths';
import {LangContext} from '../../../types/langContext';
import {Locale_File} from '../../../translations/types';

/**
 * Forwards to react guide as default
 */
const GettingStarted = () => {
  const { push } = useRouter();
  const { locale } = useTranslation();

  useMount(() => {
    push(`/${locale}${MainRoutes.GETTING_STARTED}/${Framework.REACT}`);
  });

  return <ReactGuidePage />;
};

export const getStaticProps: GetStaticProps = async (ctx) => getStaticLanguageProps(ctx as LangContext, Locale_File.GETTING_STARTED);
export const getStaticPaths: GetStaticPaths = async () => getStaticLanguagePaths();

export default GettingStarted;
