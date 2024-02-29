import { getDescendantProp } from 'translations/utils';
import { getTranslation } from 'translations/getTranslations';
import type { SupportedLanguages } from 'translations/i18n';

const SEPARATOR = '•';

export const translator = async (
  key: LocaleResourcePaths,
  lang: SupportedLanguages,
) => getDescendantProp(await getTranslation(lang), key) ?? key;

export const getMetaTitle = (title: string | string[]) => {
  const combined = Array.isArray(title) ? title.join(` ${SEPARATOR} `) : title;
  return `${combined} ${SEPARATOR} inovex-elements`;
};
