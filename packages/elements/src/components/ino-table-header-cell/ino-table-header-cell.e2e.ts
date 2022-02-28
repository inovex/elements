import { setupPageWithContent } from '../../util/e2etests-setup';
import { E2EElement, E2EPage } from '@stencil/core/testing';
import { SortDirection, SortDirectionChangeDetails } from '../../interface';
import { setPropertyOfEl } from '../../util/test-utils';

const columnId = 'my-id';

describe('ino-table', () => {
  let page: E2EPage;
  let headerCell: E2EElement;
  let sortBtn: E2EElement;

  beforeEach(async () => {
    page = await setupPageWithContent(`<ino-table>
      <tr slot="header-row">
        <ino-table-header-cell column-id="${columnId}" label="Simple Text field">
          <ino-input placeholder="Search for XY..." data-ino-focus>
            <ino-icon slot="icon-trailing" icon="close"></ino-icon>
          </ino-input>
        </ino-table-header-cell>
      </tr>
    </ino-table>`);

    headerCell = await page.find('ino-table-header-cell');
    sortBtn = await page.find('ino-icon-button');
  });

  function getDummySortDirectionDetails(
    sortDirection: SortDirection
  ): SortDirectionChangeDetails {
    return {
      columnId,
      sortDirection,
    };
  }

  it('should render with sort button', async () => {
    expect(sortBtn).toBeTruthy();
  });

  it(`should emit sort event with 'desc' as detail when clicking the sort button`, async () => {
    const sortDirectionChangeSpy = await page.spyOnEvent('sortDirectionChange');
    await sortBtn.click();
    expect(sortDirectionChangeSpy).toHaveReceivedEventDetail(
      getDummySortDirectionDetails('desc')
    );
  });

  it(`should emit sort event with 'asc' as detail when clicking the sort button`, async () => {
    headerCell.setProperty('sortDirection', 'desc');
    await page.waitForChanges();
    const sortDirectionChangeSpy = await page.spyOnEvent('sortDirectionChange');
    await sortBtn.click();
    expect(sortDirectionChangeSpy).toHaveReceivedEventDetail(
      getDummySortDirectionDetails('asc')
    );
  });

  it(`should emit sort event with 'desc' as detail when clicking the sort button`, async () => {
    headerCell.setProperty('sortStart', 'desc');
    const sortDirectionChangeSpy = await page.spyOnEvent('sortDirectionChange');
    await sortBtn.click();
    expect(sortDirectionChangeSpy).toHaveReceivedEventDetail(
      getDummySortDirectionDetails('desc')
    );
  });

  it(`should emit sort event with 'desc' as detail when clicking the sort button`, async () => {

    await setPropertyOfEl<HTMLInoTableHeaderCellElement>(
      page,
      'ino-table-header-cell',
      { sortStart: 'asc' }
    );

    const sortDirectionChangeSpy = await page.spyOnEvent('sortDirectionChange');
    await sortBtn.click();
    expect(sortDirectionChangeSpy).toHaveReceivedEventDetail(
      getDummySortDirectionDetails('asc')
    );
  });
});
