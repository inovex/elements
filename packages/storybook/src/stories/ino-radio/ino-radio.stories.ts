import { Components } from '@inovex.de/elements';
import { useEffect } from '@storybook/client-api';
import { Meta, Story } from '@storybook/web-components';
import { html } from 'lit-html';
import { TemplateGenerator } from '../template-generator';
import { decorateStoryWithClass } from '../utils';
import './ino-radio.scss';

export default {
  title: 'Input/ino-radio',
  component: 'ino-radio',
  parameters: {
    actions: {
      handles: ['checkedChange ino-radio'],
    },
  },
  decorators: [
    story => decorateStoryWithClass(story, 'story-radio'),
    story => {
      useEffect(() => {
        const eventHandler = e => e.target.setAttribute('checked', e.detail);
        const radios = document.querySelectorAll('ino-radio');
        radios.forEach(r => r.addEventListener('checkedChange', eventHandler));
        return () =>
          radios.forEach(r =>
            r.removeEventListener('checkedChange', eventHandler)
          );
      });
      return story();
    },
  ],
  args: {
    checked: false,
    disabled: false,
    name: 'radio-custom',
    value: 'radio-1',
  },
} as Meta<Components.InoRadio>;

const template = new TemplateGenerator<Components.InoRadio>(
  'ino-radio',
  args => html`
    <ino-radio
      checked="${args.checked}"
      disabled="${args.disabled}"
      name="${args.name}"
      value="${args.value}"
    >
      Radio Button Label
    </ino-radio>
  `
);

export const Playground = template.generatePlaygroundStory();

/**
 * Default unchecked state of this element.
 */
export const Unchecked = template.generatePlaygroundStory()
export const Checked = template.generateStoryForProp('checked', true);
export const Disabled = template.generateStoryForProp('disabled', true);

/**
 * Checks and disables this element.
 */
export const CheckedAndDisabled = template.generatePlaygroundStory();

CheckedAndDisabled.args = {
  checked: true,
  disabled: true,
};
