import React from 'react';
import { InoSelect, InoOption } from '@elements';
import { useVersion } from 'utils/context/VersionContext';

export default function VersionSelect() {
  const { selectedVersion, setSelectedVersion, versions } = useVersion();

  const handleVersionChange = (e: CustomEvent) => {
    setSelectedVersion(e.detail);
  };

  return (
    <InoSelect
      name="select-version"
      label="Version"
      value={selectedVersion}
      onValueChange={handleVersionChange}
      outline
    >
      <div style={{ maxHeight: '200px' }}>
        {versions.map((version, i) => (
          <InoOption key={i} value={version}>
            {version}
          </InoOption>
        ))}
      </div>
    </InoSelect>
  );
}
