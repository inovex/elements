import { createContext, ReactNode } from 'react';
import { defaultLng, SupportedLanguages, WithLangProp, getDescendantProp } from 'translations/i18n';

export type I18nContextProps = {
  t: <T>(key: LocaleResourcePaths) => T | string;
  lang: SupportedLanguages;
};

export const I18nContext = createContext<I18nContextProps>({
  t: key => key,
  lang: defaultLng,
});

type I18nProviderProps = {
  children: ReactNode;
  translations: LocaleResource;
};

export const I18nContextProvider = ({ children, lang, translations }: WithLangProp<I18nProviderProps>) => {
  const t = (key: LocaleResourcePaths) => getDescendantProp(translations, key) ?? key;

  return <I18nContext.Provider value={{ t, lang }}>{children}</I18nContext.Provider>;
};
