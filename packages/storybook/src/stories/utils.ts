import { StoryObj } from '@storybook/web-components';
import ICONS from '@inovex.de/elements/src/components/ino-icon/icons';

export const maybeCreateStoryArgs = <T>(story: StoryObj<T>) => {
  if (!story.args) {
    story.args = {};
  }
  if (!story.argTypes) {
    story.argTypes = {};
  }
};

export const withIconControl = <T>(
  story: StoryObj<T>,
  propertyName: string,
  defaultValue?: string,
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

export const withSortDirection = <T>(
  story: StoryObj<T>,
  propertyName: string,
  defaultValue?: string,
) => {
  maybeCreateStoryArgs(story);
  story.args[propertyName] = defaultValue || '';
  story.argTypes[propertyName] = {
    options: ['desc', 'asc'],
    control: {
      type: 'select',
    },
  };
};

export const getIcons = () => ICONS.filter((icon) => !icon.startsWith('_'));

export const showSnackbar = (message: string) => {
  const snackbar: HTMLInoSnackbarElement =
    document.createElement('ino-snackbar');
  snackbar.message = message;
  document.body.appendChild(snackbar);
  snackbar.addEventListener('hideEl', () => snackbar.remove());
};
