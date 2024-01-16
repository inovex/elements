import { Meta } from '@storybook/web-components';
import { Components } from '@inovex.de/elements';
import { html } from 'lit-html';
import { useEffect } from '@storybook/preview-api';
import Story from '../StoryWrapper';
import { showSnackbar } from '../utils';
import './ino-select.scss';

const handleFormSubmission = (e) => {
  e.preventDefault();
  showSnackbar('Form submitted.');
};

const handleSelect = (e) => e.target.setAttribute('value', e.detail);

const optionsTemplate = html`
  <ino-option value="Option 1">Option 1</ino-option>
  <ino-option value="Option 2">Option 2</ino-option>
  <ino-option value="Option 3">Option 3</ino-option>
`;

const InoSelectMeta = {
  title: 'Input/ino-select',
  component: 'ino-select',
  parameters: {
    actions: {
      handles: ['valueChange .customizable-select', 'submit .form'],
    },
  },
  decorators: [
    (story) => {
      useEffect(() => {
        const formElement = document.querySelector('form');
        formElement?.addEventListener('submit', handleFormSubmission);

        const selects = document.querySelectorAll('ino-select');
        selects.forEach((s) => s.addEventListener('valueChange', handleSelect));
        return () => {
          selects.forEach((s) =>
            s.removeEventListener('valueChange', handleSelect),
          );
          formElement?.removeEventListener('submit', handleFormSubmission);
        };
      }, []);
      return story();
    },
  ],
  render: (args) => html`
    <ino-select
      disabled="${args.disabled}"
      name="${args.name}"
      outline="${args.outline}"
      label="${args.label}"
      required="${args.required}"
      show-label-hint="${args.showLabelHint}"
      value="${args.value}"
      error="${args.error}"
      helper="${args.helper}"
      helper-persistent="${args.helperPersistent}"
      helper-validation="${args.helperValidation}"
    >
      <ino-option value="Option 1">Option 1</ino-option>
      <ino-option value="Option 2">Option 2</ino-option>
      <ino-option value="Option 3">Option 3</ino-option>
    </ino-select>
  `,
  args: {
    disabled: false,
    label: 'Select label',
    name: 'select-1',
    outline: false,
    required: false,
    showLabelHint: false,
    value: 'Option 1',
    error: false,
    helper: '',
    helperPersistent: false,
    helperValidation: false,
  },
} as Meta<Components.InoSelect>;

export default InoSelectMeta;

export const Default = Story({
  ...InoSelectMeta,
});

export const Outline = Story({
  ...Default,
  docsFromProperty: 'outline',
  args: {
    outline: true,
  }
})

export const Disabled = Story({
  ...Default,
  docsFromProperty: 'disabled',
  args: {
    disabled: true,
  }
})

export const Error = Story({
  ...Default,
  docsFromProperty: 'error',
  args: {
    error: true,
  }
})

export const ShowLabelHint = Story({
  ...Default,
  docsFromProperty: 'showLabelHint',
  args: {
    showLabelHint: true,
  }
})

export const HelperMessage = Story({
  ...Default,
  docsFromProperty: 'helper',
  args: {
    helper: 'My Helper Message',
    helperPersistent: true,
  }
})

export const HelperMessageValidation = Story({
  ...Default,
  docsFromProperty: 'helperValidation',
  args: {
    helperValidation: true,
    value: undefined,
    required: true,
    helper: 'This message will be highlighted when no option has been selected',
    helperPersistent: true,
  }
})

export const WithIcon = Story({
  ...Default,
  docsFromProperty: 'helperValidation',
  render: () => html`
    <div style="height: 400px;">
      <ino-select label="Select with leading icon">
        <ino-icon slot="icon-leading" icon="user"></ino-icon>
        <ino-option value="Selected Option" selected
          >Selected Option</ino-option
        >
        ${optionsTemplate}
      </ino-select>
      <ino-select
        style="margin-top: 150px;"
        outline
        label="Select with leading icon"
      >
        <ino-icon slot="icon-leading" icon="user"></ino-icon>
        <ino-option value="Selected Option" selected
          >Selected Option</ino-option
        >
        ${optionsTemplate}
      </ino-select>
    </div>
  `,
})

export const Form = Story({
  ...Default,
  render: () => html`
    <form>
      <p>Form should not submit if no value is selected</p>
      <ino-select required> ${optionsTemplate} </ino-select>
      <ino-button type="submit">Submit</ino-button>
    </form>
  `,
})