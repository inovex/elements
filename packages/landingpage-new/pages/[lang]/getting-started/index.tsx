import { GetStaticProps, GetStaticPaths, NextPage } from 'next';
import { LangContext } from 'types/langContext';
import {
  getStaticLanguagePaths,
  getStaticLanguageProps,
} from 'utils/context/staticPaths';
import useTranslation from 'utils/hooks/useTranslation';

const Learn: NextPage = () => {
  const { t } = useTranslation();
  return <h1>{t('title')}</h1>;
};

export const getStaticProps: GetStaticProps = async (ctx) => getStaticLanguageProps(ctx as LangContext, 'gettingStarted');
export const getStaticPaths: GetStaticPaths = async () => getStaticLanguagePaths();

export default Learn;
