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
  args:{
    disabled: false,
    value: 'Content',
  }
} as Meta;

type InoOptionGroupExtended = Components.InoOptionGroup & {
  disabled: boolean,
  value: string,
};

const template = new TemplateGenerator<InoOptionGroupExtended>(
  'ino-option-group',
  args => html`
    <div class="story-option">
      <ino-select label="Customizable option">
        <ino-option
          class="customizable-option"
          disabled="${args.disabled}"
          value="${args.value}"
        >
          Content
        </ino-option>
        <ino-option
          class="customizable-option"
          disabled="${args.disabled}"
          value="${args.value}"
        >
          Content
        </ino-option>
      </ino-select>
    </div>
  `
);
export const Playground = template.generatePlaygroundStory();

const templateStates = new TemplateGenerator<Components.InoOptionGroup>(
  'ino-option-group',
  args => html`
    <div class="story-option">
      <ino-select label="Disabled option">
        <ino-option value="Content" disabled>Content</ino-option>
      </ino-select>

      <ino-select label="Selected option">
        <ino-option value="Content" selected>Content</ino-option>
      </ino-select>
    </div>
  `
);
export const States = templateStates.generatePlaygroundStory();
