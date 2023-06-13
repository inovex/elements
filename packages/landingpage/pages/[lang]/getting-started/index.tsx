import { useRouter } from 'next/router';
import { useMount } from 'react-use';
import { Framework } from 'utils/frameworks';
import { GetStaticPaths, GetStaticProps } from 'next';
import {
  getStaticLanguagePaths,
  getStaticLanguageProps,
} from '../../../utils/context/staticPaths';
import { LangContext } from '../../../types/langContext';
import { Locale_File } from '../../../translations/types';

/**
 * Forwards to react guide as default
 */
const GettingStarted = () => {
  const { asPath, push } = useRouter();

  useMount(() => {
    push(`${asPath}/${Framework.REACT}`);
  });

  return <></>;
};

export const getStaticProps: GetStaticProps = async (ctx) =>
  getStaticLanguageProps(ctx as LangContext, Locale_File.GETTING_STARTED);
export const getStaticPaths: GetStaticPaths = async () =>
  getStaticLanguagePaths();

export default GettingStarted;
