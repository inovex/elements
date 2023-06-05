import { createContext, ReactNode, useState } from 'react';

export interface UiContextType {
  hideFooter: boolean;
  setHideFooter: (value: boolean) => void;
}

export const UiContext = createContext<UiContextType | null>(null);

const UiContextProvider = ({ children }: { children: ReactNode }) => {
  const [hideFooter, setHideFooter] = useState<boolean>(false);
  return (
    <UiContext.Provider value={{ hideFooter, setHideFooter }}>
      {children}
    </UiContext.Provider>
  );
};

export default UiContextProvider;
