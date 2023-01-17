import { NgZone, InjectionToken } from '@angular/core';
import {
  applyPolyfills,
  defineCustomElements,
} from '@inovex.de/elements/loader';
import { raf } from './utils';
import { InoElementsWindow, InoElementsConfig } from '@inovex.de/elements';

let didInitialize = false;

export const ConfigToken = new InjectionToken<InoElementsConfig>(
  'INOVEX_ELEMENTS_CONFIG'
);

export const appInitialize = (
  config: InoElementsConfig,
  doc: Document,
  zone: NgZone
) => {
  return (): any => {
    const win: InoElementsWindow | undefined = doc.defaultView as any;
    if (win && typeof (window as any) !== 'undefined') {
      if (didInitialize) {
        return;
      }
      didInitialize = true;

      win.inoElements = win.inoElements || {};
      win.inoElements.config = config;

      const aelFn =
        '__zone_symbol__addEventListener' in (doc.body as any)
          ? '__zone_symbol__addEventListener'
          : 'addEventListener';

      /* eslint-disable prefer-arrow/prefer-arrow-functions */
      return applyPolyfills().then(() => {
        return defineCustomElements(win, {
          exclude: [],
          syncQueue: true,
          raf,
          jmp: (h: any) => zone.runOutsideAngular(h),
          ael(elm, eventName, cb, opts) {
            (elm as any)[aelFn](eventName, cb, opts);
          },
          rel(elm, eventName, cb, opts) {
            elm.removeEventListener(eventName, cb, opts);
          },
        });
      });
    }
  };
};
