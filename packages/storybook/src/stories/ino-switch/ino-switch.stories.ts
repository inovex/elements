import { Components } from '@inovex.de/elements';
import { useEffect } from '@storybook/client-api';
import { Meta, Story } from '@storybook/web-components';
import { html } from 'lit-html';
import { TemplateGenerator } from '../template-generator';
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
} as Meta<Components.InoSwitch>;

const template = new TemplateGenerator<Components.InoSwitch>(
  'ino-switch',
  args => html`
  <ino-switch
    checked="${args.checked}"
    color-scheme="${args.colorScheme}"
    disabled="${args.disabled}"
    name="${args.name}"
  >
    Switch Label
  </ino-switch>
`);

const templateColorSchema = new TemplateGenerator<Components.InoSwitch>(
  'ino-switch',
  args => html`
  <ino-switch color-scheme="primary" checked>Primary</ino-switch>
  <ino-switch color-scheme="secondary" checked>Secondary</ino-switch>
  <ino-switch color-scheme="success" checked>Success</ino-switch>
  <ino-switch color-scheme="warning" checked>Warning</ino-switch>
  <ino-switch color-scheme="error" checked>Error</ino-switch>
  <ino-switch color-scheme="light" checked>Light</ino-switch>
  <ino-switch color-scheme="dark" checked>Dark</ino-switch>
`);

const templateStates = new TemplateGenerator<Components.InoSwitch>(
  'ino-switch',
  args => html`
  <ino-switch checked>Checked</ino-switch>
  <ino-switch>Unchecked</ino-switch>
  <ino-switch disabled checked>Checked and Disabled</ino-switch>
  <ino-switch disabled>Disabled</ino-switch>
`);

export const Playground = template.generatePlaygroundStory();

/**
 * Change the color scheme by setting `color-schema` with the following values:
 * 
 * - `primary`
 * - `secondary`
 * - `success`
 * - `warning`
 * - `error`
 * - `light`
 * - `dark`
 */
export const ColorScheme = templateColorSchema.generatePlaygroundStory();

/**
 * Change the state of the `<ino-switch>` element by setting the following properties
 * 
 * - `checked`: Marks this element as checked. (**unmanaged**)
 * - `disabled`: Disables this element.
 */
export const States = templateStates.generatePlaygroundStory();

Playground.args = {
  checked: false,
  disabled: false,
  name: '',
};
withColorScheme(Playground, 'colorScheme', 'primary');
