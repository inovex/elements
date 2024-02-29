import { useContext } from 'react';
import { I18nContext, I18nContextProps } from '../context/i18nContext';

export const useTranslation = (): I18nContextProps => {
  return useContext(I18nContext);
};
