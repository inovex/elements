import { useContext } from 'react';
import { VersionContext, VersionContextType } from '../context/VersionContext';

export const useVersion = (): VersionContextType => {
  const context = useContext(VersionContext);

  if (!context) {
    throw new Error('useVersion must be used within a VersionProvider');
  }

  return context;
};
