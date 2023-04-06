import { useEffect } from 'react';
import { useStorybookPathsContext } from 'utils/context/StorybookPathsContext';

function useStorybookIframeSetup (element: string | string[] | undefined) {
    const { setElement, setVariant } = useStorybookPathsContext();
    useEffect(() => {
        if(element !== undefined && typeof element !== 'string'){
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
    },[element])
}

export default useStorybookIframeSetup;