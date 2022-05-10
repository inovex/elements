import { Meta } from '@storybook/web-components';
import { Components } from '@inovex.de/elements';
import { TemplateGenerator } from '../template-generator';
import { html } from 'lit-html';
import { decorateStoryWithClass } from '../utils';
import './ino-option.scss';

export default {
  title: 'Input/ino-option',
  component: 'ino-option',
  decorators: [story => decorateStoryWithClass(story, 'story-ino-option')],
  args: {
    disabled: false,
    selected: false,
    value: 'Content',
    secoundOption: false,
  },
} as Meta<Components.InoOption>;

type InoOptionExtended = Components.InoOption & {
  label: string;
  secoundOption: boolean;
};

const template = new TemplateGenerator<InoOptionExtended>(
  'ino-option',
  args => html`
    <div class="story-option">
      <ino-select label="${args.label}">
        <ino-option
          class="customizable-option"
          disabled="${args.disabled}"
          selected="${args.selected}"
          value="${args.value}"
        >
          Content
        </ino-option>
        ${args.secoundOption? 
          html `
            <ino-option
              class="customizable-option"
              disabled="${args.disabled}"
              value="${args.value}"
              selected="${args.selected}"
            >
              Content
            </ino-option>
        ` : ''}
      </ino-select>
    </div>
  `
);

export const Playground = template.generatePlaygroundStory();
export const DisabledOption = template.generateStoryForProp('disabled', true);
export const SelectedOption = template.generateStoryForProp('selected', true);

Playground.args = {
  label: 'Customizable option',
  secoundOption: true,
};

DisabledOption.args = {
  disabled: true,
  label: 'Disabled option',
};

SelectedOption.args = {
  selected: true,
  label: 'Selected option',
};