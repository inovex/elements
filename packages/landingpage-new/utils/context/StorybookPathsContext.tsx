import React, { ReactNode, useContext, useEffect } from 'react';

interface ContextProps { 
    readonly activeStorybookPath: string;
    readonly setElement: (element: string) => void;
    readonly setVariant: (variant: string) => void;
}

export const StorybookPathsContext = React.createContext<ContextProps>({
    activeStorybookPath: '',
    setElement: () => null,
    setVariant: () => null,
});

type Params = {
    children: ReactNode;
};

export const StorybookPathsProvider = ({ children }: Params) => {
    const [element, setElement] = React.useState<string>();
    const [variant, setVariant] = React.useState<string>();
    const [activeStorybookPath, setActiveStorybookPath] = React.useState<string>('');

    useEffect(() => {

        if((!element || undefined)){
            setActiveStorybookPath(`https://elements.inovex.de/version/latest/?path=/story/docs-welcome--page`)
        } else {
            switch(variant) {
                case ('' || 'playground'):
                    setActiveStorybookPath(`https://elements.inovex.de/version/latest/?path=/docs/${element}`)
                    break;
                case ('documentation'):
                    setActiveStorybookPath(`https://elements.inovex.de/version/latest/?path=/docs/${element}-documentation--page`)
                    break;
                default:
                    setActiveStorybookPath(`https://elements.inovex.de/version/latest/?path=/docs/${element}--${variant}`)
                    break;
            }
        }
       
    },[element, variant])

  return (
    <StorybookPathsContext.Provider
      value={{ 
        activeStorybookPath: activeStorybookPath, 
        setElement: setElement,
        setVariant: setVariant }}
    >
      {children}
    </StorybookPathsContext.Provider>
  );
};

export const useStorybookPathsContext = () => useContext(StorybookPathsContext);
