import { GetStaticPaths, GetStaticProps } from 'next';
import {
  getStaticLanguagePaths,
  getStaticLanguageProps,
} from '../../../utils/context/staticPaths';
import { LangContext } from '../../../types/langContext';
import { Locale_File } from '../../../translations/types';
import { useRouter } from 'next/router';
import { useMount } from 'react-use';
import { WELCOME_PAGE_PLACEHOLDER } from '../../../utils/hooks/useInitialStorybookUrl';
import { SubRoutes } from '../../../utils/routes';

const Components = () => {
  const { asPath, push } = useRouter();

  useMount(() => {
    push(
      `${asPath}/${SubRoutes.LIBRARY_COMPONENTS}?element=${WELCOME_PAGE_PLACEHOLDER}`,
      undefined,
      { scroll: false }
    );
  });

  return <></>;
};

export const getStaticProps: GetStaticProps = async (ctx) =>
  getStaticLanguageProps(ctx as LangContext, Locale_File.LIBRARY);
export const getStaticPaths: GetStaticPaths = async () =>
  getStaticLanguagePaths();

export default Components;
