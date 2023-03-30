import { useRouter } from 'next/router';
import { useEffect, useRef, useState } from 'react';

function StoryBookPage () {
    const router = useRouter();
    const {lang} = router.query;
    const [selectedElement, setSelectedElement] = useState('');
    const [selectedVariant, setSelectedVariant] = useState('');
    const [selectedLang, setSelectedLang] = useState(lang);
    const [iframeChange, setiframeChange] = useState(false);
    const iframeRef = useRef(null);
    const [iframeSrc, setIframeSrc] = useState(`https://elements.inovex.de/version/v8.0.0/?path=/docs/docs-welcome--page`)

    useEffect(() => {
        setSelectedLang(lang);
    },[lang])
   
    // route to new page
    useEffect(() => {
        if(selectedElement !== undefined && selectedVariant !== undefined && selectedLang !== undefined){
            //router.push(`/${selectedLang}/library/components/${selectedElement}/${selectedVariant}`, undefined, { shallow: false })
        }
    },[iframeChange]);


    const onLoadHandler = () => {
        console.log('iframe loaded variant.tsx')
        
        // only works with same origin
            // const url = iframeRef.current?.contentWindow.location.href;

        // test url 
        const testURL = 'https://elements.inovex.de/version/latest/?path=/docs/buttons-ino-chip--fill'
       
        const element = testURL.slice(testURL.lastIndexOf('/')+1, testURL.indexOf('--'));
        const variant = testURL.slice(testURL.indexOf('--')+2, testURL.length+1)
       
        // setting new element & variant triggers iframeSrc change
        setSelectedElement(element);
        setSelectedVariant(variant);
        setiframeChange(true);        
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

export default StoryBookPage;