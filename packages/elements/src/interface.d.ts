export * from './components';
export { config as inoElementsConfig, InoElementsConfig, Config, InoElementsWindow, setupConfig } from './components/config';
export * from './components/types';


export type SortDirection = 'asc' | 'desc';
export interface SortDirectionChangeDetails {
  columnId: string;
  sortDirection: SortDirection;
}