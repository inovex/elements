import { newSpecPage, SpecPage } from '@stencil/core/testing';
import { listenForEvent } from '../../util/test-utils';
import { ListItem } from './ino-list-item';

describe('InoListItem', () => {
  let page: SpecPage;
  let inoListItem: HTMLInoListElement;
  let liElement: HTMLLIElement;

  beforeEach(async () => {
    page = await newSpecPage({
      components: [ListItem],
      html: `<ino-list-item/>`,
    });
    inoListItem = page.body.querySelector('ino-list-item');
    liElement = inoListItem.querySelector('li');
  });

  it('should disable the list-item if disabled property is set to true', async () => {
    expect(liElement).not.toHaveClass('mdc-deprecated-list-item--disabled');
    inoListItem.setAttribute('disabled', 'true');
    await page.waitForChanges();
    expect(liElement).toHaveClass('mdc-deprecated-list-item--disabled');
  });

  it('should render with the selected property set to true', async () => {
    expect(liElement).not.toHaveClass('mdc-deprecated-list-item--selected');
    inoListItem.setAttribute('selected', 'true');
    await page.waitForChanges();
    expect(liElement).toHaveClass('mdc-deprecated-list-item--selected');
  });

  it('should render with the activated property set to true', async () => {
    expect(liElement).not.toHaveClass('mdc-deprecated-list-item--activated');
    inoListItem.setAttribute('activated', 'true');
    await page.waitForChanges();
    expect(liElement).toHaveClass('mdc-deprecated-list-item--activated');
  });

  it('should emit a clickEl event upon clicking a list item', async () => {
    const { eventSpy } = listenForEvent(page, 'clickEl');
    inoListItem.click();
    await page.waitForChanges();
    expect(eventSpy).toHaveBeenCalled();
  });

  it('should not emit a clickEl event upon clicking a list item if inoDisabled is true', async () => {
    const { eventSpy } = listenForEvent(page, 'clickEl');

    inoListItem.setAttribute('disabled', 'true');
    await page.waitForChanges();
    inoListItem.click();
    await page.waitForChanges();

    expect(eventSpy).not.toHaveBeenCalled();
  });
});
