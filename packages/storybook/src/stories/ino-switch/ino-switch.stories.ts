import { Components } from '@inovex.de/elements';
import { useEffect } from '@storybook/client-api';
import { Meta, Story } from '@storybook/web-components';
import { html } from 'lit-html';
import { decorateStoryWithClass, withColorScheme } from '../utils';
import './ino-switch.scss';

const eventHandler = (e) => {
  const el = e.target;
  console.log(e);
  if (el.tagName.toLowerCase() !== 'ino-switch') {
    return;
  }
  el.setAttribute('checked', e.detail);
};

export default {
  title: 'Input/ino-switch',
  component: 'ino-switch',
  decorators: [
    (story) => decorateStoryWithClass(story, 'story-switch'),
    (story) => {
      useEffect(() => {
        document.addEventListener('checkedChange', eventHandler);
        return () =>
          document.removeEventListener('checkedChange', eventHandler);
      });
      return story();
    },
  ],
} as Meta;

export const Playground: Story<Components.InoSwitch> = (args) => html`
  <ino-switch
    checked="${args.checked}"
    color-scheme="${args.colorScheme}"
    disabled="${args.disabled}"
    name="${args.name}"
  >
    Switch Label
  </ino-switch>
`;
Playground.args = {
  checked: false,
  disabled: false,
  name: '',
};
withColorScheme(Playground, 'colorScheme', 'primary');

export const ColorScheme = () => html`
  <ino-switch color-scheme="primary" checked>Primary</ino-switch>
  <ino-switch color-scheme="secondary" checked>Secondary</ino-switch>
  <ino-switch color-scheme="success" checked>Success</ino-switch>
  <ino-switch color-scheme="warning" checked>Warning</ino-switch>
  <ino-switch color-scheme="error" checked>Error</ino-switch>
  <ino-switch color-scheme="light" checked>Light</ino-switch>
  <ino-switch color-scheme="dark" checked>Dark</ino-switch>
`;

export const States = () => html`
  <ino-switch checked>Checked</ino-switch>
  <ino-switch>Unchecked</ino-switch>
  <ino-switch disabled checked>Checked and Disabled</ino-switch>
  <ino-switch disabled>Disabled</ino-switch>
`;
