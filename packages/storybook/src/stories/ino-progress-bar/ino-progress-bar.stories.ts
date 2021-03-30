import { html } from 'lit-html';
import { defaultDecorator } from '../utils';
import './ino-progress-bar.scss';

export default {
  title: 'Components (WIP)/ino-progress-bar',
  component: 'ino-progress-bar',
  decorators: [defaultDecorator],
};

export const Playground = (args) => {
  return html`
    <ino-progress-bar
      debounce="${args.debounce}"
      buffer="${args.buffer}"
      progress="${args.progress}"
      reversed="${args.reversed}"
      indeterminate="${args.indeterminate}"
      label="${args.label}"
      inactive="${args.inactive}"
    >
    </ino-progress-bar>
  `;
}
Playground.args = {
  debounce: 0,
  buffer: 0.9,
  progress: 0.4,
  reversed: false,
  indeterminate: false,
  label: 'Progress Bar',
  inactive: false,
}
Playground.argTypes = {
  buffer: {
    control: { min: 0, max: 1, step: 0.1 }
  },
  progress: {
    control: { min: 0, max: 1, step: 0.1 }
  }
}

export const Variants = () => html`
  <h5>With buffering dots</h5>
  <ino-progress-bar buffer="0.8" progress="0.3"></ino-progress-bar>

  <h5>Without buffering dots</h5>
  <ino-progress-bar buffer="1" progress="0.3"></ino-progress-bar>

  <h5>Indeterminate progress bar</h5>
  <ino-progress-bar indeterminate></ino-progress-bar>

  <h5>Reversed progress bar</h5>
  <ino-progress-bar reversed progress="0.6" buffer="0.8"></ino-progress-bar>
`;

export const Debounce = () => html`
  <h5>Wait for 2 seconds before showing the progress bar</h5>
  <ino-progress-bar debounce="2000" indeterminate></ino-progress-bar>
`;
