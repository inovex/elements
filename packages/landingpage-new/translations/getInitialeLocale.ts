import { defaultLocale, Supported_Locales } from './config';
import { isLocale } from './types';

export function getInitialLocale(): Supported_Locales {
  console.log('getinitial', defaultLocale);

  const localSetting = localStorage.getItem('locale');
  if (localSetting && isLocale(localSetting)) {
    return localSetting;
  }

  const [browserSetting] = navigator.language.split('-');
  if (isLocale(browserSetting)) {
    return browserSetting;
  }

  return defaultLocale;
}
