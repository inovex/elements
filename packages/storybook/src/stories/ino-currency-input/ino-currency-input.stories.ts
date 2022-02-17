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
      label="Currency Input"
      outline="true"
    >
    </ino-input>
  </ino-currency-input>
`;
Playground.args = {
  value: '10.50',
  currencyLocale: '',
};
Playground.argTypes = {
  currencyLocale: {
    control: 'select',
    options: ['', 'de-DE', 'en-US'],
  },
  value: {
    control: 'text'
  }
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
    <ino-input unit="€" label="German locale"></ino-input>
  </ino-currency-input>

  <ino-currency-input value="150215.99" currency-locale="en-US">
    <ino-input unit="€" label="English locale"></ino-input>
  </ino-currency-input>
`;
