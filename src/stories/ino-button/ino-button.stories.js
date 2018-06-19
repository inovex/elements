import { storiesOf } from '@storybook/vue';

import { action } from '@storybook/addon-actions';
import { text, boolean, select } from '@storybook/addon-knobs/vue';

import renderTemplate from '../core/playground-story/template-renderer';

import componentReadme from '../../components/ino-button/readme.md';
import './ino-button.scss';



storiesOf('<ino-button>', module)
  .addDecorator(renderTemplate(componentReadme))
  .add('Default usage', () => ({
    render: h => (
      <div class="story-button">
        <ino-button
          class="customizable-button"
          onClick={action('button clicked')}
          ino-color-scheme={select(
            'ino-color-scheme',
            ['primary', 'secondary', 'tertiary', 'success', 'warning', 
             'error', 'light', 'dark'
            ],
            'primary'
          )}
          ino-fill={select('ino-fill', ['solid', 'outline', 'raised', 'transparent'])}
          ino-icon={text('ino-icon', '')}
          ino-icon-prepend={boolean('ino-icon-prepend', false)}
          ino-dense={boolean('ino-dense', false)}
          disabled={boolean('disabled', false)}
        >
          {text('<slot />', 'Customizable button')}
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
        <ino-button ino-icon="equalizer">Button Icon left</ino-button>
        <ino-button ino-icon="equalizer" ino-icon-prepend>Button icon right</ino-button>

        <h4>States</h4>
        <ino-button disabled>Disabled button</ino-button>
      </div>
    )
  }))
  .add('Forms', () => ({
    render: h => (
      <div class="story-button">
        <h4>Form submit</h4>
        <form onSubmit={ e => { e.preventDefault(); action('form submitted')(e); }}>
          <ino-button type="submit">Button to submit parent form</ino-button>
          <ino-button type="submit" disabled>Disabled button does not submit form</ino-button>
        </form>

        <h4>Form reset</h4>
        <form class="reset-form" onReset={action('form resetted')}>
          <ino-input class="reset-input" placeholder="Input in reset form" value="Value"></ino-input>
          <ino-button type="reset">Reset form values on the left</ino-button>
        </form>

        <h4>Button that submits external form with form attribute</h4>
        <form id="form1" onSubmit={ e => { e.preventDefault(); action('form submitted')(e); }}>
        <ino-button type="submit" form="form1">Button with form attribute</ino-button>
        </form>
      </div>
    )
  }));