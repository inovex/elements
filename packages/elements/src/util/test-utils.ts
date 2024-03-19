import { E2EPage, SpecPage } from '@stencil/core/testing';

export async function getFocusedElementOfPage(page: E2EPage) {
  return page.$eval(':focus', (el) => el);
}

export function listenForEvent(page: SpecPage, eventName: string) {
  const eventSpy = jest.fn();

  page.body.addEventListener(eventName, eventSpy);

  function assertEventDetails(detail: any, eventIndex = 0) {
    return expect(eventSpy.mock.calls[eventIndex][0]).toHaveProperty(
      'detail',
      detail,
    );
  }

  return { eventSpy, assertEventDetails };
}

export const pxToNumber = (s: string): number =>
  Number(s.substring(0, s.length - 2));

export const setPropertyOfEl = <Component extends HTMLElement>(
  page: E2EPage,
  selector: string,
  props: Partial<Component>,
) => {
  return page.$eval(selector, (el: Component) => {
    Object.assign(el, props);
  });
};
