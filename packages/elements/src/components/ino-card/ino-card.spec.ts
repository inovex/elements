import { newSpecPage, SpecPage } from '@stencil/core/testing';
import { Card } from './ino-card';

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
    const clickSpy = jest.fn();
    page.win.addEventListener('click', clickSpy);

    card.click();
    await page.waitForChanges();

    expect(clickSpy).toHaveBeenCalled();
  });
});
