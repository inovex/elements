import { Components } from '@inovex.de/elements';
import { useEffect } from '@storybook/client-api';
import { Meta } from '@storybook/web-components';
import { TemplateGenerator } from '../template-generator';
import { html } from 'lit-html';
import { cssColor, cssSize, decorateStoryWithClass } from '../utils';
import { CssProperties } from '../types';

import './ino-card.scss';

const CARD_CSS_PROPS: CssProperties = {
  backgroundColor: cssColor(
    '--ino-card-background-color',
    'Background color of the card.',
    '#fff',
  ),
  backgroundColorActive: cssColor(
    '--ino-card-background-color--active',
    'Background color of the card if active.',
    '#fff',
  ),
  backgroundColorFocus: cssColor(
    '--ino-card-background-color--focus',
    'Background color of the card on focus.',
    '#fff',
  ),
  backgroundColorHover: cssColor(
    '--ino-card-background-color--hover',
    'Background color of the card on hover.',
    '#fff',
  ),
  borderColor: cssColor(
    '--ino-card-border-color',
    'Border color of the card.',
    '#c1c1c1',
  ),
  borderThickness: cssSize(
    '--ino-card-border-thickness',
    'Thickness of the border.',
    1,
  ),
  checkmarkBackgroundColor: cssColor(
    '--ino-card-checkmark-background-color',
    'Background color of the check mark.',
    '#fff',
  ),
  checkmarkColor: cssColor(
    '--ino-card-checkmark-color',
    'Check mark color.',
    '#3d40f5',
  ),
};

export default {
  title: 'Structure/ino-card',
  component: 'ino-card',
  decorators: [
    (story) => decorateStoryWithClass(story, 'story-card'),
    (story) => {
      useEffect(() => {
        const handleClick = function (e) {
          const maybeCard: HTMLInoCardElement | undefined =
            e.target?.closest('ino-card');

          if (!maybeCard) return;

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
  `,
);

export const Playground = template.generatePlaygroundStory(CARD_CSS_PROPS);
export const DisabledElevation = template.generateStoryForProp(
  'disableElevation',
  true,
);
