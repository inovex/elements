import { defaultLng, SupportedLanguages } from './i18n';

export const isValidLang = (lang: string) => {
  let s = lang.toLowerCase();
  return s === SupportedLanguages.DE || s === SupportedLanguages.EN;
};

export const getValidLang = (lang: string) => {
  return isValidLang(lang) ? lang.toLowerCase() : defaultLng;
};

export const getDescendantProp = (
  obj: LocaleResource,
  path: LocaleResourcePaths,
) => path.split('.').reduce((acc: any, part) => acc && acc[part], obj);
