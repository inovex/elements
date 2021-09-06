import { Components } from '@inovex.de/elements';
import { useEffect } from '@storybook/client-api';
import { Meta, Story } from '@storybook/web-components';
import { html } from 'lit-html';
import { decorateStoryWithClass } from '../utils';
import './ino-radio.scss';

export default {
  title: 'Input/ino-radio',
  component: 'ino-radio',
  parameters: {
    actions: {
      handles: ['checkedChange ino-radio'],
    },
  },
  decorators: [
    (story) => decorateStoryWithClass(story, 'story-radio'),
    (story) => {
      useEffect(() => {
        const eventHandler = (e) => e.target.setAttribute('checked', e.detail);
        const radios = document.querySelectorAll('ino-radio');
        radios.forEach((r) =>
          r.addEventListener('checkedChange', eventHandler)
        );
        return () =>
          radios.forEach((r) =>
            r.removeEventListener('checkedChange', eventHandler)
          );
      });
      return story();
    },
  ],
} as Meta;

export const Playground: Story<Components.InoRadio> = (args) => html`
  <ino-radio
    checked="${args.checked}"
    disabled="${args.disabled}"
    name="${args.name}"
    value="${args.value}"
  >
    Radio Button Label
  </ino-radio>
`;
Playground.args = {
  checked: false,
  disabled: false,
  name: 'radio-custom',
  value: 'radio-1',
};

export const States = () => html`
  <ino-radio>Unchecked</ino-radio>
  <ino-radio checked>Checked</ino-radio>
  <ino-radio disabled>Disabled</ino-radio>
  <ino-radio checked disabled>Checked and Disabled</ino-radio>
`;

// TODO: CSS Variables
//   <style>
//     ino-radio.customizable-radio {
//       --ino-radio-unchecked-color: ${text('--ino-radio-unchecked-color', '#D4DDEA', 'Custom Properties')};
//       --ino-radio-checked-color: ${text('--ino-radio-checked-color', '#EB002D', 'Custom Properties')};
//       --ino-radio-hover-color: ${text('--ino-radio-hover-color', '#FF1A47', 'Custom Properties')};
//       --ino-radio-active-color: ${text('--ino-radio-active-color', '#D20014', 'Custom Properties')};
//       --ino-radio-disabled-inner-circle-color: ${text('--ino-radio-disabled-inner-circle-color', '#777777', 'Custom Properties')};
//       --ino-radio-disabled-outer-circle-color: ${text('--ino-radio-disabled-outer-circle-color', '#c1c1c1', 'Custom Properties')};
//     }
//   </style>
