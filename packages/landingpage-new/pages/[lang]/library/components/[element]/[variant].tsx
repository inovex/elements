import { useRouter } from 'next/router';
import { useEffect, useRef, useState } from 'react';

function StoryBookSubPage () {
    const router = useRouter();
    const {lang, element, variant} = router.query;
    const [selectedElement, setSelectedElement] = useState(element);
    const [selectedVariant, setSelectedVariant] = useState(variant);
    const [selectedLang, setSelectedLang] = useState(lang);
    const [iframeChange, setIframeChange] = useState(false);
    const iframeRef = useRef(null);
    const [iframeSrc, setIframeSrc] = useState('https://elements.inovex.de/version/v8.0.0/?path=/docs/docs-welcome--page')

    // test url on landingpage-new
        // http://localhost:4600/landingpage-new/en/library/components/buttons-ino-button/outlined
        // https://elements.inovex.de/version/latest/?path=/story/docs/buttons-ino-button--outlined
        // https://elements.inovex.de/version/v8.0.0/?path=/docs/buttons-ino-button--outlined


    // prevent showing iframe error with undefined variables
    // => now only shows default iframeSrc (welcomepage??)
    useEffect(() => {
        setSelectedElement(element);
        setSelectedVariant(variant);
        setSelectedLang(lang);
    },[element, variant, lang]);

    // render needed story
    useEffect(() => {
        if(selectedElement !== undefined && selectedVariant !== undefined) {
            setIframeSrc(`https://elements.inovex.de/version/latest/?path=/docs/${selectedElement}--${selectedVariant}`)
        }
    },[selectedElement, selectedVariant])

    useEffect(() => {
        if(selectedElement !== undefined && selectedVariant !== undefined && selectedLang !== undefined){
            router.push(`/${selectedLang}/library/components/${selectedElement}/${selectedVariant}`, undefined, { shallow: false })
            setIframeChange(false)
        }
    },[iframeChange]);

    const onLoadHandler = () => {
        // only works with same origin
            // const url = iframeRef.current?.contentWindow.location.href;

        // test url 
        const testURL = 'https://elements.inovex.de/version/latest/?path=/docs/buttons-ino-chip--fill'
       
        const element = testURL.slice(testURL.lastIndexOf('/')+1, testURL.indexOf('--'));
        const variant = testURL.slice(testURL.indexOf('--')+2, testURL.length+1)
       
        // setting new element & variant triggers iframeSrc change
        setSelectedElement(element);
        setSelectedVariant(variant);
        setIframeChange(true);        
    }

    return (
        <div>
            <iframe 
                ref={iframeRef} 
                src={iframeSrc}
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