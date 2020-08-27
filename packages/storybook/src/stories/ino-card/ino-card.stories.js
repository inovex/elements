import { boolean, select, text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/html';

import componentReadme from '_local-elements/src/components/ino-card/readme.md';
import withStencilReadme from '_local-storybookcore/with-stencil-readme';

import './ino-card.scss';
import addons from '@storybook/addons';
import CoreEvents from '@storybook/core-events';

function subscribeToComponentEvents() {
  // == event block
  const eventHandler = function(e) {
    const el = e.target;
    if (el === null) {
      return;
    }
    const card = el.closest('ino-card');
    if(card === null) {
      return;
    }
    card.inoSelected = !card.inoSelected;
  };

  document.addEventListener('click', eventHandler);
  // == event block

  // unsubscribe function will be called by Storybook
  return () => {
    document.removeEventListener('click', eventHandler);
  };
}

storiesOf('Structure/<ino-card>', module)
  .addDecorator(withStencilReadme(componentReadme))
  .addDecorator(story => {
    addons
      .getChannel()
      .emit(CoreEvents.REGISTER_SUBSCRIPTION, subscribeToComponentEvents);
    return story();
  })
  .add('Default usage', () => /*html*/`
    <div class="story-card">

      <h4>Customizable card</h4>
      <ino-card class="customizable-card"
        ino-selected="${boolean('ino-selected', false)}"
        ino-color-scheme="${select(
          'ino-color-scheme',
          ['', 'primary', 'secondary', 'dark'],
          ''
        )}">
        ${sampleCard}
      </ino-card>

      <div class="flex-cards">
        ${flexCard}
        ${flexCard}
        ${flexCard}
      </div>
    </div>
  `);

const sampleCard = `
  <div slot="header" class="card-header">
      <ino-icon ino-icon="info" ino-clickable></ino-icon>
  </div>
  <div slot="content" class="card-content">
      <ino-img src="https://cdn-images-1.medium.com/max/1600/1*HP8l7LMMt7Sh5UoO1T-yLQ.png"></ino-img>
  </div>
  <div slot="footer" class="sample-card-footer">
    <ino-segment-group>
        <ino-segment-button value="1">Read</ino-segment-button>
        <ino-segment-button value="2">Bookmark</ino-segment-button>
    </ino-segment-group>
  </div>
`;

const flexCard = `
  <ino-card>
      <div slot="header" class="card-header">
          <ino-icon ino-icon="info" ino-clickable></ino-icon>
      </div>
      <div slot="content" class="card-content">
          <h3>Primary</h3>
      </div>
      <div slot="footer" class="card-footer">
          <p>Subtitle</p>
      </div>
  </ino-card>
`;
