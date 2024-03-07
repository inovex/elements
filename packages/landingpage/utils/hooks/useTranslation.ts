import { useContext } from 'react';
import { I18nContext, I18nContextProps } from '@context';

export const useTranslation = (): I18nContextProps => {
  return useContext(I18nContext);
};
