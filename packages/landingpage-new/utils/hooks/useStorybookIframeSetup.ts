import { useEffect } from 'react';
import { useStorybookPathsContext } from 'utils/context/StorybookPathsContext';

function useStorybookIframeSetup (element: string | string[] | undefined, variant: string | string[] | undefined) {
    const { setElement, setVariant } = useStorybookPathsContext();

    useEffect(() => {
        if(typeof element === 'string' && typeof variant === 'string'){
            if(element !== undefined && variant !== undefined){
                setElement(element);
                setVariant(variant);
            }
        }
    },[element, variant])
}

export default useStorybookIframeSetup;