import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { inDevEnvironment } from '../in-dev-mode';
import { useMount } from 'react-use';

type PostCurrentStoryMessage = {
  type: string;
  storyId: string;
};

const POST_CURRENT_STORY_TYPE = 'post-current-story';

export const useStorybookUrlSyncer = () => {
  const { push, query } = useRouter();
  const [storyId, setStoryId] = useState<string | null>(null);

  useMount(() => {
    function onMessage(event: MessageEvent<PostCurrentStoryMessage>) {
      if (
        (!inDevEnvironment && event.origin !== window.location.origin) || // check for origin
        event.data?.type !== POST_CURRENT_STORY_TYPE // check for message type
      )
        return;

      setStoryId(event.data.storyId);
    }

    window.addEventListener('message', onMessage);

    return () => window.removeEventListener('message', onMessage);
  });

  // push story changes to url
  useEffect(() => {
    if (!storyId || !query.lang) return;

    push({ query: { ...query, element: storyId } }, undefined, {
      shallow: true,
    });
  }, [storyId]);

  return storyId;
};
