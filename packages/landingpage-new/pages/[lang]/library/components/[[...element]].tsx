import { useRef } from 'react';
import { useRouter } from 'next/router';
import { useStorybook } from '../../../../utils/hooks/useStorybook';

function StoryBookPage() {
  const { query, isReady } = useRouter();
  const iframeRef = useRef(null);
  const {
    fromStorybookToLandingpageUrl,
    fromLandingpageToStorybookUrl,
  } = useStorybook();

  return (
    <div>
      {isReady && (
        <iframe
          ref={iframeRef}
          src={fromLandingpageToStorybookUrl(query.element as string[])}
          // onLoad={onLoadHandler}
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
