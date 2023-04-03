import React, { ReactNode, useContext, useEffect } from 'react';

interface ContextProps { 
    readonly loading: boolean,
    readonly activeStorybookPath: string;
    readonly setElement: (element: string) => void;
    readonly setVariant: (variant: string) => void;
}

export const StorybookPathsContext = React.createContext<ContextProps>({
    loading: false,
    activeStorybookPath: 'https://elements.inovex.de/version/latest/?path=/story/docs-welcome--page',
    setElement: () => null,
    setVariant: () => null,
});

type Params = {
    children: ReactNode;
};

export const StorybookPathsProvider = ({ children }: Params) => {
    // rename variables because slugs & variables can't be the same
    const [loading, setLoading] = React.useState<boolean>(true);
    const [element, setElement] = React.useState<string>('');
    const [variant, setVariant] = React.useState<string>('');
    const [activeStorybookPath, setActiveStorybookPath] = React.useState<string>('');

    useEffect(() => {
        if(loading){
            setActiveStorybookPath(`https://elements.inovex.de/version/latest/?path=/story/docs-welcome--page`)
        }
    },[loading]);

    useEffect(() => {
        if(element === undefined || variant === undefined){
            setLoading(true);
            return
        }
        setLoading(false)
        setActiveStorybookPath(`https://elements.inovex.de/version/latest/?path=/docs/${element}--${variant}`)
    },[element, variant])

  return (
    <StorybookPathsContext.Provider
      value={{ 
        loading: loading,
        activeStorybookPath: activeStorybookPath, 
        setElement: setElement,
        setVariant: setVariant }}
    >
      {children}
    </StorybookPathsContext.Provider>
  );
};

export const useStorybookPathsContext = () => useContext(StorybookPathsContext);
