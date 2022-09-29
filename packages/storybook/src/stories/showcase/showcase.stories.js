import './showcase.scss';
import fjordImg from '_local-assets/images/fjord.jpg';
import trondheimImg from '_local-assets/images/trondheim.jpg';
import libertyImg from '_local-assets/images/liberty.jpg';
import snackbarDemoImg from '_local-assets/images/InoSnackbar_Demo_Image.png';
import dialogDemoImg from '_local-assets/images/InoDialog_Demo_Image.jpeg';
import navDrawerDemoImg from '_local-assets/images/InoNavDrawer_Demo_Image.jpeg';
import sidebarDemoImg from '_local-assets/images/InoSidebar_Demo_Image.png';

export default {
  title: 'Docs/Showcase',
};

export const components = () => /*html*/ `
  <div class="catalog">
      <h2>Buttons</h2>
      <div class="catalog-grid">
        <ino-card onClick="parent.location.href='./?path=/story/buttons-ino-button--default-usage'">
          <div class="card-content--vertical" slot="content">
            <ino-button slot="content" style="margin: 6px">Solid Button</ino-button>
            <ino-button slot="content" ino-fill="outline" style="margin: 6px">Outlined Button</ino-button>
            <ino-button slot="content" ino-fill="inverse" style="margin: 6px">Inverted Button</ino-button>
          </div>
          <div class="card-footer" slot="footer">
            <h3>ino-button</h3>
          </div>
        </ino-card>
        <ino-card onClick="parent.location.href='./?path=/story/buttons-ino-chip--default-usage'">
          <div class="card-content--vertical" slot="content">
            <div>
              <ino-chip ino-label="iOS" ino-selected ino-value="0"></ino-chip>
              <ino-chip ino-label="Android" ino-value="1"></ino-chip>
            </div>
          </div>
          <div class="card-footer" slot="footer">
            <h3>ino-chip-set</h3>
          </div>
        </ino-card>
        <ino-card onClick="parent.location.href='./?path=/story/buttons-ino-fab--default-usage'">
          <div class="card-content--vertical" slot="content">
            <ino-fab ino-label="none" ino-icon="add" ino-edge-position="none"></ino-fab>
          </div>
          <div class="card-footer" slot="footer">
            <h3>ino-fab</h3>
          </div>
        </ino-card>
        <ino-card onClick="parent.location.href='./?path=/story/buttons-ino-fab-set--default-usage'">
          <div class="card-content--vertical" slot="content">
            <ino-fab-set style="position: unset" ino-open-dial="true" ino-dial-direction="top">
                <ino-fab ino-label="none" ino-icon="chat" ino-mini></ino-fab>
                <ino-fab ino-label="none" ino-icon="search" ino-mini></ino-fab>
            </ino-fab-set>
          </div>
          <div class="card-footer" slot="footer">
            <h3>ino-fab-set</h3>
          </div>
        </ino-card>
        <ino-card onClick="parent.location.href='./?path=/story/buttons-ino-icon-button--default-usage'">
          <div class="card-content--vertical" slot="content">
            <ino-icon-button ino-icon="star"></ino-icon-button>
          </div>
          <div class="card-footer" slot="footer">
            <h3>ino-icon-button</h3>
          </div>
        </ino-card>
        <ino-card onClick="parent.location.href='./?path=/story/buttons-ino-segment-button--default-usage'">
          <div class="card-content--vertical" slot="content">
            <ino-segment-group id="segment-grp">
              <ino-segment-button value="1">M</ino-segment-button>
              <ino-segment-button value="2">F</ino-segment-button>
              <ino-segment-button value="3">D</ino-segment-button>
            </ino-segment-group>
          </div>
          <div class="card-footer" slot="footer">
            <h3>ino-segment-group</h3>
          </div>
        </ino-card>
      </div>

      <h2>Structure</h2>
      <div class="catalog-grid">
        <ino-card onClick="parent.location.href='./?path=/story/structure-ino-card--default-usage'">
          <div class="card-content--vertical" slot="content">
            <ino-card style="width: 80%">
              <div slot="header">
                <ino-icon ino-icon="info" ino-clickable></ino-icon>
              </div>
              <div slot="content" class="card-content--vertical" style="height: unset"><h3>Content</h3></div>
            </ino-card>
          </div>
          <div class="card-footer" slot="footer">
            <h3>ino-card</h3>
          </div>
        </ino-card>
        <ino-card onClick="parent.location.href='./?path=/story/structure-ino-dialog--default-usage'">
          <div class="card-content--vertical" slot="content" style="padding-left: 20px; padding-right: 20px">
            <ino-img src=${dialogDemoImg} ino-ratio-width="2.215" style="box-shadow: 0 0 15px -5px rgba(0,0,0,0.7);"/>
          </div>
          <div class="card-footer" slot="footer">
            <h3>ino-dialog</h3>
          </div>
        </ino-card>
        <ino-card onClick="parent.location.href='./?path=/story/structure-ino-header--default-usage'">
          <div class="card-content--vertical" slot="content">
            <ino-header ino-title="Section"></ino-header>
          </div>
          <div class="card-footer" slot="footer">
            <h3>ino-header</h3>
          </div>
        </ino-card>
        <ino-card onClick="parent.location.href='./?path=/story/structure-ino-list--default-usage'">
          <div class="card-content--vertical" slot="content">
            <ino-list style="border: 1px solid rgba(0, 0, 0, 0.15);" ino-dense>
              <ino-list-item ino-text="List item"></ino-list-item>
              <ino-list-item ino-text="With leading icon">
                  <ino-img slot="ino-leading" src="https://cdn-images-1.medium.com/max/1600/1*HP8l7LMMt7Sh5UoO1T-yLQ.png" ino-ratio-width="1" ino-ratio-height="1"></ino-img>
              </ino-list-item>
              <ino-control-item ino-role="radio" ino-text="Disabled control item" ino-disabled> </ino-control-item>
            </ino-list>
          </div>
          <div class="card-footer" slot="footer">
            <h3>ino-list</h3>
          </div>
        </ino-card>
        <ino-card onClick="parent.location.href='./?path=/story/structure-ino-menu--default-usage'">
          <div class="card-content--vertical" slot="content">
            <ino-button id="menu-2" ino-icon="menu">Menu</ino-button>
            <ino-menu id="custom-menu-2" ino-for="menu-2" ino-open>
              <ino-list-item ino-text="Item"></ino-list-item>
              <ino-list-item ino-text="Item 2"></ino-list-item>
            </ino-menu>
          </div>
          <div class="card-footer" slot="footer">
            <h3>ino-menu</h3>
          </div>
        </ino-card>
        <ino-card onClick="parent.location.href='./?path=/story/structure-ino-nav-drawer--default-usage'">
          <div class="card-content--vertical" slot="content" style="padding-left: 20px; padding-right: 20px">
            <ino-img src=${navDrawerDemoImg} ino-ratio-width="1.818" style="box-shadow: 0 0 15px -5px rgba(0,0,0,0.7);"/>
          </div>
          <div class="card-footer" slot="footer">
            <h3>ino-nav-drawer</h3>
          </div>
        </ino-card>
        <ino-card onClick="parent.location.href='./?path=/story/structure-ino-sidebar--default-usage'">
          <div class="card-content--vertical" slot="content" style="padding-left: 20px; padding-right: 20px">
            <ino-img src=${sidebarDemoImg} ino-ratio-width="1.783" style="box-shadow: 0 0 15px -5px rgba(0,0,0,0.7);" />
          </div>
          <div class="card-footer" slot="footer">
            <h3>ino-sidebar</h3>
          </div>
        </ino-card>
        <ino-card onClick="parent.location.href='./?path=/story/structure-ino-tab-bar--default-usage'">
          <div class="card-content--vertical" slot="content">
            <ino-tab-bar>
              <ino-tab
                ino-label="Cart"
                ino-icon="cart"
                ino-indicator-content-width="true"
                ino-stacked>
              </ino-tab>
              <ino-tab
                ino-label="Account"
                ino-icon="user"
                ino-indicator-content-width="true"
                ino-stacked>
              </ino-tab>
            </ino-tab-bar>
          </div>
          <div class="card-footer" slot="footer">
            <h3>ino-tab-bar</h3>
          </div>
        </ino-card>
        <ino-card onClick="parent.location.href='./?path=/story/structure-ino-table--default-usage'">
          <div class="card-content--vertical" slot="content">
            <ino-table>
              <ino-table-row slot="header" ino-header-row>
                <ino-table-cell>ID</ino-table-cell>
                <ino-table-cell>Header A</ino-table-cell>
                <ino-table-cell>Header B</ino-table-cell>
              </ino-table-row>
              <ino-table-row>
                <ino-table-cell ino-numeric>1</ino-table-cell>
                <ino-table-cell>Cell A1</ino-table-cell>
                <ino-table-cell>Cell B1</ino-table-cell>
              </ino-table-row>
              <ino-table-row>
                <ino-table-cell ino-numeric>2</ino-table-cell>
                <ino-table-cell>Cell A2</ino-table-cell>
                <ino-table-cell>Cell B2</ino-table-cell>
              </ino-table-row>
            </ino-table>
          </div>
          <div class="card-footer" slot="footer">
            <h3>ino-table</h3>
          </div>
        </ino-card>
      </div>

      <h2>Input</h2>
      <div class="catalog-grid">
        <ino-card onClick="parent.location.href='./?path=/story/input-ino-checkbox--default-usage'">
          <div class="card-content--vertical" slot="content">
            <ino-checkbox checked style="width: 50%">Checked</ino-checkbox>
            <ino-checkbox style="width: 50%">Unchecked</ino-checkbox>
          </div>
          <div class="card-footer" slot="footer">
            <h3>ino-checkbox</h3>
          </div>
        </ino-card>
        <ino-card onClick="parent.location.href='./?path=/story/input-ino-datepicker--default-usage'">
          <div class="card-content--vertical" slot="content">
            <ino-datepicker ino-type="datetime" ino-date-format="H:i d.m.Y" ino-label="Datetime" disabled></ino-datepicker>
          </div>
          <div class="card-footer" slot="footer">
            <h3>ino-datepicker</h3>
          </div>
        </ino-card>
        <ino-card onClick="parent.location.href='./?path=/story/input-ino-form-row--default-usage'">
          <div class="card-content--vertical" slot="content">
            <ino-form-row ino-label="First Name">
              <ino-input></ino-input>
            </ino-form-row>
          </div>
          <div class="card-footer" slot="footer">
            <h3>ino-form-row</h3>
          </div>
        </ino-card>
        <ino-card onClick="parent.location.href='./?path=/story/input-ino-input--default-usage'">
          <div class="card-content--vertical" slot="content">
            <ino-input placeholder="Email"></ino-input>
          </div>
          <div class="card-footer" slot="footer">
            <h3>ino-input</h3>
          </div>
        </ino-card>
        <ino-card onClick="parent.location.href='./?path=/story/input-ino-radio-group--default-usage'">
          <div class="card-content--vertical" slot="content">
            <ino-radio-group id="radio-grp" value="2">
              <ino-radio value="1">No</ino-radio>
              <ino-radio value="2">Yes</ino-radio>
            </ino-radio-group>
          </div>
          <div class="card-footer" slot="footer">
            <h3>ino-radio-group</h3>
          </div>
        </ino-card>
        <ino-card onClick="parent.location.href='./?path=/story/input-ino-range--default-usage'">
          <div class="card-content--vertical" slot="content">
            <ino-range ino-color-scheme="primary" value="40" min="0" max="100" step="20" ino-discrete ino-markers style="width: 80%"></ino-range>
          </div>
          <div class="card-footer" slot="footer">
            <h3>ino-range</h3>
          </div>
        </ino-card>
        <ino-card onClick="parent.location.href='./?path=/story/input-ino-select--default-usage'">
          <div class="card-content--vertical" slot="content">
            <ino-select ino-label="Select Option" disabled>
              <ino-option value="Selected Option" selected>Selected Option</ino-option>
            </ino-select>
          </div>
          <div class="card-footer" slot="footer">
            <h3>ino-select</h3>
          </div>
        </ino-card>
        <ino-card onClick="parent.location.href='./?path=/story/input-ino-switch--default-usage'">
          <div class="card-content--vertical" slot="content">
            <ino-switch checked></ino-switch>
            <ino-switch></ino-switch>
          </div>
          <div class="card-footer" slot="footer">
            <h3>ino-switch</h3>
          </div>
        </ino-card>
        <ino-card onClick="parent.location.href='./?path=/story/input-ino-textarea--default-usage'">
          <div class="card-content--vertical" slot="content">
            <ino-textarea ino-label="Feedback" rows="3" cols="24" style="width: unset"></ino-textarea>
          </div>
          <div class="card-footer" slot="footer">
            <h3>ino-textarea</h3>
          </div>
        </ino-card>
      </div>

      <h2>Graphic</h2>
      <div class="catalog-grid">
        <ino-card onClick="parent.location.href='./?path=/story/graphic-ino-icon--default-usage'">
          <div class="card-content--horizontal" slot="content">
            <ino-icon ino-icon="info"></ino-icon>
            <ino-icon ino-icon="star"></ino-icon>
            <ino-icon ino-icon="chat"></ino-icon>
            <ino-icon ino-icon="onboarding"></ino-icon>
          </div>
          <div class="card-footer" slot="footer">
            <h3>ino-icon</h3>
          </div>
        </ino-card>
        <ino-card onClick="parent.location.href='./?path=/story/graphic-ino-img-list--default-usage'">
          <div class="card-content--vertical" slot="content">
            <ino-img-list>
              <ino-img
                  src=${fjordImg}
                  alt="fjord"
                  width="50"
                  height="50"
                  ino-img-list-item
              ></ino-img>
              <ino-img
                  src=${trondheimImg}
                  alt="trondheim"
                  width="50"
                  height="50"
                  ino-img-list-item
              ></ino-img>
              <ino-img
                  src=${libertyImg}
                  alt="liberty"
                  width="50"
                  height="50"
                  ino-img-list-item
              ></ino-img>
            </ino-img-list>
          </div>
          <div class="card-footer" slot="footer">
            <h3>ino-img-list</h3>
          </div>
        </ino-card>
        <ino-card onClick="parent.location.href='./?path=/story/graphic-ino-img--default-usage'">
          <div class="card-content--vertical" slot="content">
            <ino-img
              src="https://cdn-images-1.medium.com/max/1600/1*HP8l7LMMt7Sh5UoO1T-yLQ.png"
              ino-rounded
              width="90"
              height="90"
            />
          </div>
          <div class="card-footer" slot="footer">
            <h3>ino-img</h3>
          </div>
        </ino-card>
      </div>

      <h2>Notification</h2>
      <div class="catalog-grid">
        <ino-card onClick="parent.location.href='./?path=/story/notification-ino-popover--default-usage'">
          <div class="card-content--vertical" slot="content">
            <ino-button id="popover-hover-focus">Display Popover</ino-button>
            <ino-popover ino-for="popover-hover-focus">This is a popover!</ino-popover>
          </div>
          <div class="card-footer" slot="footer">
            <h3>ino-popover</h3>
          </div>
        </ino-card>
        <ino-card onClick="parent.location.href='./?path=/story/notification-ino-progress-bar--default-usage'">
          <div class="card-content--vertical" slot="content">
            <ino-progress-bar ino-buffer="0.8" ino-progress="0.3" style="width: 80%"></ino-progress-bar>
          </div>
          <div class="card-footer" slot="footer">
            <h3>ino-progress-bar</h3>
          </div>
        </ino-card>
        <ino-card onClick="parent.location.href='./?path=/story/notification-ino-snackbar--default-usage'">
          <div class="card-content--vertical" slot="content">
            <ino-img src=${snackbarDemoImg} ino-ratio-width="3.62"></ino-img>
          </div>
          <div class="card-footer" slot="footer">
            <h3>ino-snackbar</h3>
          </div>
        </ino-card>
        <ino-card onClick="parent.location.href='./?path=/story/notification-ino-spinner--default-usage'">
          <div class="card-content--horizontal" slot="content">
            <ino-spinner ino-type="tile"></ino-spinner>
            <ino-spinner ino-type="bounce"></ino-spinner>
            <ino-spinner ino-type="circle"></ino-spinner>
          </div>
          <div class="card-footer" slot="footer">
            <h3>ino-spinner</h3>
          </div>
        </ino-card>
        <ino-card onClick="parent.location.href='./?path=/story/notification-ino-tooltip--default-usage'">
          <div class="card-content--vertical" slot="content">
            <ino-button id="primary-tooltip">Display Tooltip</ino-button>
            <ino-tooltip ino-for="primary-tooltip" ino-label="This is a tooltip!" ino-color-scheme="primary" ino-placement="top"></ino-tooltip>
          </div>
          <div class="card-footer" slot="footer">
            <h3>ino-tooltip</h3>
          </div>
        </ino-card>
      </div>
    </div>
`;
