import { useEffect } from 'react';
import { useStorybookPathsContext } from 'utils/context/StorybookPathsContext';

function useStorybookIframeSetup (element: string | string[] | undefined) {
    const { setElement, setVariant } = useStorybookPathsContext();

    useEffect(() => {
        if(!element || element === undefined){
            setElement('')
            setVariant('')
        } else if (typeof element === 'string') {
            setElement(element)
        } else {
            setElement(element[0]);
            setVariant(element[1]);
        }
    },[element])
}

export default useStorybookIframeSetup;