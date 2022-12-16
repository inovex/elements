import { getLocalizationProps } from 'utils/context/LanguageContext';
import { GetStaticProps, GetStaticPaths, NextPage } from 'next';
import { LangContext } from 'types/langContext';
import useTranslation from 'utils/hooks/useTranslation';

const Explore: NextPage = () => {
  const { t } = useTranslation();
  return <h1>{t('title')}</h1>;
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  const localization = getLocalizationProps(ctx as LangContext, 'explore');
  return {
    props: {
      localization,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => ({
  paths: ['en', 'de'].map((lang) => ({ params: { lang } })),
  fallback: false,
});

export default Explore;
