import { mergeAttributes } from '@tiptap/core';
import { TaskList } from '@tiptap/extension-task-list';

export default TaskList.extend({
  addAttributes() {
    return {
      numeric: {
        default: false,
        parseHTML: (element) => element.tagName.toLowerCase() === 'ol',
      },
    };
  },

  parseHTML() {
    return [
      {
        tag: '.contains-task-list',
        priority: 100,
      },
    ];
  },

  renderHTML({ HTMLAttributes: { numeric, ...HTMLAttributes } }) {
    return [numeric ? 'ol' : 'ul', mergeAttributes(HTMLAttributes, { 'data-type': 'taskList' }), 0];
  },
});
