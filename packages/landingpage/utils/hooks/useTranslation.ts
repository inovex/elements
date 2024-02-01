import locales from '../../translations/locales';
import { get as _get } from 'lodash-es';
import { useRouter } from 'next/router';

export default function useTranslation() {
  const { locale, defaultLocale } = useRouter();
  const lang = locale ?? defaultLocale ?? 'en';
  // @ts-ignore
  const translation = locales[lang];

  function t(key: string) {
    let text: any = null;
    if (translation) {
      text = _get(translation, key);
      if (!text) {
        console.log(
          `Translation '${key}' for locale '${lang}' not found.`,
        );
      }
    }
    return text ?? '';
  }

  return {
    t,
    locale: lang,
  };
}
