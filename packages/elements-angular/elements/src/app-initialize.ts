import { importLatoFont } from '@inovex.de/elements/dist/collection/util/import-fonts';

import { NgZone } from '@angular/core';
import {
  applyPolyfills,
  defineCustomElements,
} from '@inovex.de/elements/dist/loader';
import { raf } from './utils';

let didInitialize = false;

export const appInitialize = (doc: Document, zone: NgZone) => {
  return (): any => {
    const win: Window | undefined = doc.defaultView as any;
    if (win && typeof (window as any) !== 'undefined') {
      if (didInitialize) {
        return;
      }
      didInitialize = true;

      importLatoFont();
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
