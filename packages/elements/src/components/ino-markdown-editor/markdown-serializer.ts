import {
  defaultMarkdownParser,
  defaultMarkdownSerializer,
  MarkdownParser,
  MarkdownSerializer,
  TokenConfig,
} from 'prosemirror-markdown';
import { Node as ProsemirrorNode, Schema } from 'prosemirror-model';
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

// Source taken from
// https://gitlab.com/gitlab-org/gitlab/-/blob/master/app/assets/javascripts/content_editor/services/markdown_serializer.js
const defaultSerializerConfig = {
  marks: {
    [Bold.name]: defaultMarkdownSerializer.marks.strong,
    [Code.name]: defaultMarkdownSerializer.marks.code,
    [Italic.name]: {
      open: '_',
      close: '_',
      mixable: true,
      expelEnclosingWhitespace: true,
    },
    [Strike.name]: {
      open: '~~',
      close: '~~',
      mixable: true,
      expelEnclosingWhitespace: true,
    },
    [Link.name]: defaultMarkdownSerializer.marks.link,
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
    [HorizontalRule.name]: defaultMarkdownSerializer.nodes.horizontal_rule,
    [BulletList.name]: defaultMarkdownSerializer.nodes.bullet_list,
    [OrderedList.name]: defaultMarkdownSerializer.nodes.ordered_list,
    [ListItem.name]: defaultMarkdownSerializer.nodes.list_item,
    [Paragraph.name]: defaultMarkdownSerializer.nodes.paragraph,
    [Text.name]: defaultMarkdownSerializer.nodes.text,
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
} = (defaultMarkdownParser.tokens as unknown) as { [key: string]: TokenConfig };

const defaultParserTokens: { [key: string]: TokenConfig } = {
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

  em: { mark: Italic.name },
  strong: { mark: 'strong' },
  link,
  code_inline: { mark: 'code', noCloseToken: true },
};

const markdownSerializer = new MarkdownSerializer(
  defaultSerializerConfig.nodes,
  defaultSerializerConfig.marks
);

let markdownParser = null;

export default {
  serialize: (content: ProsemirrorNode<any>): string =>
    markdownSerializer.serialize(content),
  parse: (markdownText: string, schema: Schema): ProsemirrorNode<any> => {
    if (!markdownParser) {
      markdownParser = new MarkdownParser(
        schema,
        defaultMarkdownParser['tokenizer'],
        defaultParserTokens
      );
    }

    return markdownParser.parse(markdownText);
  },
};
