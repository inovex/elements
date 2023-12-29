import { ArgTypes, Args, Story, StoryFn } from '@storybook/web-components';
import { StoryFnHtmlReturnType } from '@storybook/web-components/dist/ts3.4/client/preview/types';
import { html } from 'lit-html';
import ICONS from '../../../elements/src/components/ino-icon/icons';
import { CssProp } from './types';

export const maybeCreateStoryArgs = <T>(story: Story<T>) => {
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
  story.args[propertyName] = defaultValue || '';
  story.argTypes[propertyName] = {
    control: {
      type: 'select',
    },
    options: getIcons(),
  };
};

export const withSortDirection = <T>(
  story: Story<T>,
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

export const decorateStoryWithClass = (
  story: () => StoryFnHtmlReturnType,
  className?: string,
): StoryFnHtmlReturnType => {
  return html`
    <div class="${className ?? ''}">${story()}</div>
  `;
};

export const showSnackbar = (message: string) => {
  const snackbar: HTMLInoSnackbarElement = document.createElement(
    'ino-snackbar',
  );
  snackbar.message = message;
  document.body.appendChild(snackbar);
  snackbar.addEventListener('hideEl', () => snackbar.remove());
};

export const setArgs = <T>(story: StoryFn<T>, args: Args): void => {
  story.args = { ...story.args, ...args };
};

export const setArgTypes = <T>(story: StoryFn<T>, argTypes: ArgTypes): void => {
  story.argTypes = { ...story.argTypes, ...argTypes };
};

export const cssColor = (
  name: string,
  description: string,
  defaultValue?: string,
): CssProp<string> => ({
  name,
  description,
  type: 'color',
  defaultValue,
});

export const cssSize = (
  name: string,
  description: string,
  defaultValue?: number,
  unit = 'px',
): CssProp<number> => ({
  name,
  description,
  type: 'size',
  defaultValue,
  unit,
});

export const cssNumber = (
  name: string,
  description: string,
  defaultValue?: number,
): CssProp<number> => ({
  name,
  description,
  type: 'number',
  defaultValue,
});

export const cssTime = (
  name: string,
  description: string,
  defaultValue?: number,
  unit = 'ms',
): CssProp<number> => ({
  name,
  description,
  type: 'time',
  defaultValue,
  unit,
});

export const cssText = (
  name: string,
  description: string,
  defaultValue?: string,
): CssProp<string> => ({
  name,
  description,
  type: 'text',
  defaultValue,
});
