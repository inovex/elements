import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';
import { remarkCodeHike } from '@code-hike/mdx';
import path from 'path';
import remarkGfm from 'remark-gfm';
import styles from './docs.module.scss';
import theme from 'shiki/themes/min-light.json';
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
      useDynamicImport: true,
      remarkPlugins: [
        [remarkCodeHike, { autoImport: false, theme }],
        remarkGfm,
      ],
    },
  });

  return {
    props: {
      mdxSource,
    },
  };
};

const Learn = (props: Props) => {
  const { mdxSource } = props;

  const { CH } = require('@code-hike/mdx/dist/components.cjs.js');

  return (
    <>
      <div className={styles.container}>
        <MDXRemote {...mdxSource} components={{ CH }} />
      </div>

      <iframe
        src="https://codesandbox.io/embed/github/inovex/elements-example-react/tree/master/?fontsize=14&hidenavigation=1&theme=dark"
        className={styles.sandbox}
        allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
        sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
      ></iframe>
    </>
  );
};

export default Learn;
