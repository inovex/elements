import { boolean, text } from '@storybook/addon-knobs';

import withStencilReadme from '_local-storybookcore/with-stencil-readme';

import listReadme from '_local-elements/src/components/ino-list/readme.md';
import listItemReadme from '_local-elements/src/components/ino-list-item/readme.md';
import listDividerReadme from '_local-elements/src/components/ino-list-divider/readme.md';
import listItemControlReadme from '_local-elements/src/components/ino-control-item/readme.md';
import navItemReadme from '_local-elements/src/components/ino-nav-item/readme.md';

import './ino-list.scss';


function subscribeToComponentEvents() {
  // == event block
  const eventHandler = function(e) {
    const el = e.target;
    const tagName = el.tagName.toLowerCase();
    if (tagName !== 'ino-checkbox' && tagName !== 'ino-radio' && tagName !== 'ino-control-item') {
      return;
    }

    el.setAttribute('checked', e.detail);

    if (el.getAttribute('indeterminate') === 'true') {
      el.setAttribute('indeterminate', 'false');
    }
  };

  document.addEventListener('checkedChange', eventHandler);
  // == event block

  // unsubscribe function will be called by Storybook
  return () => {
    document.removeEventListener('checkedChange', eventHandler);
  };
}

export default {
  title: 'Structure/<ino-list>',
  decorators: [story => {
    subscribeToComponentEvents();
    return story();
  }]
};

export const DefaultUsage = () => /*html*/ `
<div class="story-list">
  <h4>Customizable List</h4>
  <ino-list
    ino-dense="${boolean('ino-dense', false)}"
    ino-two-lines="${boolean('ino-two-lines', false)}"
    ino-avatar="${boolean('ino-avatar', false)}"
   >
    <ino-list-item ino-text="First text item"></ino-list-item>
    <ino-list-item ino-text="Second text item"></ino-list-item>
    <ino-list-item ino-text="Third text item"></ino-list-item>
  </ino-list>

  <h4>Two lines</h4>
  <ino-list ino-two-lines>
    <ino-list-item ino-text="First text item" ino-secondary-text="Secondary"></ino-list-item>
    <ino-list-item ino-text="Second text item" ino-secondary-text="Secondary"></ino-list-item>
    <ino-list-item ino-text="Third text item" ino-secondary-text="Secondary"></ino-list-item>
  </ino-list>

  <h4>Densed</h4>
  <ino-list ino-dense class="first-densed-list">
    <ino-list-item ino-text="First text item"></ino-list-item>
    <ino-list-item ino-text="Second text item"></ino-list-item>
    <ino-list-item ino-text="Third text item"></ino-list-item>
  </ino-list>
  <ino-list ino-dense ino-two-lines class="first-densed-list">
    <ino-list-item ino-text="First text item" ino-secondary-text="Secondary"></ino-list-item>
    <ino-list-item ino-text="Second text item" ino-secondary-text="Secondary"></ino-list-item>
    <ino-list-item ino-text="Third text item" ino-secondary-text="Secondary"></ino-list-item>
  </ino-list>

  <h4>Avatar</h4>
  <ino-list ino-avatar class="first-densed-list">
    <ino-list-item ino-text="First text item">
        <ino-img slot="ino-leading" src="https://cdn-images-1.medium.com/max/1600/1*HP8l7LMMt7Sh5UoO1T-yLQ.png" ino-ratio-width="1" ino-ratio-height="1"></ino-img>
    </ino-list-item>
    <ino-list-item ino-text="Second text item">
        <ino-img slot="ino-leading" src="https://cdn-images-1.medium.com/max/1600/1*HP8l7LMMt7Sh5UoO1T-yLQ.png" ino-ratio-width="1" ino-ratio-height="1"></ino-img>
    </ino-list-item>
  </ino-list>
  <ino-list ino-avatar ino-dense class="first-densed-list">
    <ino-list-item ino-text="First text item">
        <ino-img slot="ino-leading" src="https://cdn-images-1.medium.com/max/1600/1*HP8l7LMMt7Sh5UoO1T-yLQ.png" ino-ratio-width="1" ino-ratio-height="1"></ino-img>
    </ino-list-item>
    <ino-list-item ino-text="Second text item">
        <ino-img slot="ino-leading" src="https://cdn-images-1.medium.com/max/1600/1*HP8l7LMMt7Sh5UoO1T-yLQ.png" ino-ratio-width="1" ino-ratio-height="1"></ino-img>
    </ino-list-item>
  </ino-list>
  <ino-list ino-avatar ino-two-lines class="first-densed-list">
    <ino-list-item ino-text="First text item" ino-secondary-text="Secondary">
        <ino-img slot="ino-leading" src="https://cdn-images-1.medium.com/max/1600/1*HP8l7LMMt7Sh5UoO1T-yLQ.png" ino-ratio-width="1" ino-ratio-height="1"></ino-img>
    </ino-list-item>
    <ino-list-item ino-text="Second text item" ino-secondary-text="Secondary">
        <ino-img slot="ino-leading" src="https://cdn-images-1.medium.com/max/1600/1*HP8l7LMMt7Sh5UoO1T-yLQ.png" ino-ratio-width="1" ino-ratio-height="1"></ino-img>
    </ino-list-item>
  </ino-list>

  <h4>Checkbox</h4>
  <ino-list class="first-densed-list">
    <ino-control-item ino-role="checkbox" ino-text="First text item"> </ino-control-item>
    <ino-control-item ino-role="checkbox" ino-text="Second text item"></ino-control-item>
  </ino-list>
  <ino-list class="first-densed-list" ino-dense>
    <ino-control-item ino-role="checkbox" ino-text="First text item"> </ino-control-item>
    <ino-control-item ino-role="checkbox" ino-text="Second text item"></ino-control-item>
  </ino-list>
  <ino-list ino-two-lines class="first-densed-list">
    <ino-control-item ino-role="checkbox" checked ino-text="First text item" ino-secondary-text="Secondary Text"> </ino-control-item>
    <ino-control-item ino-role="checkbox" ino-text="Second text item" ino-secondary-text="Secondary Text"></ino-control-item>
  </ino-list>

  <h4>Radio Button</h4>
  <ino-list class="first-densed-list">
    <ino-control-item ino-role="radio" name="group-1" ino-text="First text item"> </ino-control-item>
    <ino-control-item ino-role="radio" name="group-1" ino-text="Second text item"></ino-control-item>
  </ino-list>
  <ino-list class="first-densed-list" ino-dense>
    <ino-control-item ino-role="radio" name="group-2" ino-text="First text item"> </ino-control-item>
    <ino-control-item ino-role="radio" name="group-2" ino-text="Second text item"></ino-control-item>
  </ino-list>
  <ino-list ino-two-lines class="first-densed-list">
    <ino-control-item ino-role="radio" name="group-3" checked ino-text="First text item" ino-secondary-text="Secondary Text"> </ino-control-item>
    <ino-control-item ino-role="radio" name="group-3" ino-text="Second text item" ino-secondary-text="Secondary Text"></ino-control-item>
  </ino-list>
</div>
`;

DefaultUsage.decorators = [withStencilReadme(listReadme)];

export const ListItem = () => /*html*/ `
<div class="story-list">
  <h4>Customizable list item</h4>
  <ino-list ino-two-lines="${boolean('ino-two-lines (on ino-list)', true)}">
    <ino-list-item
      ino-secondary-text="${text('ino-secondary-text', 'Second line text')}"
      ino-selected="${boolean('ino-selected', false)}"
      ino-activated="${boolean('ino-activated', false)}"
      ino-disabled="${boolean('ino-disabled', false)}"
      ino-text="${text('ino-text', 'List item')}">
    </ino-list-item>
  </ino-list>

  <h4>States</h4>
  <ino-list>
    <ino-list-item ino-text="Simple item"></ino-list-item>
    <ino-list-item ino-selected ino-text="Selected item"></ino-list-item>
    <ino-list-item ino-selected ino-text="Selected item 2"></ino-list-item>
    <ino-list-item ino-text="Simple item 2"></ino-list-item>
    <ino-list-item ino-activated ino-text="Activated item"></ino-list-item>
    <ino-list-item ino-disabled ino-text="Disabled item"></ino-list-item>
  </ino-list>



  <h4>Graphic and Meta</h4>
  <ino-list>
    <ino-list-item ino-text="Lorem ipsum dolor sit">
        <ino-img slot="ino-leading" src="https://cdn-images-1.medium.com/max/1600/1*HP8l7LMMt7Sh5UoO1T-yLQ.png" ino-ratio-width="1" ino-ratio-height="1"></ino-img>
        <p slot="ino-trailing">$10.00</p>
    </ino-list-item>
    <ino-list-item ino-text="Lorem ipsum dolor sit">
        <ino-img slot="ino-leading" src="https://cdn-images-1.medium.com/max/1600/1*HP8l7LMMt7Sh5UoO1T-yLQ.png" ino-ratio-width="1" ino-ratio-height="1"></ino-img>
        <p slot="ino-trailing">$10.00</p>
    </ino-list-item>
  </ino-list>

  <h4>Primary and Leading Slot</h4>
  <ino-list>
    <ino-list-item>
        <ino-img slot="ino-leading" src="https://cdn-images-1.medium.com/max/1600/1*HP8l7LMMt7Sh5UoO1T-yLQ.png" ino-ratio-width="1" ino-ratio-height="1"></ino-img>
        <a slot="ino-primary" href="">Link Element</a>
    </ino-list-item>
  </ino-list>

  <h4>Two Lines with Primary and Secondary Slot</h4>
  <ino-list ino-two-lines>
    <ino-list-item>
        <ino-img slot="ino-leading" src="https://cdn-images-1.medium.com/max/1600/1*HP8l7LMMt7Sh5UoO1T-yLQ.png" ino-ratio-width="1" ino-ratio-height="1"></ino-img>
        <a slot="ino-primary" href="">Primary Link Element</a>
        <a slot="ino-secondary" href="">Secondary Link Element</a>
        <p slot="ino-trailing">$10.00</p>
    </ino-list-item>
  </ino-list>
</div>
`;

ListItem.decorators = [withStencilReadme(listItemReadme)];

export const ListItemVariants = () => /*html*/ `
<div class="story-list">
  <h1>List item variants</h1>
  <h4>Graphic</h4>
  <ino-list>
    <ino-list-item ino-text="Lorem ipsum dolor sit">
        <ino-img slot="ino-leading" src="https://cdn-images-1.medium.com/max/1600/1*HP8l7LMMt7Sh5UoO1T-yLQ.png" ino-ratio-width="1" ino-ratio-height="1"></ino-img>
    </ino-list-item>
    <ino-list-item ino-text="Lorem ipsum dolor sit">
        <ino-img slot="ino-leading" src="https://cdn-images-1.medium.com/max/1600/1*HP8l7LMMt7Sh5UoO1T-yLQ.png" ino-ratio-width="1" ino-ratio-height="1"></ino-img>
    </ino-list-item>
  </ino-list>


  <h4>Graphic (Dense)</h4>
  <ino-list ino-dense>
    <ino-list-item ino-text="Lorem ipsum dolor sit">
        <ino-img slot="ino-leading" src="https://cdn-images-1.medium.com/max/1600/1*HP8l7LMMt7Sh5UoO1T-yLQ.png" ino-ratio-width="1" ino-ratio-height="1"></ino-img>
    </ino-list-item>
    <ino-list-item ino-text="Lorem ipsum dolor sit">
        <ino-img slot="ino-leading" src="https://cdn-images-1.medium.com/max/1600/1*HP8l7LMMt7Sh5UoO1T-yLQ.png" ino-ratio-width="1" ino-ratio-height="1"></ino-img>
    </ino-list-item>
  </ino-list>


  <h4>Icon with Text</h4>
  <ino-list>
    <ino-list-item ino-text="Lorem ipsum dolor sit">
      <ino-icon slot="ino-leading" class="ino-list-item__icon" ino-icon="star"></ino-icon>
    </ino-list-item>
    <ino-list-item ino-text="Lorem ipsum dolor sit">
      <ino-icon slot="ino-leading" class="ino-list-item__icon" ino-icon="star"></ino-icon>
    </ino-list-item>
  </ino-list>


  <h4>Leading Checkbox</h4>
  <ino-list>
    <ino-control-item ino-role="checkbox" ino-text="Lorem ipsum dolor sit"></ino-control-item>
    <ino-control-item ino-role="checkbox" ino-text="Lorem ipsum dolor sit"></ino-control-item>
  </ino-list>

  <h4>Leading Radio-Button</h4>
  <ino-list>
    <ino-control-item ino-role="radio" name="group-4" ino-text="Lorem ipsum dolor sit"></ino-control-item>
    <ino-control-item ino-role="radio" name="group-4" ino-text="Lorem ipsum dolor sit"></ino-control-item>
  </ino-list>


  <h4>Avatar List</h4>
  <ino-list ino-avatar>
    <ino-list-item ino-text="Lorem ipsum dolor sit">
        <ino-img slot="ino-leading" src="https://cdn-images-1.medium.com/max/1600/1*HP8l7LMMt7Sh5UoO1T-yLQ.png" ino-ratio-width="1" ino-ratio-height="1"></ino-img>
    </ino-list-item>
    <ino-list-item ino-text="Lorem ipsum dolor sit">
        <ino-img slot="ino-leading" src="https://cdn-images-1.medium.com/max/1600/1*HP8l7LMMt7Sh5UoO1T-yLQ.png" ino-ratio-width="1" ino-ratio-height="1"></ino-img>
    </ino-list-item>
  </ino-list>


  <h4>Avatar List (Dense)</h4>
  <ino-list ino-avatar ino-dense>
    <ino-list-item ino-text="Lorem ipsum dolor sit">
        <ino-img slot="ino-leading" src="https://cdn-images-1.medium.com/max/1600/1*HP8l7LMMt7Sh5UoO1T-yLQ.png" ino-ratio-width="1" ino-ratio-height="1"></ino-img>
    </ino-list-item>
    <ino-list-item ino-text="Lorem ipsum dolor sit">
        <ino-img slot="ino-leading" src="https://cdn-images-1.medium.com/max/1600/1*HP8l7LMMt7Sh5UoO1T-yLQ.png" ino-ratio-width="1" ino-ratio-height="1"></ino-img>
    </ino-list-item>
  </ino-list>


  <h4>Metadata</h4>
  <ino-list>
    <ino-list-item ino-text="Lorem ipsum dolor sit">
      <p slot="ino-trailing">$10.00</p>
    </ino-list-item>
    <ino-list-item ino-text="Lorem ipsum dolor sit">
      <p slot="ino-trailing">$10.00</p>
    </ino-list-item>
  </ino-list>


  <h4>Metadata (Dense)</h4>
  <ino-list ino-dense>
    <ino-list-item ino-text="Lorem ipsum dolor sit">
      <p slot="ino-trailing">$10.00</p>
    </ino-list-item>
    <ino-list-item ino-text="Lorem ipsum dolor sit">
      <p slot="ino-trailing">$10.00</p>
    </ino-list-item>
  </ino-list>


  <h4>Trailing Checkbox</h4>
  <ino-list>
    <ino-control-item ino-role="checkbox" ino-text="Lorem ipsum dolor sit" ino-trailing></ino-control-item>
    <ino-control-item ino-role="checkbox" ino-text="Lorem ipsum dolor sit" ino-trailing></ino-control-item>
  </ino-list>

  <h4>Checkbox + Metadata</h4>
  <ino-list>
    <ino-control-item ino-role="checkbox" ino-text="Lorem ipsum dolor sit"><p>Some Text</p></ino-control-item>
    <ino-control-item ino-role="checkbox" ino-text="Lorem ipsum dolor sit"><p>Some Text</p></ino-control-item>
  </ino-list>

  <h4>Checkbox + Metadata + Leading Icon</h4>
  <ino-list>
    <ino-control-item ino-role="checkbox" ino-trailing ino-text="Lorem ipsum dolor sit"><ino-icon ino-icon="add" /></ino-control-item>
    <ino-control-item ino-role="checkbox" ino-trailing ino-text="Lorem ipsum dolor sit"><ino-icon ino-icon="add" /></ino-control-item>
  </ino-list>

  <h4>Trailing Radio-Button</h4>
  <ino-list>
    <ino-control-item ino-role="radio" name="group-5" ino-text="Lorem ipsum dolor sit" ino-trailing></ino-control-item>
    <ino-control-item ino-role="radio" name="group-5" ino-text="Lorem ipsum dolor sit" ino-trailing></ino-control-item>
  </ino-list>

  <h4>Radio-Button + Metadata</h4>
  <ino-list>
    <ino-control-item ino-role="radio" name="group-6" ino-text="Lorem ipsum dolor sit"><p>Some Text</p></ino-control-item>
    <ino-control-item ino-role="radio" name="group-6" ino-text="Lorem ipsum dolor sit"><p>Some Text</p></ino-control-item>
  </ino-list>

  <h4>Radio-Button + Metadata + Leading Icon</h4>
  <ino-list>
    <ino-control-item ino-role="radio" name="group-7" ino-trailing ino-text="Lorem ipsum dolor sit"><ino-icon ino-icon="add" /></ino-control-item>
    <ino-control-item ino-role="radio" name="group-7" ino-trailing ino-text="Lorem ipsum dolor sit"><ino-icon ino-icon="add" /></ino-control-item>
  </ino-list>

  <h4>Avatar + Metadata</h4>
  <ino-list ino-avatar>
    <ino-list-item ino-text="Lorem ipsum dolor sit">
        <ino-img slot="ino-leading" src="https://cdn-images-1.medium.com/max/1600/1*HP8l7LMMt7Sh5UoO1T-yLQ.png" ino-ratio-width="1" ino-ratio-height="1"></ino-img>
        <p slot="ino-trailing">$10.00</p>
    </ino-list-item>
    <ino-list-item ino-text="Lorem ipsum dolor sit">
        <ino-img slot="ino-leading" src="https://cdn-images-1.medium.com/max/1600/1*HP8l7LMMt7Sh5UoO1T-yLQ.png" ino-ratio-width="1" ino-ratio-height="1"></ino-img>
        <p slot="ino-trailing">$10.00</p>
    </ino-list-item>
  </ino-list>


  <h4>Avatar + Metadata (Dense)</h4>
  <ino-list ino-avatar ino-dense>
    <ino-list-item ino-text="Lorem ipsum dolor sit">
        <ino-img slot="ino-leading" src="https://cdn-images-1.medium.com/max/1600/1*HP8l7LMMt7Sh5UoO1T-yLQ.png" ino-ratio-width="1" ino-ratio-height="1"></ino-img>
        <p slot="ino-trailing">$10.00</p>
    </ino-list-item>
    <ino-list-item ino-text="Lorem ipsum dolor sit">
        <ino-img slot="ino-leading" src="https://cdn-images-1.medium.com/max/1600/1*HP8l7LMMt7Sh5UoO1T-yLQ.png" ino-ratio-width="1" ino-ratio-height="1"></ino-img>
        <p slot="ino-trailing">$10.00</p>
    </ino-list-item>
  </ino-list>


  <h2>Two-Line List</h2>


  <h4>Graphic</h4>
  <ino-list ino-two-lines>
    <ino-list-item ino-text="Lorem ipsum dolor sit" ino-secondary-text="Secondary Lorem ipsum dolor sit">
      <ino-img slot="ino-leading" src="https://cdn-images-1.medium.com/max/1600/1*HP8l7LMMt7Sh5UoO1T-yLQ.png" ino-ratio-width="1" ino-ratio-height="1"></ino-img>
    </ino-list-item>
    <ino-list-item ino-text="Lorem ipsum dolor sit" ino-secondary-text="Secondary Lorem ipsum dolor sit">
      <ino-img slot="ino-leading" src="https://cdn-images-1.medium.com/max/1600/1*HP8l7LMMt7Sh5UoO1T-yLQ.png" ino-ratio-width="1" ino-ratio-height="1"></ino-img>
    </ino-list-item>
  </ino-list>


  <h4>Graphic (Dense)</h4>
  <ino-list ino-two-lines ino-dense>
    <ino-list-item ino-text="Lorem ipsum dolor sit" ino-secondary-text="Secondary Lorem ipsum dolor sit">
      <ino-img slot="ino-leading" src="https://cdn-images-1.medium.com/max/1600/1*HP8l7LMMt7Sh5UoO1T-yLQ.png" ino-ratio-width="1" ino-ratio-height="1"></ino-img>
    </ino-list-item>
    <ino-list-item ino-text="Lorem ipsum dolor sit" ino-secondary-text="Secondary Lorem ipsum dolor sit">
      <ino-img slot="ino-leading" src="https://cdn-images-1.medium.com/max/1600/1*HP8l7LMMt7Sh5UoO1T-yLQ.png" ino-ratio-width="1" ino-ratio-height="1"></ino-img>
    </ino-list-item>
  </ino-list>


  <h4>Avatar List</h4>
  <ino-list ino-two-lines ino-avatar>
    <ino-list-item ino-text="Lorem ipsum dolor sit" ino-secondary-text="Secondary Lorem ipsum dolor sit">
      <ino-img slot="ino-leading" src="https://cdn-images-1.medium.com/max/1600/1*HP8l7LMMt7Sh5UoO1T-yLQ.png" ino-ratio-width="1" ino-ratio-height="1"></ino-img>
    </ino-list-item>
    <ino-list-item ino-text="Lorem ipsum dolor sit" ino-secondary-text="Secondary Lorem ipsum dolor sit">
      <ino-img slot="ino-leading" src="https://cdn-images-1.medium.com/max/1600/1*HP8l7LMMt7Sh5UoO1T-yLQ.png" ino-ratio-width="1" ino-ratio-height="1"></ino-img>
    </ino-list-item>
  </ino-list>


  <h4>Avatar List (Dense)</h4>
  <ino-list ino-two-lines ino-avatar ino-dense>
    <ino-list-item ino-text="Lorem ipsum dolor sit" ino-secondary-text="Secondary Lorem ipsum dolor sit">
      <ino-img slot="ino-leading" src="https://cdn-images-1.medium.com/max/1600/1*HP8l7LMMt7Sh5UoO1T-yLQ.png" ino-ratio-width="1" ino-ratio-height="1"></ino-img>
    </ino-list-item>
    <ino-list-item ino-text="Lorem ipsum dolor sit" ino-secondary-text="Secondary Lorem ipsum dolor sit">
      <ino-img slot="ino-leading" src="https://cdn-images-1.medium.com/max/1600/1*HP8l7LMMt7Sh5UoO1T-yLQ.png" ino-ratio-width="1" ino-ratio-height="1"></ino-img>
    </ino-list-item>
  </ino-list>


  <h4>Metadata</h4>
  <ino-list ino-two-lines ino-avatar>
    <ino-list-item ino-text="Lorem ipsum dolor sit" ino-secondary-text="Secondary Lorem ipsum dolor sit">
        <p slot="ino-trailing">$10.00</p>
    </ino-list-item>
    <ino-list-item ino-text="Lorem ipsum dolor sit" ino-secondary-text="Secondary Lorem ipsum dolor sit">
        <p slot="ino-trailing">$10.00</p>
    </ino-list-item>
  </ino-list>


  <h4>Metadata (Dense)</h4>
  <ino-list ino-two-lines ino-avatar ino-dense>
    <ino-list-item ino-text="Lorem ipsum dolor sit" ino-secondary-text="Secondary Lorem ipsum dolor sit">
        <p slot="ino-trailing">$10.00</p>
    </ino-list-item>
    <ino-list-item ino-text="Lorem ipsum dolor sit" ino-secondary-text="Secondary Lorem ipsum dolor sit">
        <p slot="ino-trailing">$10.00</p>
    </ino-list-item>
  </ino-list>


  <h4>Example - Two-line Avatar + Text + Icon</h4>
  <ino-list ino-two-lines ino-avatar>
    <ino-list-item ino-text="Lorem ipsum dolor sit" ino-secondary-text="Secondary Lorem ipsum dolor sit">
      <ino-img slot="ino-leading" src="https://cdn-images-1.medium.com/max/1600/1*HP8l7LMMt7Sh5UoO1T-yLQ.png" ino-ratio-width="1" ino-ratio-height="1"></ino-img>
      <ino-icon slot="ino-trailing" class="ino-list-item__icon" ino-icon="info"></ino-icon>
    </ino-list-item>
    <ino-list-item ino-text="Lorem ipsum dolor sit" ino-secondary-text="Secondary Lorem ipsum dolor sit">
      <ino-img slot="ino-leading" src="https://cdn-images-1.medium.com/max/1600/1*HP8l7LMMt7Sh5UoO1T-yLQ.png" ino-ratio-width="1" ino-ratio-height="1"></ino-img>
      <ino-icon slot="ino-trailing" class="ino-list-item__icon" ino-icon="info"></ino-icon>
    </ino-list-item>
  </ino-list>
</div>
`;

ListItemVariants.decorators = [withStencilReadme(listItemReadme)];

export const ListDivider = () => /*html*/ `
<div class="story-list">
  <h4>Divider to seperate list items</h4>
  <ino-list>
    <ino-list-item ino-text="Item 1"></ino-list-item>
    <ino-list-item ino-text="Item 2"></ino-list-item>
    <ino-list-divider></ino-list-divider>
    <ino-list-item ino-text="Item 3"></ino-list-item>
  </ino-list>

  <h4>Divider to separate two lists</h4>
  <ino-list class="divider-two-lists">
    <ino-list-item ino-text="List 1 - item 1"></ino-list-item>
    <ino-list-item ino-text="List 1 - item 2"></ino-list-item>
    <ino-list-item ino-text="List 1 - item 3"></ino-list-item>
  </ino-list>
  <ino-list-divider ino-between-lists></ino-list-divider>
  <ino-list class="divider-two-lists">
    <ino-list-item ino-text="List 2 - item 1"></ino-list-item>
    <ino-list-item ino-text="List 2 - item 2"></ino-list-item>
    <ino-list-item ino-text="List 2 - item 3"></ino-list-item>
  </ino-list>

  <h4>Inset divider</h4>
  <ino-list>
    <ino-list-item ino-text="Add to favorites">
      <ino-icon slot="ino-leading" ino-icon="favorite"></ino-icon>
    </ino-list-item>
    <ino-list-divider ino-inset></ino-list-divider>
    <ino-list-item ino-text="Star it!">
      <ino-icon slot="ino-leading" ino-icon="star"></ino-icon>
    </ino-list-item>
  </ino-list>
</div>
`;

ListDivider.decorators = [withStencilReadme(listDividerReadme)];

export const ControlItem = () => /*html*/ `
<div class="story-list">
  <h4>Default checkbox/radio item</h4>
  <ino-list class="first-densed-list">
    <ino-control-item ino-role="checkbox" checked ino-text="First text item"> </ino-control-item>
    <ino-control-item ino-role="checkbox" ino-text="Second text item"></ino-control-item>
  </ino-list>

  <ino-list class="first-densed-list">
    <ino-control-item name="group" ino-role="radio" name="group-8" ino-text="First text item"> </ino-control-item>
    <ino-control-item name="group" ino-role="radio" name="group-8" ino-text="Second text item"></ino-control-item>
  </ino-list>

  <h4>Different checkbox/radio items</h4>
  <ino-list class="first-densed-list">
    <ino-control-item ino-role="checkbox" ino-trailing ino-text="First text item"><ino-icon ino-icon="add"></ino-icon></ino-control-item>
    <ino-control-item ino-role="checkbox" ino-text="First text item"><p>Some Text</p></ino-control-item>
    <ino-control-item ino-role="checkbox" ino-trailing ino-text="Second text item"></ino-control-item>
  </ino-list>
  <ino-list class="first-densed-list">
    <ino-control-item ino-role="radio" name="group-9" ino-trailing ino-text="First text item"><ino-icon ino-icon="add"></ino-icon></ino-control-item>
    <ino-control-item ino-role="radio" name="group-9" ino-text="First text item"><p>Some Text</p></ino-control-item>
    <ino-control-item ino-role="radio" name="group-9" ino-trailing ino-text="Second text item"></ino-control-item>
  </ino-list>

  <h4>Trailing checkbox/radio items</h4>
  <ino-list class="first-densed-list">
    <ino-control-item ino-role="checkbox" ino-trailing ino-text="First text item"></ino-control-item>
    <ino-control-item ino-role="checkbox" ino-trailing ino-text="Second text item"></ino-control-item>
  </ino-list>
  <ino-list class="first-densed-list">
    <ino-control-item ino-role="radio" name="group-10" ino-trailing ino-text="First text item"></ino-control-item>
    <ino-control-item ino-role="radio" name="group-10" ino-trailing ino-text="Second text item"></ino-control-item>
  </ino-list>

  <h4>Densed checkbox/radio item</h4>
  <ino-list class="first-densed-list" ino-dense>
    <ino-control-item ino-role="checkbox" ino-text="First text item"> </ino-control-item>
    <ino-control-item ino-role="checkbox" ino-text="Second text item"></ino-control-item>
  </ino-list>
  <ino-list class="first-densed-list" ino-dense>
    <ino-control-item ino-role="radio" name="group-11" ino-text="First text item"> </ino-control-item>
    <ino-control-item ino-role="radio" name="group-11" ino-text="Second text item"></ino-control-item>
  </ino-list>

  <h4>Two lined checkbox/radio item</h4>
  <ino-list ino-two-lines class="first-densed-list">
    <ino-control-item ino-role="checkbox" ino-text="First text item" ino-secondary-text="Secondary Text"> </ino-control-item>
    <ino-control-item ino-role="checkbox" ino-text="Second text item" ino-secondary-text="Secondary Text"></ino-control-item>
  </ino-list>
   <ino-list ino-two-lines class="first-densed-list">
    <ino-control-item ino-role="radio" name="group-12" ino-text="First text item" ino-secondary-text="Secondary Text"> </ino-control-item>
    <ino-control-item ino-role="radio" name="group-12" ino-text="Second text item" ino-secondary-text="Secondary Text"></ino-control-item>
  </ino-list>

  <h4>Disabled checkbox/radio item</h4>
  <ino-list class="first-densed-list">
    <ino-control-item ino-role="checkbox" ino-disabled ino-text="First text item"> </ino-control-item>
    <ino-control-item ino-role="checkbox" ino-disabled ino-text="Second text item"></ino-control-item>
  </ino-list>
  <ino-list class="first-densed-list">
    <ino-control-item ino-role="radio" name="group-13" ino-disabled ino-text="First text item"> </ino-control-item>
    <ino-control-item ino-role="radio" name="group-13" ino-disabled ino-text="Second text item"></ino-control-item>
  </ino-list>

  <h4>Activated & selected checkbox/radio item</h4>
  <ino-list class="first-densed-list">
    <ino-control-item ino-role="checkbox" ino-activated ino-text="Activated item"> </ino-control-item>
    <ino-control-item ino-role="checkbox" ino-selected ino-text="Selected item"></ino-control-item>
  </ino-list>
  <ino-list class="first-densed-list">
    <ino-control-item ino-role="radio" name="group-14" ino-activated ino-text="Activated item"> </ino-control-item>
    <ino-control-item ino-role="radio" name="group-14" ino-selected ino-text="Selected item"></ino-control-item>
  </ino-list>
</div>
`;

ControlItem.decorators = [withStencilReadme(listItemControlReadme)];

export const NavItem = () => /*html*/ `
<style>
  .customizable-nav-item {
    --ino-nav-item-color: ${text(
  '--ino-nav-item-color',
  'black',
  'Custom Properties'
)};
    --ino-nav-item-color-active: ${text(
  '--ino-nav-item-color-active',
  'blue',
  'Custom Properties'
)};
    --ino-nav-item-background-color: ${text(
  '--ino-nav-item-background-color',
  '#ffffff',
  'Custom Properties'
)};
    --ino-nav-item-background-color-active: ${text(
  '--ino-nav-item-background-color-active',
  '#red',
  'Custom Properties'
)};
  }
</style>
<div class="story-list">
  <h4>Customizable nav item</h4>
  <ino-list>
    <ino-nav-item
      class="customizable-nav-item"
      ino-text="${text('ino-text', 'Nav item')}"
      ino-activated="${boolean('ino-activated', false)}"
      ino-disabled="${boolean('ino-disabled', false)}"
    >
      <ino-icon ino-icon="onboarding" class="ino-list-item__icon"></ino-icon>
    </ino-nav-item>
  </ino-list>

  <h4>States</h4>
  <ino-list>
    <ino-nav-item ino-text="Simple item"></ino-nav-item>
    <ino-nav-item ino-text="Simple item 2"></ino-nav-item>
    <ino-nav-item ino-activated ino-text="Activated item"></ino-nav-item>
    <ino-nav-item ino-disabled ino-text="Disabled item"></ino-nav-item>
  </ino-list>

  <h4>Graphic</h4>
  <ino-list>
    <ino-nav-item ino-text="Lorem ipsum dolor sit">
      <ino-icon ino-icon="onboarding" class="ino-list-item__icon"></ino-icon>
    </ino-nav-item>
    <ino-nav-item ino-text="Lorem ipsum dolor sit">
      <ino-img src="https://cdn-images-1.medium.com/max/1600/1*HP8l7LMMt7Sh5UoO1T-yLQ.png" ino-ratio-width="1" ino-ratio-height="1"></ino-img>
    </ino-nav-item>
  </ino-list>
</div>
`;

NavItem.decorators = [withStencilReadme(navItemReadme)];
