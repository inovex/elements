import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useStorybook } from '../../../../utils/hooks/useStorybook';
import { useDeepCompareEffect, useMount } from 'react-use';

type PostCurrentStoryMessage = {
  type: string;
  storyId: string;
};

const POST_CURRENT_STORY_TYPE = 'post-current-story';

function StoryBookPage() {
  const { push, query, isReady } = useRouter();
  const [storyId, setStoryId] = useState<string | null>(null);

  useEffect(() => {
    if (!storyId || !query.lang) return;

    push({ query: { ...query, element: storyId } }, undefined, {
      shallow: true,
    });
  }, [storyId]);

  const { fromLandingpageToStorybookUrl } = useStorybook(
    process.env.NEXT_PUBLIC_STORYBOOK_URL as string
  );

  useMount(() => {
    window.onmessage = function (event: MessageEvent<PostCurrentStoryMessage>) {
      // TODO: check origin
      if (event.data?.type !== POST_CURRENT_STORY_TYPE) return;

      setStoryId(event.data.storyId);
    };
  });

  const [iFrameStartURl, setIFrameStartURl] = useState<string | null>(null);

  useEffect(() => {
    if (!isReady) return;

    setIFrameStartURl(fromLandingpageToStorybookUrl(query.element as string));
  }, [isReady]);

  return (
    <div>
      {iFrameStartURl && (
        <iframe
          src={iFrameStartURl}
          onLoad={(ev) => console.log(ev)}
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

export default StoryBookPage;
