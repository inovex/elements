import { Components } from '@inovex.de/elements';
import { useEffect } from '@storybook/client-api';
import { Meta, Story } from '@storybook/web-components';
import { html } from 'lit-html';

import { decorateStoryWithClass, templateForComponent } from '../utils';
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
const Template: Story<Components.InoCheckbox> = (args) => html`
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
`;

export const Playground = templateForComponent(Template, {});

export const Checked = templateForComponent(Template, { checked: true });

// While checkboxes are mainly used in lists, the selection should be used as a single, independent UI element.
export const Selection = templateForComponent(Template, {
  ...Checked.args, // reuse args of Checked Story
  checked: true,
});

/*
 * The indeterminate status indicates that a user is indeterminate without changing the checked state.
 * If a checkbox is unchecked and indeterminate then it will lose the indeterminate state on click and change to checked.
 * [Documentation on MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/checkbox#Indeterminate_state_checkboxes)
 */
export const Indeterminate = templateForComponent(Template, {
  indeterminate: true,
});

export const Disabled = templateForComponent(Template, { disabled: true });
