import { E2EPage } from '@stencil/core/testing';

export async function getFocusedElementOfPage(page: E2EPage) {
  return page.$eval(':focus', (el) => el);
}

export const pxToNumber = (s: string): number =>
  Number(s.substring(0, s.length - 2));

export const setPropertyOfEl = <Component extends HTMLElement>(
  page: E2EPage,
  selector: string,
  props: Partial<Component>
) => {
  return page.$eval(selector, (el: Component) => {
    console.log(props);
    Object.assign(el, props);
  });
};
