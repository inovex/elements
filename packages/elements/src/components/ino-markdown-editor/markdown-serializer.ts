import {
  defaultMarkdownParser,
  defaultMarkdownSerializer,
  MarkdownSerializer,
  MarkdownSerializerState,
} from '@tiptap/pm/markdown';
import { Node } from '@tiptap/pm/model';
import taskLists from '@hedgedoc/markdown-it-task-lists';
import Bold from '@tiptap/extension-bold';
import Code from '@tiptap/extension-code';
import Italic from '@tiptap/extension-italic';
import Strike from '@tiptap/extension-strike';
import Blockquote from '@tiptap/extension-blockquote';
import Heading from '@tiptap/extension-heading';
import HorizontalRule from '@tiptap/extension-horizontal-rule';
import Paragraph from '@tiptap/extension-paragraph';
import OrderedList from '@tiptap/extension-ordered-list';
import BulletList from './extensions/bullet_list';
import ListItem from '@tiptap/extension-list-item';
import CodeBlock from '@tiptap/extension-code-block';
import HardBreak from '@tiptap/extension-hard-break';
import Link from '@tiptap/extension-link';
import TaskItem from './extensions/task_item';
import TaskList from './extensions/task_list';

// Source is partially taken from
// https://gitlab.com/gitlab-org/gitlab/-/blob/master/app/assets/javascripts/content_editor/services/markdown_serializer.js
const defaultSerializerConfig = {
  marks: {
    em: defaultMarkdownSerializer.marks.em,
    [Bold.name]: defaultMarkdownSerializer.marks.strong,
    [Code.name]: defaultMarkdownSerializer.marks.code,
    [Italic.name]: {
      open: '_',
      close: '_',
      mixable: true,
      expelEnclosingWhitespace: true,
    },
    [Link.name]: defaultMarkdownSerializer.marks.link,
    [Strike.name]: {
      open: '~~',
      close: '~~',
      mixable: true,
      expelEnclosingWhitespace: true,
    },
  },
  nodes: {
    ...defaultMarkdownSerializer.nodes,
    [Blockquote.name]: (state, node) => {
      if (node.attrs.multiline) {
        state.write('>>>');
        state.ensureNewLine();
        state.renderContent(node);
        state.ensureNewLine();
        state.write('>>>');
        state.closeBlock(node);
      } else {
        state.wrapBlock('> ', null, node, () => state.renderContent(node));
      }
    },
    [CodeBlock.name]: defaultMarkdownSerializer.nodes.code_block,
    [Heading.name]: defaultMarkdownSerializer.nodes.heading,
    [HardBreak.name]: defaultMarkdownSerializer.nodes.hard_break,
    [HorizontalRule.name]: defaultMarkdownSerializer.nodes.horizontal_rule,
    [BulletList.name]: defaultMarkdownSerializer.nodes.bullet_list,
    [OrderedList.name]: defaultMarkdownSerializer.nodes.ordered_list,
    [ListItem.name]: defaultMarkdownSerializer.nodes.list_item,
    [Paragraph.name]: defaultMarkdownSerializer.nodes.paragraph,
    [Text.name]: defaultMarkdownSerializer.nodes.text,
    [TaskItem.name]: (state, node) => {
      state.write(`[${node.attrs.checked ? 'x' : ' '}] `);
      state.renderContent(node);
    },
    [TaskList.name]: (
      state: MarkdownSerializerState,
      node: Node,
      parent: Node,
      index: number
    ) => {
      if (node.attrs.numeric)
        defaultMarkdownSerializer.nodes.ordered_list(
          state,
          node,
          parent,
          index
        );
      else
        defaultMarkdownSerializer.nodes.bullet_list(state, node, parent, index);
    },
  },
};

const markdownSerializer = new MarkdownSerializer(
  defaultSerializerConfig.nodes,
  defaultSerializerConfig.marks
);

let markdownRenderer = null;

export default {
  serialize: (content: Node): string =>
    markdownSerializer.serialize(content, { tightLists: true }),
  parse: (markdownText: string): string => {
    if (!markdownRenderer) {
      // list of markdown-it rules: https://github.com/markdown-it/markdown-it/issues/289
      markdownRenderer = defaultMarkdownParser['tokenizer']
        .enable('strikethrough')
        .use(taskLists, { enabled: true, label: true, labelAfter: true });
    }

    return markdownRenderer.render(markdownText);
  },
};
