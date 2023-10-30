import { Components } from '@inovex.de/elements';
import { Meta } from '@storybook/web-components';
import { html } from 'lit-html';
import { TemplateGenerator } from '../template-generator';
import { decorateStoryWithClass } from '../utils';
import './ino-menu.scss';

export default {
  title: `ino-menu`,
  component: 'ino-menu',
  decorators: [story => decorateStoryWithClass(story, 'story-ino-menu')],
  args: {
    placement: 'auto',
  },
} as Meta<Components.InoMenu>;

const template = new TemplateGenerator<Components.InoMenu>(
  'ino-menu',
  args => html`
    <ino-card disable-elevation>
      <div class="row" slot="header">
        <p>Open Menu</p>
        <ino-icon-button icon="menu">
          <ino-menu placement="${args.placement}">
            <ino-list-item tabindex="0" text="Item 1"></ino-list-item>
            <ino-list-item tabindex="0" text="Item 2"></ino-list-item>
          </ino-menu>
        </ino-icon-button>
      </div>
    </ino-card>
  `
);

export const Playground = template.generatePlaygroundStory();
