import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';
import path from 'path';
import rehypeHighlight from 'rehype-highlight';
import remarkGfm from 'remark-gfm';

interface Props {
  mdxSource: MDXRemoteSerializeResult<
    Record<string, unknown>,
    Record<string, string>
  >;
}

export const getStaticProps = async () => {
  const fs = require('fs').promises;
  const post = await fs.readFile(
    path.join(process.cwd(), 'mdx', 'react-guide.mdx'),
    'utf-8'
  );
  const mdxSource = await serialize(post, {
    mdxOptions: {
      rehypePlugins: [rehypeHighlight],
      remarkPlugins: [remarkGfm],
    },
  });

  return {
    props: {
      mdxSource,
    },
  };
};

const Page = (props: Props) => {
  const { mdxSource } = props;

  return (
    <>
      <div className="blog-post">
        <MDXRemote {...mdxSource} />
      </div>
    </>
  );
};

export default Page;
