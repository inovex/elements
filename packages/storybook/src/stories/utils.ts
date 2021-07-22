import { html } from 'lit-html';
import ICONS from '../../../elements/src/components/ino-icon/icons';

export const maybeCreateStoryArgs = (story: any) => {
  if (!story.args) {
    story.args = {};
  }
  if (!story.argTypes) {
    story.argTypes = {};
  }
};

export const withIconControl = (
  story: any,
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
  story: any,
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

export const withSortDirection = (
  story: any,
  propertyName: string,
  defaultValue?: string
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

export const defaultDecorator = (story, className?: string) => {
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
