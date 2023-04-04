import { useEffect } from 'react';
import { useStorybookPathsContext } from 'utils/context/StorybookPathsContext';

function useStorybookIframeSetup (element: string | string[] | undefined) {
    const { setElement, setVariant } = useStorybookPathsContext();

    useEffect(() => {
        if(!element || element === undefined){
            setElement('')
            setVariant('')
        } else {
            for(let i = 0; i < 1; i++){
                if(element[i] !== undefined){
                    setElement(element[0]);
                    if(i === 1){
                        setVariant(element[1]);
                    }
                }
            }
        }
    },[element])
}

export default useStorybookIframeSetup;