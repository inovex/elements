import { useRouter } from 'next/router';
import { useEffect, useRef, useState } from 'react';
import { useStorybookPathsContext } from 'utils/context/StorybookPathsContext';

function StoryBookSubPage () {
    const router = useRouter();
    const {lang, element_slug, variant_slug} = router.query;
    const { setElement, setVariant, element, variant, activeStorybookPath} = useStorybookPathsContext();

    const [selectedLang, setSelectedLang] = useState(lang);
    const [iframeChange, setIframeChange] = useState(false);
    const iframeRef = useRef(null);

    // test url on landingpage-new
        // http://localhost:4600/landingpage-new/en/library/components/buttons-ino-button/outlined

    // prevent showing iframe error with undefined variables
    useEffect(() => {
        if(typeof element_slug === 'string' && typeof variant_slug === 'string'){
            if(element_slug !== undefined && variant_slug !== undefined){
                setElement(element_slug);
                setVariant(variant_slug);
                setSelectedLang(lang);
            }
        }
    },[element_slug, variant_slug, lang]);

 
    useEffect(() => {
        if(element !== undefined && variant !== undefined && selectedLang !== undefined){
            router.push(`/${selectedLang}/library/components/${element}/${variant}`, undefined, { shallow: false })
            setIframeChange(false)
        }
    },[iframeChange]);

    const onLoadHandler = () => {
        // only works with same origin
            // const url = iframeRef.current?.contentWindow.location.href;

        // test url 
        const testURL = 'https://elements.inovex.de/version/latest/?path=/docs/buttons-ino-chip--fill'
        // get selected element & variant for url change
        const element = testURL.slice(testURL.lastIndexOf('/')+1, testURL.indexOf('--'));
        const variant = testURL.slice(testURL.indexOf('--')+2, testURL.length+1)
       
        // setting new element & variant triggers iframeSrc change
        setElement(element);
        setVariant(variant);
        setIframeChange(true);        
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

export default StoryBookSubPage;