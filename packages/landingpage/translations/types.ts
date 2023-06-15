import { locales, Supported_Locales } from './config';

export enum Locale_File {
  HOME = 'home',
  ABOUT = 'about',
  GETTING_STARTED = 'gettingStarted',
  COMMON = 'common',
  LIBRARY = 'library',
  EXPLORE = 'explore',
}

export interface Translations {
  [key: string]: any;
}

export type Localization = {
  locale: Supported_Locales;
  translations: Translations;
  namespace: Locale_File;
};

export function isLocale(tested: string): tested is Supported_Locales {
  return locales.some((locale) => locale === tested);
}
