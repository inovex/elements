import { useEffect } from '@storybook/client-api';
import { html } from 'lit-html';
import { defaultDecorator } from '../utils';
import './ino-input.scss';

export default {
  title: 'Input/ino-input',
  component: 'ino-input',
  decorators: [
    (story) => defaultDecorator(story, 'story-ino-input'),
    (story) => {
      useEffect(() => {
        const eventHandler = (e) => e.target.setAttribute('value', e.detail);
        const inputs = document.querySelectorAll('ino-input');
        inputs.forEach((i) => i.addEventListener('valueChange', eventHandler));
        return () =>
          inputs.forEach((i) =>
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
};

export const Playground = (args) => html`
  <ino-input
    class="customizable-input"
    id="customizable-input"
    autocomplete="${args.autcomplete}"
    autofocus="${args.autoFocus}"
    data-list="${args.dataList}"
    decimal-places="${args.decimalPlaces}"
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
    readonly="${args.readonly}"
    required="${args.required}"
    show-label-hint="${args.showLabelHint}"
    size=${args.size}
    step="${args.step}"
    thousands-separator="${args.thousandsSeparator}"
    type="${args.type}"
    unit="${args.unit}"
    value="${args.value}"
  >
  </ino-input>
`;
Playground.args = {
  autocomplete: false,
  autoFocus: false,
  dataList: '',
  decimalPlaces: '',
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
  readonly: false,
  required: false,
  showLabelHint: false,
  size: '',
  step: 5,
  thousandsSeparator: false,
  type: 'text',
  unit: '',
  value: '',
};
Playground.argTypes = {
  type: {
    control: {
      type: 'select',
    },
    options: ['text', 'number', 'password', 'email'],
  },
};

export const Types = () => html`
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
`;

export const States = () => html`
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
`;

export const Labels = () => html`
  <ino-input label="Floating label"></ino-input>
  <ino-input label="Floating label" value="With value"></ino-input>

  <ino-input label="Outlined floating label" outline></ino-input>
  <ino-input
    label="Outlined floating label"
    value="With value"
    outline
  ></ino-input>
`;

export const HelperTexts = () => html`
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
`;

export const Outlined = () => html`
  <ino-input placeholder="Outlined" outline></ino-input>
`;

export const Icons = () => html`
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
 </div>
`;

export const DataList = () => html`
  <ino-input label="Datalist" data-list="languages">
    <datalist id="languages">
      <option>HTML</option>
      <option>Java</option>
      <option>Perl</option>
      <option>PHP</option>
      <option>Ruby on Rails</option>
    </datalist>
  </ino-input>
`;

export const NumberFormats = () => html`
  <ino-input decimal-places="2" placeholder="With 2 decimal places"></ino-input>
  <ino-input
    thousands-separator
    placeholder="With thousands separator"
  ></ino-input>
`;

export const Metadata = () => html`
  <ino-input
    value="2,00"
    decimal-places="2"
    thousands-separator
    unit="€"
    label="Euro Input"
  ></ino-input>
  <ino-input value="2" type="number" unit="h" label="Hours input"></ino-input>
`;
