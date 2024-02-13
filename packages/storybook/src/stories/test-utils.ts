import { Page } from 'playwright-core';

type StoryDescription = [string, string, string]; // ['input', 'ino-checkbox', 'default']

export async function goToStory(
  page: Page,
  storyDescription: StoryDescription,
) {
  const [category, name, story] = storyDescription;

  await page.goto(`/iframe.html?id=${category}-${name}--${story}`);
}

export function interceptCustomEvent<T>(page: Page, eventName: string) {
  return page.evaluate((eventName) => {
    return new Promise<T>((resolve) => {
      const listener = (data: CustomEvent<T>) => {
        document.removeEventListener(eventName, listener);
        resolve(data.detail);
      };
      document.addEventListener(eventName, listener);
    });
  }, eventName);
}
