import { useEffect } from '@storybook/client-api';
import { Components } from '@inovex.de/elements';
import { html } from 'lit-html';
import { decorateStoryWithClass } from '../utils';
import './ino-currency-input.scss';
import { Story } from '@storybook/web-components';

export default {
  title: `Input/ino-currency-input`,
  component: 'ino-currency-input',
  decorators: [
    (story) => decorateStoryWithClass(story, 'story-ino-currency-input'),
    (story) => {
      useEffect(() => {
        const eventHandler = (e) => e.target.setAttribute('value', e.detail);
        const inputs = document.querySelectorAll('ino-currency-input');
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
      handles: ['valueChange .customizable-input'],
    },
  },
};

export const Playground: Story<Components.InoCurrencyInput> = (args) => html`
  <ino-currency-input
    value="${args.value}"
    currency-locale="${args.currencyLocale}"
  >
    <ino-input
      class="customizable-input"
      id="customizable-input"
      autofocus="${args.autoFocus}"
      disabled="${args.disabled}"
      error="${args.error}"
      helper="${args.helper}"
      helper-persistent="${args.helperPersistent}"
      helper-validation="${args.helperValidation}"
      label="${args.label}"
      min="${args.min}"
      max="${args.max}"
      name="${args.name}"
      outline="${args.outline}"
      placeholder="${args.placeholder}"
      readonly="${args.readonly}"
      required="${args.required}"
      show-label-hint="${args.showLabelHint}"
      type="text"
      unit="${args.unit}"
    >
    </ino-input>
  </ino-currency-input>
`;
Playground.args = {
  autocomplete: false,
  autoFocus: false,
  disabled: false,
  error: false,
  helper: 'Helper message',
  helperPersistent: false,
  helperValidation: false,
  label: 'Currency Input',
  min: '',
  max: '',
  outlined: true,
  name: '',
  placeholder: '',
  readonly: false,
  required: false,
  showLabelHint: false,
  unit: '',
  value: '10.50',
  currencyLocale: '',
};
Playground.argTypes = {
  currencyLocale: {
    control: 'select',
    options: ['', 'de-DE', 'en-US'],
  },
};

export const DefaultValue = () => html`
  <ino-currency-input value="15.00">
    <ino-input type="text" label="Currency input"></ino-input>
  </ino-currency-input>
`;

export const Unit = () => html`
  <ino-currency-input value="15.00">
    <ino-input unit="€" label="Euro Input"></ino-input>
  </ino-currency-input>
`;

export const Locales = () => html`
  <ino-currency-input value="150215.99" currency-locale="de-DE">
    <ino-input autofocus unit="€" label="German locale"></ino-input>
  </ino-currency-input>

  <ino-currency-input value="150215.99" currency-locale="en-US">
    <ino-input unit="€" label="English locale"></ino-input>
  </ino-currency-input>
`;
