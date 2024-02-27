import { getDescendantProp } from '../translations/utils';
import { getTranslation } from '../translations/getTranslations';
import type { Locale } from '../i18n-config';

const SEPARATOR = '•';

export const translator = async (key: string, lang: Locale) =>
  getDescendantProp(await getTranslation(lang), key) ?? key;

export const getMetaTitle = (title: string | string[]) => {
  const combined = Array.isArray(title) ? title.join(` ${SEPARATOR} `) : title;
  return `${combined} ${SEPARATOR} inovex-elements`;
};
