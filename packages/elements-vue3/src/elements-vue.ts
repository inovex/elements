import { App, Plugin } from 'vue';
import { setPlatformHelpers } from "@stencil/core";


/**
 * We need to make sure that the web component fires an event
 * that will not conflict with the user's @valueChange binding,
 * otherwise the binding's callback will fire before any
 * v-model values have been updated.
 */
const toKebabCase = (eventName: string) => eventName === 'valueChange' ? 'v-value-change' : eventName.replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g, '$1-$2').toLowerCase();


const getHelperFunctions = () => {
  return {
    ael: (el: any, eventName: string, cb: any, opts: any) => el.addEventListener(toKebabCase(eventName), cb, opts),
    rel: (el: any, eventName: string, cb: any, opts: any) => el.removeEventListener(toKebabCase(eventName), cb, opts),
    ce: (eventName: string, opts: any) => new CustomEvent(toKebabCase(eventName), opts)
  };
};

export const ElementsVue: Plugin = {
  async install(_: App) {
    const { ael, rel, ce } = getHelperFunctions();

    const platformHelpers: any = {};
    platformHelpers.ael = ael;
    platformHelpers.rel = rel;
    platformHelpers.ce = ce;

    setPlatformHelpers(platformHelpers);
  }
};
