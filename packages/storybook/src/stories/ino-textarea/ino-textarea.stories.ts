import { html } from 'lit-html';
import { useEffect } from '@storybook/client-api';
import { defaultDecorator } from '../utils';
import './ino-textarea.scss';

export default {
  title: 'Components (WIP)/ino-textarea',
  component: 'ino-textarea',
  parameters: {
    actions: {
      handles: ['input .customizable-textarea', 'valueChange .customizable-textarea']
    }
  },
  decorators: [defaultDecorator, story => {
    useEffect(() => {
      const eventHandler = e => e.target.setAttribute('value', e.detail);
      const textareas = document.querySelectorAll('ino-textarea');
      textareas.forEach(t => t.addEventListener('valueChange', eventHandler));
      return () => textareas.forEach(t => t.removeEventListener('valueChange', eventHandler));
    });
    return story();
  }],
};

export const Playground = (args) => html`
  <ino-textarea class="customizable-textarea"
    cols="${args.cols}"
    rows="${args.rows}"
    placeholder="${args.placeholder}"
    value="${args.value}"
    label="${args.label}"
    outlined="${args.outlined}"
    error="${args.error}"
    minlength="${args.minlength}"
    maxlength="${args.maxlength}"
    disabled="${args.disabled}"
    readonly="${args.readonly}"
    required="${args.required}"
    show-label-hint="${args.showLabelHint}"
    autogrow="${args.autogrow}"
    show-character-counter="${args.showCharacterCounter}"
    helper="${args.helper}"
    helper-persistent="${args.helperPersistent}"
    helper-validation="${args.helperValidation}"
  ></ino-textarea>
`;
Playground.args = {
  cols: 60,
  rows: 5,
  placeholder: '',
  value: '',
  label: 'Label',
  outlined: false,
  error: false,
  minlength: 0,
  maxlength: 30,
  disabled: false,
  required: false,
  readonly: false,
  showLabelHint: false,
  autogrow: false,
  showCharacterCounter: true,
  helper: 'Helper message',
  helperPersistent: false,
  helperValidation: false,
}

//     <style>
//       ino-textarea.customizable-textarea {
//         --ino-textarea-outline-color: ${text(
//   '--ino-textarea-outline-color',
//   '#820F35',
//   'Custom Properties'
// )};
//         --ino-textarea-caret-color: ${text('--ino-textarea-caret-color', '#820F35', 'Custom Properties')};
//         --ino-textarea-label-color: ${text('--ino-textarea-label-color', '#820F35', 'Custom Properties')};
//         --ino-textarea-floated-label-color: ${text('--ino-textarea-floated-label-color', '#820F35', 'Custom Properties')};
//         --ino-textarea-line-color: ${text('--ino-textarea-line-color', '#820F35', 'Custom Properties')};
//       }
//   </style>

export const Labels = () => html`
  <ino-textarea label="Floating label" cols="30" rows="3"></ino-textarea>
  <ino-textarea label="Floating label" value="With value" cols="30" rows="3"></ino-textarea>
`;

export const Outline = () => html`
   <ino-textarea label="Outline" cols="30" rows="3" outlined="true" helper="helper text"></ino-textarea>
`;

export const States = () => html`
  <ino-textarea placeholder="Disabled" disabled cols="30" rows="3"></ino-textarea>
  <ino-textarea label="Required" required show-label-hint cols="30" rows="3"></ino-textarea>
  <ino-textarea label="Readonly" readonly cols="30" rows="3" value="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, "></ino-textarea>
  <ino-textarea label="Optional" cols="30" show-label-hint rows="3"></ino-textarea>
`;

export const Autogrow = () => html`
  <ino-textarea label="Autogrowing textarea" autogrow class="autogrow-textarea" rows="1" outlined="false"></ino-textarea>
  <ino-textarea label="Autogrowing textarea" autogrow class="autogrow-textarea" rows="1" outlined="false" maxlength="200" show-character-counter="true"></ino-textarea>
`;
