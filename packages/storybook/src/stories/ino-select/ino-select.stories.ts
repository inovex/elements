import { Components } from '@inovex.de/elements';
import { useEffect } from '@storybook/client-api';
import { Meta } from '@storybook/web-components';
import { html } from 'lit-html';
import { decorateStoryWithClass, showSnackbar } from '../utils';
import './ino-select.scss';
import { TemplateGenerator } from '../template-generator';

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

      window.addEventListener('load', () => console.log('load'))
      window.addEventListener('appload', () => console.log('appload'))
      window.addEventListener('DOMContentLoaded', () => console.log('DOMcontent'))


      customElements.whenDefined('ino-select').then(() => console.log('select'))
      customElements.whenDefined('ino-option').then(() => console.log('option'))


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

const optionsTemplate = html`
      <ino-option value="Option 1">Option 1</ino-option>
      <ino-option value="Option 2">Option 2</ino-option>
      <ino-option value="Option 3">Option 3</ino-option>
`;

const template = new TemplateGenerator<Components.InoSelect>(
  'ino-select',
  (args) => html`
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
`);


export const Playground = template.generatePlaygroundStory();
/*
export const Outlined = template.generateStoryForProp('outline', true);
export const Disabled = template.generateStoryForProp('disabled', true);
export const Error = template.generateStoryForProp('error', true);
export const ShowLabelHint = template.generateStoryForProp(
  'showLabelHint',
  true
);
export const HelperMessage = template.generateStoryForProp(
  'helper',
  'My Helper Message',
  { helperPersistent: true }
);

export const HelperMessageValidation = template.generateStoryForProp(
  'helperValidation',
  true,
  {
    value: null,
    required: true,
    helper: 'This message will be highlighted when no option has been selected',
    helperPersistent: true
  }
);



const templateWithIcon = new TemplateGenerator<Components.InoSelect>(
  'ino-select',
  args => html`
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
`);
export const WithIcon = templateWithIcon.generatePlaygroundStory();


const templateForm = new TemplateGenerator<Components.InoSelect>(
  'ino-select',
  args => html`
  <form>
    <p>Form should not submit if no value is selected</p>
    <ino-select required>
    ${optionsTemplate}
    </ino-select>
    <ino-button type="submit">Submit</ino-button>
  </form>
`);
export const Form = templateForm.generatePlaygroundStory();



 */
