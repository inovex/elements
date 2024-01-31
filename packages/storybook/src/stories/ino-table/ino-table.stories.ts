import { Meta } from '@storybook/web-components';
import { Components } from '@inovex.de/elements';
import { html } from 'lit';
import Story from '../StoryWrapper';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import { useEffect } from '@storybook/preview-api';
import './ino-table.scss';

const tableContent = html`<tr slot="header-row"></tr>
  <ino-table-header-cell
    column-id="id"
    sort-start="asc"
    label="ID"
  ></ino-table-header-cell>
  <ino-table-header-cell
    column-id="name"
    sort-start="asc"
    label="Name"
  ></ino-table-header-cell>
  <ino-table-header-cell
    column-id="release"
    label="Release Date"
  ></ino-table-header-cell>
  <ino-table-header-cell
    column-id="box-office"
    label="Box Office"
  ></ino-table-header-cell>
  <ino-table-header-cell
    column-id="rating"
    label="Rating"
    not-sortable
  ></ino-table-header-cell>
  <ino-table-header-cell
    column-id="another1"
    label="Another Column"
    not-sortable
  ></ino-table-header-cell>
  <ino-table-header-cell
    column-id="another2"
    label="Another Column"
    not-sortable
  ></ino-table-header-cell>
  <tr>
    <td>1</td>
    <td>The Bourne Identity</td>
    <td>14.06.2002</td>
    <td>$214 million</td>
    <td>93%</td>
    <td>Some information</td>
    <td>Some information</td>
  </tr>
  <tr>
    <td>2</td>
    <td>Sully</td>
    <td>09.09.2016</td>
    <td>$240.8 million</td>
    <td>84%</td>
    <td>Some information</td>
    <td>Some information</td>
  </tr>
  <tr>
    <td>3</td>
    <td>The Martian</td>
    <td>02.10.2015</td>
    <td>$630.2 million</td>
    <td>94%</td>
    <td>Some information</td>
    <td>Some information</td>
  </tr>
  <tr>
    <td>4</td>
    <td>John Wick: Chapter 3</td>
    <td>17.05.2019</td>
    <td>$326.7 million</td>
    <td>92%</td>
    <td>Some information</td>
    <td>Some information</td>
  </tr>
  <tr>
    <td>5</td>
    <td>10 Cloverfield Lane</td>
    <td>11.03.2016</td>
    <td>$110.2 million</td>
    <td>87%</td>
    <td>Some information</td>
    <td>Some information</td>
  </tr>
  <tr>
    <td>6</td>
    <td>Thor: Ragnarok</td>
    <td>10.10.2017</td>
    <td>$854 million</td>
    <td>92%</td>
    <td>Some information</td>
    <td>Some information</td>
  </tr>
  <tr>
    <td>7</td>
    <td>The latest movie</td>
    <td>01.01.2021</td>
    <td>$900 million</td>
    <td>95%</td>
    <td>Some information</td>
    <td>Some information</td>
  </tr> `;

const InoTableMeta = {
  title: 'Structure/ino-table',
  component: 'ino-table',
  inline: true,
  decorators: [
    (story) => {
      useEffect(() => {
        const tables = document.querySelectorAll('ino-table');
        const sortChangeHandler = (e) => {
          const { columnId, sortDirection } = e.detail;
          e.target.sortColumnId = columnId;
          e.target.sortDirection = sortDirection;
        };
        tables.forEach((t) =>
          t.addEventListener('sortChange', sortChangeHandler),
        );
        return () =>
          tables.forEach((t) =>
            t.removeEventListener('sortChange', sortChangeHandler),
          );
      });
      return story();
    },
  ],
  render: (args) => html`
    <ino-table
      loading="${args.loading}"
      sort-column-id="${args.sortColumnId}"
      sort-direction="${args.sortDirection}"
      no-hover="${args.noHover}"
      sticky-header="${args.stickyHeader}"
    >
      ${args.loading
        ? html`<ino-progress-bar
            slot="loading-indicator"
            indeterminate
            debounce="200"
            active
          ></ino-progress-bar>`
        : html``}
      ${tableContent}
    </ino-table>
  `,
  argTypes: {
    sortColumnId: {
      options: ['id', 'name', 'release', 'box-office', 'rating'],
      control: {
        type: 'select',
      },
    },
  },
  args: {
    loading: false,
    sortColumnId: 'id',
    noHover: false,
    stickyHeader: false,
    sortDirection: 'asc',
  },
} as Meta<Components.InoTable>;

export default InoTableMeta;

export const Default = Story({
  ...InoTableMeta,
});

export const Loading = Story({
  ...Default,
  docsFromProperty: 'loading',
  args: {
    loading: true,
  },
});

export const NoHover = Story({
  ...Default,
  docsFromProperty: 'noHover',
  args: {
    noHover: true,
  },
});

/**
 * For table sorting there are two needed props:
 *
 * `sortColumnId` identifies the column currently sorted by.
 * Needs to match the column ids provided on `ino-table-header-cell` elements.
 *
 * `sortDirection` shows direction of the column currently sorted by.
 * @See Set `sort-start` attribute on the respective column to change the sort order.
 *
 * Sorting-logic needs to be implemented by user.
 */
export const SortColumnIdAndSortDirection = Story({
  ...Default,
});

export const StickyHeader = Story({
  ...Default,
  docsFromProperty: 'stickyHeader',
  args: {
    stickyHeader: true,
  },
});

/**
 * Use `ino-checkbox` elements in the first column for checkbox-selection
 */
export const SelectionWithCheckboxes = Story({
  ...Default,
  render: () => {
    const mainBox = document.getElementById(
      'headerBox',
    ) as Components.InoCheckbox;

    const checkboxHandler = (e) => {
      const triggerCheckbox = e.target;
      triggerCheckbox.checked = !triggerCheckbox.checked;

      const checkboxes = Array.from(
        document.querySelectorAll('.selectable-table tbody ino-checkbox'),
      ) as Components.InoCheckbox[];

      if (triggerCheckbox.id === 'headerBox') {
        triggerCheckbox.indeterminate = false;
        checkboxes.forEach((checkbox) => {
          checkbox.checked = mainBox.checked;
          const row = (checkbox as HTMLElement).closest('tr');
          row?.classList.toggle('ino-table__row--selected', mainBox.checked);
        });
      } else if (mainBox) {
        const row = (triggerCheckbox as HTMLElement).closest('tr');
        row?.classList.toggle(
          'ino-table__row--selected',
          triggerCheckbox.checked,
        );

        if (checkboxes.some((i) => i.checked)) {
          mainBox.indeterminate = true;
        } else {
          const allChecked = checkboxes.every((i) => i.checked);
          mainBox.checked = allChecked;
          mainBox.indeterminate = allChecked;
        }
      }
    };

    useEffect(() => {
      const table = document.querySelector('.selectable-table');
      table?.addEventListener('checkedChange', checkboxHandler);
      return () => table?.removeEventListener('checkedChange', checkboxHandler);
    }, []);

    return html`
      <ino-table class="selectable-table">
        ${unsafeHTML(/*html*/ `
        <tr slot="header-row">
          <td class="ino-table__cell--checkbox">
            <ino-checkbox id="headerBox" selection></ino-checkbox>
          </td>
          <td>Header A</td>
          <td>Header B</td>
          <td>Header C</td>
          <td>Header D</td>
          <td>Header E</td>
          <td>Header F</td>
          <td>Header G</td>
          <td>Header H</td>
          <td>Header I</td>
        </tr>
        <tr>
          <td class="ino-table__cell--checkbox"><ino-checkbox selection></ino-checkbox></td>
          <td class="ino-table__cell--numeric">1</td>
          <td>Cell B1</td>
          <td>Cell C1</td>
          <td>Cell D1</td>
          <td>Cell E1</td>
          <td>Cell F1</td>
          <td>Cell G1</td>
          <td>Cell H1</td>
          <td>Cell I1</td>
        </tr>
        <tr class="ino-table__row--selected">
          <td class="ino-table__cell--checkbox"><ino-checkbox selection checked></ino-checkbox></td>
          <td class="ino-table__cell--numeric">2</td>
          <td>Cell B2</td>
          <td>Cell C2</td>
          <td>Cell D2</td>
          <td>Cell E2</td>
          <td>Cell F2</td>
          <td>Cell G2</td>
          <td>Cell H2</td>
          <td>Cell I2</td>
        </tr>
        <tr>
          <td class="ino-table__cell--checkbox"><ino-checkbox selection></ino-checkbox></td>
          <td class="ino-table__cell--numeric">3</td>
          <td>Cell B3</td>
          <td>Cell C3</td>
          <td>Cell D3</td>
          <td>Cell E3</td>
          <td>Cell F3</td>
          <td>Cell G3</td>
          <td>Cell H3</td>
          <td>Cell I3</td>
        </tr>
        <tr class="ino-table__row--active">
          <td class="ino-table__cell--checkbox"><ino-checkbox selection></ino-checkbox></td>
          <td class="ino-table__cell--numeric">4</td>
          <td>Cell B4</td>
          <td>Cell C4</td>
          <td>Cell D4</td>
          <td>Cell E4</td>
          <td>Cell F4</td>
          <td>Cell G4</td>
          <td>Cell H4</td>
          <td>Cell I4</td>
        </tr>
        <tr>
          <td class="ino-table__cell--checkbox"><ino-checkbox selection></ino-checkbox></td>
          <td class="ino-table__cell--numeric">5</td>
          <td>Cell B5</td>
          <td>Cell C5</td>
          <td>Cell D5</td>
          <td>Cell E5</td>
          <td>Cell F5</td>
          <td>Cell G5</td>
          <td>Cell H5</td>
          <td>Cell I5</td>
        </tr>
      `)}
      </ino-table>
    `;
  },
});
