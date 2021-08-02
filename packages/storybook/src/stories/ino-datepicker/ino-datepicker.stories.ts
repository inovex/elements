import { Components } from '@inovex.de/elements';
import { useEffect } from '@storybook/client-api';
import { Meta, Story } from '@storybook/web-components';
import { html } from 'lit-html';
import * as moment from 'moment';
import { defaultDecorator } from '../utils';
import './ino-datepicker.scss';

const days = 5;
const defaultDate = moment().format('YYYY-MM-DD');
const minDate = moment().subtract(days, 'days').format('YYYY-MM-DD');
const maxDate = moment().add(days, 'days').format('YYYY-MM-DD');

export default {
  title: 'Input/ino-datepicker',
  component: 'ino-datepicker',
  parameters: {
    actions: {
      handles: ['valueChange .customizable-picker', 'submit .form'],
    },
  },
  decorators: [
    defaultDecorator,
    (story) => {
      useEffect(() => {
        const eventHandler = (e) => e.target.setAttribute('value', e.detail);
        document.addEventListener('valueChange', eventHandler);
        return () => document.removeEventListener('valueChange', eventHandler);
      });
      return story();
    },
  ],
} as Meta;

export const Playground: Story<Components.InoDatepicker> = (args) => html`
  <ino-datepicker
    class="customizable-picker"
    disabled="${args.disabled}"
    date-format="${args.dateFormat}"
    helper="${args.helper}"
    helper-persistent="${args.helperPersistent}"
    helper-validation="${args.helperValidation}"
    label="${args.label}"
    min="${args.min}"
    max="${args.max}"
    outline="${args.outline}"
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
  label: 'Label',
  min: minDate,
  max: maxDate,
  outline: false,
  range: false,
  required: false,
  showLabelHint: false,
  twelveHourTime: false,
  type: 'date',
  value: defaultDate,
};

Playground.argTypes = {
  type: {
    control: {
      type: 'select',
    },
    options: ['datetime', 'month', 'date', 'time'],
  },
};

export const Formats = () => html`
  <ino-datepicker
    type="datetime"
    date-format="H:i d.m.Y"
    label="Datetime"
  ></ino-datepicker>
  <ino-datepicker type="date" date-format="d.m.Y" label="Date"></ino-datepicker>
  <ino-datepicker type="time" date-format="H:i" label="Time"></ino-datepicker>
  <ino-datepicker date-format="d.m.Y" range label="Range"></ino-datepicker>
  <ino-datepicker date-format="m.Y" type="month" label="Month"></ino-datepicker>
`;

export const Restrictions = () => html`
  <ino-datepicker
    label="Predefined value"
    date-format="Y-m-d"
    value="${defaultDate}"
  ></ino-datepicker>
  <ino-datepicker
    label="Min date"
    date-format="Y-m-d"
    min="${minDate}"
  ></ino-datepicker>
  <ino-datepicker
    label="Max date"
    date-format="Y-m-d"
    max="${maxDate}"
  ></ino-datepicker>
  <ino-datepicker
    label="Min and Max date"
    date-format="Y-m-d"
    min="${minDate}"
    max="${maxDate}"
  ></ino-datepicker>
  <ino-datepicker
    type="time"
    label="hour step and minute step"
    hour-step="2"
    minute-step="5"
    date-format="H:i"
  ></ino-datepicker>
  <ino-datepicker
    type="time"
    label="Default hour and minute"
    date-format="H:i"
    default-hour="14"
    default-minute="49"
  ></ino-datepicker>
`;

export const Variations = () => html`
  <ino-datepicker
    type="time"
    date-format="h:i K"
    label="Twelve hour time"
    twelve-hour-time
  ></ino-datepicker>
`;

export const States = () => html`
  <ino-datepicker label="Disabled" disabled></ino-datepicker>
  <ino-datepicker label="Required" required show-label-hint></ino-datepicker>
  <ino-datepicker label="Optional" show-label-hint></ino-datepicker>
`;

export const Locale = () => html`
  <ino-datepicker lang="en" label="English"></ino-datepicker>
  <ino-datepicker lang="de" date-format="d.m.Y" label="German"></ino-datepicker>
  <ino-datepicker
    lang="de"
    date-format="d.m.Y"
    range
    label="German range"
  ></ino-datepicker>
`;

export const Form = () => html`
  <h4>Required</h4>
  <p>The form should not submit as long as the date field is empty.</p>
  <form class="form" onSubmit="return false;">
    <ino-datepicker label="Required" required></ino-datepicker>
    <button type="submit">Submit</button>
  </form>
`;
