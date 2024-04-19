import { Meta } from '@storybook/web-components';
import { Components } from '@inovex.de/elements';
import { html } from 'lit-html';
import { useEffect } from '@storybook/preview-api';
import Story from '../StoryWrapper';

const InoCurrencyInputMeta = {
  title: 'Input/ino-currency-input',
  component: 'ino-currency-input',
  decorators: [
    story => {
      useEffect(() => {
        const eventHandler = e => e.target.setAttribute('value', e.detail);
        const inputs = document.querySelectorAll('ino-currency-input');
        inputs.forEach(i => i.addEventListener('valueChange', eventHandler));
        return () => inputs.forEach(i => i.removeEventListener('valueChange', eventHandler));
      });
      return story();
    },
  ],
  parameters: {
    actions: {
      handles: ['valueChange .customizable-input'],
    },
    docs: {
      toc: false,
    },
  },
  render: args => html`
    <ino-currency-input value="${args.value}" currency-locale="${args.currencyLocale}">
      <ino-input class="customizable-input" id="customizable-input" label="Default Input" outline="true" unit="€">
      </ino-input>
    </ino-currency-input>
  `,
  args: {
    value: '15.00',
    currencyLocale: 'de-DE',
  },
  argTypes: {
    currencyLocale: {
      control: 'radio',
      options: ['de-DE', 'en-US'],
    },
    value: {
      control: 'number',
    },
  },
} as Meta<Components.InoCurrencyInput>;

export default InoCurrencyInputMeta;

export const Default = Story({
  ...InoCurrencyInputMeta,
});
/**
 * A supported locale for currency number formatting. If not given, it uses the global config.
 * See https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Global_Objects/Intl#locales_argument
 */
export const Locales = Story({
  ...Default,
  args: {
    currencyLocale: 'en-EN',
  },
});
