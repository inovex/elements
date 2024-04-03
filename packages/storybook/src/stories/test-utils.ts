import { Locator, Page } from '@playwright/test';

type StoryDescription = [StoryCategory, string, string]; // ['input', 'ino-checkbox', 'default']

export async function goToStory(
  page: Page,
  storyDescription: StoryDescription,
) {
  const [category, name, story] = storyDescription;

  await page.goto(
    `/iframe?id=${category.toLowerCase()}-${name}--${story}&viewMode=story`,
  );
  await page.waitForLoadState('domcontentloaded');
  if (name !== 'ino-fab-set') await page.waitForSelector('#root-inner'); // identify that the story loaded successfully
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
