import { NextRouter } from 'next/router';
import { useEffect } from 'react';
import { useStorybookPathsContext } from 'utils/context/StorybookPathsContext';

function useStorybookIframeSetup (router: NextRouter) {
    const { element } = router.query;
    const { setElement, setVariant } = useStorybookPathsContext();

    useEffect(() => {
        if(router.isReady && element !== undefined){
            for(let i = 0; i <= 1; i++){
                if(element[i] !== undefined){
                    setElement(element[0]);
                    if(i === 1){
                        setVariant(element[1]);
                    }
                }
            }
        } else {
            setElement('') 
            setVariant('')
        }
    },[router.isReady])
}

export default useStorybookIframeSetup;