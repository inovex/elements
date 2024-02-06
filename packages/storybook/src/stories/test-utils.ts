import { Page } from 'playwright-core';

type StoryDescription = [string, string, string]; // ['input', 'ino-checkbox', 'default']

export async function goToStory(
  page: Page,
  storyDescription: StoryDescription,
) {

  const [category, name, story] = storyDescription;

  await page.goto(`/iframe.html?id=${category}-${name}--${story}`);
}
