import { Page, Locator } from 'playwright-core';

type StoryDescription = [string, string, string]; // ['input', 'ino-checkbox', 'default']

export async function goToStory(
  page: Page,
  storyDescription: StoryDescription,
) {
  const [category, name, story] = storyDescription;

  await page.goto(`/iframe.html?id=${category}-${name}--${story}`);
}

export function spyOnEvent<T = boolean>(locator: Locator, eventName: string, value?: T) {
  return locator.evaluate((element, args) => {
    return new Promise<T>((resolve) => {
      const listener = () => {
        element.removeEventListener(args.eventName, listener);
        resolve((args.value ?? true) as T);
      };
      element.addEventListener(args.eventName, listener);
    });
  }, { eventName, value });
}
