import { html } from 'lit-html';
import { useEffect } from '@storybook/client-api';
import { defaultDecorator } from '../utils';
import './ino-datepicker.scss';
import moment from 'moment';

// See https://github.com/storybookjs/storybook/issues/12208
const defaultDate = moment()["format"]('YYYY-MM-DD');
const minDate = moment()["subtract"](5, 'days').format('YYYY-MM-DD');
const maxDate = moment()["add"](5, 'days').format('YYYY-MM-DD');

export default {
  title: 'Components (WIP)/ino-datepicker',
  component: 'ino-datepicker',
  parameters: {
    actions: {
      handles: ['valueChange .customizable-picker', 'submit .form'],
    },
  },
  decorators: [defaultDecorator, story => {
    useEffect(() => {
      const eventHandler = e => e.target.setAttribute('value', e.detail);
      document.addEventListener('valueChange', eventHandler);
      return () => document.removeEventListener('valueChange', eventHandler);
    });
    return story();
  }]
};

export const Playground = args => html`
  <ino-datepicker
    class="customizable-picker"
    disabled="${args.disabled}"
    date-format="${args.dateFormat}"
    helper="${args.helper}"
    helper-persistent="${args.helperPersistent}"
    helper-validation="${args.helperValidation}"
    inline="${args.inline}"
    label="${args.label}"
    min="${args.min}"
    max="${args.max}"
    outlined="${args.outlined}"
    range="${args.range}"
    required="${args.required}"
    show-label-hint="${args.showLabelHint}"
    twelve-hour-time="${args.twelveHourTime}"
    type="${args.type}"
    value="${args.value}"
  >
  </ino-datepicker>
`;
Playground.args = {
  disabled: false,
  dateFormat: 'Y-m-d',
  helper: 'Helper text to describe the input',
  helperPersistent: false,
  helperValidation: false,
  inline: true,
  label: 'Label',
  min: minDate,
  max: maxDate,
  outlined: false,
  range: false,
  required: false,
  showLabelHint: false,
  twelveHourTime: false,
  type: 'date',
  value: defaultDate,
}
Playground.argTypes = {
  type: {
    control: {
      type: 'select',
      options: ['datetime', 'month', 'date', 'time'],
    },
  }
}

export const Formats = () => html`
  <ino-datepicker type="datetime" date-format="H:i d.m.Y" label="Datetime"></ino-datepicker>
  <ino-datepicker type="date" date-format="d.m.Y" label="Date"></ino-datepicker>
  <ino-datepicker type="time" date-format="H:i" label="Time"></ino-datepicker>
  <ino-datepicker date-format="d.m.Y" range label="Range"></ino-datepicker>
  <ino-datepicker type="month" label="Month"></ino-datepicker>
`;

export const Restrictions = () => html`
  <ino-datepicker label="Predefined value" date-format="Y-m-d" value="${defaultDate}"></ino-datepicker>
  <ino-datepicker label="Min date" date-format="Y-m-d" min="${minDate}"></ino-datepicker>
  <ino-datepicker label="Max date" date-format="Y-m-d" max="${maxDate}"></ino-datepicker>
  <ino-datepicker label="Min and Max date" date-format="Y-m-d" min="${minDate}" max="${maxDate}"></ino-datepicker>
  <ino-datepicker type="time" label="hour step and minute step" hour-step="2" minute-step="5" date-format="H:i"></ino-datepicker>
  <ino-datepicker type="time" label="Default hour and minute" date-format="H:i" default-hour="14" default-minute="49"></ino-datepicker>
`;

export const Variations = () => html`
  <ino-datepicker type="time" date-format="h:i K" label="Twelve hour time" twelve-hour-time></ino-datepicker>
`;

export const States = () => html`
  <ino-datepicker label="Disabled" disabled></ino-datepicker>
  <ino-datepicker label="Required" required show-label-hint></ino-datepicker>
  <ino-datepicker label="Readonly" value="${defaultDate}" readonly></ino-datepicker>
  <ino-datepicker label="Optional" show-label-hint></ino-datepicker>
`;

export const Locale = () => html`
  <ino-datepicker lang="en" label="English"></ino-datepicker>
  <ino-datepicker lang="de" date-format="d.m.Y" label="German"></ino-datepicker>
  <ino-datepicker lang="de" date-format="d.m.Y" range label="German range"></ino-datepicker>
`;

export const Form = () => html`
  <h4>Required</h4>
  <p>The form should not submit as long as the date field is empty.</p>
  <form class="form" onSubmit="return false;">
    <ino-datepicker label="Required" required></ino-datepicker>
    <button type="submit">Submit</button>
  </form>
`;

export const MultipleTypes = () => {
  useEffect(() => {
    const group = document.querySelector('ino-radio-group') as any;
    const datepicker = document.querySelector('.datepicker-group ino-datepicker') as any;
   
    // Shortcuts 
    document.querySelector('.today').addEventListener('click', () => {
      datepicker.value = '02.03.2020';
      datepicker.label = 'Am'
      group.value = 'at'
      datepicker.range = false;
    })
    document.querySelector('.thisWeek').addEventListener('click', () => {
      group.value = 'range'
      datepicker.label = 'Zeitraum';
      datepicker.range = true;
      datepicker.value = '02.03.2020 - 08.03.2020';
    })
    document.querySelector('.lastWeek').addEventListener('click', () => {
      group.value = 'range'
      datepicker.label = 'Zeitraum';
      datepicker.range = true;
      datepicker.value = '24.02.2020 - 01.03.2020';
    })

    // Radio Button handler
    group.addEventListener('checkedChange', (e: any) => {
      switch (e.target.value) {
        case 'at':
          datepicker.label = 'Am';
          datepicker.range = false;
          break;
        case 'after':
          datepicker.label = 'Ab';
          datepicker.range = false;
          if (group.value == 'range') {
            datepicker.value = datepicker.value.split(" - ").shift();
          }
          break;
        case 'before':
          datepicker.label = 'Bis';
          datepicker.range = false;
          if (group.value == 'range') {
            datepicker.value = datepicker.value.split(" - ").pop();
          }
          break;
        case 'range':
          datepicker.range = true;
          datepicker.label = 'Zeitraum';
          break;
      }
      group.value = e.target.value;
    });
  });
  
  return html`
    <div lang="de" class="datepicker-group">
      <aside>
        <ul>
          <li class="today">Heute</li>
          <li class="lastWeek">Letzte Woche</li>
          <li class="thisWeek">Diese Woche</li>
        </ul>
      </aside>
      <main id="main">
        <ino-datepicker type="date" label="An" inline date-format="d.m.Y" placeholder="tt.mm.jjjj" append-to="main">
        </ino-datepicker>
        <ino-radio-group value="at">
          <ino-radio value="at">Am</ino-radio>
          <ino-radio value="after">Ab</ino-radio>
          <ino-radio value="before">Bis</ino-radio>
          <ino-radio value="range">Zeitraum</ino-radio>
        </ino-radio-group>
      </main>
    </div>
  `;
};