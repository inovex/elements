import { Page, Locator } from '@playwright/test';

type StoryDescription = [string, string, string]; // ['input', 'ino-checkbox', 'default']

export async function goToStory(
  page: Page,
  storyDescription: StoryDescription,
) {
  const [category, name, story] = storyDescription;

  await page.goto(`/iframe.html?id=${category}-${name}--${story}`);
}

export async function setAttribute(
  el: Locator,
  attrName: string,
  value: string,
) {
  return await el.evaluate(
    (e, { attrName, value }) => e.setAttribute(attrName, value),
    { attrName, value },
  );
}
