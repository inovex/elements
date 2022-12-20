export enum Supported_Locales {
  DE = 'de',
  EN = 'en'
}

export enum Locale_File {
  HOME = 'home',
  ABOUT = 'about',
  GETTING_STARTED = 'gettingStarted',
  COMMON = 'common',
  LIBRARY = 'library',
  EXPLORE = 'explore'
}

export const defaultLocale = Supported_Locales.EN;

export const locales = [Supported_Locales.DE, Supported_Locales.EN];

