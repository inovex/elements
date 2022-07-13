import { TaskItem } from '@tiptap/extension-task-item';

export default TaskItem.extend({
  addOptions() {
    return {
      nested: true,
      HTMLAttributes: {},
    };
  },

  addAttributes() {
    return {
      checked: {
        default: false,
        parseHTML: (element) => {
          const checkbox = element.querySelector('input[type=checkbox].task-list-item-checkbox') as HTMLInputElement;

          return checkbox?.checked;
        },
        renderHTML: (attributes) => ({
          'data-checked': attributes.checked,
        }),
        keepOnSplit: false,
      },
    };
  },

  parseHTML() {
    return [
      {
        tag: 'li.task-list-item',
        priority: 100,
      },
    ];
  },
});

