import 'server-only';
import { SupportedLanguages, getDescendantProp } from './i18n';

// We enumerate all dictionaries here for better linting and typescript support
// We also get the default import for cleaner types
const dictionaries = {
  en: () => import('./locales/en').then((module) => module.default),
  de: () => import('./locales/de').then((module) => module.default),
};

export const getTranslation = async (
  locale: SupportedLanguages,
): Promise<LocaleResource> => dictionaries[locale]?.() ?? dictionaries.en();

export const translator = async (
  key: LocaleResourcePaths,
  lang: SupportedLanguages,
) => getDescendantProp(await getTranslation(lang), key) ?? key;
