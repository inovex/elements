import { GetStaticProps, GetStaticPaths, NextPage } from 'next';
import useTranslation from 'utils/hooks/useTranslation';
import {
  getStaticLanguagePaths,
  getStaticLanguageProps,
} from 'utils/context/staticPaths';
import { LangContext } from 'types/langContext';

const Explore: NextPage = () => {
  const { t } = useTranslation();
  return <h1>{t('title')}</h1>;
};

export const getStaticProps: GetStaticProps = async (ctx) => getStaticLanguageProps(ctx as LangContext, 'explore');
export const getStaticPaths: GetStaticPaths = async () => getStaticLanguagePaths();

export default Explore;
