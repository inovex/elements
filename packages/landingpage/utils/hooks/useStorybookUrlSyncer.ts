import { useRouter, usePathname, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { inDevEnvironment } from '../in-dev-mode';
import { useMount } from 'react-use';

type PostCurrentStoryMessage = {
  type: string;
  storyId: string;
};

const POST_CURRENT_STORY_TYPE = 'post-current-story';

/**
 * Hooks to sync events from our storybook plugin to our landingpage URL.
 *
 * This hooks utilizes our custom storybook plugin `PostCurrentStory` in `packages/storybook/addon/post-current-story.ts`.
 * This plugin sends the id of the currently displayed story and also syncs the story-id to our landingpage URL.
 */
export const useStorybookUrlSyncer = () => {
  const router = useRouter();
  const pathName = usePathname();
  const searchParams = useSearchParams();

  const [storyId, setStoryId] = useState<string | null>(null);

  useMount(() => {
    function onMessage(event: MessageEvent<PostCurrentStoryMessage>) {
      const isTrustworthy = inDevEnvironment || event.origin === window.location.origin;
      const isPostCurrentStoryEvent = event.data?.type === POST_CURRENT_STORY_TYPE;

      if (!isTrustworthy || !isPostCurrentStoryEvent) return;

      setStoryId(event.data.storyId);
    }

    window.addEventListener('message', onMessage);

    return () => window.removeEventListener('message', onMessage);
  });

  // push story changes to url
  useEffect(() => {
    if (!storyId || searchParams === null) return;

    const query = new URLSearchParams(searchParams.toString());
    query.set('element', storyId);
    router.push(`${pathName}?${query}`);
  }, [storyId]);

  return storyId;
};
