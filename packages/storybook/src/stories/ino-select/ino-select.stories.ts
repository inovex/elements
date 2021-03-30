import { html } from 'lit-html';
import { useEffect } from '@storybook/client-api';
import { defaultDecorator } from '../utils';
import './ino-select.scss';

export default {
  title: 'Components (WIP)/ino-select',
  component: 'ino-select',
  parameters: {
    actions: {
      handles: ['valueChange .customizable-select', 'submit .form'],
    },
  },
  decorators: [defaultDecorator, story => {
    useEffect(() => {
      const eventHandler = e => e.target.setAttribute('value', e.detail);
      const selects = document.querySelectorAll('ino-select');
      selects.forEach(s => s.addEventListener('valueChange', eventHandler));
      return () => selects.forEach(s => s.removeEventListener('valueChange', eventHandler));
    });
    return story();
  }],
};

const optionsTemplate = html`
  <ino-option value="Option 1">Option 1</ino-option>
  <ino-option value="Option 2">Option 2</ino-option>
  <ino-option value="Option 3">Option 3</ino-option>
  <ino-option value="Option 4">Option 4</ino-option>
`;

export const Playground = (args) => html`
  <div class="story-select">
    <ino-select class="customizable-select"
      name="${args.name}"
      outline="${args.outline}"
      label="${args.label}"
      required="${args.required}"
      show-label-hint="${args.showLabelHint}"
      value="${args.value}"
    >
      ${optionsTemplate}
    </ino-select>
  </div>
`;
Playground.args = {
  name: 'select-1',
  outline: false,
  label: 'Customizable select',
  required: false,
  showLabelHint: false,
  value: 'Option 1',
}

export const Labels = () => html`
  <div class="story-select">
    <ino-select>
      <ino-option value="No Label" selected>No label</ino-option>
      ${optionsTemplate}
    </ino-select>
    <ino-select label="Floating label">
      <ino-option value="Selected Option" selected>Selected Option</ino-option>
      ${optionsTemplate}
    </ino-select>
    <ino-select label="Floating label outlined" outline>
      <ino-option value="Selected Option" selected>Selected Option</ino-option>
      ${optionsTemplate}
    </ino-select>
  <div class="story-select">
`;

export const States = () => html`
  <div class="story-select">
    <ino-select disabled label="Disabled select">
      <ino-option value="Selected Option" selected>Selected Option</ino-option>
      ${optionsTemplate}
    </ino-select>
    <ino-select label="Select with disabled option">
      ${optionsTemplate}
      <ino-option value="Disabled Option" disabled>Disabled Option</ino-option>
    </ino-select>
    <ino-select required label="Required select" show-label-hint>
      ${optionsTemplate}
    </ino-select>
    <ino-select label="Optional select" show-label-hint>
      ${optionsTemplate}
    </ino-select>
  <div class="story-select">
`;

// Does not work as described
/* export const Forms = () => html`
  <div class="story-select">
    <p>The form should not submit since no option is selected and the select is required.</p>
    <form class="form" onSubmit="alert('Form submitted'); return false;">
        <ino-select label="Form select" required>
          <ino-option value="Test">Test</ino-option>
        </ino-select>
        <button type="submit">Submit</button>
    </form>
  </div>
`; */
