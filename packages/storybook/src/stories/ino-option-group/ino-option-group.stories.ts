import { Meta } from '@storybook/web-components';
import { html } from 'lit-html';
import { decorateStoryWithClass } from '../utils';
import './ino-option-group.scss';
import { TemplateGenerator } from '../template-generator';
import { Components } from '@inovex.de/elements';

export default {
  title: 'Input/ino-option-group',
  component: 'ino-option-group',
  decorators: [(story) => decorateStoryWithClass(story, 'story-option-group')],
  args: {
    label: 'My group Label'
  }
} as Meta<Components.InoOptionGroup>;

const template = new TemplateGenerator<Components.InoOptionGroup>(
  'ino-option-group',
  args => html`
    <div class="story-option-group-customizable">
      <ino-select label="Select with Group">
        <ino-option-group label="${args.label}">
          <ino-option value="Option 1">Option 1</ino-option>
          <ino-option value="Option 2">Option 2</ino-option>
          <ino-option value="Option 3">Option 3</ino-option>
        </ino-option-group>
        <ino-option-group label="${args.label}">
          <ino-option value="Option 4">Option 4</ino-option>
          <ino-option value="Option 5">Option 5</ino-option>
          <ino-option value="Option 6">Option 6</ino-option>
        </ino-option-group>
      </ino-select>
    </div>
  `
);

export const Playground = template.generatePlaygroundStory();
