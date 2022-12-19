import { locales } from 'translations/config';
import { LangContext } from 'types/langContext';
import { getLocalizationProps } from './LanguageContext';

export const getStaticLanguagePaths = () => {
  return {
    paths: locales.map((lang) => ({ params: { lang } })),
    fallback: false,
  };
};

export const getStaticLanguageProps = (ctx: LangContext, file: string) => {
  const localization = getLocalizationProps(ctx, file);
  return {
    props: {
      localization,
    },
  };
};
