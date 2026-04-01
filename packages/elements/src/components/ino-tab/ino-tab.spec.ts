import { newSpecPage, SpecPage } from '@stencil/core/testing';
import { listenForEvent } from '../../util/test-utils';
import { Tab } from './ino-tab';

describe('ino-tab', () => {
  let page: SpecPage;
  let inoTab: HTMLInoTabElement;
  let button: HTMLButtonElement;

  beforeEach(async () => {
    page = await newSpecPage({
      components: [Tab],
      html: `<ino-tab></ino-tab>`,
    });
    inoTab = page.body.querySelector('ino-tab');
    button = inoTab.querySelector('button');
  });

  describe('Properties', () => {
    it('should render without mdc-tab--stacked class by default', () => {
      expect(button).not.toHaveClass('mdc-tab--stacked');
    });

    it('should add mdc-tab--stacked class when stacked is set to true', async () => {
      inoTab.setAttribute('stacked', 'true');
      await page.waitForChanges();
      expect(button).toHaveClass('mdc-tab--stacked');
    });
  });

  describe('Events', () => {
    it('should emit an interacted event upon receiving a MDCTab:interacted event', async () => {
      const { eventSpy } = listenForEvent(page, 'interacted');

      inoTab.dispatchEvent(new CustomEvent('MDCTab:interacted', { bubbles: true }));
      await page.waitForChanges();

      expect(eventSpy).toHaveBeenCalled();
    });

    it('should stop propagation of the MDCTab:interacted event', async () => {
      const mdcEventSpy = jest.fn();
      page.body.addEventListener('MDCTab:interacted', mdcEventSpy);

      inoTab.dispatchEvent(new CustomEvent('MDCTab:interacted', { bubbles: true }));
      await page.waitForChanges();

      expect(mdcEventSpy).not.toHaveBeenCalled();
    });
  });
});
