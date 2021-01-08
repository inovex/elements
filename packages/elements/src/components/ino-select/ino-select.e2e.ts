import { setupPageWithContent } from '../../util/e2etests-setup';

const INO_SELECT = `
  <ino-select>
    <ino-option value="1" id="opt1">1</ino-option>
  </ino-select>
`;
const INO_SELECT_SELECTOR = 'ino-select';
const INNER_DIV_SELECTOR = 'ino-select > div';

describe('InoSelect', () => {
  describe('Properties', () => {
    it('should render with the disabled property set to true', async () => {
      const page = await setupPageWithContent(INO_SELECT);
      const inoSelect = await page.find(INO_SELECT_SELECTOR);
      await inoSelect.setAttribute('disabled', true);
      await page.waitForChanges();

      const innerDiv = await page.find(INNER_DIV_SELECTOR);
      expect(innerDiv).toHaveClass('mdc-select--disabled');
    });

    it('should render with the required property set to true', async () => {
      const page = await setupPageWithContent(INO_SELECT);
      const inoSelect = await page.find(INO_SELECT_SELECTOR);
      await inoSelect.setAttribute('required', true);
      await page.waitForChanges();

      const innerDiv = await page.find(INNER_DIV_SELECTOR);
      expect(innerDiv).toHaveClass('mdc-select--required');
    });

    it('should render as an outlined element if inoOutlined is true', async () => {
      const page = await setupPageWithContent(INO_SELECT);
      const inoSelect = await page.find(INO_SELECT_SELECTOR);
      await inoSelect.setAttribute('ino-outline', true);
      await page.waitForChanges();

      const innerDiv = await page.find(INNER_DIV_SELECTOR);
      expect(innerDiv).toHaveClass('mdc-select--outlined');
    });

    it('should render as a filled element if inoOutlined is false', async () => {
      const page = await setupPageWithContent(INO_SELECT);

      const innerDiv = await page.find(INNER_DIV_SELECTOR);
      expect(innerDiv).not.toHaveClass('mdc-select--outlined');
      expect(innerDiv).toHaveClass('mdc-select--filled');
    });
  });

  describe('Events', () => {
    it('should emit a valueChange event upon receiving a MDCSelect:change event', async () => {
      const page = await setupPageWithContent(INO_SELECT);
      const inoSelect = await page.find(INO_SELECT_SELECTOR);
      const valueChangeEvent = await page.spyOnEvent('valueChange');

      await inoSelect.triggerEvent('MDCSelect:change');
      await page.waitForChanges();

      expect(valueChangeEvent).toHaveReceivedEvent();
    });
  });
});
