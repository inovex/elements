import { SpecPage } from '@stencil/core/testing';

export function listenForEvent(page: SpecPage, eventName: string) {
  const eventSpy = jest.fn();

  page.body.addEventListener(eventName, eventSpy);

  function assertEventDetails(detail: any, eventIndex = 0) {
    return expect(eventSpy.mock.calls[eventIndex][0]).toHaveProperty('detail', detail);
  }

  return { eventSpy, assertEventDetails };
}

export async function fillInput(page: SpecPage, input: HTMLInputElement, stringToType: string) {
  const arr = [...stringToType];
  input.value = '';
  arr.forEach(char => {
    input.value += char;
    input.dispatchEvent(new Event('input'));
  });
  await page.waitForChanges();
}
