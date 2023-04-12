import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { Supported_Locales } from 'translations/config';

function useForwardToStorybookPage(){
    const router = useRouter();
    const [ resultPath, setResultPath ] = useState<string>();

    const forwardToStoryPage = (iframeURL: string, locale: Supported_Locales) => {
        /**
         * documentation-pages of components have deviating URLs
         *      example doc-page: ".../docs/${element}-documentation--page"
         *      example story-page: ".../docs/${element}--${variant}"
         * first check if user clicked on documention, for correct extration of {element}
         */

        if(iframeURL.includes('documentation')){
            const element = iframeURL.slice(iframeURL.lastIndexOf('/')+1, iframeURL.indexOf('-documentation'));
            if(element !== undefined) {
                setResultPath(`/${locale}/library/components/${element}/documentation`);
            }
        } else {
            const element = iframeURL.slice(iframeURL.lastIndexOf('/')+1, iframeURL.indexOf('--'));
            const variant = iframeURL.slice(iframeURL.indexOf('--')+2, iframeURL.length+1)

            if(element !== undefined && variant !== undefined && variant !== 'playground') {
                setResultPath(`/${locale}/library/components/${element}/${variant}`);
            } else {
                // variant === 'playground' will be displayed on the root of each element
                setResultPath(`/${locale}/library/components/${element}`);
            }
        }
    }

    useEffect(() => {
        if(resultPath === undefined || !resultPath){
            return
        }
        router.push(resultPath, resultPath, {shallow: true});
    },[resultPath])

    return {
        forwardToStoryPage,
    }
}

export default useForwardToStorybookPage;
