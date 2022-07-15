import { Components } from '@inovex.de/elements';
import { Meta } from '@storybook/web-components';
import { html } from 'lit-html';
import { decorateStoryWithClass, showSnackbar } from '../utils';
import './ino-select.scss';
import { TemplateGenerator } from '../template-generator';
import { handleValueChange } from '../handler';

export default {
  title: 'Input/ino-select',
  component: 'ino-select',
  parameters: {
    actions: {
      handles: ['valueChange .customizable-select', 'submit .form'],
    },
  },
  decorators: [(story) => decorateStoryWithClass(story, 'story-select')],
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

const handleFormSubmission = (e) => {
  e.preventDefault();
  showSnackbar('Form submitted.');
};

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
      error="${args.error}"
      helper="${args.helper}"
      helper-persistent="${args.helperPersistent}"
      helper-validation="${args.helperValidation}"
      value="${args.value}"
      @valueChange="${handleValueChange}"
    >
      <ino-option value="Option 1">Option 1</ino-option>
      <ino-option value="Option 2">Option 2</ino-option>
      <ino-option value="Option 3">Option 3</ino-option>
    </ino-select>
  `
);
export const Playground = template.generatePlaygroundStory();
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
    helperPersistent: true,
  }
);

const templateWithIcon = new TemplateGenerator<Components.InoSelect>(
  'ino-select',
  () => html`
    <div style="height: 400px;">
      <ino-select
        label="Select with leading icon"
        @valueChange="${handleValueChange}"
      >
        <ino-icon slot="icon-leading" icon="user"></ino-icon>
        <ino-option value="Selected Option" selected>
          Selected Option
        </ino-option>
        ${optionsTemplate}
      </ino-select>
      <ino-select
        style="margin-top: 150px;"
        outline
        label="Select with leading icon"
        @valueChange="${handleValueChange}"
      >
        <ino-icon slot="icon-leading" icon="user"></ino-icon>
        <ino-option value="Selected Option" selected>
          Selected Option
        </ino-option>
        ${optionsTemplate}
      </ino-select>
    </div>
  `
);
export const WithIcon = templateWithIcon.generatePlaygroundStory();

const templateForm = new TemplateGenerator<Components.InoSelect>(
  'ino-select',
  () => html`
    <form @submit="${handleFormSubmission}">
      <p>Form should not submit if no value is selected</p>
      <ino-select required> ${optionsTemplate}</ino-select>
      <ino-button type="submit">Submit</ino-button>
    </form>
  `
);
export const Form = templateForm.generatePlaygroundStory();
