import React from 'react';
import { useRouter } from 'next/router';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { isLocale, Localization, Locale } from '../../translations/types';
import defaultStrings from '../../translations/locales/en';
import locales from '../../translations/locales';
import { ReactNode } from 'react';
import { LangContext } from 'types/langContext';
import { Locale_File, Supported_Locales } from 'translations/config';

/**
 * Language Context
 */

interface ContextProps {
  readonly localization: Localization;
  readonly setLocale: (localization: Localization) => void;
}

export const LanguageContext = React.createContext<ContextProps>({
  localization: {
    locale: Supported_Locales.DE,
    translations: defaultStrings[Locale_File.HOME],
    namespace: Locale_File.HOME,
  },
  setLocale: () => null,
});

/**
 * Language Context: Provider
 */

type Params = {
  localization: Localization;
  children: ReactNode;
};

export const LanguageProvider = ({ localization, children }: Params) => {
  const [localizationState, setLocalizationState] = React.useState({
    locale: localization?.locale,
    translations: localization?.translations,
    namespace: localization?.namespace,
  });
  const [getStoredLocale, setStoredLocale] = useLocalStorage('locale');
  const { query } = useRouter();
  React.useEffect(() => {
    if (localizationState.locale !== getStoredLocale) {
      setStoredLocale(localizationState.locale);
    }
  }, [localizationState]);

  React.useEffect(() => {
    if (
      typeof query.lang === 'string' &&
      isLocale(query.lang) &&
      localization?.locale !== query.lang
    ) {
      setLocalizationState({
        locale: localization?.locale,
        translations: localization?.translations,
        namespace: localization?.namespace,
      });
    }
  }, [query.lang, localizationState]);

  return (
    <LanguageContext.Provider
      value={{ localization, setLocale: setLocalizationState }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export const getLocalizationProps = (ctx: LangContext, namespace: Locale_File) => {
  const lang: Locale = (ctx.params?.lang as Locale) || Supported_Locales.DE;
  const locale: any = locales[lang];
  const strings: any = locale[namespace];
  const translations = {
    common: locales[lang][Locale_File.COMMON],
    ...strings,
  };
  return {
    locale: ctx.params?.lang || Supported_Locales.EN,
    translations,
    namespace,
  };
};
