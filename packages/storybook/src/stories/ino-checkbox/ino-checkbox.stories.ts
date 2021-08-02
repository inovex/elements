import { Components } from '@inovex.de/elements';
import { useEffect } from '@storybook/client-api';
import { Meta, Story } from '@storybook/web-components';
import { html, TemplateResult } from 'lit-html';

import { defaultDecorator } from '../utils';
import './ino-checkbox.scss';

export default {
  title: 'Input/ino-checkbox',
  component: 'ino-checkbox',
  decorators: [
    defaultDecorator,
    (story) => {
      useEffect(() => {
        const handleCheckedChange = (e) => {
          const checkbox: HTMLInoCheckboxElement = e.target;
          checkbox.checked = e.detail;
          if (checkbox.indeterminate) {
            checkbox.indeterminate = false;
          }
        };

        const checkboxes = document.querySelectorAll('ino-checkbox');
        checkboxes.forEach((c) =>
          c.addEventListener('checkedChange', handleCheckedChange)
        );
        return () =>
          checkboxes.forEach((c) =>
            c.removeEventListener('checkedChange', handleCheckedChange)
          );
      });
      return story();
    },
  ],
} as Meta;

export const Playground: Story<Components.InoCheckbox> = (args) => html`
  <ino-checkbox
    class="customizable-checkbox"
    checked="${args.checked}"
    disabled="${args.disabled}"
    indeterminate="${args.indeterminate}"
    name="${args.name}"
    selection="${args.selection}"
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
  selection: false,
  value: '',
};

export const Variations = (): TemplateResult => html`
  <div class="story-states">
    <ino-checkbox checked>Checked</ino-checkbox>
    <ino-checkbox>Unchecked</ino-checkbox>
    <ino-checkbox indeterminate>Indeterminated</ino-checkbox>
  </div>
  <div class="story-states">
    <ino-checkbox disabled checked>Checked and Disabled</ino-checkbox>
    <ino-checkbox disabled>Unchecked and Disabled</ino-checkbox>
    <ino-checkbox disabled indeterminate
      >Indeterminate and Disabled
    </ino-checkbox>
  </div>
`;

export const Selection = (): TemplateResult => html`
  <div class="story-states">
    <ino-checkbox selection checked>Checked</ino-checkbox>
    <ino-checkbox selection>Unchecked</ino-checkbox>
    <ino-checkbox selection indeterminate>Indeterminate</ino-checkbox>
  </div>
  <div class="story-states">
    <ino-checkbox checked selection disabled
      >Checked and disabled
    </ino-checkbox>
    <ino-checkbox selection disabled>Unchecked and disabled</ino-checkbox>
    <ino-checkbox selection indeterminate disabled>
      Indeterminate Disabled
    </ino-checkbox>
  </div>
`;
