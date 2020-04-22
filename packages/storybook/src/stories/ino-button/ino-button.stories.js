import { withActions } from '@storybook/addon-actions';
import { boolean, select, text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/html';
import ICONS from '_local-elements/src/components/ino-icon/icons';


import componentReadme from '_local-elements/src/components/ino-button/readme.md';
import withStencilReadme from '_local-storybookcore/with-stencil-readme';

import './ino-button.scss';

storiesOf('<ino-button>', module)
  .addDecorator(withStencilReadme(componentReadme))
  .addDecorator(withActions(
    'click .customizable-button',
    'reset .reset-form',
    'submit .submit-form'
  ))
  .add('Default usage', () => /* html */`
    <div class="story-button">
      <ino-button
        class="customizable-button"
        ino-color-scheme="${select(
          'ino-color-scheme',
          ['primary', 'secondary', 'tertiary', 'success', 'warning',
           'error', 'light', 'dark'
          ],
          'primary'
        )}"
        ino-fill="${select('ino-fill', ['solid', 'outline', 'raised', 'transparent'], 'solid')}"
        ino-icon="${select('ino-icon', ICONS, '')}"
        ino-icon-prepend="${boolean('ino-icon-prepend', false)}"
        ino-dense="${boolean('ino-dense', false)}"
        disabled="${boolean('disabled', false)}"
        ino-loading="${boolean('ino-loading', false)}"
      >
        ${text('<slot />', 'Customizable button')}
      </ino-button>

      <h4>Colors</h4>
      <ino-button ino-color-scheme="primary">Primary</ino-button>
      <ino-button ino-color-scheme="secondary">Secondary</ino-button>
      <ino-button ino-color-scheme="tertiary">Tertiary</ino-button>
      <ino-button ino-color-scheme="success">Success</ino-button>
      <ino-button ino-color-scheme="warning">Warning</ino-button>
      <ino-button ino-color-scheme="error">Error</ino-button>

      <h4>Variations</h4>
      <ino-button ino-fill="solid">Solid (default)</ino-button>
      <ino-button ino-fill="outline">Outlined</ino-button>
      <ino-button ino-fill="raised">Raised</ino-button>
      <ino-button ino-fill="transparent">Transparent</ino-button>

      <h4>Densed</h4>
      <ino-button ino-dense>Dense</ino-button>
      <ino-button ino-fill="outline" ino-dense>Outlined & dense</ino-button>
      <ino-button ino-fill="raised" ino-dense>Raised & dense</ino-button>
      <ino-button ino-fill="transparent" ino-dense>Transparent & dense</ino-button>


      <h4>With icons</h4>
      <ino-button ino-icon="checkmark">Button Icon left</ino-button>
      <ino-button ino-icon="checkmark" ino-icon-prepend>Button icon right</ino-button>

      <h4>States</h4>
      <ino-button disabled>Disabled button</ino-button>
      <ino-button disabled ino-fill="outline">Disabled outlined button</ino-button>
      <ino-button ino-loading="true">Loading button</ino-button>
      <ino-button ino-loading="true" ino-fill="outline">Loading button</ino-button>
    </div>
  `)
  .add('Forms', () => /*html*/`
    <script>
      const form = querySelector('form');
      form.addEventListener('submit', e => e.preventDefault());
    </script>

    <div class="story-button">
      <h4>Form submit</h4>
      <form class="submit-form" onsubmit="return false;">
        <ino-button type="submit">Button to submit parent form</ino-button>
        <ino-button type="submit" disabled>Disabled button does not submit form</ino-button>
      </form>

      <h4>Form reset</h4>
      <form class="reset-form">
        <ino-input class="reset-input" placeholder="Input in reset form" value="Value"></ino-input>
        <ino-button type="reset">Reset form values on the left</ino-button>
      </form>

      <h4>Button that submits external form with form attribute</h4>
      <form class="submit-form" id="form1" onsubmit="return false;">
      <ino-button type="submit" form="form1">Button with form attribute</ino-button>
      </form>
    </div>
  `);
