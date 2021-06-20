import { useEffect } from '@storybook/client-api';
import { html } from 'lit-html';

export default {
  title: 'Input/ino-input-file',
  component: 'ino-input-file',
  decorators: [
    story => {
      useEffect(() => {
        const eventHandler = function (e) {
          const el = e.target;
          if (el.tagName.toLowerCase() !== 'ino-input-file') {
            return;
          }

          const fileNames = e.detail.files
            .map((f) => [f.name, f.type, f.size + ' bytes'].join(', '))
            .join('\n');
          alert(fileNames);
        };

        document.addEventListener('changeFile', eventHandler);
        return () => document.removeEventListener('changeFile', eventHandler);
      });
      return story();
    }
  ],
  parameters: {
    actions: {
      handles: ['changeFile .customizable-input'],
    },
  },
};

export const Playground = (args) => html`
  <ino-input-file
    class="customizable-input"
    accept="${args.accept}"
    autofocus="${args.autofocus}"
    disabled="${args.disabled}"
    multiple="${args.multiple}"
    required="${args.required}"
    label="${args.label}"
    label-selected="${args.labelSelected}"
    drag-and-drop="${args.dragAndDrop}"
    drag-and-drop-text="${args.dragAndDropText}"
    drag-and-drop-secondary-text="${args.dragAndDropSecondaryText}"
  >
  </ino-input-file>
`;
Playground.args = {
  accept: '',
  autoFocus: false,
  disabled: false,
  multiple: false,
  required: false,
  label: 'Select a file to upload',
  labelSelected: 'selected',
  dragAndDrop: false,
  dragAndDropText: 'Drag your files here',
  dragAndDropSecondaryText: 'or'
};

export const DragAndDrop = () => html`
  <ino-input-file
    multiple
    drag-and-drop
  ></ino-input-file>
`;
