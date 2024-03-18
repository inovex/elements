import { newSpecPage, SpecPage } from '@stencil/core/testing';
import { Select } from './ino-select';
import { InoOption } from '../ino-option/ino-option';
import { Label } from '../ino-label/ino-label';
import { listenForEvent } from '../../util/test-utils';

const INO_SELECT = `
  <ino-select>
    <ino-option value="HH">Hamburg</ino-option>
    <ino-option value="M">Munich</ino-option>
    <ino-option value="B">Berlin</ino-option>
  </ino-select>
`;

describe('InoSelect', () => {
  let page: SpecPage;
  let inoSelect: HTMLInoSelectElement;
  let option: HTMLLIElement;

  beforeEach(async () => {
    page = await newSpecPage({
      components: [Select, InoOption, Label],
      html: INO_SELECT,
    });
    inoSelect = page.body.querySelector('ino-select');
    option = inoSelect.querySelector('ino-option > li');
  });

  it('should emit a valueChange event with correct details', async () => {
    const { assertEventDetails } = listenForEvent(page, 'valueChange');

    option.click();
    await page.waitForChanges();

    assertEventDetails('HH');
  });

  it('should emit a valueChange event only one time', async () => {
    const { eventSpy } = listenForEvent(page, 'valueChange');

    option.click();
    option.click();
    await page.waitForChanges();

    expect(eventSpy).toHaveBeenCalledTimes(1);
  });
});
