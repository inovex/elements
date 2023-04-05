import { useRouter } from 'next/router';
import { useRef } from 'react';
import { useStorybookPathsContext } from 'utils/context/StorybookPathsContext';
import useForwardToStorybookPage from 'utils/hooks/useForwardToStoryPage';
import useStorybookIframeSetup from 'utils/hooks/useStorybookIframeSetup';
import useTranslation from 'utils/hooks/useTranslation';
useTranslation

function StoryBookPage () {
    const iframeRef = useRef(null);
    const router = useRouter();
    const { locale } = useTranslation();
    const { activeStorybookPath } = useStorybookPathsContext();
    const { forwardToStoryPage } = useForwardToStorybookPage();
    
    useStorybookIframeSetup(router);

    const onLoadHandler = () => {
        // only works with same origin
            // const url = iframeRef.current?.contentWindow.location.href;

        // test url 
        const testURL = 'https://elements.inovex.de/version/latest/?path=/docs/buttons-ino-chip--fill'
        forwardToStoryPage(testURL, locale);
    }

    return (
        <div>
            <iframe 
                ref={iframeRef} 
                src={activeStorybookPath}
                onLoad={onLoadHandler}
                style={{  
                    position: 'absolute',
                    left: 0,
                    top: 120,
                    height: 'calc(100vh - 120px)', // 120px = Navbar height
                    width: '100%',
                    border: 'none'
                }}
            ></iframe>
        </div>
    )
}

export default StoryBookPage;