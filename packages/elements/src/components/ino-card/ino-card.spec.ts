import { newSpecPage, SpecPage } from '@stencil/core/testing';
import { Card } from './ino-card';
import { listenForEvent } from '../../util/test-utils';

const INO_CARD = `<ino-card></ino-card>`;
const CARD_SELECTOR = 'ino-card';

describe('InoCard', () => {
  let page: SpecPage;
  let card: HTMLInoCardElement;

  beforeEach(async () => {
    page = await newSpecPage({
      components: [Card],
      html: INO_CARD,
    });
    card = page.body.querySelector(CARD_SELECTOR);
  });

  it('should emit a clickEl event upon interacting with the card', async () => {
    const { eventSpy } = listenForEvent(page, 'click');

    card.click();
    await page.waitForChanges();

    expect(eventSpy).toHaveBeenCalled();
  });
});
