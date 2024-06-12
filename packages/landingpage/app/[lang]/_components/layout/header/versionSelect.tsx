import React, { useCallback } from 'react';
import { InoOption, InoSelect } from '@inovex.de/elements-react';
import { useVersion } from '@hooks/useVersion';
import styles from './versionSelect.module.scss';
import { usePathname, useSearchParams, useRouter } from 'next/navigation';

const VersionSelect = () => {
  const { versions } = useVersion();
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // Utility function to create a query string
  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(name, value);
      return params.toString();
    },
    [searchParams],
  );

  const handleVersionChange = useCallback(
    (e: CustomEvent) => {
      const newVersion = e.detail;
      // Navigate using router with the new query string
      router.push(`${pathname}?${createQueryString('version', newVersion)}`);
    },
    [createQueryString, pathname, router],
  );

  return (
    <InoSelect
      name="select-version"
      label="Version"
      value={searchParams.get('version') || versions[0]}
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
