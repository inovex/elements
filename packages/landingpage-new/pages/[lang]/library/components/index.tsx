import { GetStaticPaths, GetStaticProps } from 'next';
import {
  getStaticLanguagePaths,
  getStaticLanguageProps,
} from '../../../../utils/context/staticPaths';
import { LangContext } from '../../../../types/langContext';
import { Locale_File } from '../../../../translations/types';
import { useRouter } from 'next/router';
import { useMount } from 'react-use';
import { WELCOME_PAGE_PLACEHOLDER } from '../../../../utils/hooks/useInitialStorybookUrl';

const Components = () => {
  const router = useRouter();

  useMount(() => {
    router.push(`${router.asPath}/${WELCOME_PAGE_PLACEHOLDER}`);
  });

  return <></>;
};

export const getStaticProps: GetStaticProps = async (ctx) =>
  getStaticLanguageProps(ctx as LangContext, Locale_File.GETTING_STARTED);
export const getStaticPaths: GetStaticPaths = async () =>
  getStaticLanguagePaths();

export default Components;
