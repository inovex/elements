export enum SupportedLanguages {
  DE = 'de',
  EN = 'en',
}

export type LangParam = { lang: SupportedLanguages };

export type WithLangProp<T = unknown> = T & LangParam;

export type WithLangParam<T = unknown> = {
  params: T & LangParam;
};

export const defaultLng = SupportedLanguages.EN;
export const languages = [SupportedLanguages.DE, SupportedLanguages.EN];

export const isValidLang = (lang: string) => {
  let s = lang.toLowerCase();
  return s === SupportedLanguages.DE || s === SupportedLanguages.EN;
};

export const getValidLang = (lang: string) => {
  return isValidLang(lang) ? lang.toLowerCase() : defaultLng;
};

export const getDescendantProp = (obj: LocaleResource, path: LocaleResourcePaths) =>
  path.split('.').reduce((acc: any, part) => acc && acc[part], obj);
