import 'server-only';
import type { Locale } from '../i18n-config';

// We enumerate all dictionaries here for better linting and typescript support
// We also get the default import for cleaner types
const dictionaries = {
  en: () => import('./locales/en').then((module) => module.default),
  de: () => import('./locales/de').then((module) => module.default),
};

export const getTranslation = async (locale: Locale) =>
  dictionaries[locale]?.() ?? dictionaries.en();
