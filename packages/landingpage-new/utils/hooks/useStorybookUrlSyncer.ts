import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { inDevEnvironment } from '../in-dev-mode';

type PostCurrentStoryMessage = {
  type: string;
  storyId: string;
};

const POST_CURRENT_STORY_TYPE = 'post-current-story';

export const useStorybookUrlSyncer = (origin: string) => {
  const { push, query } = useRouter();
  const [storyId, setStoryId] = useState<string | null>(null);

  useEffect(() => {
    function onMessage(event: MessageEvent<PostCurrentStoryMessage>) {
      if (
        (!inDevEnvironment && origin !== event.origin) || // check for origin
        event.data?.type !== POST_CURRENT_STORY_TYPE // check for message type
      )
        return;

      setStoryId(event.data.storyId);
    }

    window.addEventListener('message', onMessage);

    return () => window.removeEventListener('message', onMessage);
  }, [origin]);

  // push story changes to url
  useEffect(() => {
    if (!storyId || !query.lang) return;

    push({ query: { ...query, element: storyId } }, undefined, {
      shallow: true,
    });
  }, [storyId]);
}
