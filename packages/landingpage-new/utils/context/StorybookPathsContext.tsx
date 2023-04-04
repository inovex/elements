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
    // rename variables because slugs & variables can't be the same
    const [element, setElement] = React.useState<string>();
    const [variant, setVariant] = React.useState<string>();
    const [activeStorybookPath, setActiveStorybookPath] = React.useState<string>('');

    useEffect(() => {
        if(!element && !variant){
            setActiveStorybookPath(`https://elements.inovex.de/version/latest/?path=/story/docs-welcome--page`)
        } else if(!variant){
            setActiveStorybookPath(`https://elements.inovex.de/version/latest/?path=/docs/${element}`)
        } else {
            setActiveStorybookPath(`https://elements.inovex.de/version/latest/?path=/docs/${element}--${variant}`)
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
