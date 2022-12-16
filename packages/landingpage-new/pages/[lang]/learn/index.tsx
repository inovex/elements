import { getLocalizationProps } from 'context/LanguageContext';
import {
  GetStaticProps,
  GetStaticPaths,
  InferGetStaticPropsType,
  NextPage,
} from 'next';
import { Localization } from 'translations/types';
import { LangContext } from 'types/langContext';

interface Params {
  localization: Localization;
}

const Learn: NextPage<Params> = ({
  localization,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return <h1>Learn</h1>;
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  const localization = getLocalizationProps(ctx as LangContext, 'learn');
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
