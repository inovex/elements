import { NextRouter } from 'next/router';
import { useEffect } from 'react';
import { useStorybookPathsContext } from 'utils/context/StorybookPathsContext';

function useStorybookIframeSetup (router: NextRouter) {
    const { element } = router.query;
    const { setElement, setVariant } = useStorybookPathsContext();

    useEffect(() => {
        if(router.isReady && element !== undefined && typeof element !== 'string'){
            element.forEach((element, index) => {
                if(index === 0){
                    setElement(element);
                    return
                }
                setVariant(element);
            })
        } else {
            setElement('') 
            setVariant('')
        }
    },[router.isReady])
}

export default useStorybookIframeSetup;