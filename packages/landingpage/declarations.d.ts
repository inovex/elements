import en from './translations/locales/en';

declare module '*.html' {
  const content: string;
  export default content;
}

declare global {
  type Paths<T> = T extends object
    ? {
        [K in keyof T]: `${Exclude<K, symbol>}${'' | `.${Paths<T[K]>}`}`;
      }[keyof T]
    : never;

  declare type LocaleResource = typeof en;
  declare type LocaleResourcePaths = Paths<LocaleResource>;
}
