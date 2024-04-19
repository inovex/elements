import { Meta } from '@storybook/web-components';
import { Components } from '@inovex.de/elements';
import { html } from 'lit-html';
import { useEffect } from '@storybook/preview-api';
import Story from '../StoryWrapper';
import './ino-textarea.scss';

const InoTextareaMeta = {
  title: 'Input/ino-textarea',
  component: 'ino-textarea',
  parameters: {
    actions: {
      handles: ['input .customizable-textarea', 'valueChange .customizable-textarea'],
    },
  },
  decorators: [
    story => {
      useEffect(() => {
        const eventHandler = e => e.target.setAttribute('value', e.detail);
        const textareas = document.querySelectorAll('ino-textarea');
        textareas.forEach(t => t.addEventListener('valueChange', eventHandler));
        return () => textareas.forEach(t => t.removeEventListener('valueChange', eventHandler));
      });
      return story();
    },
  ],
  render: args => html`
    <ino-textarea
      class="customizable-textarea"
      cols="${args.cols}"
      rows="${args.rows}"
      label="${args.label}"
      outline="${args.outline}"
      minlength="${args.minlength}"
      disabled="${args.disabled}"
      required="${args.required}"
      show-label-hint="${args.showLabelHint}"
      autogrow="${args.autogrow}"
    ></ino-textarea>
  `,
  args: {
    cols: 60,
    rows: 5,
    label: 'Label',
    minlength: 0,
    maxlength: 30,
    disabled: false,
    required: false,
    outline: true,
    showLabelHint: false,
    autogrow: false,
    showCharacterCounter: false,
  },
} as Meta<Components.InoTextarea>;

export default InoTextareaMeta;

export const Default = Story({
  ...InoTextareaMeta,
});

export const Label = Story({
  ...Default,
  docsFromProperty: 'label',
  render: () => html`
    <ino-textarea label="Floating label" cols="30" rows="3"></ino-textarea>
    <ino-textarea label="Floating label" value="With value" cols="30" rows="3"></ino-textarea>
  `,
});

export const Disabled = Story({
  ...Default,
  docsFromProperty: 'disabled',
  args: {
    disabled: true,
  },
});

export const Required = Story({
  ...Default,
  docsFromProperty: 'required',
  args: {
    required: true,
    label: 'Label*',
  },
});

export const Outline = Story({
  ...Default,
  docsFromProperty: 'outline',
  args: {
    outline: true,
  },
});

export const ShowLabelHint = Story({
  ...Default,
  docsFromProperty: 'showLabelHint',
  args: {
    showLabelHint: true,
  },
});

export const CharacterCount = Story({
  ...Default,
  docsFromProperty: 'showCharacterCounter',
  render: args => html`
    <ino-textarea
      class="customizable-textarea"
      cols="${args.cols}"
      rows="${args.rows}"
      label="${args.label}"
      outline="${args.outline}"
      minlength="${args.minlength}"
      maxlength="${args.maxlength}"
      disabled="${args.disabled}"
      required="${args.required}"
      show-label-hint="${args.showLabelHint}"
      autogrow="${args.autogrow}"
      show-character-counter="${args.showCharacterCounter}"
    ></ino-textarea>
  `,
  args: {
    showCharacterCounter: true,
  },
});
