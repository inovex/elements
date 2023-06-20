import { createContext, ReactNode, useState } from 'react';

export interface UiContextType {
  isFooterHidden: boolean;
  hideFooter: (value: boolean) => void;
}

export const UiContext = createContext<UiContextType | null>(null);

const UiContextProvider = ({ children }: { children: ReactNode }) => {
  const [isFooterHidden, hideFooter] = useState<boolean>(false);
  return (
    <UiContext.Provider value={{ isFooterHidden, hideFooter }}>
      {children}
    </UiContext.Provider>
  );
};

export default UiContextProvider;
