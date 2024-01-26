import { Story } from '@storybook/web-components';
import { StoryFnHtmlReturnType } from '@storybook/web-components/dist/ts3.4/client/preview/types';
import { html } from 'lit-html';
import ICONS from '@inovex.de/elements/src/components/ino-icon/icons';

const maybeCreateStoryArgs = <T>(story: Story<T>): void => {
  if (!story.args) {
    story.args = {};
  }
  if (!story.argTypes) {
    story.argTypes = {};
  }
};

export const withIconControl = <T>(
  story: Story<T>,
  propertyName: string,
  defaultValue?: string,
) => {
  maybeCreateStoryArgs(story);
  story.args = { ...story.args, [propertyName]: defaultValue || '' };
  story.argTypes = {
    ...story.args,
    [propertyName]: {
      control: {
        type: 'select',
      },
      options: getIcons(),
    },
  };
};

export const withSortDirection = <T>(
  story: Story<T>,
  propertyName: string,
  defaultValue?: string,
) => {
  maybeCreateStoryArgs(story);
  story.args = { ...story.args, [propertyName]: defaultValue || '' };
  story.argTypes = {
    ...story.args,
    [propertyName]: {
      options: ['desc', 'asc'],
      control: {
        type: 'select',
      },
    },
  };
};

export const getIcons = () =>
  ICONS.filter((icon: string) => !icon.startsWith('_'));

export const decorateStoryWithClass = (
  story: () => StoryFnHtmlReturnType,
  className?: string,
): StoryFnHtmlReturnType => {
  return html` <div class="${className ?? ''}">${story()}</div> `;
};

export const showSnackbar = (message: string) => {
  const snackbar: HTMLInoSnackbarElement =
    document.createElement('ino-snackbar');
  snackbar.message = message;
  document.body.appendChild(snackbar);
  snackbar.addEventListener('hideEl', () => snackbar.remove());
};
