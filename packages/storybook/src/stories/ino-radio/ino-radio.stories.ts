import { html } from 'lit-html';
import { useEffect } from '@storybook/client-api';
import { defaultDecorator } from '../utils';
import './ino-radio.scss';

export default {
  title: 'Components (WIP)/ino-radio',
  component: 'ino-radio',
  parameters: {
    actions: {
      handles: ['checkedChange ino-radio']
    }
  },
  decorators: [defaultDecorator, story => {
    useEffect(() => {
      const eventHandler = e => e.target.setAttribute('checked', e.detail);
      const radios = document.querySelectorAll('ino-radio');
      radios.forEach(r => r.addEventListener('checkedChange', eventHandler));
      return () => radios.forEach(r => r.removeEventListener('checkedChange', eventHandler));
    });
    return story();
  }],
};

export const Playground = (args) => html`
  <ino-radio
    class="customizable-radio"
    checked="${args.checked}"
    disabled="${args.disabled}"
    name="radio-custom"
  >
    Customizable Radio Button
  </ino-radio>
`;
Playground.args = {
  checked: false,
  disabled: false,
}

export const States = () => html`
  <div class="story-radio">
    <ino-radio>Unchecked</ino-radio>
    <ino-radio checked>Checked</ino-radio>
    <ino-radio disabled>Disabled</ino-radio>
    <ino-radio checked disabled>Checked and Disabled</ino-radio>
  </div>
`;

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
