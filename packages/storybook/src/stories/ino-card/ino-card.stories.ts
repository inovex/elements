import { Components } from '@inovex.de/elements';
import { useEffect } from '@storybook/client-api';
import { Meta, Story } from '@storybook/web-components';
import { html } from 'lit-html';
import { decorateStoryWithClass } from '../utils';

import './ino-card.scss';

export default {
  title: 'Structure/<ino-card>',
  component: 'ino-card',
  decorators: [
    (story) => decorateStoryWithClass(story, 'story-card'),
    (story) => {
      useEffect(() => {
        const handleClick = function (e) {
          const maybeCard: HTMLInoCardElement | undefined = e.target?.closest(
            'ino-card'
          );

          if (!maybeCard === null) return;

          maybeCard.selected = !maybeCard.selected;
        };

        document.addEventListener('click', handleClick);

        return () => {
          document.removeEventListener('click', handleClick);
        };
      });

      return story();
    },
  ],
} as Meta;

export const Playground: Story<Components.InoCard> = (args) => html`
  <ino-card
    class="customizable-card"
    disable-elevation="${args.disableElevation}"
    selected="${args.selected}"
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
`;

Playground.args = {
  disableElevation: false,
  selected: false,
};
