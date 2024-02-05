import { Page } from 'playwright-core';

type StoryDescription = [string, string, string]; // ['input', 'ino-checkbox', 'default']

export async function goToStory(
  page: Page,
  storyDescription: StoryDescription,
) {
  // TODO: check if story exists by checking keys in /dist/index.json

  const [category, name, story] = storyDescription;

  await page.goto(`/iframe.html?id=${category}-${name}--${story}`);
}
