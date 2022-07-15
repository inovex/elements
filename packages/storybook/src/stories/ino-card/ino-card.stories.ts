import { Components } from '@inovex.de/elements';
import { Meta } from '@storybook/web-components';
import { TemplateGenerator } from '../template-generator';
import { html } from 'lit-html';
import { decorateStoryWithClass } from '../utils';

import './ino-card.scss';

export default {
  title: 'Structure/<ino-card>',
  component: 'ino-card',
  decorators: [(story) => decorateStoryWithClass(story, 'story-card')],
  args: {
    disableElevation: false,
    selected: false,
  },
} as Meta<Components.InoCard>;

const template = new TemplateGenerator<Components.InoCard>(
  'ino-card',
  (args) => html`
    <ino-card
      class="customizable-card"
      disable-elevation="${args.disableElevation}"
      selected="${args.selected}"
      @click="${clickHandler}"
    >
      <div slot="header" class="card-header">
        <ino-icon icon="info" clickable></ino-icon>
      </div>
      <div slot="content" class="card-content--vertical">
        <ino-img
          src="https://cdn-images-1.medium.com/max/1600/1*HP8l7LMMt7Sh5UoO1T-yLQ.png"
        ></ino-img>
      </div>
      <div slot="footer" class="sample-card-footer">
        <ino-segment-group>
          <ino-segment-button value="1">Read</ino-segment-button>
          <ino-segment-button value="2">Bookmark</ino-segment-button>
        </ino-segment-group>
      </div>
    </ino-card>
  `
);

export const Playground = template.generatePlaygroundStory();
export const DisabledElevation = template.generateStoryForProp(
  'disableElevation',
  true
);

function clickHandler(e: PointerEvent) {
  const inoCard = (e.target as HTMLElement).closest('ino-card');
  inoCard.selected = !inoCard.selected;
}
