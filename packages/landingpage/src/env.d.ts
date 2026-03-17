/// <reference types="astro/client" />

import type { LocalJSX as InoJSX } from '@inovex.de/elements/dist/types/components';

// Teach Astro's template type checker about every ino-* custom element tag.
// Without this the IDE reports "Unknown html tag" for every web-component in
// .astro templates. InoJSX.IntrinsicElements maps each tag to its typed props:
//   'ino-accordion' → { accordionTitle: string; expanded: boolean }
declare global {
  namespace astroHTML {
    namespace JSX {
      interface IntrinsicElements extends InoJSX.IntrinsicElements {}
    }
  }
}
