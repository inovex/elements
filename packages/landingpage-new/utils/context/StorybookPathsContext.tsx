import React, { ReactNode, useContext, useEffect } from 'react';

interface ContextProps { 
    readonly element: string; //maybe enum mit allen elements?
    readonly variant: string;
    readonly activeStorybookPath: string;
    readonly setElement: (element: string) => void;
    readonly setVariant: (variant: string) => void;
}

export const StorybookPathsContext = React.createContext<ContextProps>({
    element: '',
    variant: '',
    activeStorybookPath: 'https://elements.inovex.de/version/latest/?path=/story/docs-welcome--page',
    setElement: () => null,
    setVariant: () => null,
});

type Params = {
    children: ReactNode;
};

export const StorybookPathsProvider = ({ children }: Params) => {
    // rename variables because slugs & variables can't be the same
    const [element, setElement] = React.useState<string>('');
    const [variant, setVariant] = React.useState<string>('');
    const [activeStorybookPath, setActiveStorybookPath] = React.useState<string>('');
    
    useEffect(() => {
        setActiveStorybookPath(`https://elements.inovex.de/version/latest/?path=/docs/${element}--${variant}`)
    },[element, variant])

  return (
    <StorybookPathsContext.Provider
      value={{ 
        element: element, 
        variant: variant, 
        activeStorybookPath: activeStorybookPath, 
        setElement: setElement,
        setVariant: setVariant }}
    >
      {children}
    </StorybookPathsContext.Provider>
  );
};

export const useStorybookPathsContext = () => useContext(StorybookPathsContext);
