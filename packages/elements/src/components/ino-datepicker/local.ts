import { German } from 'flatpickr/dist/l10n/de';
import { english as English } from 'flatpickr/dist/l10n/default';
import { CustomLocale } from 'flatpickr/dist/types/locale';

// Supported Languages
export type DatepickerLocale = 'de' | 'en';

// Map: Language Key => Flatpickr language
export const datepickerLocales: Record<DatepickerLocale, CustomLocale> = {
  de: German,
  en: English,
};

const defaultLang: DatepickerLocale = 'de';

const isLanguageSupported = (lang: string | DatepickerLocale): boolean => {
  return lang in datepickerLocales;
};

export const getDatepickerLocale = (el: HTMLElement): CustomLocale => {
  const closestElement = el.closest('[lang]') as HTMLElement;
  const lang = closestElement ? closestElement.lang : defaultLang;

  if (!isLanguageSupported(lang)) {
    console.warn(
      `Language "${lang}" is not supported. Using "${defaultLang}" instead.`
    );
    return datepickerLocales[defaultLang];
  }
  return datepickerLocales[lang];
};
