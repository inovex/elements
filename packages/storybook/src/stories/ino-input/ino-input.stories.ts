import { useEffect } from '@storybook/client-api';
import { Meta } from '@storybook/web-components';
import { html } from 'lit-html';
import { TemplateGenerator } from '../template-generator';
import { Components } from '@inovex.de/elements';
import { decorateStoryWithClass } from '../utils';
import './ino-input.scss';

export default {
  title: 'Input/ino-input',
  component: 'ino-input',
  decorators: [
    story => decorateStoryWithClass(story, 'story-ino-input'),
    story => {
      useEffect(() => {
        const eventHandler = e => e.target.setAttribute('value', e.detail);
        const inputs = document.querySelectorAll('ino-input');
        inputs.forEach(i => i.addEventListener('valueChange', eventHandler));
        return () =>
          inputs.forEach(i =>
            i.removeEventListener('valueChange', eventHandler)
          );
      });
      return story();
    },
  ],
  parameters: {
    actions: {
      handles: [
        'iconClick .customizable-input',
        'valueChange .customizable-input',
      ],
    },
  },
  args: {
    autocomplete: 'off',
    autoFocus: false,
    dataList: '',
    disabled: false,
    error: false,
    helper: 'Helper message',
    helperCharacterCounter: false,
    helperPersistent: false,
    helperValidation: false,
    label: 'Input label',
    min: '',
    max: '',
    maxlength: 100,
    outline: false,
    name: '',
    pattern: '*',
    placeholder: '',
    required: false,
    showLabelHint: false,
    size: 0,
    step: 5,
    type: 'text',
    unit: '',
    value: '',
  }
} as Meta<Components.InoInput>;

const template = new TemplateGenerator<Components.InoInput>(
  'ino-input',
  args => html`
  <ino-input
    class="customizable-input"
    id="customizable-input"
    autocomplete="${args.autocomplete}"
    autofocus="${args.autoFocus}"
    data-list="${args.dataList}"
    disabled="${args.disabled}"
    error="${args.error}"
    helper="${args.helper}"
    helper-character-counter="${args.helperCharacterCounter}"
    helper-persistent="${args.helperPersistent}"
    helper-validation="${args.helperValidation}"
    label="${args.label}"
    min="${args.min}"
    max="${args.max}"
    maxlength="${args.maxlength}"
    name="${args.name}"
    outline="${args.outline}"
    pattern="${args.pattern}"
    placeholder="${args.placeholder}"
    required="${args.required}"
    show-label-hint="${args.showLabelHint}"
    size=${args.size}
    step="${args.step}"
    type="${args.type}"
    unit="${args.unit}"
    value="${args.value}"
  >
  </ino-input>
`);
export const Playground = template.generatePlaygroundStory();

Playground.argTypes = {
  type: {
    control: {
      type: 'select',
    },
    options: ['text', 'number', 'password', 'email'],
  },
};

const templateType = new TemplateGenerator<Components.InoInput>(
  'ino-input',
  args => html`
  <ino-input placeholder="type = text"></ino-input>
  <ino-input placeholder="type = email" type="email"></ino-input>
  <ino-input type="number" placeholder="type = number"></ino-input>
  <ino-input
    type="number"
    placeholder="type = number with steps=5"
    step="5"
  ></ino-input>
  <ino-input
    type="number"
    placeholder="type = number with step='any' (decimal numbers)"
    step="any"
  ></ino-input>
  <ino-input type="password" placeholder="type = password"></ino-input>
`);
/**
 * Changes the type of the ino-input element.
 * 
 * - `type`: The type of this element (default = text).
 * - `step`: The step value of this element. Use `any` for decimal numbers
 */
export const Types = templateType.generatePlaygroundStory();


const templateStates = new TemplateGenerator<Components.InoInput>(
  'ino-input',
  args => html`
  <ino-input placeholder="Disabled" disabled></ino-input>
  <ino-input label="Optional" show-label-hint></ino-input>
  <ino-input label="Required" required show-label-hint></ino-input>

  <ino-input placeholder="Outline disabled" outline disabled></ino-input>
  <ino-input label="Outline optional" outline show-label-hint></ino-input>
  <ino-input
    label="Outline required"
    outline
    show-label-hint
    required
  ></ino-input>
`);
/**
 * Change the state of the ino-input element by adding this properties in various combinations:
 * 
 * - `disabled`: Disables this element.
 * - `show-label-hint`: If true, an *optional* message is displayed if not required, otherwise a * marker is displayed if required
 * - `required`: Marks this element as required.
 * - `outline`: Styles the input field as outlined element.
 */
export const States = templateStates.generatePlaygroundStory();


const templateLabels = new TemplateGenerator<Components.InoInput>(
  'ino-input',
  args => html`
  <ino-input label="Floating label"></ino-input>
  <ino-input label="Floating label" value="With value"></ino-input>

  <ino-input label="Outlined floating label" outline></ino-input>
  <ino-input
    label="Outlined floating label"
    value="With value"
    outline
  ></ino-input>
`);
/**
 * Add labels to the ino-input element by setting this properties:
 * 
 * - `label`: The optional floating label of this input field.
 * - `value`: The value of this element. (**unmanaged**)
 * - `outline`: Styles the input field as outlined element.
 */
export const Labels = templateLabels.generatePlaygroundStory();


const templateHelperTexts = new TemplateGenerator<Components.InoInput>(
  'ino-input',
  args => html`
  <ino-input
    placeholder="Helper text on focus (default)"
    helper="Helper text"
  ></ino-input>
  <ino-input
    placeholder="Persistent helper text"
    helper="Persistent helper text"
    helper-persistent
  ></ino-input>
  <ino-input
    required
    placeholder="Validation message for required input"
    helper="This field is required"
    helper-validation
  ></ino-input>
  <ino-input
    value="Length of 12"
    helper-character-counter
    maxlength="25"
  ></ino-input>
`);
/**
 * Add helper text to the ino-input element by adding this properties:
 * 
 * - `helper`: The optional helper text.
 * - `helper-persistent`: Displays the helper permanently.
 * - `helper-validation`: Styles the helper text as a validation message.
 * - `helper-character-counter`: Displays the number of characters. The maxlength-property must be set. This helper text will be displayed persistently.
 */
export const HelperTexts = templateHelperTexts.generatePlaygroundStory();


const templateIcons = new TemplateGenerator<Components.InoInput>(
  'ino-input',
  args => html`
  <ino-input icon-leading label="Leading icon">
    <ino-icon slot="icon-leading" icon="search"></ino-icon>
  </ino-input>
  <ino-input icon-trailing label="Trailing icon">
    <ino-icon slot="icon-trailing" icon="search"></ino-icon>
  </ino-input>
  <ino-input icon-leading icon-trailing label="Leading and Trailing icon">
    <ino-icon slot="icon-leading" icon="search"></ino-icon>
    <ino-icon slot="icon-trailing" icon="add"></ino-icon>
  </ino-input>
  <ino-input icon-trailing label="Clickable Icon">
    <ino-icon clickable slot="icon-trailing" icon="search"></ino-icon>
  </ino-input>
`);
/**
 * Add icons to the ino-input element by adding a `slot` and a `icon`.
 * 
 * - `slot="icon-leading"`: For the icon to be prepended
 * - `slot="icon-trailing"`: For the icon to be appended
 * - `icon="search"`: For a magnifying glass symbole
 * - `icon="add"`: For a plus sign symbole
 * - `clickable`: Marks the icon as clickable, curser changes to pointer on hover
 */
export const Icons = templateIcons.generatePlaygroundStory();


const templateDataList = new TemplateGenerator<Components.InoInput>(
  'ino-input',
  args => html`
  <ino-input label="Datalist" data-list="languages">
    <datalist id="languages">
      <option>HTML</option>
      <option>Java</option>
      <option>Perl</option>
      <option>PHP</option>
      <option>Ruby on Rails</option>
    </datalist>
  </ino-input>
`);
/**
 * Add a datalist to a ino-input-element by setting `data-list` to the ID of the `<datalist>` child-element
 */
export const DataList = templateDataList.generatePlaygroundStory();


const templateNumberFormats = new TemplateGenerator<Components.InoInput>(
  'ino-input',
  args => html`
  <ino-input
    type="number"
    decimal-places="2"
    placeholder="With 2 decimal places"
  ></ino-input>
  <ino-input
    type="number"
    step="1"
    thousands-separator
    placeholder="With thousands separator"
  ></ino-input>
`);
/**
 * Add number format by setting one of this properties
 * 
 * - `decimal-places`: number of decimal places allowed
 * - `thousands-separator`: add thousands separators
 */
export const NumberFormats = templateNumberFormats.generatePlaygroundStory();


const templateMetadata = new TemplateGenerator<Components.InoInput>(
  'ino-input',
  args => html`
  <ino-input value="2" type="number" unit="h" label="Hours input"></ino-input>
`);
export const Metadata = templateMetadata.generateStoryForProp('unit', 'h')
