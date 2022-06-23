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
    value: 'some-id',
  }
} as Meta<Components.InoOption>;

const template = new TemplateGenerator<Components.InoOption>(
  'ino-option',
  args => html`
    <div class="story-option">
      <ino-select label="My Select">
        <ino-option
          class="customizable-option"
          disabled="${args.disabled}"
          selected="${args.selected}"
          value="${args.value}"
        >
          Content
        </ino-option>
      </ino-select>
    </div>
  `
);

export const Playground = template.generatePlaygroundStory();
Playground.args = {
  disabled: false,
  selected: false,
}

export const DisabledOption = template.generateStoryForProp('disabled', true);
export const SelectedOption = template.generateStoryForProp('selected', true);
