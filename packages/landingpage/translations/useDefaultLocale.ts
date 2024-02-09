import { useRouter } from 'next/router';
import { defaultLocale, Supported_Locales } from './config';
import { isLocale } from './types';

function getInitialLocale(): Supported_Locales {
  const localSettingRaw = localStorage.getItem('locale');
  const localSetting = localSettingRaw?.replaceAll('"', '');

  if (localSetting && isLocale(localSetting)) {
    return localSetting;
  }

  const [browserSetting] = navigator.language.split('-');
  if (isLocale(browserSetting)) {
    return browserSetting;
  }

  return defaultLocale;
}

function useDefaultLocale() {
  const router = useRouter();

  return () => {
    const initLang = getInitialLocale();
    router.push(initLang);
  };
}

const isDevMode = () => process?.env?.NODE_ENV !== 'development' ?? true;

export default useDefaultLocale;
