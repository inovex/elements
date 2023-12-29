import { Meta } from '@storybook/web-components';
import { Components } from '@inovex.de/elements';
import { html } from 'lit-html';
import { TemplateGenerator } from '../template-generator';
import {
  cssColor,
  cssSize,
  decorateStoryWithClass,
  withIconControl,
} from '../utils';
import { CssProperties } from '../types';

import './ino-icon-button.scss';

const ICON_BUTTON_CSS_PROPS: CssProperties = {
  size: cssSize('--ino-icon-button-size', 'Size of the entire button', 48),
  iconSize: cssSize(
    '--ino-icon-button-icon-size',
    'Size of the icon itself.',
    24,
  ),
  iconColor: cssColor(
    '--ino-icon-button-icon-color',
    'Default color of the icon itself.',
    '#4655ff',
  ),
  backgroundColor: cssColor(
    '--ino-icon-button-background-color',
    'Default color of the background.',
    'transparent',
  ),
  iconActiveColor: cssColor(
    '--ino-icon-button-icon-active-color',
    'Color of the active icon itself.',
    '#4655ff',
  ),
  backgroundActiveColor: cssColor(
    '--ino-icon-button-background-active-color',
    'Base color of the active background.',
    '#4655ff',
  ),
  iconDisabledColor: cssColor(
    '--ino-icon-button-icon-disabled-color',
    'Color of the icon itself in disabled state.',
    '#100707',
  ),
  backgroundDisabledColor: cssColor(
    '--ino-icon-button-background-disabled-color',
    'Base color of the background in disabled state.',
    '#100707',
  ),
};

export default {
  title: 'Buttons/ino-icon-button',
  component: 'ino-icon-button',
  decorators: [(story) => decorateStoryWithClass(story, 'story-icon-button')],
  parameters: {
    actions: {
      handles: ['click ino-icon-button'],
    },
  },
  args: {
    activated: false,
    disabled: false,
    filled: false,
    icon: 'add',
  },
} as Meta<Components.InoIconButton>;

const template = new TemplateGenerator<Components.InoIconButton>(
  'ino-icon-button',
  (args) => html`
    <ino-icon-button
      activated="${args.activated}"
      disabled="${args.disabled}"
      filled="${args.filled}"
      type="${args.type}"
    >
      <ino-icon icon="${args.icon}"></ino-icon>
    </ino-icon-button>
  `,
);

export const Playground = template.generatePlaygroundStory(
  ICON_BUTTON_CSS_PROPS,
);
withIconControl(Playground, 'icon', 'add');

export const Filled = template.generateStoryForProp('filled', true);

export const Activated = template.generateStoryForProp('activated', true);
