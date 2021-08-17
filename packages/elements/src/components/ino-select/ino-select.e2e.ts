import { E2EElement, E2EPage } from '@stencil/core/testing';
import { setupPageWithContent } from '../../util/e2etests-setup';

const INO_SELECT = `
  <ino-select>
    <ino-option value="1" id="opt1">1</ino-option>
  </ino-select>
`;
const INO_SELECT_SELECTOR = 'ino-select';
const INNER_DIV_SELECTOR = 'ino-select > div';

describe('InoSelect', () => {
  let page: E2EPage;
  let inoSelectEl: E2EElement;
  let mdcSelectEl: E2EElement;

  beforeEach(async () => {
    page = await setupPageWithContent(INO_SELECT);
    inoSelectEl = await page.find(INO_SELECT_SELECTOR);
    mdcSelectEl = await page.find(INNER_DIV_SELECTOR);
  });

  describe('Properties', () => {
    it('should render with the disabled property set to true', async () => {
      await inoSelectEl.setAttribute('disabled', true);
      await page.waitForChanges();
      expect(mdcSelectEl).toHaveClass('mdc-select--disabled');
    });

    it('should render with the required property set to true', async () => {
      await inoSelectEl.setAttribute('required', true);
      await page.waitForChanges();
      expect(mdcSelectEl).toHaveClass('mdc-select--required');
    });

    it('should render as an outlined element if inoOutlined is true', async () => {
      await inoSelectEl.setAttribute('outline', true);
      await page.waitForChanges();
      expect(mdcSelectEl).toHaveClass('mdc-select--outlined');
    });

    it('should render as a filled element if inoOutlined is false', async () => {
      expect(mdcSelectEl).not.toHaveClass('mdc-select--outlined');
      expect(mdcSelectEl).toHaveClass('mdc-select--filled');
    });
  });

  describe('Events', () => {
    it('should emit a valueChange event upon receiving a MDCSelect:change event', async () => {
      const valueChangeEvent = await page.spyOnEvent('valueChange');

      await inoSelectEl.triggerEvent('MDCSelect:change');
      await page.waitForChanges();

      expect(valueChangeEvent).toHaveReceivedEvent();
    });
  });
});
