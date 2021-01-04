import { setupPageWithContent } from '../../util/e2etests-setup';

const INO_OPTION_SELECTED = '<ino-option selected></ino-option>';
const INO_OPTION_DISABLED = '<ino-option disabled></ino-option>';

describe('ino-option', () => {

  describe('Properties', () => {
    it('should render selected', async () => {
      const page = await setupPageWithContent(INO_OPTION_SELECTED);

      const option = await page.find('ino-option');
      const liElement = await option.find('li');
      const isSelected = await option.getProperty('selected');

      expect(option).toBeDefined();
      expect(liElement).toHaveClass('mdc-list-item--selected');
      expect(isSelected).toBeTruthy();
    });

    it('should render disabled', async () => {
      const page = await setupPageWithContent(INO_OPTION_DISABLED);

      const option = await page.find('ino-option');
      const liElement = await option.find('li');
      const isDisabled = await option.getProperty('disabled');

      expect(option).toBeDefined();
      expect(liElement).toHaveClass('mdc-list-item--disabled');
      expect(isDisabled).toBeTruthy();
    });
  });

});
