import { Components } from '@inovex.de/elements';
import { useEffect } from '@storybook/client-api';
import { Story } from '@storybook/web-components';
import { html } from 'lit-html';
import { decorateStoryWithClass, showSnackbar } from '../utils';
import './ino-select.scss';

const handleFormSubmission = (e) => {
  e.preventDefault();
  showSnackbar('Form submitted.');
};

const handleSelect = (e) => e.target.setAttribute('value', e.detail);

export default {
  title: 'Input/ino-select',
  component: 'ino-select',
  parameters: {
    actions: {
      handles: ['valueChange .customizable-select', 'submit .form'],
    },
  },
  decorators: [
    (story) => decorateStoryWithClass(story, 'story-select'),
    (story) => {
      useEffect(() => {
        const formElement = document.querySelector('form');
        formElement?.addEventListener('submit', handleFormSubmission);

        const selects = document.querySelectorAll('ino-select');
        selects.forEach((s) => s.addEventListener('valueChange', handleSelect));
        return () => {
          selects.forEach((s) =>
            s.removeEventListener('valueChange', handleSelect)
          );
          formElement?.removeEventListener('submit', handleFormSubmission);
        };
      }, []);
      return story();
    },
  ],
};

const optionsTemplate = html`
  <ino-option value="Option 1">Option 1</ino-option>
  <ino-option value="Option 2">Option 2</ino-option>
  <ino-option value="Option 3">Option 3</ino-option>
`;

export const Playground: Story<Components.InoSelect> = (args) => html`
  <ino-select
    disabled="${args.disabled}"
    name="${args.name}"
    outline="${args.outline}"
    label="${args.label}"
    required="${args.required}"
    show-label-hint="${args.showLabelHint}"
    value="${args.value}"
    error="${args.error}"
  >
    ${optionsTemplate}
  </ino-select>
`;
Playground.args = {
  disabled: false,
  label: 'Select label',
  name: 'select-1',
  outline: false,
  required: false,
  showLabelHint: false,
  value: 'Option 1',
  error: false,
};

export const NoLabel = () => html`
  <ino-select>
    <ino-option value="No Label" selected>Selected option</ino-option>
    ${optionsTemplate}
  </ino-select>
`;

export const FloatingLabel = () => html`
  <ino-select label="Floating label">
    <ino-option value="Selected Option" selected>Selected Option</ino-option>
    ${optionsTemplate}
  </ino-select>
`;

export const OutlineFloatingLabel = () => html`
  <ino-select label="Floating label outlined" outline>
    <ino-option value="Selected Option" selected>Selected Option</ino-option>
    ${optionsTemplate}
  </ino-select>
`;

export const WithIcon = () => html`
  <div style="height: 400px;">
    <ino-select label="Select with leading icon">
      <ino-icon slot="icon-leading" icon="user"></ino-icon>
      <ino-option value="Selected Option" selected>Selected Option</ino-option>
      ${optionsTemplate}
    </ino-select>
    <ino-select
      style="margin-top: 150px;"
      outline
      label="Select with leading icon"
    >
      <ino-icon slot="icon-leading" icon="user"></ino-icon>
      <ino-option value="Selected Option" selected>Selected Option</ino-option>
      ${optionsTemplate}
    </ino-select>
  </div>
`;

export const Disabled = () => html`
  <ino-select disabled label="Disabled select">
    <ino-option value="Selected Option" selected>Selected Option</ino-option>
    ${optionsTemplate}
  </ino-select>
`;

export const DisabledOption = () => html`
  <ino-select label="Select with disabled option">
    ${optionsTemplate}
    <ino-option value="Disabled Option" disabled>Disabled Option</ino-option>
  </ino-select>
`;

export const Required = () => html`
  <ino-select required label="Required select" show-label-hint>
    ${optionsTemplate}
  </ino-select>
`;

export const Form = () => html`
  <form>
    <p>Form should submit if no value is selected</p>
    <ino-select required> ${optionsTemplate}</ino-select>
    <ino-button type="submit">Submit</ino-button>
  </form>
`;

export const Option = () => html`
  <ino-select label="Optional select" show-label-hint>
    ${optionsTemplate}
  </ino-select>
`;

// TODO
/*<style>
        ino-option.customizable-option {
          --ino-option-selected-background-color: ${text(
            '--ino-option-selected-background-color',
            'rgba(61, 64, 245, 0.05)',
            'Custom Properties'
          )};
          --ino-option-selected-background-color-hover: ${text(
            '--ino-option-selected-background-color-hover',
            'rgba(61, 64, 245, 0.1)',
            'Custom Properties'
          )};
          --ino-option-selected-background-color-focus: ${text(
            '--ino-option-selected-background-color-focus',
            'rgba(61, 64, 245, 0.15)',
            'Custom Properties'
          )};
          --ino-option-selected-background-color-active: ${text(
            '--ino-option-selected-background-color-active',
            'rgba(61, 64, 245, 0.3)',
            'Custom Properties'
          )};
          --ino-option-deselected-background-color: ${text(
            '--ino-option-deselected-background-color',
            '',
            'Custom Properties'
          )};
          --ino-option-deselected-background-color-hover: ${text(
            '--ino-option-deselected-background-color-hover',
            '',
            'Custom Properties'
          )};
          --ino-option-deselected-background-color-focus: ${text(
            '--ino-option-deselected-background-color-focus',
            '',
            'Custom Properties'
          )};
          --ino-option-deselected-background-color-active: ${text(
            '--ino-option-deselected-background-color-active',
            '',
            'Custom Properties'
          )};
        }
    </style>
*/
// Does not work as described
/* export const Forms = () => html`
  <div class="story-select">
    <p>The form should not submit since no option is selected and the select is required.</p>
    <form class="form" onSubmit="alert('Form submitted'); return false;">
        <ino-select label="Form select" required>
          <ino-option value="Test">Test</ino-option>
        </ino-select>
        <button type="submit">Submit</button>
    </form>
  </div>
`; */
