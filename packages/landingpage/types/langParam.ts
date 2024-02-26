import { Locale } from '../i18n-config';

export type LangParam = { lang: Locale };

export type ParamsWithLang<T = unknown> = {
  params: T & LangParam;
};
