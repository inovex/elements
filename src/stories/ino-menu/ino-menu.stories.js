import {storiesOf} from '@storybook/html';
import {boolean} from '@storybook/addon-knobs';

import withStencilReadme from '../core/with-stencil-readme';

import componentReadme from '../../components/ino-menu/readme.md';
import './ino-menu.scss';

storiesOf('<ino-menu>', module)
  .addDecorator(withStencilReadme(componentReadme))
  .add('Default usage', () => /*html*/`
    <div class="story-menu">      
      <h4>Customizable Menu</h4>  
      <ino-button id="button">Open menu</ino-button>
      <ino-menu 
        ino-for="button"
        ino-open="${boolean('ino-open', false)}"
      >
        <ino-list-item ino-text="Item"></ino-list-item>
        <ino-list-item ino-text="Item 2"></ino-list-item>
      </ino-menu>

      <h4>Variation with divider</h4>
      <ino-button id="menu-2">Open divided menu</ino-button>
      <ino-menu ino-for="menu-2" ino-open="${boolean('ino-open', false)}">
        <ino-list-item ino-text="Home"></ino-list-item>
        <ino-list-item ino-text="Projects"></ino-list-item>
        <ino-list-divider></ino-list-divider>
        <ino-list-item ino-text="User"></ino-list-item>
        <ino-list-item ino-text="Settings"></ino-list-item>
      </ino-menu>
    </div>
  `);
