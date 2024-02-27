import { createContext, ReactNode } from 'react';
import { getDescendantProp } from '../../translations/utils';
import { Locale, i18n } from '../../i18n-config';

export const I18NContext = createContext<{
  t: (key: string) => string;
  lang: Locale;
}>({
  t: (key) => key,
  lang: i18n.defaultLocale,
});

const I18nContextProvider = ({
  children,
  lang,
  translations,
}: {
  children: ReactNode;
  lang: Locale;
  translations: any;
}) => {
  const t = (key: string) => getDescendantProp(translations, key) ?? key;

  return (
    <I18NContext.Provider value={{ t, lang }}>{children}</I18NContext.Provider>
  );
};

export default I18nContextProvider;
