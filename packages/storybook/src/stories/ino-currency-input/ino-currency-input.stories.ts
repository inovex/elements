import { useEffect } from '@storybook/client-api';
import { Components } from '@inovex.de/elements';
import { html } from 'lit-html';
import { TemplateGenerator } from '../template-generator';
import { decorateStoryWithClass } from '../utils';
import './ino-currency-input.scss';
import { Story } from '@storybook/web-components';

export default {
  title: `Input/ino-currency-input`,
  component: 'ino-currency-input',
  decorators: [
    story => decorateStoryWithClass(story, 'story-ino-currency-input'),
    story => {
      useEffect(() => {
        const eventHandler = e => e.target.setAttribute('value', e.detail);
        const inputs = document.querySelectorAll('ino-currency-input');
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
      handles: ['valueChange .customizable-input'],
    },
  },
  args: {
    value: '15.00',
    currencyLocale: '',
  },

};

const template = new TemplateGenerator<Components.InoCurrencyInput>(
  'ino-currency-input',
  args => html`
    <ino-currency-input
      value="${args.value}"
      currency-locale="${args.currencyLocale}"
    >
      <ino-input
        class="customizable-input"
        id="customizable-input"
        label="Default Input"
        outline="true"
      >
      </ino-input>
    </ino-currency-input>
  `
);

type InoCurrencyWithExtendedType = Components.InoCurrencyInput & {
  unit: '€' | '$';
  label: string,
}

const templateUnit = new TemplateGenerator<InoCurrencyWithExtendedType>(
  'ino-currency-input',
  args => html`
    <ino-currency-input
      value="${args.value}"
      currency-locale="${args.currencyLocale}"
    >
      <ino-input
        class="customizable-input"
        id="customizable-input"
        label="${args.label}"
        outline="true"
        unit="${args.unit}"
      >
      </ino-input>
    </ino-currency-input>
  `
);

export const Playground = template.generatePlaygroundStory();
Playground.args = {
  value: '10.50',
  currencyLocale: '',
};

Playground.argTypes = {
  currencyLocale: {
    control: 'select',
    options: ['de-DE', 'en-US'],
  },
  value: {
    control: 'text',
  }
}

/**
 * Default uses a comma (,) for currency number formatting and no unit
 */
export const Default = template.generatePlaygroundStory();

/**
 * Corresponding unit symbol is shown at the end of the input field
 */
export const Unit = templateUnit.generatePlaygroundStory();
Unit.args = {
  unit: '€',
  label: 'Euro Input'
}

/**
   * A supported locale for currency number formatting. If not given, it uses the global config.
   * See https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Global_Objects/Intl#locales_argument
   */
export const Locales = templateUnit.generatePlaygroundStory();
Locales.args = {
  unit: '$',
  label: 'EN Input',
  currencyLocale: 'en-EN'
}


