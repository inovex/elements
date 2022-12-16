import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';
import { remarkCodeHike } from '@code-hike/mdx';
import path from 'path';
import remarkGfm from 'remark-gfm';
import styles from './docs.module.scss';
import theme from 'shiki/themes/min-light.json';
import { InoSegmentGroup, InoSegmentButton } from '@elements';
import { useState } from 'react';

interface Props {
  mdxSources: Record<string, any>;
}

export async function getStaticProps() {
  const fs = require('fs').promises;

  const items = ['javascript', 'angular', 'react', 'vue'];

  const mdxSources: Record<string, any> = {};

  for (const item of items) {
    const guide = await fs.readFile(
      path.join(process.cwd(), 'mdx', item + '-guide.mdx'),
      'utf-8'
    );
    const mdxSource = await serialize(guide, {
      mdxOptions: {
        useDynamicImport: true,
        remarkPlugins: [
          [remarkCodeHike, { autoImport: false, theme, showCopyButton: true }],
          remarkGfm,
        ],
      },
    });
    mdxSources[item] = mdxSource;
  }


  return {
    props: { mdxSources },
  };

  
}

const Learn = (props: Props) => {
  const [segmentButtonValue, setSegmentButtonValue] = useState('React');
  const { mdxSources } = props;
  const { react, angular, vue, javascript } = mdxSources;

  const { CH } = require('@code-hike/mdx/dist/components.cjs.js');

  return (
    <>
      <div>
        <div className={styles.segmentGroup}>
          <InoSegmentGroup
            id="segment-grp"
            value={segmentButtonValue}
            onValueChange={(value) => setSegmentButtonValue(value.detail)}
          >
            <InoSegmentButton value="Angular">Angular</InoSegmentButton>
            <InoSegmentButton value="React">React</InoSegmentButton>
            <InoSegmentButton value="Vue">Vue</InoSegmentButton>
            <InoSegmentButton value="Javascript">Javascript</InoSegmentButton>
          </InoSegmentGroup>
        </div>
        {segmentButtonValue === 'Angular' ? (
          <div className={styles.container}>
            <MDXRemote {...angular} components={{ CH }} />
          </div>
        ) : null}
        {segmentButtonValue === 'React' ? (
          <div>
            <div className={styles.container}>
              <MDXRemote {...react} components={{ CH }} />
            </div>

            <iframe
              src="https://codesandbox.io/embed/github/inovex/elements-example-react/tree/master/?fontsize=14&hidenavigation=1&theme=dark"
              className={styles.sandbox}
              allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
              sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
            ></iframe>
          </div>
        ) : null}
        {segmentButtonValue === 'Vue' ? (
          <div className={styles.container}>
            <MDXRemote {...vue} components={{ CH }} />
          </div>
        ) : null}
        {segmentButtonValue === 'Javascript' ? (
          <div className={styles.container}>
            <MDXRemote {...javascript} components={{ CH }} />
          </div>
        ) : null}
      </div>
    </>
  );
};

export default Learn;
