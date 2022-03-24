import { defineCustomElements } from '@inovex.de/elements/dist/loader';

const toKebabCase = (eventName: string) => {
  if (eventName.startsWith('MDC')) return eventName;

  switch (eventName) {
    case 'valueChange':
      return 'v-value-change';
    case 'checkedChange':
      return 'v-checked-change';
    default:
      return eventName
        .replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g, '$1-$2')
        .toLowerCase();
  }
};

const getHelperFunctions = () => {
  return {
    ael: (el: any, eventName: string, cb: any, opts: any) =>
      el.addEventListener(toKebabCase(eventName), cb, opts),
    rel: (el: any, eventName: string, cb: any, opts: any) =>
      el.removeEventListener(toKebabCase(eventName), cb, opts),
    ce: (eventName: string, opts: any) =>
      new CustomEvent(toKebabCase(eventName), opts),
  };
};

void defineCustomElements(window, getHelperFunctions());

export * from './proxies';
