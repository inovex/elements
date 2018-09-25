import { storiesOf } from "@storybook/html";
import { text, boolean } from '@storybook/addon-knobs';
import withStencilReadme from '../core/with-stencil-readme';
import componentReadme from '../../components/ino-snackbar/readme.md';
import './ino-snackbar.scss';


storiesOf('<ino-snackbar>', module)
  .addDecorator(withStencilReadme(componentReadme))
  .add('Default usage', () => /*html*/`
    <div class="story-message-box">
      <div class="flex-parent-center">
        <div>
          <h4>Customizable Snackbar</h4>
          <ino-snackbar 
            ino-show="${boolean('ino-show', false)}"
            ino-message="${text('ino-message', 'Message deleted')}" 
            ino-action-text="${text('ino-action-text', 'Undo')}" 
            ino-multiline="${boolean('ino-multiline', false)}" 
            ino-action-on-bottom="${boolean('ino-action-on-bottom', false)}" 
            ino-align-start="${boolean('ino-align-start', false)}"/>
        </div>
      </div>

      <h4>Types</h4>
    </div>
  `);
