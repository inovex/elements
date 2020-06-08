import { storiesOf } from '@storybook/html';

import componentReadme from '_local-elements/src/components/ino-carousel/readme.md';
import withStencilReadme from '_local-storybookcore/with-stencil-readme';


import './ino-carousel.scss';
import { withActions } from '@storybook/addon-actions';
import { boolean, number, text } from '@storybook/addon-knobs';
import addons from '@storybook/addons';
import CoreEvents from '@storybook/core-events';

function subscribeToComponentEvents() {
  // == event block
  const eventHandler = function(e) {
    const el = e.target;
    if (el.tagName.toLowerCase() !== 'ino-icon-button') {
      return;
    }
    const carousel = el.closest('ino-carousel');
    const parentDiv = el.closest('div');
    if(parentDiv.classList.contains('ino-carousel__left-arrow')) {
      carousel.value = mod(carousel.value - 1, 3);
    } else {
      carousel.value = mod(carousel.value + 1, 3);
    }
  };

  const mod = (a, b) => ((a % b) + b) % b;

  document.addEventListener('clickEl', eventHandler);
  // == event block

  // unsubscribe function will be called by Storybook
  return () => {
    document.removeEventListener('clickEl', eventHandler);
  };
}

storiesOf('Graphic|<ino-carousel>', module)
  .addDecorator(withStencilReadme(componentReadme))
  .addDecorator(withActions(
    'click .customizable-button',
  ))
  .addDecorator(story => {
    addons
      .getChannel()
      .emit(CoreEvents.REGISTER_SUBSCRIPTION, subscribeToComponentEvents);
    return story();
  })
  .add('Default usage', () => /* html */`
      <h3>Customizable carousel</h3>
      <div class="ino-carousel-example">
          <ino-carousel
            class="customizable-carousel"
            value="${text('value', '0', 'General')}"
            ino-autoplay="${boolean('ino-autoplay', false, 'General')}"
            ino-animated="${boolean('ino-animated', false, 'General')}"
            ino-hide-buttons="${boolean('ino-hide-buttons', false, 'General')}"
            ino-infinite="${boolean('ino-infinite', false, 'General')}"
            ino-intermission="${number('ino-intermission', 5000, undefined, 'General')}"
            ino-reverse="${boolean('ino-reverse', false, 'General')}"
          >
            <ino-carousel-slide src="images/lightning.jpg" value="0" ino-selected>
            </ino-carousel-slide>
            <ino-carousel-slide src="images/mountains.jpg" value="1">
            </ino-carousel-slide>
            <ino-carousel-slide src="images/nidaros.jpg" value="2">
            </ino-carousel-slide>
          </ino-carousel>
      </div>
  `);
