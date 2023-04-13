import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useMount } from 'react-use';
import { useInitialStorybookUrl } from '../../../../utils/hooks/useInitialStorybookUrl';
import { InoSpinner } from '@elements';
import styles from './[element].module.scss';
import { GetStaticPaths, GetStaticProps } from 'next';
import {
  getStaticLanguagePaths,
  getStaticLanguageProps,
} from '../../../../utils/context/staticPaths';
import { LangContext } from '../../../../types/langContext';
import { Locale_File } from '../../../../translations/types';
import { merge } from 'lodash';

type PostCurrentStoryMessage = {
  type: string;
  storyId: string;
};

const POST_CURRENT_STORY_TYPE = 'post-current-story';

function StoryBookPage() {
  const { push, query } = useRouter();
  const initialStorybookUrl = useInitialStorybookUrl();
  const [storyId, setStoryId] = useState<string | null>(null);

  useEffect(() => {
    if (!storyId || !query.lang) return;

    push({ query: { ...query, element: storyId } }, undefined, {
      shallow: true,
    });
  }, [storyId]);

  useMount(() => {
    window.onmessage = (event: MessageEvent<PostCurrentStoryMessage>) => {
      // TODO: check origin
      if (event.data?.type !== POST_CURRENT_STORY_TYPE) return;

      setStoryId(event.data.storyId);
    };
  });

  return (
    <div className={styles.container}>
      {!initialStorybookUrl && <InoSpinner type="circle"></InoSpinner>}
      {initialStorybookUrl && (
        <iframe
          src={initialStorybookUrl}
          style={{
            position: 'absolute',
            left: 0,
            top: 120,
            height: 'calc(100vh - 120px)', // 120px = Navbar height
            width: '100%',
            border: 'none',
          }}
        ></iframe>
      )}
    </div>
  );
}

export const getStaticProps: GetStaticProps = async (ctx) => {
  const { localization } = getStaticLanguageProps(
    ctx as LangContext,
    Locale_File.LIBRARY
  ).props;

  return { props: { localization } };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const languagePaths = getStaticLanguagePaths().paths;
  const elementPaths = languagePaths.map(() => ({ params: { element: '' } }));
  const langXElementPaths = languagePaths.map((path, index) =>
    merge(path, elementPaths[index])
  );

  return {
    paths: langXElementPaths,
    fallback: true,
  };
};

export default StoryBookPage;
