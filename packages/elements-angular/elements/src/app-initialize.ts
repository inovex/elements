import { importLatoFont } from '@inovex.de/elements/dist/collection/util/import-fonts';
import { addIcons } from '@inovex.de/elements/dist/collection/util/icons';
import { ICON_PATHS } from '@inovex.de/elements/dist/inovex-elements/icon-assets/SVG/index.esm.js';

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

      addIcons(ICON_PATHS);
      importLatoFont();
      const aelFn =
        '__zone_symbol__addEventListener' in (doc.body as any)
          ? '__zone_symbol__addEventListener'
          : 'addEventListener';

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
