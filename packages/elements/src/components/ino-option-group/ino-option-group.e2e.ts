import { setupPageWithContent } from '../../util/e2etests-setup';

const INO_OPTION_GROUP = '<ino-option-group ino-label="My Label"><ino-option value="My Option">My Option</ino-option></ino-option-group>';

describe('ino-option-group', () => {

  it('should render with the first item being the header', async () => {
    const page = await setupPageWithContent(INO_OPTION_GROUP);

    const optionGroup = await page.find('ino-option-group');
    const header = await optionGroup.find('#ino-opt-group-header');

    expect(header).toBeDefined();

    const listItem = await header.find('.mdc-list-item');

    expect(listItem).toHaveClass('mdc-list-item--disabled');
  });

});
