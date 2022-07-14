import {TaskItem} from '@tiptap/extension-task-item';
import {wrappingInputRule} from "@tiptap/core";

export const customInputRegex = /^\s*([-+*]\s\[([( |x])?])\s$/

export default TaskItem.extend({
  addOptions() {
    return {
      ...this.parent?.(),
      nested: true,
    };
  },

  addAttributes() {
    return {
      checked: {
        default: false,
        keepOnSplit: false,
        parseHTML: (element) => {
          const checkbox = element.querySelector('input[type=checkbox].task-list-item-checkbox') as HTMLInputElement;
          return checkbox?.checked;
        },
        renderHTML: (attributes) => ({
          'data-checked': attributes.checked,
        }),
      },
    };
  },

  parseHTML() {
    return [
      ...this.parent?.(),
      {
        tag: 'li.task-list-item',
        priority: 100,
      },
    ];
  },

  addInputRules() {
    return [
      ...this.parent?.(),
      wrappingInputRule({
        find: customInputRegex,
        type: this.type,
        getAttributes: match => ({
          checked: match[match.length - 1] === 'x',
        }),
      }),
    ]
  },
});

