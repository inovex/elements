import { locales, Locale_File } from './config';

export type Locale = typeof locales[number];

export interface Translations {
  [key: string]: any;
}

export type Localization = {
  locale: Locale;
  translations: Translations;
  namespace: Locale_File;
};

export function isLocale(tested: string): tested is Locale {
  return locales.some((locale) => locale === tested);
}