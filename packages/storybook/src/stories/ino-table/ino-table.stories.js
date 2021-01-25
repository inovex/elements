import tableReadme from '_local-elements/src/components/ino-table/readme.md';
import tableRowReadme from '_local-elements/src/components/ino-table-row/readme.md';
import tableCellReadme from '_local-elements/src/components/ino-table-cell/readme.md';
import withStencilReadme from '_local-storybookcore/with-stencil-readme';
import './ino-table.scss';

function subscribeToComponentEvents() {
  // == event block
  const checkboxHandler = function (e) {
    const el = e.target;
    if (el.tagName.toLowerCase() !== 'ino-checkbox') {
      return;
    }

    const row = el.closest('ino-table-row');
    el.checked = !el.checked;
    row.inoSelected = el.checked;
    if (el.id === 'headerBox') {
      el.indeterminate = false;
      setAllBoxes();
    } else {
      setHeaderBox();
    }
  };

  const setAllBoxes = () => {
    const mainBox = document.getElementById('headerBox');
    const boxes = Array.from(
      document.querySelectorAll('ino-checkbox:not(#headerBox)')
    );
    boxes.forEach((i) => {
      i.checked = mainBox.checked;
      i.closest('ino-table-row').inoSelected = mainBox.checked;
    });
  };

  const setHeaderBox = () => {
    const mainBox = document.getElementById('headerBox');
    const boxes = Array.from(
      document.querySelectorAll('ino-checkbox:not(#headerBox)')
    );
    if (boxes.every((i) => i.checked)) {
      mainBox.checked = true;
      mainBox.indeterminate = false;
    } else if (boxes.some((i) => i.checked)) {
      mainBox.indeterminate = true;
    } else {
      mainBox.checked = false;
      mainBox.indeterminate = false;
    }
  };

  document.addEventListener('checkedChange', checkboxHandler);
  // == event block

  // unsubscribe function will be called by Storybook
  return () => {
    document.removeEventListener('checkedChange', checkboxHandler);
  };
}

export default {
  title: 'Structure/<ino-table>',

  decorators: [
    (story) => {
      subscribeToComponentEvents();
      return story();
    },
  ],
};

export const DefaultUsage = () => /* html */ `
    <h4>Data table example</h4>
    <ino-table>
        <ino-table-row slot="header" ino-header-row>
            <ino-table-cell>ID</ino-table-cell>
            <ino-table-cell>Name</ino-table-cell>
            <ino-table-cell>Release Date</ino-table-cell>
            <ino-table-cell>Box Office</ino-table-cell>
            <ino-table-cell>Rating</ino-table-cell>
        </ino-table-row>

        <ino-table-row>
            <ino-table-cell ino-numeric>1</ino-table-cell>
            <ino-table-cell>The Bourne Identity</ino-table-cell>
            <ino-table-cell>14.06.2002</ino-table-cell>
            <ino-table-cell>$214 million</ino-table-cell>
            <ino-table-cell>93%</ino-table-cell>
        </ino-table-row>
        <ino-table-row>
            <ino-table-cell ino-numeric>2</ino-table-cell>
            <ino-table-cell>Sully</ino-table-cell>
            <ino-table-cell>09.09.2016</ino-table-cell>
            <ino-table-cell>$240.8 million</ino-table-cell>
            <ino-table-cell>84%</ino-table-cell>
        </ino-table-row>
        <ino-table-row>
            <ino-table-cell ino-numeric>3</ino-table-cell>
            <ino-table-cell>The Martian</ino-table-cell>
            <ino-table-cell>02.10.2015</ino-table-cell>
            <ino-table-cell>$630.2 million</ino-table-cell>
            <ino-table-cell>94%</ino-table-cell>
        </ino-table-row>
        <ino-table-row>
            <ino-table-cell ino-numeric>4</ino-table-cell>
            <ino-table-cell>John Wick: Chapter 3</ino-table-cell>
            <ino-table-cell>17.05.2019</ino-table-cell>
            <ino-table-cell>$326.7 million</ino-table-cell>
            <ino-table-cell>92%</ino-table-cell>
        </ino-table-row>
        <ino-table-row>
            <ino-table-cell ino-numeric>5</ino-table-cell>
            <ino-table-cell>10 Cloverfield Lane</ino-table-cell>
            <ino-table-cell>11.03.2016</ino-table-cell>
            <ino-table-cell>$110.2 million</ino-table-cell>
            <ino-table-cell>87%</ino-table-cell>
        </ino-table-row>
        <ino-table-row>
            <ino-table-cell ino-numeric>6</ino-table-cell>
            <ino-table-cell>Thor: Ragnarok</ino-table-cell>
            <ino-table-cell>10.10.2017</ino-table-cell>
            <ino-table-cell>$854 million</ino-table-cell>
            <ino-table-cell>92%</ino-table-cell>
        </ino-table-row>
    </ino-table>

    <h4>With checkboxes</h4>
    <ino-table>
        <ino-table-row slot="header" ino-header-row>
            <ino-table-cell><ino-checkbox id="headerBox" ino-selection></ino-checkbox></ino-table-cell>
            <ino-table-cell>Header A</ino-table-cell>
            <ino-table-cell>Header B</ino-table-cell>
            <ino-table-cell>Header C</ino-table-cell>
            <ino-table-cell>Header D</ino-table-cell>
            <ino-table-cell>Actions</ino-table-cell>
        </ino-table-row>
        <ino-table-row>
            <ino-table-cell><ino-checkbox ino-selection></ino-checkbox></ino-table-cell>
            <ino-table-cell ino-numeric>1</ino-table-cell>
            <ino-table-cell>Cell B1</ino-table-cell>
            <ino-table-cell>Cell C1</ino-table-cell>
            <ino-table-cell>Cell D1</ino-table-cell>
            <ino-table-cell><ino-icon-button ino-icon="download"></ino-icon-button></ino-table-cell>
        </ino-table-row>
        <ino-table-row>
            <ino-table-cell><ino-checkbox ino-selection></ino-checkbox></ino-table-cell>
            <ino-table-cell ino-numeric>2</ino-table-cell>
            <ino-table-cell>Cell B2</ino-table-cell>
            <ino-table-cell>Cell C2</ino-table-cell>
            <ino-table-cell>Cell D2</ino-table-cell>
            <ino-table-cell><ino-icon-button ino-icon="download"></ino-icon-button></ino-table-cell>
        </ino-table-row>
        <ino-table-row>
            <ino-table-cell><ino-checkbox ino-selection></ino-checkbox></ino-table-cell>
            <ino-table-cell ino-numeric>3</ino-table-cell>
            <ino-table-cell>Cell B3</ino-table-cell>
            <ino-table-cell>Cell C3</ino-table-cell>
            <ino-table-cell>Cell D3</ino-table-cell>
            <ino-table-cell><ino-icon-button ino-icon="download"></ino-icon-button></ino-table-cell>
        </ino-table-row>
        <ino-table-row>
            <ino-table-cell><ino-checkbox ino-selection></ino-checkbox></ino-table-cell>
            <ino-table-cell ino-numeric>4</ino-table-cell>
            <ino-table-cell>Cell B4</ino-table-cell>
            <ino-table-cell>Cell C4</ino-table-cell>
            <ino-table-cell>Cell D4</ino-table-cell>
            <ino-table-cell><ino-icon-button ino-icon="download"></ino-icon-button></ino-table-cell>
        </ino-table-row>
        <ino-table-row>
            <ino-table-cell><ino-checkbox ino-selection></ino-checkbox></ino-table-cell>
            <ino-table-cell ino-numeric>5</ino-table-cell>
            <ino-table-cell>Cell B5</ino-table-cell>
            <ino-table-cell>Cell C5</ino-table-cell>
            <ino-table-cell>Cell D5</ino-table-cell>
            <ino-table-cell><ino-icon-button ino-icon="download"></ino-icon-button></ino-table-cell>
        </ino-table-row>
    </ino-table>
  `;

DefaultUsage.decorators = [withStencilReadme(tableReadme)];

export const InoTableRow = () => /*html*/ ``;
InoTableRow.storyName = '<ino-table-row>';
InoTableRow.decorators = [withStencilReadme(tableRowReadme)];

export const InoTableCell = () => /*html*/ ``;
InoTableCell.storyName = '<ino-table-cell>';
InoTableCell.decorators = [withStencilReadme(tableCellReadme)];
