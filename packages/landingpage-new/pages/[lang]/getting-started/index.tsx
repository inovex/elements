import LearnComp from 'components/learn/learn';
import { getLocalizationProps } from 'utils/context/LanguageContext';
import { GetStaticProps, GetStaticPaths, NextPage } from 'next';
import { LangContext } from 'types/langContext';

const Learn: NextPage = () => {
  return <LearnComp></LearnComp>;
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  const localization = getLocalizationProps(
    ctx as LangContext,
    'gettingStarted'
  );
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

export default Learn;
