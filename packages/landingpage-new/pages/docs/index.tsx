import { MDXRemote } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';
import path from 'path';
import rehypeHighlight from 'rehype-highlight';
import remarkGfm from 'remark-gfm';

export const getStaticProps = async () => {
  // if this is a dynamic route, you can get the post id from ctx.params
  // and use that to load the expected Markdown file
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

const Page = (props: any) => {
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
