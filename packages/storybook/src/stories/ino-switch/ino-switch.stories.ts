import { Components } from '@inovex.de/elements';
import { useEffect } from '@storybook/client-api';
import { Meta, Story } from '@storybook/web-components';
import { html } from 'lit-html';
import { decorateStoryWithClass, withColorScheme } from '../utils';
import './ino-switch.scss';

const eventHandler = (e) => {
  const el = e.target;
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

export const Icons = () => html`
  <ino-switch>
    My Label
    <ino-icon slot="icon-on" icon="star"></ino-icon>
    <ino-icon slot="icon-off" icon="close"></ino-icon>
  </ino-switch>
`;

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

export const CSSProperties = (args) => html`
  <style>
    ino-switch.css-variables {
      --switch-toggled-on-color: ${args.switchToggledOnColor};
      --switch-toggled-on-thumb-color: ${args.switchToggledOnThumbColor};
      --switch-toggled-on-track-color: ${args.switchToggledOnTrackColor};
      --switch-toggled-off-color: ${args.switchToggledOffColor};
      --switch-toggled-off-thumb-color: ${args.switchToggledOfThumbColor};
      --switch-toggled-off-track-color: ${args.switchToggledOfTrackColor};
      --switch-hover-color: ${args.switchHoverColor};
      --switch-hover-thumb-color: ${args.switchHoverThumbColor};
      --switch-hover-track-color: ${args.switchHoverTrackColor};
      --switch-active-color: ${args.switchActiveColor};
      --switch-active-thumb-color: ${args.switchActiveThumbColor};
      --switch-active-track-color: ${args.switchActiveTrackColor};
      --switch-disabled-color: ${args.switchDisabledColor};
      --switch-disabled-thumb-color: ${args.switchDisabledThumbColor};
      --switch-disabled-track-color: ${args.switchDisabledTrackColor};
    }
  </style>
  <ino-switch
    class="css-variables"
    checked="${args.checked}"
    disabled="${args.disabled}"
  >
    Css Variables Switch
  </ino-switch>
`;
CSSProperties.args = {
  checked: false,
  disabled: false,
  switchToggledOnColor: '#3d40f5',
  switchToggledOnThumbColor: '#3d40f5',
  switchToggledOnTrackColor: '#5d60f7',
  switchToggledOffColor: '#c1c1c1',
  switchToggledOfThumbColor: '#fff',
  switchToggledOfTrackColor: '#777777',
  switchHoverColor: '#5d60f7',
  switchHoverThumbColor: '#fff',
  switchHoverTrackColor: '#5d60f7',
  switchActiveColor: '#0d10f3',
  switchActiveThumbColor: '#fff',
  switchActiveTrackColor: '#0d10f3',
  switchDisabledColor: '#c1c1c1',
  switchDisabledThumbColor: '#c1c1c1',
  switchDisabledTrackColor: '#c1c1c1',
};
CSSProperties.argTypes = {
  switchToggledOnColor: { control: 'color' },
  switchToggledOnThumbColor: { control: 'color' },
  switchToggledOnTrackColor: { control: 'color' },
  switchToggledOffColor: { control: 'color' },
  switchToggledOfThumbColor: { control: 'color' },
  switchToggledOfTrackColor: { control: 'color' },
  switchHoverColor: { control: 'color' },
  switchHoverThumbColor: { control: 'color' },
  switchHoverTrackColor: { control: 'color' },
  switchActiveColor: { control: 'color' },
  switchActiveThumbColor: { control: 'color' },
  switchActiveTrackColor: { control: 'color' },
  switchDisabledColor: { control: 'color' },
  switchDisabledThumbColor: { control: 'color' },
  switchDisabledTrackColor: { control: 'color' },
};
