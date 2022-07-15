import { Components } from '@inovex.de/elements';
import { html } from 'lit-html';
import { TemplateGenerator } from '../template-generator';
import { decorateStoryWithClass } from '../utils';
import './ino-currency-input.scss';
import { handleValueChange } from '../handler';

export default {
  title: `Input/ino-currency-input`,
  component: 'ino-currency-input',
  decorators: [
    (story) => decorateStoryWithClass(story, 'story-ino-currency-input'),
  ],
  parameters: {
    actions: {
      handles: ['valueChange .customizable-input'],
    },
  },
  args: {
    value: '15.00',
    currencyLocale: 'de-DE',
  },
};

const template = new TemplateGenerator<Components.InoCurrencyInput>(
  'ino-currency-input',
  args => html`
    <ino-currency-input
      value="${args.value}"
      currency-locale="${args.currencyLocale}"
      @valueChange="${handleValueChange}"
    >
      <ino-input
        class="customizable-input"
        id="customizable-input"
        label="Default Input"
        outline="true"
        unit="€"
      >
      </ino-input>
    </ino-currency-input>
  `
);

export const Playground = template.generatePlaygroundStory();

Playground.argTypes = {
  currencyLocale: {
    control: 'radio',
    options: ['de-DE', 'en-US'],
  },
  value: {
    control: 'number',
  }
}

/**
   * A supported locale for currency number formatting. If not given, it uses the global config.
   * See https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Global_Objects/Intl#locales_argument
   */
export const Locales = template.generatePlaygroundStory();
Locales.args = {
  currencyLocale: 'en-EN'
}


