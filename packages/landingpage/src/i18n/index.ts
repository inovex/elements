import en from './en.json';
import de from './de.json';

export type Lang = 'en' | 'de';

export const defaultLang: Lang = 'de';
export const supportedLangs: Lang[] = ['en', 'de'];

const translations: Record<Lang, typeof en> = { en, de };

/**
 * Returns the full translations object for the given locale.
 * Follows the Astro i18n recipe pattern:
 * https://docs.astro.build/en/recipes/i18n/
 *
 * Accepts `Astro.currentLocale` directly (may be `string | undefined`),
 * and falls back to `defaultLang` when the value is missing or unsupported.
 *
 * Usage in a component frontmatter:
 *   import { useTranslations } from '../i18n/index';
 *   const t = useTranslations(Astro.currentLocale);
 */
export function useTranslations(locale: string | undefined): typeof en {
  const lang = supportedLangs.find(l => l === locale) ?? defaultLang;
  return translations[lang];
}
