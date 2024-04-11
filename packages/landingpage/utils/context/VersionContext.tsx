import { createContext, ReactNode, useState, useEffect } from 'react';

export interface VersionContextType {
  selectedVersion: string | undefined;
  setSelectedVersion: (value: string | undefined) => void;
  versions: string[];
}

export const VersionContext = createContext<VersionContextType | undefined>(
  undefined,
);

export const VersionProvider = ({ children }: { children: ReactNode }) => {
  const [selectedVersion, setSelectedVersion] = useState<string | undefined>(
    undefined,
  );
  const [versions, setVersions] = useState<string[]>([]);

  useEffect(() => {
    fetch(
      'https://raw.githubusercontent.com/inovex/elements/pages/hosted-versions.json',
    )
      .then((response) => response.json())
      .then((data) => {
        const reversedVersions = data.reverse();
        setVersions(reversedVersions);

        const urlParams = new URLSearchParams(window.location.search);
        const urlVersion = urlParams.get('version');

        // Set the selected version from URL or default to latest
        if (urlVersion && reversedVersions.includes(urlVersion)) {
          setSelectedVersion(urlVersion);
        } else if (reversedVersions.length > 0) {
          setSelectedVersion(reversedVersions[0]);
        }
      });
  }, []);

  return (
    <VersionContext.Provider
      value={{ selectedVersion, setSelectedVersion, versions }}
    >
      {children}
    </VersionContext.Provider>
  );
};
