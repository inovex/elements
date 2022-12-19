import { useContext } from 'react';
import { LanguageContext } from 'utils/context/LanguageContext';
import _ from 'lodash';
import { defaultLocale } from 'translations/config';

export default function useTranslation() {
  const { localization } = useContext(LanguageContext);
  function t(key: string) {
    let text;
    if (localization) {
      text = _.get(localization.translations, key);
      if (!text) {
        console.warn(
          `Translation '${key}' for locale '${localization.locale}' not found.`
        );
      }
    }
    return text || '';
  }

  return {
    t,
    locale: localization ? localization.locale : defaultLocale,
  };
}
