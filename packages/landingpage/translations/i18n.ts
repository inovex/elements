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
