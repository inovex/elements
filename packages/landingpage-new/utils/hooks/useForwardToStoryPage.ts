import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import useTranslation from './useTranslation';

function useForwardToStorybookPage(){
    const router = useRouter();
    const { locale } = useTranslation();
    const [ resultPath, setResultPath ] = useState<string>('');

    const forwardToStoryPage = (iframeURL: string) => {
        const element = iframeURL.slice(iframeURL.lastIndexOf('/')+1, iframeURL.indexOf('--'));
        const variant = iframeURL.slice(iframeURL.indexOf('--')+2, iframeURL.length+1)
        
        if(element !== undefined && variant !== undefined && locale !== undefined) {
            setResultPath(`/${locale}/library/components/${element}/${variant}`);
        }
    }

    useEffect(() => {
        if(resultPath !== undefined && resultPath !== ''){
            router.replace(resultPath, resultPath, {shallow: true});
        }
    },[resultPath])

    return {
        forwardToStoryPage,
    }
}

export default useForwardToStorybookPage;