import React, {ReactNode, useEffect} from 'react';
import { useRouter } from 'next/router';
import { isLocale, Locale_File, Localization } from 'translations/types';
import defaultStrings from 'translations/locales/en';
import locales from 'translations/locales';
import { LangContext } from 'types/langContext';
import { Supported_Locales } from 'translations/config';
import {useDeepCompareEffect, useLocalStorage} from 'react-use';

interface ContextProps {
  readonly localization: Localization;
  readonly setLocale: (localization: Localization) => void;
}

const DEFAULT_LOCALE: Localization = {
  locale: Supported_Locales.DE,
  translations: defaultStrings[Locale_File.HOME],
  namespace: Locale_File.HOME,
}

export const LanguageContext = React.createContext<ContextProps>({
  localization: DEFAULT_LOCALE,
  setLocale: () => null,
});

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
  const [storedLocale, setStoredLocale] = useLocalStorage('locale');

  const { query } = useRouter();
  useEffect(() => {
    if (localizationState.locale !== storedLocale) {
      setStoredLocale(localizationState.locale);
    }
  }, [localizationState.locale]);

  useDeepCompareEffect(() => {
    console.log(query.lang, localizationState)
    if (
      typeof query.lang === 'string' &&
      isLocale(query.lang) &&
      localization?.locale !== query.lang
    ) {
      console.log('set')
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

export const getLocalizationProps = (
  ctx: LangContext,
  namespace: Locale_File
) => {
  const lang: Supported_Locales =
    (ctx.params?.lang as Supported_Locales) || Supported_Locales.DE;
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
