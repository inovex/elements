import { defineCustomElements } from '@inovex/elements/dist/loader'; // must be replaced with '../loader' when copied
                                                                     // => is done in core/scripts/postbuild.sh

export function registerInovexElements() {
  defineCustomElements(window);
}
