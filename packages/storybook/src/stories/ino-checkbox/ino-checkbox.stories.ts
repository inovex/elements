import { Components } from '@inovex.de/elements';
import { useEffect } from '@storybook/client-api';
import { Meta } from '@storybook/web-components';
import { html } from 'lit-html';
import { TemplateGenerator } from '../template-generator';

import { decorateStoryWithClass } from '../utils';
import './ino-checkbox.scss';

export default {
  title: 'Input/ino-checkbox',
  component: 'ino-checkbox',
  decorators: [
    (story) => decorateStoryWithClass(story, 'story-checkbox'),
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
  // will be used as default props for all stories
  args: {
    checked: false,
    disabled: false,
    indeterminate: false,
    name: '',
    selection: false,
    value: '',
  },
} as Meta<Components.InoCheckbox>;

// the basic template for the checkbox component
const template = new TemplateGenerator<Components.InoCheckbox>(
  'ino-checkbox',
  (args) => html`
    <ino-checkbox
      checked="${args.checked}"
      disabled="${args.disabled}"
      indeterminate="${args.indeterminate}"
      name="${args.name}"
      selection="${args.selection}"
      value="${args.value}"
    >
      Label
    </ino-checkbox>
  `
);

export const Playground = template.generateStory({});

export const Checked = template.generateStory({ checked: true }, 'checked');

export const Selection = template.generateStory(
  {
    ...Checked.args, // reuse args of Checked Story
    selection: true,
  },
  'selection'
);

export const Indeterminate = template.generateStory(
  {
    indeterminate: true,
  },
  'indeterminate'
);

export const Disabled = template.generateStory({ disabled: true }, 'disabled');
