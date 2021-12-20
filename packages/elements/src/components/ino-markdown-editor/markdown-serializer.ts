import {
  defaultMarkdownParser,
  defaultMarkdownSerializer,
  MarkdownSerializer,
} from 'prosemirror-markdown';
import { Node as ProsemirrorNode } from 'prosemirror-model';
import Bold from '@tiptap/extension-bold';
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

const defaultSerializerConfig = {
  marks: {
    ...defaultMarkdownSerializer.marks,
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    [Bold.name]: defaultMarkdownSerializer.marks.strong,
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
  },
  /* eslint-disable @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call */
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
        // eslint-disable-next-line @typescript-eslint/no-unsafe-return
        state.wrapBlock('> ', null, node, () => state.renderContent(node));
      }
    },
    [OrderedList.name]: defaultMarkdownSerializer.nodes.ordered_list,
    [BulletList.name]: defaultMarkdownSerializer.nodes.bullet_list,
    [Heading.name]: defaultMarkdownSerializer.nodes.heading,
    [HorizontalRule.name]: defaultMarkdownSerializer.nodes.horizontal_rule,
    [ListItem.name]: defaultMarkdownSerializer.nodes.list_item,
    [Paragraph.name]: defaultMarkdownSerializer.nodes.paragraph,
    [Text.name]: defaultMarkdownSerializer.nodes.text,
    [CodeBlock.name]: defaultMarkdownSerializer.nodes.code_block,
  },
  /* eslint-enable @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call */
};

const markdownSerializer = new MarkdownSerializer(
  defaultSerializerConfig.nodes,
  defaultSerializerConfig.marks
);

const transformNodeTypeName = (node: ProsemirrorNode<any>) => {
  node.content.forEach(transformNodeTypeName);
  if (node.type.name === 'ordered_list') {
    node.type.name = OrderedList.name;
  } else if (node.type.name === 'bullet_list') {
    node.type.name = BulletList.name;
  } else if (node.type.name === 'list_item') {
    node.type.name = ListItem.name;
  } else if (node.type.name === 'code_block') {
    node.type.name = CodeBlock.name;
  }
};

export default {
  serialize: (content: ProsemirrorNode<any>): string =>
    markdownSerializer.serialize(content),
  parse: (markdownText: string): ProsemirrorNode<any> => {
    const node = defaultMarkdownParser.parse(markdownText);
    node.content.forEach(transformNodeTypeName);
    return node;
  },
};
