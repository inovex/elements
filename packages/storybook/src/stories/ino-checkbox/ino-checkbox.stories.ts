import { useEffect } from '@storybook/client-api';
import { html } from 'lit-html';
import { defaultDecorator } from '../utils';
import './ino-checkbox.scss';

export default {
  title: 'Components (WIP)/ino-checkbox',
  component: 'ino-checkbox',
  decorators: [defaultDecorator, story => {
    useEffect(() => {
      const handleCheckedChange = e => {
        const checkbox = e.target;
        checkbox.setAttribute('checked', e.detail);
        checkbox.indeterminate && checkbox.setAttribute('indeterminate', 'false');
      };

      const checkboxes = document.querySelectorAll('ino-checkbox');
      checkboxes.forEach(c => c.addEventListener('checkedChange', handleCheckedChange));
      return () => checkboxes.forEach(
        c => c.removeEventListener('checkedChange', handleCheckedChange)
      );
    });
    return story();
  }]
};

export const Playground = args => html`
  <ino-checkbox
    class="customizable-checkbox"
    checked="${args.checked}"
    disabled="${args.disabled}"
    indeterminate="${args.indeterminate}"
    name="${args.name}"
    ino-selection="${args.inoSelection}"
    value="${args.value}"
  >
    Label
  </ino-checkbox>
`;
Playground.args = {
  checked: false,
  disabled: false,
  indeterminate: false,
  name: '',
  inoSelection: false,
  value: ''
}

export const Variations = () => html`
  <div class="story-states">
    <ino-checkbox checked>Checked</ino-checkbox>
    <ino-checkbox>Unchecked</ino-checkbox>
    <ino-checkbox indeterminate>Indeterminated</ino-checkbox>
  </div>
  <div class="story-states">
    <ino-checkbox disabled checked>Checked and Disabled</ino-checkbox>
    <ino-checkbox disabled>Unchecked and Disabled</ino-checkbox>
    <ino-checkbox disabled indeterminate>Indeterminated and Disabled</ino-checkbox>
  </div>
`;

export const Selection = () => html`
  <div class="story-states">
    <ino-checkbox ino-selection checked>Checked</ino-checkbox>
    <ino-checkbox ino-selection>Unchecked</ino-checkbox>
    <ino-checkbox ino-selection indeterminate>Indeterminate</ino-checkbox>
  </div>
  <div class="story-states">
    <ino-checkbox checked ino-selection disabled>Checked and disabled</ino-checkbox>
    <ino-checkbox ino-selection disabled>Unchecked and disabled</ino-checkbox>
    <ino-checkbox ino-selection indeterminate disabled>Indeterminate Disabled</ino-checkbox>
  </div>
`;
