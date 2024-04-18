import { createContext, ReactNode, useState, useEffect } from 'react';

export interface VersionContextType {
  versions: string[];
}

export const VersionContext = createContext<VersionContextType | undefined>(
  undefined,
);

export const VersionProvider = ({ children }: { children: ReactNode }) => {
  const [versions, setVersions] = useState<string[]>([]);

  useEffect(() => {
    fetch('https://raw.githubusercontent.com/inovex/elements/pages/hosted-versions.json')
      .then((response) => response.json())
      .then((data) => setVersions(data.reverse())); // Assuming reversing is necessary
  }, []);

  return (
    <VersionContext.Provider value={{ versions }}>
      {children}
    </VersionContext.Provider>
  );
};
