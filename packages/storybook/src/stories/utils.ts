import { StoryContext } from '@storybook/web-components';
import { StoryFnHtmlReturnType } from '@storybook/web-components/dist/ts3.4/client/preview/types';
import { html } from 'lit-html';
import ICONS from '../../../elements/src/components/ino-icon/icons';

export const maybeCreateStoryArgs = (story: StoryContext) => {
  if (!story.args) {
    story.args = {};
  }
  if (!story.argTypes) {
    story.argTypes = {};
  }
};

export const withIconControl = (
  story: StoryContext,
  propertyName: string,
  defaultValue?: string
) => {
  maybeCreateStoryArgs(story);
  story.args[propertyName] = defaultValue || '';
  story.argTypes[propertyName] = {
    control: {
      type: 'select',
    },
    options: getIcons(),
  };
};

export const withColorScheme = (
  story: StoryContext,
  propertyName: string,
  defaultValue?: string
) => {
  maybeCreateStoryArgs(story);
  story.args[propertyName] = defaultValue || '';
  story.argTypes[propertyName] = {
    control: {
      type: 'select',
    },
    options: [
      'primary',
      'secondary',
      'success',
      'warning',
      'error',
      'light',
      'dark',
    ],
  };
};

export const getIcons = () => ICONS.filter((icon) => !icon.startsWith('_'));

export const defaultDecorator = (
  story: () => StoryFnHtmlReturnType,
  context: StoryContext,
  className?: string
): StoryFnHtmlReturnType => {
  return html` <div class="${className ?? ''}">${story()}</div> `;
};

export const showSnackbar = (message: string) => {
  const snackbar: HTMLInoSnackbarElement = document.createElement(
    'ino-snackbar'
  );
  snackbar.message = message;
  document.body.appendChild(snackbar);
  snackbar.addEventListener('hideEl', () => snackbar.remove());
};
