import { defaultLng, SupportedLanguages } from './i18n';

export const isValidLang = (lang: string) => {
  let s = lang.toLowerCase();
  return s === SupportedLanguages.DE || s === SupportedLanguages.EN;
};

export const getValidLang = (lang: string) => {
  return isValidLang(lang) ? lang.toLowerCase() : defaultLng;
};

export const getDescendantProp = (obj: any, path: LocaleResourcePaths) =>
  path.split('.').reduce((acc, part) => acc && acc[part], obj);
