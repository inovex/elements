import React from 'react';
import { useVersion } from 'utils/context/VersionContext';
import { InoOption, InoSelect } from '@elements';
import styles from './versionSelect.module.scss';

const VersionSelect = () => {
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
      className={styles.versionSelect}
    >
      <div className={styles.options}>
        {versions.map((version, i) => (
          <InoOption key={i} value={version}>
            {version}
          </InoOption>
        ))}
      </div>
    </InoSelect>
  );
};

export default VersionSelect;
