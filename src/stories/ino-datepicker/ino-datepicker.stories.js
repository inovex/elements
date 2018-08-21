import { storiesOf } from '@storybook/vue';
import moment from 'moment';

import { action } from '@storybook/addon-actions';
import { select, text, boolean, number } from '@storybook/addon-knobs/vue';

import renderTemplate from '../core/playground-story/template-renderer';

import componentReadme from '../../components/ino-datepicker/readme.md';
import './ino-datepicker.scss';


const defaultDate = moment().add(1, 'days');
const minDate = moment().subtract(5, 'days').format('YYYY-MM-DD');
const maxDate = moment().add(5, 'days').format('YYYY-MM-DD');

storiesOf('<ino-datepicker>', module)
  .addDecorator(renderTemplate(componentReadme))
  .add('Default usage', () => ({
    render: h => (
      <div class="story-datepicker">
        <ino-datepicker class="customizable-picker"
          placeholder={text('placeholder', '')}
          ino-type={select('ino-type', ['datetime', 'date', 'time'], 'datetime')}
          ino-default-date={text('ino-default-date', defaultDate.format('YYYY-MM-DD HH:mm'))}
          min={text('min', minDate)}
          max={text('max', maxDate)}
          disabled={boolean('disabled', false)}
          required={boolean('required', false)}
          ino-twelf-hour-time={boolean('ino-twelf-hour-time', false)}>
        </ino-datepicker>
      
        <h4>Types</h4>
        <ino-datepicker ino-type="datetime" placeholder="Datetime"></ino-datepicker>
        <ino-datepicker ino-type="date" placeholder="Date"></ino-datepicker>
        <ino-datepicker ino-type="time" placeholder="Time"></ino-datepicker>

        <h4>Restrictions</h4>
        <ino-datepicker placeholder="Custom default date" ino-default-date="2017-02-02" ino-type="date"></ino-datepicker>
        <ino-datepicker placeholder="Min date" min={minDate} ino-type="date"></ino-datepicker>
        <ino-datepicker placeholder="Max date" max={maxDate}  ino-type="date"></ino-datepicker>
        <ino-datepicker placeholder="Min and Max date" min={minDate} max={maxDate}  ino-type="date"></ino-datepicker>
        <ino-datepicker placeholder="Default hour and minute" ino-type="time" ino-default-hour="14" ino-default-minute="49"></ino-datepicker>

        <h4>Variations</h4>
        <ino-datepicker ino-type="time" placeholder="Twelf hour time" ino-twelf-hour-time></ino-datepicker>
        
        <h4>States</h4>
        <ino-datepicker ino-type="datetime" placeholder="Disabled" disabled></ino-datepicker>
        <ino-datepicker ino-type="datetime" placeholder="Required" required></ino-datepicker>
      </div>
    )
  }))
  .add('Forms', () => ({
    render: h => (
      <div class="story-datepicker">
        <h4>Required</h4>
        <p>The form should not submit as long as the date field is empty.</p>
        <form onSubmit={ e => { e.preventDefault(); action('form submitted')(e); }}>
          <ino-datepicker ino-type="datetime" placeholder="Required" required></ino-datepicker>
          <ino-button type="submit">Submit</ino-button>
        </form>
      </div>
    )
  }))
;