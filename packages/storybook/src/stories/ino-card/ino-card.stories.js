import { boolean, select } from '@storybook/addon-knobs';

import componentReadme from '_local-elements/src/components/ino-card/readme.md';
import withStencilReadme from '_local-storybookcore/with-stencil-readme';

import './ino-card.scss';

function subscribeToComponentEvents() {
  // == event block
  const eventHandler = function(e) {
    const el = e.target;
    if (el === null) {
      return;
    }
    const card = el.closest('ino-card');
    if (card === null) {
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

export default {
  title: 'Structure/<ino-card>',

  decorators: [
    withStencilReadme(componentReadme),
    story => {
      subscribeToComponentEvents();
      return story();
    }
  ]
};

export const DefaultUsage = () => /*html*/ `
    <div class="story-card">

      <h4>Customizable card</h4>
      <ino-card class="customizable-card"
        ino-disable-elevation="${boolean('ino-disable-elevation', false)}"
        ino-selected="${boolean('ino-selected', false)}">
        ${sampleCard}
      </ino-card>

      <div class="flex-cards">
        ${flexCard}
        ${flexCard}
        ${flexCard}
      </div>
    </div>
  `;

const sampleCard = `
  <div slot="header" class="card-header">
      <ino-icon ino-icon="info" ino-clickable></ino-icon>
  </div>
  <div slot="content" class="card-content--vertical">
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
      <div slot="content" class="card-content--vertical">
          <h3>Primary</h3>
      </div>
      <div slot="footer" class="card-footer">
          <p>Subtitle</p>
      </div>
  </ino-card>
`;
