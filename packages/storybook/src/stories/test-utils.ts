import { Locator, Page } from '@playwright/test';

type StoryDescription = [StoryCategory, string, string]; // ['input', 'ino-checkbox', 'default']

export async function goToStory(
  page: Page,
  storyDescription: StoryDescription,
) {
  const [category, name, story] = storyDescription;

  await page.goto(
    `/iframe.html?id=${category.toLowerCase()}-${name}--${story}`,
  );
}

export function setAttribute(el: Locator, attrName: string, value: string) {
  return el.evaluate(
    (e, { attrName, value }) => e.setAttribute(attrName, value),
    { attrName, value },
  );
}

export async function setProperty(
  el: Locator,
  propName: string,
  value: unknown,
) {
  return el.evaluate((e, { propName, value }) => (e[propName] = value), {
    propName,
    value,
  });
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
