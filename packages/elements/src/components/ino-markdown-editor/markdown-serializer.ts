import {
  defaultMarkdownParser,
  defaultMarkdownSerializer,
  MarkdownParser,
  MarkdownSerializer,
} from 'prosemirror-markdown';
import { Node as ProsemirrorNode, Schema } from 'prosemirror-model';
import taskLists from '@hedgedoc/markdown-it-task-lists'
import Bold from '@tiptap/extension-bold';
import Code from '@tiptap/extension-code';
import Italic from '@tiptap/extension-italic';
import Strike from '@tiptap/extension-strike';
import Blockquote from '@tiptap/extension-blockquote';
import Heading from '@tiptap/extension-heading';
import HorizontalRule from '@tiptap/extension-horizontal-rule';
import Paragraph from '@tiptap/extension-paragraph';
import OrderedList from '@tiptap/extension-ordered-list';
import BulletList from '@tiptap/extension-bullet-list';
import ListItem from '@tiptap/extension-list-item';
import CodeBlock from '@tiptap/extension-code-block';
import HardBreak from '@tiptap/extension-hard-break';
import Link from '@tiptap/extension-link';
import TaskItem from "@tiptap/extension-task-item";
import TaskList from "@tiptap/extension-task-list";

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
      state.text(`[${node.attrs.checked ? 'x' : ' '}] `, false);
      state.renderContent(node);
    },
    [TaskList.name]: (state, node) => {
      if (node.attrs.numeric) defaultMarkdownSerializer.nodes.ordered_list(state, node);
      else defaultMarkdownSerializer.nodes.bullet_list(state, node);
    },
  },
};

// Source taken from
// prosemirror-markdown/src/from_markdown.js
const {
  bullet_list,
  ordered_list,
  link,
  heading,
  fence,
}: MarkdownParser["tokens"] = defaultMarkdownParser.tokens;

const defaultParserTokens: MarkdownParser["tokens"] = {
  blockquote: { block: Blockquote.name },
  paragraph: { block: Paragraph.name },
  list_item: { block: ListItem.name },
  bullet_list: {
    ...bullet_list,
    block: BulletList.name,
  },
  ordered_list: {
    ...ordered_list,
    block: OrderedList.name,
  },
  heading,
  code_block: { block: CodeBlock.name, noCloseToken: true },
  fence: {
    ...fence,
    block: CodeBlock.name,
  },
  hr: { node: HorizontalRule.name },
  hardbreak: { node: HardBreak.name },
  taskListItemCheckbox: {
    block: TaskList.name,
    noCloseToken: true,
    getAttrs: tok => ({ checked: tok.attrGet("checked") === "" }),
  },
  taskListItemLabel: { block: TaskItem.name },
  [Italic.name]: { mark: Italic.name },
  em: { mark: Italic.name },
  [Bold.name]: { mark: Bold.name },
  strong: { mark: Bold.name },
  link,
  code_inline: { mark: Code.name, noCloseToken: true },
  s: { mark: Strike.name },
};

const markdownSerializer = new MarkdownSerializer(
  defaultSerializerConfig.nodes,
  defaultSerializerConfig.marks
);

let markdownParser = null;

export default {
  serialize: (content: ProsemirrorNode): string =>
    markdownSerializer.serialize(content, { tightLists: true }),
  parse: (markdownText: string, schema: Schema): ProsemirrorNode => {
    if (!markdownParser) {
      markdownParser = new MarkdownParser(
        schema,
        // list of markdown-it rules: https://github.com/markdown-it/markdown-it/issues/289
        defaultMarkdownParser['tokenizer']
          .enable('strikethrough')
          .use(taskLists, { enabled: true, label: true }),
        defaultParserTokens
      );
    }

    console.log( markdownParser);

    return markdownParser.parse(markdownText);
  },
};
