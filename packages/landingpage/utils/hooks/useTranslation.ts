import { useContext } from 'react';
import { LanguageContext } from 'utils/context/LanguageContext';
import { get as _get } from 'lodash-es';
import { defaultLocale } from 'translations/config';

export default function useTranslation() {
  const { localization } = useContext(LanguageContext);
  function t(key: string) {
    let text: string | null = null;
    if (localization) {
      text = _get(localization.translations, key);
      if (!text) {
        throw new Error(
          `Translation '${key}' for locale '${localization.locale}' not found.`,
        );
      }
    }
    return text ?? '';
  }

  return {
    t,
    locale: localization ? localization.locale : defaultLocale,
  };
}
