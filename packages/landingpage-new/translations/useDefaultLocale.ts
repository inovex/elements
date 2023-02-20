import { useRouter } from 'next/router';
import { useMount } from 'react-use';
import { defaultLocale, Supported_Locales } from './config';
import { isLocale } from './types';

function getInitialLocale(): Supported_Locales {
  const localSetting = localStorage.getItem('locale');
  console.log("getInitialLocale", localSetting)
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

export default useDefaultLocale;
