import { createContext, ReactNode, useState } from 'react';
import { getDescendantProp } from '../../translations/utils';

export const I18NContext = createContext<{ t: (key: string) => string }>({
  t: (key) => key,
});

const I18nContextProvider = ({
  children,
  translations,
}: {
  children: ReactNode;
  translations: any;
}) => {
  const t = (key: string) => getDescendantProp(translations, key) ?? key;

  return <I18NContext.Provider value={{ t }}>{children}</I18NContext.Provider>;
};

export default I18nContextProvider;
