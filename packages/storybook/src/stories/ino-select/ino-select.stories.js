import CoreEvents from '@storybook/core-events';
import addons from '@storybook/addons';

import { withActions } from '@storybook/addon-actions';
import { boolean, text } from '@storybook/addon-knobs';

import withStencilReadme from '_local-storybookcore/with-stencil-readme';

import componentReadme from '_local-elements/src/components/ino-select/readme.md';
import optionComponentReadme from '_local-elements/src/components/ino-option/readme.md';
import optionGroupComponentReadme from '_local-elements/src/components/ino-option-group/readme.md';

import './ino-select.scss';

// https://github.com/storybooks/storybook/issues/4337#issuecomment-428495664
function subscribeToComponentEvents() {
  // == event block
  const eventHandler = function(e) {
    const el = e.target;
    if (el.tagName.toLowerCase() !== 'ino-select') {
      return;
    }

    el.setAttribute('value', e.detail);
  };

  document.addEventListener('valueChange', eventHandler);
  // == event block

  // unsubscribe function will be called by Storybook
  return () => {
    document.removeEventListener('valueChange', eventHandler);
  };
}

export default {
  title: 'Input/<ino-select>',

  decorators: [
    withStencilReadme(componentReadme),
    withActions('valueChange .customizable-select', 'submit .form'),
    story => {
      addons
        .getChannel()
        .emit(CoreEvents.REGISTER_SUBSCRIPTION, subscribeToComponentEvents);
      return story();
    }
  ]
};

export const DefaultUsage = () => {
  const optionsTemplate = /*html*/ `
    <ino-option value="Option 1">Option 1</ino-option>
    <ino-option value="Option 2">Option 2</ino-option>
    <ino-option value="Option 3">Option 3</ino-option>
    <ino-option value="Option 4">Option 4</ino-option>
    `;

  return /*html*/ `
      <div class="story-select">
        <ino-select class="customizable-select"
          name="${text('name', 'select-1')}"
          ino-outline="${boolean('ino-outline', false)}"
          ino-label="${text('ino-label', 'Customizable select')}"
          required="${boolean('required', false)}"
          ino-show-label-hint="${boolean('ino-show-label-hint', false)}"
          value="${text('value', 'Option 1')}"
        >
          ${optionsTemplate}
        </ino-select>

        <ino-select ino-label="Select with Groups">
            <ino-option-group ino-label="My First Group">
                ${optionsTemplate}
            </ino-option-group>
            <ino-option-group ino-label="My Second Group">
                <ino-option value="Option 5">Option 5</ino-option>
                <ino-option value="Option 6">Option 6</ino-option>
                <ino-option value="Option 7">Option 7</ino-option>
                <ino-option value="Option 8">Option 8</ino-option>
            </ino-option-group>
          </ino-select>

        <ino-select style="--select-height: 80px" ino-label="Select with custom height">
          ${optionsTemplate}
        </ino-select>

        <h4 class="outline">Outlined</h4>
        <ino-select ino-outline>
          ${optionsTemplate}
          <ino-option value="Option 5" selected>Option 5</ino-option>
        </ino-select>

        <h4>Labels</h4>
        <ino-select>
          <ino-option value="No Label" selected>No label</ino-option>
          ${optionsTemplate}
        </ino-select>
        <ino-select ino-label="Floating label">
         <ino-option value="Selected Option" selected>Selected Option</ino-option>
          ${optionsTemplate}
        </ino-select>

        <ino-select ino-label="Floating label outlined" ino-outline>
          <ino-option value="Selected Option" selected>Selected Option</ino-option>
          ${optionsTemplate}
        </ino-select>

        <h4>States</h4>
        <ino-select disabled ino-label="Disabled select">
          <ino-option value="Selected Option" selected>Selected Option</ino-option>
          ${optionsTemplate}
        </ino-select>
        <ino-select ino-label="Select with disabled option">
          ${optionsTemplate}
          <ino-option value="Disabled Option" disabled>Disabled Option</ino-option>
        </ino-select>

        <ino-select required ino-label="required select" ino-show-label-hint>
          ${optionsTemplate}
        </ino-select>

        <ino-select ino-label="optional select" ino-show-label-hint>
          ${optionsTemplate}
        </ino-select>
      </div>
    `;
};

export const Forms = () => /*html*/ `
<div class="story-select">
  <h4>Required</h4>
  <p>The form should not submit since no option is selected and the select is required.</p>
  <form class="form" onSubmit="alert('Form submitted'); return false;">
      <ino-select ino-label="Form select" required>
        <ino-option value="Test">Test</ino-option>
      </ino-select>
      <ino-button type="submit">Submit</ino-button>
  </form>
</div>
`;

export const SelectOptions = () => /*html*/ `
    <h4>Customizable option</h4>
    <ino-select ino-label="Customizable option">
        <ino-option
            disabled="${boolean('disabled', false)}"
            selected="${boolean('selected', false)}"
            value="${text('value', 'Content')}"
        >
            Content
        </ino-option>
    </ino-select>

    <h4>Disabled option</h4>
    <ino-select ino-label="Disabled option">
        <ino-option value="Content" disabled>Content</ino-option>
    </ino-select>

    <h4>Selected option</h4>
        <ino-select ino-label="Selected option">
        <ino-option value="Content" selected>Content</ino-option>
    </ino-select>
  `;

SelectOptions.decorators = [withStencilReadme(optionComponentReadme)];

export const OptionGroup = () => /*html*/ `
    <h4>Option Group Example</h4>
    <ino-select ino-label="Select with Groups">
      <ino-option-group ino-label="My First Group">
          <ino-option value="Option 1">Option 1</ino-option>
          <ino-option value="Option 2">Option 2</ino-option>
          <ino-option value="Option 3">Option 3</ino-option>
          <ino-option value="Option 4">Option 4</ino-option>
      </ino-option-group>
      <ino-option-group ino-label="My Second Group">
          <ino-option value="Option 5">Option 5</ino-option>
          <ino-option value="Option 6">Option 6</ino-option>
          <ino-option value="Option 7">Option 7</ino-option>
          <ino-option value="Option 8">Option 8</ino-option>
      </ino-option-group>
    </ino-select>
  `;

OptionGroup.decorators = [withStencilReadme(optionGroupComponentReadme)];
