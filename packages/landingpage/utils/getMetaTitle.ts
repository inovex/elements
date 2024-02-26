import { getDescendantProp } from '../translations/utils';
import { getTranslation } from '../translations/getTranslations';
import type { Locale } from '../i18n-config';

const SEPARATOR = '•';

const translator = async (key: string, lang: Locale) =>
  getDescendantProp(await getTranslation(lang), key) ?? key;

export const getMetaTitle = async (titleKey: string, lang: Locale) => {
  const title = await translator(titleKey, lang);
  const combined = Array.isArray(title) ? title.join(` ${SEPARATOR} `) : title;
  return `${combined} ${SEPARATOR} inovex-elements`;
};
