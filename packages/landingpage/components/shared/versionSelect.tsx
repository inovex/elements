import React from 'react';
import { InoSelect, InoOption } from '@elements';
import { useVersion } from 'utils/context/VersionContext';
import styles from './versionSelect.module.scss';

export default function VersionSelect() {
  const { selectedVersion, setSelectedVersion, versions } = useVersion();

  const handleVersionChange = (e: CustomEvent) => {
    setSelectedVersion(e.detail);
  };

  return (
    <div className={styles.versionSelect}>
      <InoSelect
        name="select-version"
        value={selectedVersion}
        onValueChange={handleVersionChange}
      >
        {versions.map((version, i) => (
          <InoOption key={i} value={version}>
            {version}
          </InoOption>
        ))}
      </InoSelect>
    </div>
  );
}
