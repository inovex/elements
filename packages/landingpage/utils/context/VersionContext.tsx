import { createContext, ReactNode, useContext, useState, useEffect } from 'react';

export interface VersionContextType {
  selectedVersion: string;
  setSelectedVersion: (value: string) => void;
  versions: string[];
}

export const VersionContext = createContext<VersionContextType | null>(null);

export const VersionProvider = ({ children }: { children: ReactNode }) => {
  const [selectedVersion, setSelectedVersion] = useState<string>('');
  const [versions, setVersions] = useState<string[]>([]);
  
  useEffect(() => {
    fetch('https://raw.githubusercontent.com/inovex/elements/pages/hosted-versions.json')
      .then((response) => response.json())
      .then((data) => {
        setVersions(data);
        
        if (data.length > 0) {
          setSelectedVersion(data[data.length - 1]);
        }
      });
  }, []);

  return (
    <VersionContext.Provider value={{ selectedVersion, setSelectedVersion, versions }}>
      {children}
    </VersionContext.Provider>
  );
};

export const useVersion = (): VersionContextType => {
  const context = useContext(VersionContext);
  
  if (!context) {
    throw new Error('useVersion must be used within a VersionProvider');
  }

  return context;
}