import {wrappingInputRule} from "@tiptap/core";
import BulletList from "@tiptap/extension-bullet-list";

export const customInputRegex = /^\s*([-+*]\s[^\[])$/

export default BulletList.extend({
  addInputRules() {
    return [
      wrappingInputRule({
        find: customInputRegex,
        type: this.type,
      }),
    ]
  },
});

