import { storiesOf } from '@storybook/html';

import { number, boolean, select, text } from '@storybook/addon-knobs';

import withStencilReadme from '_local-storybookcore/with-stencil-readme';

import componentReadme from '_local-elements/src/components/ino-img/readme.md';
import './ino-img.scss';



storiesOf('<ino-img>', module)
  .addDecorator(withStencilReadme(componentReadme))
  .add('Default usage', () => /*html*/`
    <div class="story-img">
      <div>
        <h4>Customizable Image</h4>
        <ino-img
          class="customizable-img"
          alt="${text('alt', 'Alternertive Text')}"
          decoding="${select(
            'decoding',
            ['async', 'auto', 'sync'],
            'async'
          )}"
          height="${number('height', 100)}"
          size="${text('size', '')}"
          src="${text('src', 'https://cdn-images-1.medium.com/max/1600/1*HP8l7LMMt7Sh5UoO1T-yLQ.png')}"
          srcset="${text('srcset', '')}"
          width="${number('width', 100)}"
          usemap="${text('usemap', '')}"
          ino-ratio-width="${number('ino-ratio-width', 1)}"
          ino-ratio-height="${number('ino-ratio-height', 1)}"
          ino-rounded="${boolean('ino-rounded', false)}"
        >
        </ino-img>
      </div>
    </div>
  `);
