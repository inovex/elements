import { defaultLocale } from './config';
import { Locale, isLocale } from './types';

export function getInitialLocale(): Locale {
  console.log('getinitial');

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
